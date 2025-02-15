import CustomImage from "./custonImage"

export default function HeroSection(){
    const images = [
        "/img/gallery/img_1.jpg",
        "/img/gallery/img_2.jpg",
        "/img/gallery/img_3.jpg",
        "/img/gallery/img_4.jpg",
        "/img/gallery/img_5.jpg",
        "/img/gallery/img_6.jpg",
        "/img/gallery/img_7.jpg",
        "/img/gallery/img_8.jpg",
        "/img/gallery/img_9.jpg"
    ]
    return(
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What are we About</h1>
                <p className="info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos in illo natus, magnam fugiat corrupti consequatur sequi nulla vero reprehenderit perspiciatis quam quasi eaque animi officia error doloremque corporis fugit!</p>
                <button className="btn">EXPLORE NOW</button>
            </div>
            <div className="col gallery">
                {images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}