import { appRegistry } from '../registry/AppRegistry'

export default function ObjectDetails({ apps }) {
  const categoryMap = {
    'ultimo': 'Areaal Gegevens',
    'sharepoint': 'Areaal Gegevens',
    'relatics': 'Areaal Gegevens',
    'gis': 'Areaal Gegevens',
    'scada': 'Externe Metingen',
    'donar': 'Externe Metingen',
    'meridian': 'Technische Tekeningen',
    'algemeen': 'Object Metingen'
  }

  const grouped = apps.reduce((acc, app) => {
    const category = categoryMap[app.appId] || 'Overig'
    if (!acc[category]) acc[category] = []
    acc[category].push(app)
    return acc
  }, {})

  return (
    <div className="flex flex-row flex-wrap gap-4">
      {Object.entries(grouped).map(([category, groupedApps], i) => (
        <div
          key={i}
          className="flex flex-col border rounded p-3 bg-white shadow w-[320px] min-w-[300px]"
        >
          <h3 className="text-md font-semibold mb-2 border-b pb-1">{category}</h3>

          <div className="">
            {groupedApps.map((app, j) => {
              const Component = appRegistry[app.appId]
              return (
                <div
                  key={j}
                  className=""
                >
                  {Component ? (
                    <Component config={app.config} />
                  ) : (
                    <div className="text-sm text-red-600">Onbekende app: {app.appId}</div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
