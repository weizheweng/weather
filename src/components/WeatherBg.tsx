import React from 'react'
import { Stack } from '@mui/material'

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
        backgroundImage: 'url(/assets/images/homepage.svg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {children}
    </Stack>
  )
}
