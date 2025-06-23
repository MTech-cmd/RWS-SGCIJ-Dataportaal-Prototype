import { appRegistry } from '../registry/AppRegistry'
import { useState, useEffect } from 'react'

export default function ObjectDetails({ apps }) {
  const categoryMap = {
    'ultimo': 'Areaal Gegevens',
    'sharepoint': 'Areaal Gegevens',
    'relatics': 'Areaal Gegevens',
    'gis': 'Areaal Gegevens',
    'scada': 'Externe Metingen',
    'donar': 'Externe Metingen',
    'meridian': 'Technische Tekeningen',
    'algemeen': 'Object Metingen',
    'waterinfo': 'Live Data',
  }

  const grouped = apps.reduce((acc, app) => {
    const category = categoryMap[app.appId] || 'Overig'
    if (!acc[category]) acc[category] = []
    acc[category].push(app)
    return acc
  }, {})

  const liveData = grouped['Live Data'] || []
  const otherCategories = Object.entries(grouped).filter(([cat]) => cat !== 'Live Data')

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Live Data (full width) */}
      {liveData.length > 0 && (
        <section className="w-full p-5 rounded-2xl backdrop-blur-lg bg-white/85 shadow-2xl border border-gray-200">
          <h3 className="text-lg font-bold text-[#003580] mb-4 border-b pb-2 select-none">
            🌊 Live Data
          </h3>
          <div className="flex flex-col gap-4">
            {liveData.map((app, i) => {
              const Component = appRegistry[app.appId]
              return (
                <div
                  key={i}
                  className="relative bg-gray-50 border border-gray-200 rounded-xl p-4 hover:bg-blue-50 hover:shadow-md transition duration-200 ease-in-out"
                >
                  {loading ? (
                    <div className="animate-pulse h-6 bg-gray-200 rounded w-3/4 mb-2"></div>
                  ) : Component ? (
                    <Component config={app.config} />
                  ) : (
                    <div className="text-red-600 text-sm font-medium">Onbekende app: {app.appId}</div>
                  )}
                </div>
              )
            })}
          </div>
        </section>
      )}

      {/* Other categories side-by-side */}
      <div className="flex flex-wrap gap-6">
        {otherCategories.map(([category, groupedApps], i) => (
          <section
            key={i}
            className="flex flex-col bg-white/85 backdrop-blur-lg shadow-xl border border-gray-200 rounded-2xl p-5 w-fit max-w-xs"
          >
            <h3 className="text-md font-semibold text-[#003580] mb-4 border-b pb-2 select-none">
              {category}
            </h3>
            <div className="flex flex-col gap-3">
              {groupedApps.map((app, j) => {
                const Component = appRegistry[app.appId]
                return (
                  <div
                    key={j}
                    className="relative bg-gray-50 border border-gray-200 rounded-lg p-3 hover:bg-purple-50 hover:shadow-md transition duration-200 ease-in-out"
                  >
                    {loading ? (
                      <div className="animate-pulse h-4 bg-gray-200 rounded w-2/3 mb-1"></div>
                    ) : Component ? (
                      <Component config={app.config} />
                    ) : (
                      <div className="text-red-600 text-sm font-medium">Onbekende app: {app.appId}</div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
