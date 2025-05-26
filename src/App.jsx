import { BrowserRouter, Routes, Route, useParams, useNavigate, useLocation, Link } from 'react-router-dom'
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
    <div className="flex flex-col h-screen">
      <nav className="bg-blue-600 text-white p-3 flex items-center gap-4">
        <Link to="/map/map-ijmuiden" className="hover:underline">IJmuiden</Link>
        <Link to="/map/map-binnensluiskanaal" className="hover:underline">Binnensluiskanaal</Link>
        <BackButton />
      </nav>
      <Breadcrumb mapId={mapId} />
      <div className="flex-grow">
        {mapId ? <MapView currentMapId={mapId} /> : <div>Loading map...</div>}
      </div>
    </div>
  )
}

function BackButton() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <button
      className="ml-auto bg-white text-blue-600 px-3 py-1 rounded hover:bg-gray-200 transition"
      disabled={location.key === 'default'}
      onClick={() => navigate(-1)}
    >
      ← Back
    </button>
  )
}

function Breadcrumb({ mapId }) {
  // Simple breadcrumb, could be enhanced
  return (
    <div className="bg-gray-100 p-2 text-sm text-gray-700">
      Home / Maps / {mapId || 'Loading...'}
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MapRouteWrapper />} >
          <Route path="map/:mapId" element={<MapRouteWrapper />} />
        </Route>
        <Route path="*" element={<div className="p-4">404: Pagina niet gevonden</div>} />
      </Routes>
    </BrowserRouter>
  )
}