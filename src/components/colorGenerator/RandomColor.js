import React, { useEffect, useState } from 'react';

const RandomColor = () => {

    const [colorCode, setColorCode] = useState('#ffffff')

    const randomClr = () => {

        let code = '0123456789ABCDEF';
        let result = "#";
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * code.length);
            result += code[randomIndex];
        }

        console.log(result)
        setColorCode(result)
    }

    useEffect(() => {
        randomClr();

        const intervlId = setInterval(() => {
            randomClr()
        }, 2000)
        return ()=> clearInterval(intervlId)

    }, [])



    return (
        <div>

            <div className='flex flex-col items-center justify-center h-screen transition-all duration-500' style={{ backgroundColor: colorCode }}>
                <h1 className="text-2xl font-bold text-white mb-6">
                    Color Code: {colorCode}
                </h1>

                <div className='' onClick={randomClr}> <button
                    onClick={randomClr}
                    className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-200 transition"
                >
                    🔄 Generate Color
                </button></div>

            </div>

        </div>
    )
}

export default RandomColor