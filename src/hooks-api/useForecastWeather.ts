import useSWR from 'swr'
import { WEATHER_API_URL } from '../constants/baseUrls' // 定義的API URL
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'// 自定義的fetcher
import { type ForecastWeather } from '../types/ForecastWeather'// 定義的型別
import { urlWithQueryParams } from '../utils/urlWithQueryParams'// 自定義的fetcher
import { type Coordinates } from '../types/Coordinates'// 定義的型別
import { UNITS } from '../constants/units'

interface ForecastWeatherProps extends Coordinates {}

export function useForecastWeather ({ lat, lon }: ForecastWeatherProps) {
  const key = lat && lon
    ? urlWithQueryParams(`${WEATHER_API_URL}/forecast`, { lat, lon, units: UNITS.METRIC })
    : null
  const { data, error, isLoading } = useSWR<ForecastWeather>(key, weatherSWRFetcher, {
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
    isLoading,
  }
}
