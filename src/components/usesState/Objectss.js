import react, { useState } from 'react'

const Objectss = () => {
    const [sObj, setSobj] = useState({
        cnt: 1,
        mFlag: true
    })
    const changeCounter = (op) => {
        let tc = sObj.cnt
        if (op === '+') {
            tc++
            setSobj({ ...sObj, cnt: tc })
        } else {
            tc--
            setSobj({ ...sObj, cnt: tc })
        }
    }


    return (
        <div>
            <h3>{sObj.cnt}</h3>
            <button onClick={() => changeCounter('+')} >Increment</button>
            <br />
            <button onClick={() => changeCounter('-')} >decrement</button>
            <h3>{sObj.mFlag.toString()}</h3>
            <button onClick={() => setSobj({ ...sObj, mFlag: !sObj.mFlag })}  >toggle</button>

        </div>
    )
}

export default Objectss