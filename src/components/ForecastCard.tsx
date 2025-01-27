import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { WeatherIcon } from './WeatherIcon'

interface ForecastCardProps {
  day?: string,
  weatherIconCode?: string,
  temp?: number,
  humidity?: number,
}

export function ForecastCard ({ day, weatherIconCode, temp = 0, humidity }: ForecastCardProps) {
  return (
    <Box
      sx={{
        background: 'var(--card, linear-gradient(180deg, rgba(231, 236, 242, 0.56) 0%, rgba(134, 167, 185, 0.56) 100%))',
        borderRadius: '8px',
        padding: '2rem',
        textAlign: 'center',
        boxShadow: '12px 12px 10px 2px rgba(0, 0, 0, 0.10)',
      }}
    >
      <Typography>{day}</Typography>
      <WeatherIcon iconCode={weatherIconCode} />
      <Typography>
        {`溫度：${Number(temp).toFixed(1)}°C`}
      </Typography>
      <Typography>
        {`濕度：${humidity}%`}
      </Typography>
    </Box>
  )
}
