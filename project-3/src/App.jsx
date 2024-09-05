import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductsList from './component/productList';
import Search from './component/Search';
import axios from 'axios';
import dummydata from "./data/dummydata";
import './App.css';

const App = ({ one, setOne }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);
  const [useDummyData, setUseDummyData] = useState(true); 

 
  const fetchData = () => {
    axios
      .get('http://localhost:3000/api/product/get')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data'));
  };

  const fetchCart = () => {
    axios('http://localhost:3000/api/cart/get')
      .then((response) => setCart(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
   fetchData()
    fetchCart();
  }, []);

  // Add to cart
  const addToCart = (obj) => {
    axios
      .post('http://localhost:3000/api/cart/post', obj)
      .then(() => alert('Added to cart'))
      .catch((e) => console.log(e));
  };




  return (
    <div className="App">
      <div className="nav">
        <Link className="logo" to="/">
          Forja store
        </Link>
        <Search data={data} setData={setData} />
        <Link className="items" to="/cart" style={{ marginRight: 30, marginLeft: 30 }}>
          🛒 CART
        </Link>
     
      </div>

      <ProductsList 
        addToCart={addToCart} 
        data={data} 
        switchView={(option, one) => setOne(one)} 
      />
      {/* Optionally include ProductDetails or Cart depending on the route */}
    </div>
  );
};

export default App;
