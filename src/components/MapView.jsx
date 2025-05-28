import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import ObjectDetails from './ObjectDetails'
import badges from '../data/badges'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

export default function MapView({ currentMapId }) {
  const navigate = useNavigate()

  const mapBadges = badges.filter(b => b.mapId === currentMapId)

  return (
    <MapContainer crs={L.CRS.Simple} bounds={[[0, 0], [1080, 1920]]} center={[540, 900]} style={{width: '100%', height: '100%'}} zoom={0} minZoom={0} maxZoom={0} scrollWheelZoom={true}>
      <ImageOverlay url={`${import.meta.env.BASE_URL}maps/sgcij.jpg`} bounds={[[0, 0], [1080, 1920]]}/>
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