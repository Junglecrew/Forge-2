export function checkCredentials(params) {
  if (
    params.email.toLowerCase() !== 'admin@gmail.com' ||
    params.password !== '12345'
  ) {
    return false
  }

  return true
}
