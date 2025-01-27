import { weatherAxios } from './weatherAxios'

export const weatherSWRFetcher = async (url: string) =>
  await weatherAxios().get(url)
    .then(response => response.data)
