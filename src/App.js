// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/Partice4/Navbar';
// import Body from './components/Partice4/Body';
// import Contact from './components/Partice4/Contact';
// import Cart from './components/Partice4/Cart';
// import About from './components/Partice4/About';
// import ProductInfo from './components/Partice4/ProductInfo';
// import { Provider } from 'react-redux';
// import store from './components/Partice4/store';

// function App() {
//   return (
//     <>
//     <Provider store={store}>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Body />} /> 
//         <Route path="/home" element={<Body />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/cart" element={<Cart />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/product/:id" element={<ProductInfo />} />
//       </Routes>
//       </Provider>
//     </>
//   );
// }

// function Main() {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// }

// export default Main;



// Dropdown
import React from 'react'
// import Register from './components/login-form/Register'
// import Register2 from './components/login-form/Register2'
import Pagniaion from './components/pagination/Pagniaion'
import Help2 from './components/dropdown/Help2'
import Dropdown2 from './components/dropdown/Dropdown2'
import ToDooo from './components/toDoList/ToDooo'
import Wheather from './components/wheather/Wheather'
import Weatherr from './components/wheather/Weatherr'
import Weatther from './components/wheather/Weatther'
import ImageSlider from './components/causal/ImageSlider'


const App = () => {
  return (
    <>
      {/* <Register />
      <Register2 /> */}
      <Weatherr />
      <Weatther />
      <ImageSlider/>

    </>
  )
}
export default App