import { useEffect, useState } from 'react'

export default function UltimoApp({ config }) {
  const { assetId } = config
  const [assetDetails, setAssetDetails] = useState(null)

  useEffect(() => {
    setTimeout(() => {
      setAssetDetails({
        id: assetId,
        status: 'Operational',
        lastMaintenance: '2025-05-01',
      })
    }, 600)
  }, [assetId])

  if (!assetDetails) return <div>Loading asset details...</div>

  return (
    <div>
      <h3 className="font-semibold text-green-700">⚙️ SCADA</h3>
      <p>ID: {assetDetails.id}</p>
      <p>Status: {assetDetails.status}</p>
      <p>Last Maintenance: {assetDetails.lastMaintenance}</p>
    </div>
  )
}