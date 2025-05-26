import { appRegistry } from '../registry/AppRegistry'

export default function ObjectDetails({ apps }) {
  return (
    <div className="space-y-4 w-full max-w-md">
      {apps.map((app, i) => {
        const Component = appRegistry[app.appId]
        if (!Component) return <div key={i}>Unknown app: {app.appId}</div>
        return (
          <div
            key={i}
            className="border border-gray-300 rounded p-3 shadow hover:shadow-lg transition"
          >
            <Component config={app.config} />
          </div>
        )
      })}
    </div>
  )
}