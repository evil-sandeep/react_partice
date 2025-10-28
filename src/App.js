
import React from 'react'
import '../src/index.css'
import { BrowserRouter , Routes, Route,  Link } from 'react-router-dom'

import DiasableButton from './components/DiasableButton'
import FetchAPI from './components/FetchAPI'
import Partice from './components/Partice'
import ConditionalRendering from './components/ConditionalRendering'
import SimpleFormValidation from './components/SimpleFormValidation'
import PassPropsData from './components/PassPropsData'
import ParentProps from './components/ParentProps'
import RenderLists from './components/RenderLists'
import DeleteItemfromList from './components/DeleteItemfromList'




const App = () => {
  return (
  <BrowserRouter>
  <div>
  <h1>Welcome to my app </h1>
  <nav>
    <Link to='/'>Home</Link> | {" "}
    <Link to='Partice'>Partice </Link> |{" "}
    <Link to='FetchAPI'>FetchAPI </Link> |{" "}
    <Link to='SimpleFormValidation'>SimpleFormValidation </Link> |{" "}
    <Link to='ParentProps'>ParentProps</Link> |{' '}
    <Link to='/renderlists'>RenderLists</Link>|{' '}
    <Link to='/DeleteItemfromList'>DeleteItemfromList</Link>
  </nav>

  <Routes>
    <Route path='/partice' element={<Partice/>}></Route>
    <Route path='/fetchapi' element={<FetchAPI/>}></Route>
    <Route path='/simpleformvalidation' element={<SimpleFormValidation/>}></Route>
    <Route path='/ParentProps'element={<ParentProps/>}></Route>
    <Route path='/DeleteItemfromList' element={<DeleteItemfromList/>}></Route>
  </Routes>
  </div>
  </BrowserRouter>
  )
}

export default App