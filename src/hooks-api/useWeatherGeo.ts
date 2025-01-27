import useSWR from 'swr'
import { WEATHER_GEO_API_URL } from '../constants/baseUrls'// 這裡定義了 API 的 URL
import { weatherSWRFetcher } from '../utils/weatherSWRFetcher'// 這個函數會發送 API 請求
import { type WeatherGeo } from '../types/WeatherGeo' // 這裡的 WeatherGeo 是一個介面，它定義了 API 回傳的資料結構
import { urlWithQueryParams } from '../utils/urlWithQueryParams' // 這個函數會將查詢參數附加到 URL 上

const LIMIT = 5 // 限制 API 回傳的結果數量 (最多 5 筆資料)

export function useWeatherGeo (query?: string, onSuccess?: (data: WeatherGeo[]) => void) { // 這裡的 query 是使用者輸入的城市名稱 //如果有提供 query，這個 Hook 會生成查詢 URL，否則不會進行 API 請求。
  const key = query
    ? urlWithQueryParams(WEATHER_GEO_API_URL, { q: query, limit: LIMIT })
    : null
  const { data, error, isLoading } = useSWR<WeatherGeo[]>(key, weatherSWRFetcher, {
    onSuccess,
    revalidateOnFocus: false,
  })

  return {
    data,
    error,
    isLoading, // isLoading 是布林值，用於表示 API 請求是否仍在進行中。
  }
}
