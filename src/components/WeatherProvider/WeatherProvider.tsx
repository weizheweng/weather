import { createContext, type Dispatch, type SetStateAction, useMemo, useState, type ReactNode } from 'react'
import { type Coordinates } from '../../types/Coordinates'

interface WeatherContextProps {
  coordinates: Coordinates,
  setCoordinates: Dispatch<SetStateAction<Coordinates>>,
  searchLoading: boolean,
  setSearchLoading: Dispatch<SetStateAction<boolean>>,
  hasWeatherData: boolean,
  setHasWeatherData: Dispatch<SetStateAction<boolean>>,
}

export const WeatherContext = createContext<WeatherContextProps | null>(null)

interface WeatherProviderProps {
  children: ReactNode,
}

export const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const [coordinates, setCoordinates] = useState<Coordinates>({})
  const [searchLoading, setSearchLoading] = useState<boolean>(false)
  const [hasWeatherData, setHasWeatherData] = useState<boolean>(false)

  const contextValue = useMemo(
    () => ({
      coordinates,
      setCoordinates,
      searchLoading,
      setSearchLoading,
      hasWeatherData,
      setHasWeatherData,
    }),
    [coordinates, hasWeatherData, searchLoading]
  )

  return (
    <WeatherContext.Provider value={contextValue}>
      {children}
    </WeatherContext.Provider>
  )
}
