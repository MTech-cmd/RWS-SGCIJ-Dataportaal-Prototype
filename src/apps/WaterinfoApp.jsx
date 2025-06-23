export default function WaterinfoApp({ config }) {
    return (
        <div>
            <iframe
            width="100%"
            height="625"
            src={config.link}
            frameborder="0">
            </iframe>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/iframe-resizer/3.5.5/iframeResizer.min.js"
            integrity="sha384-hmWbV3OBLu3C7bqC1QkXO5VksQxmeQBZBNOPmgKpBF5gnZdE83lbh8/A1QNZvUiM"
            crossorigin="anonymous">
            </script>
            <script>iFrameResize();</script>
        </div>
    )
}