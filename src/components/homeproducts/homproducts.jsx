import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productcard/productcard';
import './homeproducts.css';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const data = await res.json();
        setProducts(data.slice(0, 10)); // limit to 8
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <div className="home-loader">Loading featured products...</div>;
  if (error) return <div className="home-error">Error: {error}</div>;

  return (
    <div className="home-products-section">
      <p className="home-products-title">Exquisite custom suits made with fabrics from globally acclaimed brands.
      <div className="view-all-container">
        <Link to="/shop">
          <button className="view-all-button">View All Products</button>
        </Link>
      </div>
      </p>
      <div className="home-products-grid">
        {products.map(product => (
          <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
            <ProductCard
              images={product.images}
              title={product.title}
              price={product.price}
              description={product.description}
            />
          </Link>
        ))}
      </div>

      
    </div>
  );
}

export default HomeProducts;
