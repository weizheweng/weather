import { type Coordinates } from './Coordinates'

export interface WeatherGeo {
  name: string,
  local_names?: Record<string, string>,
  lat: Coordinates['lat'],
  lon: Coordinates['lon'],
  country: string,
  state: string,
}
