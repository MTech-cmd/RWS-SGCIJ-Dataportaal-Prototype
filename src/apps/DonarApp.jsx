export default function DonarApp({ config }) {
  return (
    <div>
      <h3 className="font-semibold text-purple-700">DONAR</h3>
      <p>{config.text}</p>
    </div>
  )
}