import { useEffect, useState } from 'react'

export default function SharepointApp({ config }) {
  const { documentLibrary, filter } = config
  const [docs, setDocs] = useState([])

  useEffect(() => {
    setTimeout(() => {
      setDocs([
        { id: 1, title: `Soort document: ${documentLibrary}` },
        { id: 2, title: `Doc 2 filtered by ${filter}` },
      ])
    }, 500)
  }, [documentLibrary, filter])

  return (
    <div>
      <h3 className="font-semibold text-indigo-700">📄 Connect</h3>
      <ul className="list-disc ml-5 text-sm text-gray-800">
        {docs.map(doc => (
          <li key={doc.id}>{doc.title}</li>
        ))}
      </ul>
    </div>
  )
}