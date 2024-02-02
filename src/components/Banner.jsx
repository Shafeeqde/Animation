import ImageLooper from "./ImageLooper"
import "../style.css"

function Banner() {
    return (
        <div className="banner-parent">
            <ImageLooper />
            <ImageLooper />
            <ImageLooper />
            <ImageLooper />
            <ImageLooper />
        </div>
    )
}

export default Banner