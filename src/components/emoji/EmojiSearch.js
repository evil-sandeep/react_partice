import React, { useState, useEffect } from 'react';

const EmojiSearch = () => {

    const [emojis, setEmojis] = useState([]);
    const [emgSrch, setEmgSrch] = useState('')
    const [filterEmj, setFilterEmj] = useState([])
    const [err, setErr] = useState(null)

    const fetchApi = async () => {
        try {
            const res = await fetch('https://raw.githubusercontent.com/amio/emoji.json/master/emoji.json')
            if (!res.ok)
                setErr(' api not work');
            const data = await res.json();
            console.log(data)
            setEmojis(data)

        } catch (err) {

        }
    }

    useEffect(() => {
        const filtered = emojis.filter(item =>
            item.name.toLowerCase().includes(emgSrch.toLowerCase())
        )
        setFilterEmj(filtered)
    }, [emgSrch])


    useEffect(() => {
        fetchApi()
    }, [])

    return (
        <div>{emojis}
            <input
                type="text"
                value={emgSrch}
                onChange={(e) => setEmgSrch(e.target.value)}
            />
            <div>
                {filterEmj.map((emoji, index) => (
                    <span key={index} style={{ fontSize: '24px', margin: '5px' }}>
                        {emoji.char}
                    </span>
                ))}
            </div>



        </div>
    )
}
export default EmojiSearch