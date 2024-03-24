import React, { useEffect, useState } from 'react'

const data = ['https://cdn.pixabay.com/photo/2016/07/07/16/46/dice-1502706_640.jpg',
    'https://media.istockphoto.com/id/1295274245/photo/random-multicolored-spheres-computer-generated-abstract-form-of-large-and-small-balls-3d.jpg?s=612x612&w=0&k=20&c=q7NOl28YxIIOqKu6em50VlKrg6ISFyVww_nLOCr5W_A=',
    'https://preview.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=640&crop=smart&auto=webp&s=22ed6cc79cba3013b84967f32726d087e539b699',
    'https://images.squarespace-cdn.com/content/v1/5e10bdc20efb8f0d169f85f9/09943d85-b8c7-4d64-af31-1a27d1b76698/arrow.png',
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrXkJEvLQ7HiXKIg7OxEtTYC9YwAX914jBzrraMUncxQ&s"]




const ImageSlider = () => {

    const [imageIndex, setImageIndex] = useState(0)

    const nextHandler = () => {

        setImageIndex((imageIndex + 1) % data.length)

    }
    const previousHandler = () => {
        if (imageIndex === 0) {
            setImageIndex(data.length - 1)
        } else {
            setImageIndex(imageIndex - 1)
        }

    }
    useEffect(() => {
        const timer = setTimeout(() => {
            nextHandler()
        }, 3000)
        return () => {
            clearTimeout(timer)
        }
    }, [imageIndex])



    return (
        <div className='flex justify-center m-2 p-2 '>
            <button className='p-3 font-semibold ' onClick={previousHandler}>Previous</button>
            {data.map((image, index) => (
                <img src={image} key={index} alt="ImgeSlider" className={'w-[500px] h-[300px] ' + (imageIndex === index ? 'block' : 'hidden')} />
            ))}

            <button className='p-3 font-semibold' onClick={nextHandler}>Next</button>
        </div>
    )
}

export default ImageSlider