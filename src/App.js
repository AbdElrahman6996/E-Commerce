import React from 'react'
import Main from './Main';
import Product from './Product';
import TopAd from './components/TopAd'
import Navbar from './components/Navbar'

const App = () => {
  let components
  switch (window.location.pathname) {
    case "/":
      components = <Main />
      break;
    case "/product":
      components = <Product />
      break;
    default:
      components = <Main />
      break;
  }
  return (
    <>
      <TopAd />
      <Navbar />
      {components}
    </>
  )
}

export default App