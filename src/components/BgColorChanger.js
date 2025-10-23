import React, { useEffect, useState } from 'react'

const BgColorChanger = () => {

    //bydefault set colour is white
    const [colorCode, setColorCode] = useState('#ffffff');

    const randomCLR = () => {
        let clrCode = '0123456789ABCDEF'
        let result = '#'
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * clrCode.length)
            result += clrCode[randomIndex]
        }
        setColorCode(result)
    }

    useEffect(() => {
        randomCLR()
        const intervalID = setInterval(() => {
            randomCLR()
        }, 20000)
        return () => clearInterval(intervalID)
    }, [])
    return (
        <div style={{ backgroundColor: colorCode }}>
            <h1>COlour COde is :-{colorCode}</h1>
            <div onClick={randomCLR}>
                <button onClick={randomCLR}>🔄 Generate Color</button>
            </div>
        </div>
    )
}

export default BgColorChanger