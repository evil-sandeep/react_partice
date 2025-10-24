import React, { useState } from 'react';

const DiasableButton = () => {
    const [input, setInput] = useState('')

    const submit=(e)=>{
        alert(`hello -${input}`)
        setInput('')
    }

    return (
        < >
            <div >
                <input type="text"
                    placeholder='enter ur name '
                    onChange={(e) => setInput(e.target.value)}
                    value={input}

                    className=' border m-2 p-2 h-auto hover:bg-gray-300 text-center border-black border-x-red-400 rounded-md '

                />
            </div>   
            {input.length>0 && (
                <button className='border-black border m-2 p-2 hover:bg-green-700' onClick={submit}>submit</button>
            )}

        </>
    )
}

export default DiasableButton