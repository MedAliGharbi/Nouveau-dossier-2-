import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './component/Signup.jsx';
import Login from './component/Login.jsx';
import Main from './App.jsx';
import ProductDetails from './component/ProductDetails';
import axios from 'axios';
import Cart from './component/Cart.jsx';

function App() {
  const [one, setOne] = useState({});

  const fetchData = () => {
    axios
      .get('http://localhost:3000/api/product/get')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data'));
  };

  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:3000/api/product/${id}`)
      .then(() => fetchData())
      .catch((err) => console.log(err));
  };

  const addToCart = (obj) => {
    axios
      .post('http://localhost:3000/api/cart/post', obj)
      .then(() => alert('Added to cart'))
      .catch((e) => console.log(e));
  };

  const fetchCart = () => {
    return axios('http://localhost:3000/api/cart/get');
  };

  const deleteCart = (id) => {
    axios
      .delete(`http://localhost:3000/api/cart/${id}`)
      .then(() => console.log('Deleted from cart'))
      .catch((e) => console.log(e));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main one={one} setOne={setOne} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart deleteCart={deleteCart} fetchCart={fetchCart} />} />
        <Route
          path="/oneProduct"
          element={<ProductDetails deleteProduct={deleteProduct} addToCart={addToCart} one={one} switchView={(option) => {}} />}
        />
      </Routes>
    </Router>
  );
}

const rootElement = document.getElementById('root');
const root = createRoot(rootElement); 
root.render(<App />);
