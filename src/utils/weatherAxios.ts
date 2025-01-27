import axios from 'axios'

export function weatherAxios () {
  const axiosInstance = axios.create({
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    params: {
      appid: import.meta.env.VITE_WEATHER_API_KEY,
    },
  })
  return axiosInstance
}
