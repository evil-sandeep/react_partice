import React, { useState } from 'react'
const imgData = [
    " https://miro.medium.com/v2/resize:fit:1400/1*1BUIofZgqVuR6nj8LbrRtQ.jpeg",
    "https://static.scientificamerican.com/sciam/cache/file/4F73FD83-3377-42FC-915AD56BD66159FE_source.jpg",
    "https://techspective.net/wp-content/uploads/2019/06/binary-1254484_1280.png",
    "https://www.shutterstock.com/image-photo/word-demo-appearing-behind-torn-260nw-1782295403.jpg"
]


const Causol = () => {


    const [imgSlide, setImgSlide] = useState(0)

    const prevSlide = () => {
        if (imgSlide === 0) return setImgSlide(imgData.length - 1)
        else {
            setImgSlide(imgSlide - 1)
        }
    }
    const nextSlide = () => {
        setImgSlide((imgSlide + 1) % imgData.length)
    }

    return (
        <div className='flex justify-center gap-5'>
            <button className='font-semibold  ' onClick={prevSlide}>Previous</button>
            {imgData.map((imgg, i) => (
                <img src={imgg} className={'h-[400px] w-[700px] ' + (imgSlide === i ? 'block' : 'hidden')} alt="img" />
            ))}

            <button className='font-semibold  ' onClick={nextSlide}>Next</button>
        </div>
    )
}

export default Causol