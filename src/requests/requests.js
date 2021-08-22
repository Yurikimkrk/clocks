import axios from "axios"

export const timezonesRequest = async() => {
  const instance = await axios.create({
    baseURL: 'http://localhost:5000'
  })
  return instance.get(`/api/city`).then(response => (response.data))
}
