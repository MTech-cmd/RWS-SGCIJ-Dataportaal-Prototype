import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import ObjectDetails from './ObjectDetails'
import badges from '../data/badges'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

export default function MapView({ currentMapId }) {
  const navigate = useNavigate()

  const mapBadges = badges.filter(b => b.mapId === currentMapId)

  return (
    <MapContainer center={[52.456, 4.625]} zoom={14} className="w-full h-full z-0">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {mapBadges.map(badge => (
        <Marker
          key={badge.id}
          position={badge.position}
        >
          <Popup
            autoPan={false}
            closeButton={true}
          >
              <div className="min-w-[300px]">
                {badge.type === 'details' ? (
                  <ObjectDetails apps={badge.apps} />
                ) : (
                  <button
                    onClick={() => {
                      if (badge.target) {
                        navigate(`/map/${badge.target}`)
                      }
                    }}
                    className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition"
                  >
                    Go to map {badge.target}
                  </button>
                )}
              </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}