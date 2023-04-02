export function formatIBAN (iban) {
  iban = iban.replace(/\s+/g, '')
  return iban.replace(/(.{4})/g, '$1 ').trim()
}
