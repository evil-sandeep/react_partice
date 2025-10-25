
import React from 'react'
import '../src/index.css'


import DiasableButton from './components/DiasableButton'
import FetchAPI from './components/FetchAPI'
import Partice from './components/Partice'
import ConditionalRendering from './components/ConditionalRendering'
import SimpleFormValidation from './components/SimpleFormValidation'




const App = () => {
  return (
    <>
   {/* <DiasableButton/>
   <FetchAPI/> */}
   {/* <Partice/> */}
  <ConditionalRendering/>
  <SimpleFormValidation/>
    </>

  )
}

export default App