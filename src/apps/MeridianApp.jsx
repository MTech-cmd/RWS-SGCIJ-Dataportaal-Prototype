import { useEffect, useState } from 'react'

export default function MeridianApp({ config }) {
  const { drawingId } = config
  const [drawingInfo, setDrawingInfo] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setDrawingInfo({
        id: drawingId,
        name: 'Main Dam Drawing',
        updated: '2025-04-15',
      })
    }, 700)
  }, [drawingId])

  if (!drawingInfo) return <div>Loading drawing info...</div>

  return (
    <div>
      <h3 className="font-semibold text-purple-700">📐 Meridian Drawing</h3>
      <p>ID: {drawingInfo.id}</p>
      <p>Name: {drawingInfo.name}</p>
      <p>Last Updated: {drawingInfo.updated}</p>
    </div>
  )
}