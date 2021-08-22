import axios from "axios"

export const timezonesRequest = async() => {
  const instance = await axios.create({
    baseURL: (process.env.NODE_ENV === 'development') ? 'http://localhost:5000': 'http://yuriykimtest.tk'
  })
  return instance.get(`/api/city`).then(response => (response.data))
}
