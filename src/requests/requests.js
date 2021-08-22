export const timezonesRequest = async() => {
  const response = await fetch('../../timezones.json')
  return await response.json()
}