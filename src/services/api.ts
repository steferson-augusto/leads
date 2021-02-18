import axios from 'axios'

export const baseURL = 'https://leads.odontocompany.com/api/v1'

const api = axios.create({
  baseURL
})

api.defaults.headers.Authorization =
  'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJBdXRob3JpemF0aW9uSWQiOiJjMzQ1YjY1Ny0wYjBjLTExZWItOThmMy0wMGZmNjU0YmQzN2EiLCJVc2VySWQiOiIxIiwicm9sZSI6IlN5c3RlbU93bmVyIiwibmJmIjoxNjAyMzQzODY3LCJleHAiOjE2MzM4Nzk4NjcsImlhdCI6MTYwMjM0Mzg2N30.cZV7gxe0iOtHX2f8URK8aOEvTbdybuAm_Tlu_LueB5U'

export default api
