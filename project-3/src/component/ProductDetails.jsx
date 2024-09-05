import { useNavigate } from 'react-router-dom';
import React from 'react';
import axios from 'axios';
function ProductDetails({ one, addToCart}) {

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:3000/api/product/delete/${id}`);
          console.log("deleteeeeeed")
        } catch (error) {
          console.error("Error deleting product:", error);
        }
      };
    // Ensure the image URL is correct and the 'one' object is properly populated
    const imgurl = one.imgurl || 'default-image-url'; // Fallback image URL if imgurl is not defined
    
    return (
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div className="product-card">
                <img src={one.imgurl} alt={one.name || 'No content'} height={300} width={300} />
                <h2>{one.name}</h2>
                <p>{one.description}</p>
                <p className='card-item-price'>Price: ${one.price}</p>
                <div className="product-card-buttons">
                    {/* <button onClick={() => handleClick({id:one.id})}>Update Product</button> */}
                    <button onClick={() => {handleDelete(one.id)}}>Delete Product</button>
                    <button onClick={() => addToCart({ name: one.name, price: one.price, imgurl: one.imgurl })}>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductDetails;
