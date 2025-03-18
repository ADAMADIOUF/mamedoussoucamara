// Seller.js
import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Add a custom icon for the markers
const markerIcon = new L.Icon({
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

const Seller = () => {
  
  const locations = [
    { id: 1, name: 'Tivaoune Peulh', coordinates: [14.7351, -17.4351] },
    { id: 2, name: 'Keur Massar', coordinates: [14.6926, -17.2916] },
    { id: 3, name: 'Fatick', coordinates: [14.476, -16.2227] },
  ]

  const phoneNumber = '+221 77 706 25 56' 

  return (
    <div className='seller'>
      <div className='title section-center'>
        <h3>Trouvez un point de distribution près de chez vous</h3>
        <p>
          Nous sommes ravis de vous offrir des produits frais et de qualité,
          directement à votre porte. Que vous soyez à Tivaoune Peulh, Keur
          Massar ou Fatick, notre réseau de distribution vous permet d'accéder
          facilement à des aliments savoureux et sains. En choisissant nos
          produits, vous soutenez l'économie locale et vous assurez le meilleur
          pour votre famille.
        </p>
        <p>
          Nos points de distribution sont stratégiquement situés pour vous
          offrir la plus grande commodité. N'hésitez pas à nous contacter pour
          toute question ou pour connaître les horaires d'ouverture. Ensemble,
          faisons de chaque repas une célébration de la fraîcheur et du goût!
        </p>
      </div>
      <div style={{ height: '400px', width: '100%' }}>
        <MapContainer
          center={[14.7351, -17.4351]}
          zoom={8}
          style={{ height: '100%', width: '100%' }}
        >
          <TileLayer
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          />
          {locations.map((location) => (
            <Marker
              key={location.id}
              position={location.coordinates}
              icon={markerIcon}
            >
              <Popup>
                {location.name} <br />
                <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>{' '}
                
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  )
}

export default Seller
