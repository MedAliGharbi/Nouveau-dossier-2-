import React from 'react'
import { useNavigate } from 'react-router-dom';
function ProductList({data,switchView,addToCart}) {
const navigate=useNavigate()
  return (
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
    {
        data.map((e) => (
            <div className="product-card" key={e.id} 
             style={{ width: '30%', margin: '0 1.5%' }}>
                <img src={e.imgurl} alt="No content"
                 style={{ width: '100%', cursor: 'pointer' }}
                  onClick={() => {navigate('oneProduct'),switchView('ProductDetails', e)}} />
                <h2 style={{ fontSize: '1.5rem', margin: '0.5rem 0' }}>{e.name}</h2>
                <p className='card-item-price' style={{ fontSize: '1rem', margin: '0.5rem 0' }}>Price: {e.price}</p>
                <div className="product-card-buttons">
                    <button onClick={() => {
                        console.log('clicked',e);
                        addToCart({ name: e.name, price: e.price, imgurl: e.imgurl})
                    }}>Add to Cart</button>
                </div>
            </div>
        ))
    }
</div>

  )
}

export default ProductList