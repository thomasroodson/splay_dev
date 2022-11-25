export const hasToken = ({ token }) => !!token

export const getFirstName = ({ user }) => {
  return user.nome.split(' ')
}
