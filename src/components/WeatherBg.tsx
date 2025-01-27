import React from 'react'
import { Stack } from '@mui/material'
import bgImage from '@assets/images/homepage.svg'
interface WeatherProps {
  children?: React.ReactNode,
}

export function WeatherBg ({ children }: WeatherProps) {
  return (
    <Stack
      minHeight="100vh"
      direction="column"
      alignItems="center"
      color="#ffffff"
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Stack>
  )
}
