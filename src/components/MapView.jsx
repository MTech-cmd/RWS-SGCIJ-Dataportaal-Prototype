import { ImageOverlay, MapContainer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import ObjectDetails from './ObjectDetails'
import config from '../data/config'
import { useNavigate } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

const { badges, maps } = config

export default function MapView({ currentMapId }) {
  const navigate = useNavigate()
  const mapBadges = badges.filter(b => b.mapId === currentMapId)

  if (!maps[currentMapId]) {
    return <div className="text-red-600 p-4 font-semibold">❌ Ongeldig kaart-ID</div>
  }

  return (
    <MapContainer
      crs={L.CRS.Simple}
      bounds={maps[currentMapId].bounds}
      center={[540, 900]}
      style={{ width: '100%', height: '100%' }}
      zoom={0}
      minZoom={0}
      maxZoom={0}
      scrollWheelZoom={true}
    >
      <ImageOverlay
        url={`maps/${maps[currentMapId].image}`}
        bounds={maps[currentMapId].bounds}
      />

      {mapBadges.map(badge => (
        <Marker key={badge.id} position={badge.position}>
<Popup
  autoPan={false}
  closeButton={true}
  maxWidth={1600} // <- dit verhogen
  className="popup-container"
>
    {badge.type === 'details' ? (
  <div className="overflow-auto max-h-[620px] w-full min-w-220 p-6 rounded-2xl backdrop-blur-lg bg-white/85 shadow-2xl border border-white/50 transition-all duration-300 ease-in-out space-y-5">
    <p className="text-2xl font-semibold text-rws-blue tracking-wide select-none">
      {badge.title}
    </p>

      <ObjectDetails apps={badge.apps} />
      </div>
    ) : (
      <button
        onClick={() => {
          if (badge.target) {
            navigate(`/map/${badge.target}`)
          }
        }}
        className="px-5 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-500 text-white font-bold shadow-md transition duration-300 ease-in-out hover:from-blue-500 hover:to-teal-400 hover:shadow-lg"
      >
        Ga naar kaart {badge.target}
      </button>
    )}
</Popup>

        </Marker>
      ))}
    </MapContainer>
  )
}
