import { useEffect, useState } from 'react'

export default function RelaticsApp({ config }) {
  const { objectId } = config
  const [objectInfo, setObjectInfo] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setObjectInfo({
        id: objectId,
        type: 'Gate Control',
        status: 'Active',
      })
    }, 700)
  }, [objectId])

  if (!objectInfo) return <div>Loading object info...</div>

  return (
    <div>
      <h3 className="font-semibold text-teal-700">🔧 Relatics Object</h3>
      <p>ID: {objectInfo.id}</p>
      <p>Type: {objectInfo.type}</p>
      <p>Status: {objectInfo.status}</p>
    </div>
  )
}