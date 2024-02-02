import img1 from '../../public/img/line 1.svg'
import img2 from '../../public/img/line 2.svg'
import img3 from '../../public/img/line 3.svg'
import img4 from '../../public/img/line 4.svg'
import img5 from '../../public/img/line 5.svg'
import img6 from '../../public/img/line 6.svg'
import img7 from '../../public/img/line 7.svg'
import img8 from '../../public/img/line 8.svg'




function ImageLooper() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    return (
        <div className="ImageLooper-parent">
            {images.map((src, index) => (
                <img key={`duplicate-${index}`} src={src} alt="" width={240} />
            ))}
        </div>
    );
}

export default ImageLooper;