import React, { useEffect, useState } from 'react'

const Pagniaion = () => {
    const [pData, setPData] = useState([])
    const [page, setPage] = useState(1)
    const [totalPage, settotalPage] = useState(0)

    const fetchData = async () => {
        try {
            const res = await fetch(`https://dummyjson.com/products?limit=10&skip=${page * 10 - 10}`)
            if (!res) {
                throw new Error("Api Address not Correct")
            }
            const data = await res.json()
            if (data && data.products) {
                setPData(data.products)
                settotalPage(data.total / 10)
            }

        } catch (error) {
            console.error('Error is ' + error)
        }
    }

    // console.log(pData)
    useEffect(() => {
        fetchData()
    }, [page])

    const selectedPage = (selectpg) => {
        if (selectpg >= 1 && selectpg <= totalPage && selectpg !== page) {
            setPage(selectpg)
        }

    }


    return (
        <div  >
            {pData.length > 0 &&
                <div className='flex flex-wrap gap-2  '>
                    {pData.map((p, i) => (
                        <div className='border border-black m-2 p-2 object-cover'>
                            <img className='h-[200px] w-[200px] ' src={p.thumbnail} alt={p.title} />
                            <h1 key={i}>{p.title}</h1>
                        </div>
                    ))}
                </div>}


            {pData.length > 0 &&
                <div className='  flex justify-center gap-2 cursor-pointer  space-x-7  '>
                    <span className={'border border-black p-1.5 ' + (page > 1 ? "" : "opacity-0")} onClick={() => selectedPage(page - 1)}>⏮️</span>
                    {
                        [...Array(totalPage)].map((_, i) => (
                            <span className={'border border-black p-1.5 ' + (page === i + 1 ? "bg-slate-600" : "")} key={i} onClick={() => selectedPage(i + 1)}>{i + 1}</span>

                        ))
                    }
                    <span className={'border border-black p-1.5 ' + (page < totalPage ? "" : "hidden")} onClick={() => selectedPage(page + 1)}>⏭️</span>
                </div>}
        </div>
    )
}

export default Pagniaion