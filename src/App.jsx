import L from 'leaflet'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import './App.css'

delete L.Icon.Default.prototype._getIconUrl

L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow
})

import { HashRouter, Routes, Route, useParams, useNavigate, useLocation, Link } from 'react-router-dom'
import MapView from './components/MapView'
import { useEffect } from 'react'

function MapRouteWrapper() {
  const { mapId } = useParams()
  const navigate = useNavigate()

  // Redirect to default map if no mapId
  useEffect(() => {
    if (!mapId) {
      navigate('/map/map-ijmuiden', { replace: true })
    }
  }, [mapId, navigate])

  return (
    <div className="flex flex-col h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 font-sans">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-blue-300 shadow-md px-6 py-4 flex items-center gap-6 select-none">
        <Link
          to="/map/map-ijmuiden"
          className="text-rws-blue font-semibold text-lg tracking-wide hover:text-rws-blue-dark transition-colors duration-250"
        >
          IJmuiden
        </Link>
        <Link
          to="/map/map-binnenspuikanaal"
          className="text-rws-blue font-semibold text-lg tracking-wide hover:text-rws-blue-dark transition-colors duration-250"
        >
          Binnenspuikanaal
        </Link>
        <Link
          to="/map/map-gemaal"
          className="text-rws-blue font-semibold text-lg tracking-wide hover:text-rws-blue-dark transition-colors duration-250"
        >
          Gemaal
        </Link>

        <BackButton />
      </nav>

      <Breadcrumb mapId={mapId} />

      <main className="flex-grow overflow-auto bg-white p-6">
        {mapId ? <MapView currentMapId={mapId} /> : <div className="text-gray-600 text-center py-20 text-xl">Loading kaart…</div>}
      </main>
    </div>
  )
}

function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <button
      className="ml-auto px-5 py-3 rounded-lg bg-gradient-to-r from-blue-700 to-purple-500 text-white font-bold shadow-md transition duration-300 ease-in-out hover:from-blue-500 hover:to-teal-400 hover:shadow-lg"
      disabled={location.key === 'default'}
      onClick={() => navigate(-1)}
      title="Ga terug"
    >
      ← Terug
    </button>
  )
}

function Breadcrumb({ mapId }) {
  return (
    <div className="sticky top-[64px] z-40 bg-white/80 backdrop-blur-md border-b border-blue-200 px-6 py-3 text-sm text-gray-700 tracking-wide select-none font-medium">
      Home &nbsp;/&nbsp; Kaarten &nbsp;/&nbsp; <span className="font-semibold text-rws-blue">{mapId || 'Laden...'}</span>
    </div>
  )
}

export default function App() {
  return (
    <>
      {/* RWS kleuren als CSS variabelen */}
      <style>
        {`
          :root {
            --rws-blue: #003580;
            --rws-blue-dark: #001f4d;
          }
          .text-rws-blue {
            color: var(--rws-blue);
          }
          .text-rws-blue-dark {
            color: var(--rws-blue-dark);
          }
          .bg-rws-blue {
            background-color: var(--rws-blue);
          }
          .bg-rws-blue-dark {
            background-color: var(--rws-blue-dark);
          }
        `}
      </style>

      <HashRouter>
        <Routes>
          <Route path="/map/:mapId" element={<MapRouteWrapper />} />
          <Route path="/" element={<MapRouteWrapper />} />
          <Route
            path="*"
            element={
              <div className="p-12 text-center text-red-600 font-semibold text-xl select-none">
                404 — Pagina niet gevonden
              </div>
            }
          />
        </Routes>
      </HashRouter>
    </>
  )
}
