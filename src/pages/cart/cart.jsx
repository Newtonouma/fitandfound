import React from 'react';
import { useCart } from '../../context/cartcontext';
import { Link } from 'react-router-dom';


function Cart() {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice } = useCart();

  if (cartItems.length === 0) {
    return (
      <div style={{ padding: '20px' }}>
        <h2>Your cart is empty.</h2>
        <Link to="/" style={{ color: '#007bff' }}>Back to Shop</Link>
      </div>
    );
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Your Cart</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '20px' }}>
        <thead>
          <tr>
            <th style={styles.th}>Product</th>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Quantity</th>
            <th style={styles.th}>Subtotal</th>
            <th style={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td style={styles.td}>
                <img src={item.images?.[0]} alt={item.title} style={{ width: '60px', borderRadius: '4px' }} />
              </td>
              <td style={styles.td}>{item.title}</td>
              <td style={styles.td}>
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                  style={{ width: '60px' }}
                />
              </td>
              <td style={styles.td}>Ksh {(item.quantity * item.price).toLocaleString()}</td>
              <td style={styles.td}>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: Ksh {totalPrice.toLocaleString()}</h2>
      <button onClick={clearCart} style={styles.clearBtn}>Clear Cart</button>
    </div>
  );
}

const styles = {
  th: { textAlign: 'left', borderBottom: '1px solid #ddd', padding: '8px' },
  td: { borderBottom: '1px solid #ddd', padding: '8px' },
  removeBtn: {
    backgroundColor: '#dc3545',
    color: '#fff',
    border: 'none',
    padding: '6px 12px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
  clearBtn: {
    backgroundColor: '#6c757d',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '4px',
    cursor: 'pointer'
  },
};

export default Cart;
