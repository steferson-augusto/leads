export interface Token {
  type: string
  token: string
}

export const TOKEN_KEY = '@Leads'

export const getToken = (): string | null =>
  localStorage.getItem(`${TOKEN_KEY}:token`)

const setToken = (data: Token): void => {
  localStorage.setItem(`${TOKEN_KEY}:token`, data?.token)
}

export const logout = (): void => {
  localStorage.removeItem(`${TOKEN_KEY}:token`)
}

export const signin = async (
  email: string,
  password: string
): Promise<Token> => {
  await setTimeout(() => {
    // const response = await api.post('/login', { email, password })
    console.log(`Realizando login com ${email} e ${password}`)
  }, 1000)

  const response = {
    data: {
      type: 'bearer',
      token:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBdXRob3JpemF0aW9uSWQiOiJjMzQ1YjY1Ny0wYjBjLTExZWItOThmMy0wMGZmNjU0YmQzN2EiLCJVc2VySWQiOiIxIiwicm9sZSI6IlN5c3RlbU93bmVyIiwibmJmIjoxNjAyMzQzODY3LCJleHAiOjE2MzM4Nzk4NjcsImlhdCI6MTYwMjM0Mzg2N30.cZV7gxe0iOtHX2f8URK8aOEvTbdybuAm_Tlu_LueB5U'
    }
  }

  setToken(response?.data)
  return response?.data
}
