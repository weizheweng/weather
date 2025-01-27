import { useContext } from 'react'
import { WeatherContext } from './WeatherProvider'

export function useWeather () {
  const weatherContext = useContext(WeatherContext)

  if (!weatherContext) throw new Error('WeatherContext has to be used within <WeatherContext.Provider>')

  return weatherContext
}
