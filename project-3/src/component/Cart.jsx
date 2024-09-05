import React from 'react';
import { useEffect ,useState} from 'react';

function Cart({fetchCart, deleteCart}) {
    const [cart,setCart]=useState([])


      useEffect(()=>{
      fetchCart() .then((response) => {
      setCart(response.data);
      })
      .catch((e) => console.log(e));
      },[])
      const calculateTotalPrice = () => {
      return cart.reduce((total, item) => total + item.price, 0);
      };

      const totalPrice = calculateTotalPrice();
    
      return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#f5f5f5',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            {cart.map((cart, index) => (
                <div key={index} style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    padding: '10px',
                    marginBottom: '10px',
                    borderRadius: '4px',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                }}>
                    <div style={{
                         display: 'flex',
                         alignItems: 'center'
                    }}>
                        <img src={cart.imgurl} alt={cart.name} style={{ marginRight: '10px' }} height={100} width={100}/>
                        <div style={{
                             fontSize: '16px',
                             fontWeight: 'bold'
                          }}>{cart.name}</div>
                    </div>
                    <div>
                        <div style={{ fontSize: '14px', marginBottom: '5px' }}>Price: <span style={{ fontWeight: 'bold' }}>${cart.price}</span></div>
                        <div style={{ fontSize: '14px' }}>Category: <span style={{ fontStyle: 'italic' }}>{cart.category}</span></div>
                    </div>
                    <button style={{
                        marginLeft: '10px',
                        backgroundColor: '#ff4d4f',
                        color: 'white',
                        border: 'none',
                        padding: '8px 16px',
                        borderRadius: '4px',
                        cursor: 'pointer'
                    }} onClick={() => {
                        deleteCart(cart.id)
                    }}>Delete</button>
                </div>
            ))}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>Total Price: <span style={{ fontWeight: 'bold' }}>${totalPrice.toFixed(2)}</span></div>
                <button style={{
                    marginTop: '10px',
                    backgroundColor: '#1890ff',
                    color: 'white',
                    border: 'none',
                    padding: '12px 24px',
                    borderRadius: '4px',
                    cursor: 'pointer'
                }}>Checkout</button>
            </div>
        </div>
    )
}

export default Cart;
