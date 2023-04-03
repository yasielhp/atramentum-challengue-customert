import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import { Layout } from '../layout'
import { IconCustomer, IconEdit, Input, Modal, Pagination, Spinner, Table } from '../../components'

import { getCustomer, getBankAcounts, getBankAccountId, updateBankAccountId } from '../../services/api'
import { banksColumns, formatIBAN } from '../../utils'

export function CustomerPage () {
  const { id } = useParams()
  const [loadingCustomer, setLoadingCustomer] = useState(true)
  const [loadingShipmentAddresses, setLoadingShipmentAddresses] = useState(true)
  const [customer, setCustomer] = useState({})
  const [page, setPage] = useState(0)
  const [pageSize] = useState(10)

  const [banks, setBanks] = useState({})

  const [showModal, setShowModal] = useState(false)
  const [bank, setBank] = useState({})
  const [formattedIban, setFormattedIban] = useState('')

  useEffect(() => {
    fetchCustomerData()
  }, [page, pageSize])

  const fetchCustomerData = () => {
    setLoadingCustomer(true)
    getCustomer(id)
      .then((data) => {
        setCustomer(data)
        setLoadingCustomer(false)
      })
      .catch((err) => {
        console.error(err)
        setLoadingCustomer(false)
      })
    setLoadingShipmentAddresses(true)
    getBankAcounts(id, page, pageSize, false, 'id')
      .then((data) => {
        setBanks(data)
        setLoadingShipmentAddresses(false)
      })
      .catch((err) => {
        console.error(err)
        setLoadingShipmentAddresses(false)
      })
  }

  const handleEditClick = async (bankId) => {
    try {
      const bankData = await getBankAccountId(bankId)
      setBank(bankData)
      setFormattedIban(formatIBAN(bankData.iban))
      setShowModal(true)
    } catch (error) {
      console.error(error)
    }
  }

  const handleUpdateBank = async () => {
    await updateBankAccountId(bank.id, {
      ...bank,
      iban: formattedIban
    })
      .then(() => {
        fetchCustomerData()
        setShowModal(false)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  return (
    <Layout>
      {
        showModal && (
          <Modal
            title='Edit IBAN'
            visible={showModal}
            onClose={() => setShowModal(false)}
            onConfirm={handleUpdateBank}
          >
            <Input
              label='Bank'
              name='bank'
              value={formattedIban}
              onChange={(e) => setFormattedIban(e.target.value)}

            />
          </Modal>
        )
      }
      <section className='w-full px-4 mt-4'>
        {(loadingCustomer || loadingShipmentAddresses)
          ? (
            <div className='w-full h-full flex justify-center items-center'>
              <Spinner />
            </div>
            )
          : (
            <div className='flex flex-wrap p-2 gap-5'>
              <div className='flex flex-col gap-y-4 bg-white rounded-lg shadow p-4 md:w-80 w-full'>
                <div className='flex justify-center items-center'>
                  <div className='p-2 w-14 h-14 rounded-full bg-gray-100 text-gray-500 inline-flex relative justify-center items-center mb-2'>
                    <IconCustomer />
                    <span className='flex absolute h-3 w-3 bottom-1 right-1'>
                      <span className={`relative inline-flex rounded-full h-3 w-3 ${customer.activated ? 'bg-green-500' : 'bg-red-500'}`} />
                    </span>
                  </div>
                  <div className='p-3 w-full'>
                    <h3 className='font-semibold text-lg'>{customer.contactName}</h3>
                    <p className='text-gray-400'>{customer.contactTime}</p>
                  </div>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Email address</p>
                  <Link className='hover:text-blue-500 font-medium' to={`mailto:${customer.email}`}>{customer.email}</Link>
                </div>
                <div>
                  <p className='text-sm text-gray-500'>Phone number</p>
                  <span className='font-medium flex gap-x-2'>
                    <Link className='hover:text-blue-500' to={`tel:${customer.phone1}`}>{customer.phone1}</Link>
                    /
                    <Link className='hover:text-blue-500' to={`tel:${customer.phone2}`}>{customer.phone2}</Link>
                  </span>
                </div>
              </div>
              <div className='bg-white rounded-lg shadow p-4 w-full'>
                <div className='flex justify-between items-center'>
                  <h3 className='text-lg font-semibold'>Banks</h3>
                </div>
                <div className='w-full overflow-y-auto mt-4'>
                  {
                    banks.content.length > 0
                      ? (
                        <>
                          <Table
                            buttonText='Edit'
                            iconText={<IconEdit />}
                            onClick={handleEditClick}
                            rows={banks.content}
                            columns={banksColumns}
                          />
                          <Pagination
                            page={page}
                            pageSize={pageSize}
                            totalItems={banks.totalElements}
                            onPageChange={setPage}
                          />
                        </>
                        )
                      : (
                        <div className='flex justify-center items-center'>
                          <p className='text-gray-400'>No bank account created, want to create a new bank account </p>
                        </div>
                        )
                  }
                </div>
              </div>
            </div>
            )}
      </section>
    </Layout>
  )
}
