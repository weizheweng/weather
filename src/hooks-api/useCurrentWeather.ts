import useSWR from 'swr'
import { WEATHER_API_URL } from '../constants/baseUrls' // 定義的API URL
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'// 自定義的fetcher
import { type CurrentWeather } from '../types/CurrentWeather'// 定義的型別
import { urlWithQueryParams } from '../utils/urlWithQueryParams'// 自定義的fetcher
import { type Coordinates } from '../types/Coordinates'// 定義的型別
import { UNITS } from '../constants/units'

interface CurrentWeatherProps extends Coordinates {
  onSuccess?: (data: CurrentWeather) => void,
}

export function useCurrentWeather ({ lat, lon, onSuccess }: CurrentWeatherProps) {
  const key = lat && lon
    ? urlWithQueryParams(`${WEATHER_API_URL}/weather`, { lat, lon, units: UNITS.METRIC })
    : null
  const { data, error, isLoading } = useSWR<CurrentWeather>(key, weatherSWRFetcher, {
    revalidateOnFocus: false,
    onSuccess,
  })

  return {
    data,
    error,
    isLoading,
  }
}
