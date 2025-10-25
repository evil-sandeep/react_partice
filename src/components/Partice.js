import React, { useEffect, useState } from 'react'


const Partice = () => {
    const [count, setCount] = useState(0)
    const [hide, Unhide] = useState(true)
    const [text, setText] = useState('')
    const [colorCode, setColorCode] = useState('')
    const [chCount, setChCount] = useState('')
    const [dButton, setDButton] = useState('')



    const randomClr = () => {
        let clrCode = '0123456789ABCDEF'
        let result = '#'
        for (let i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * clrCode.length)
            result += clrCode[randomIndex]
        }
        setColorCode(result)
    }
    useEffect(() => {
        randomClr()
        let intervalID = setInterval(() => {
            randomClr()
        }, 1000)
        return () => clearInterval(intervalID)
    }, [])



    const changeCounter = (no) => {
        if (no === '+') {
            setCount(prev => prev + 1)
        } else {
            setCount((prev) => {
                return prev - 1
            })
        }

    }


    const textChange = (e) => {
        setText(e.target.value)
    }

    const textType = (e) => {
        setChCount(e.target.value)
    }



    return (

        <div>
            <div>
                {hide && <h1>I am touggle sentence</h1>}

                <button onClick={() => Unhide(!hide)} > {hide ? 'HIDE' : 'SHOW'} </button>
            </div>
            <br />

            <div>
                <button onClick={() => changeCounter('+')}>increment</button>
                <h1>{count}</h1>
                <button onClick={() => changeCounter('-')}>decrement</button>
            </div>
            <br />

            <div>
                <input type="text"
                    placeholder='typeSomething'
                    onChange={(e) => textChange(e)}

                />

                <p>{text}</p>
            </div>

            <div style={{ backgroundColor: colorCode }}>
                <h1>{colorCode}</h1>
                <button onClick={randomClr}>Generate color</button>
            </div>
            /ch Counter
            <div>
                <input type="text"
                    value={chCount}
                    placeholder='type any character'
                    onChange={(e) => textType(e)}



                />
                <h1>text:-{chCount}---length is -{chCount.length}</h1>
            </div>


            /diasabl button
            <div >
                <input type="text"
                    placeholder='type ur name'
                    value={dButton}
                    onChange={(e) => setDButton(e.target.value)}

                />

                {dButton.length > 0 && (<button>submit</button>)}


            </div>
        </div>

    )
}

export default Partice