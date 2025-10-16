import React, { useState } from 'react'

const AdvancedForm = () => {
    const [pInfo, setPInfo] = useState({
        fullname: '',
        gender: '',
        mrg: '',
        mob: ''

    })



    const formstyle = {
        width: '250px',
        height: '50px',
        color: 'black',
        fontSize: '25px',
        border: '1px soild black',
        margin: 'black'
    }

    const imputChanger = (e) => {
        setPInfo((prevState) => {
            return ({ ...prevState, [e.target.name]: e.target.value })
        })
    }
    const imputCheck = (e) => {
        setPInfo((prevState) => {
            return ({ ...prevState, [e.target.name]: e.target.checked })
        })
    }

    const showData = (e) => {
        e.preventDefault()
    }

    return (
        <div style={formstyle}>

            <form onSubmit={showData}>
                <input type="text" name="fullname" placeholder='fName' onChange={imputChanger} />
                <input type="radio" name="gender" value='male' onChange={imputCheck} />male
                <input type="radio" name="gender" value='female'onChange={imputCheck} />female
                <input type="checkbox" name="mrg" value='false' onChange={imputCheck} />mrg
                <input type="no" name="mob" placeholder='mobNo' onChange={imputChanger} />
                <br />
                <input type="submit" value='submit' />
            </form>
            {JSON.stringify(pInfo)}
        </div>
    )
}
export default React.memo(AdvancedForm)