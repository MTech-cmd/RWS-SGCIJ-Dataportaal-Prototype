export default function GeneralApp({ config }) {
  return (
    <div>
      <h3 className="font-semibold text-purple-700">Test</h3>
      <a href={config.link}>{config.text}</a>
    </div>
  )
}