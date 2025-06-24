import Marquee from "react-fast-marquee";


export function MarqueeReact({ images, direction = 'right' }) {
    return (
        <Marquee gradient direction={direction}>
            {images.map((image, index) => (
                <div key={index} className='m-4 text-center'>
                    {
                        <a href={image.link}>
                            <img
                                src={image.src}
                                alt={image.alt}
                                width={image.width}
                                height={image.height}
                                loading='lazy'
                                className="rounded-b-full rounded-t-full"
                            />
                        </a>
                    }

                </div>
            ))}
        </Marquee>
    )
}
