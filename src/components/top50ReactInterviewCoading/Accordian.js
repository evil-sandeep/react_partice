import React, { useState } from 'react';

const Accordian = () => {
    const data = [
        {
            title: 'what is react',
            element: 'React is a js library for building user interfaces'
        },
        {
            title: 'what is state',
            element: 'State is js is a input element.'
        },
        {
            title: 'what is Props',
            element: 'Props is js -pasing data from parent component to chaild component '
        }
    ]

    const [indexs, setIndexs] = useState(null)

    return (
       <div>
        {data.map((item,indx)=>(
            <div key={indx}>
                <div>
                <button>
                    {item.title}
                </button>
                </div>
            </div>
        ))}
       </div>
    )
}
export default Accordian