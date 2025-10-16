import React, { useState } from 'react'
import Data from './Data.js'
const ConditionRender = () => {
    const [isAdmin, setIsAdmin] = useState(true)

    const inputHandler = (e) => {
        setIsAdmin(e.target.checked)
    }
    return (
        <div>
            <input type="checkbox" onChange={inputHandler} />IsAdmin
           <hr />
           <Data isAdmin={isAdmin}/>
          
        </div>
    )
}
export default React.memo(ConditionRender)