import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart.jsx'
import { store } from './store/store.js'
import Header from './components/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/cart" element={<Cart />}/>
    </Routes>
    </BrowserRouter>
  </Provider>
)
