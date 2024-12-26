import { useEffect, useState } from 'react'
import './App.css'
import Router from './router'
import { useSelector } from 'react-redux'

function App() {
  const cart = useSelector((store) => store.cart)
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));    
  }, [cart])

  return (
    <>
    <Router />
    </>
  )
}

export default App
