import { WeatherProvider } from './WeatherProvider/WeatherProvider'
import { WeatherLayout } from './WeatherLayout'

export function Weather () {
  return (
    <WeatherProvider>
      <WeatherLayout />
    </WeatherProvider>
  )
}
