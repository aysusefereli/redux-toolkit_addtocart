import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { addToCart } from './store/slices/productslice'
import { useDispatch, useSelector } from 'react-redux'

function App() {
  const product = useSelector((state) => state.products.product)
  const favorites = useSelector((state) => state.products.favorites)
  const dispatch = useDispatch();
  console.log(favorites);

  return (
    <>
    <div className='products'>
      {
         product.map((a) => (
          <div className='product' key={a.id}>
            <h1>{a.id}</h1>
            <p>{a.product}</p>
            <p>{a.price}</p>
            <button onClick={() => dispatch(addToCart(a))}>Add To Cart</button>
          </div>
        ))
      }
    </div>
    </> 
  )
}

export default App
