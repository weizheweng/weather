const DEFAULT_WEATHER_CODE = '03d'

interface WeatherIconProps {
  iconCode?: string,
}

export function WeatherIcon ({ iconCode = DEFAULT_WEATHER_CODE }: WeatherIconProps) {
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
  return <img src={iconUrl} alt={iconCode} />
}
