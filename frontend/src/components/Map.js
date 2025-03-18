import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const position = [14.769, -17.488] // Coordinates for Tivaoune Peulh, Cité Apix

  return (
    <section className='map-section'>
      <h1>Carte de Tivaoune Peulh, Cité Apix</h1>
      <MapContainer
        center={position}
        zoom={13}
        style={{ height: '400px', width: '100%' }}
      >
        <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
        <Marker
          position={position}
          icon={
            new L.Icon({
              iconUrl:
                'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
            })
          }
        >
          <Popup>Tivaoune Peulh, Cité Apix</Popup>
        </Marker>

        {/* Add a marker for the center with the text "G I E MAME DOUSSOU" */}
        <Marker position={position}>
          <Tooltip direction='top' offset={[-5, -10]} opacity={1} permanent>
            G I E MAME DOUSSOU
          </Tooltip>
        </Marker>
      </MapContainer>
    </section>
  )
}

export default Map
