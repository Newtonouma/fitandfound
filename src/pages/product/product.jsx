import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/cartcontext';

const API_URL = 'https://api.escuelajs.co/api/v1/products';

function Product() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mainImage, setMainImage] = useState('');
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`${API_URL}/${id}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setProduct(data);
        setMainImage(data.images[0]);

        // ✅ Fetch related products from the correct category endpoint
        const categoryRes = await fetch(`https://api.escuelajs.co/api/v1/categories/${data.category.id}/products`);
        const categoryProducts = await categoryRes.json();

        // ✅ Filter and shuffle related products
        const filtered = categoryProducts.filter(p => p.id !== Number(id));
        const shuffled = filtered.sort(() => 0.5 - Math.random()).slice(0, 6);
        setRelatedProducts(shuffled);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <div className="loader">Loading product...</div>;
  if (error) return <div className="error">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="product-page" style={styles.page}>
      <Link to="/shop" style={styles.backLink}>&larr; Back to Shop</Link>

      {/* Main Content */}
      <div style={styles.content}>
        <div style={styles.gallery}>
          
          <div style={styles.thumbnails}>
            {product.images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${product.title} ${idx}`}
                style={styles.thumb}
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
          <img src={mainImage} alt={product.title} style={styles.mainImage} />
        </div>

        <div style={styles.details}>
          <h1 style={styles.title}>{product.title}</h1>
          <p style={styles.price}>Ksh {product.price.toLocaleString()}</p>
          <p style={styles.description}>{product.description}</p>
          <button style={styles.button} onClick={() => addToCart(product)}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Related Products */}
      <div style={styles.relatedSection}>
        <h2 style={styles.relatedTitle}>Related Products</h2>
        <div style={styles.relatedGrid}>
          {relatedProducts.map(item => (
            <Link key={item.id} to={`/product/${item.id}`} style={styles.relatedItem}>
              <img src={item.images[0]} alt={item.title} style={styles.relatedImage} />
              <p style={styles.relatedName}>{item.title}</p>
              <p style={styles.relatedPrice}>Ksh {item.price.toLocaleString()}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: { padding: '20px' },
  backLink: { textDecoration: 'none', color: '#007bff', display: 'block', marginBottom: '20px' },
  content: { display: 'flex', gap: '40px', flexWrap: 'wrap' },
  gallery: { flex: 1, minWidth: '300px', marginBottom: '10px', display: 'flex', justifyContent: 'center' },
  mainImage: { width: '70%', objectFit: 'cover' },
  thumbnails: { display: 'flex',flexDirection: 'column', gap: '10px', marginTop: '10px' },
  thumb: {
    width: '80%',
    height: '20%',
    objectFit: 'cover',
    cursor: 'pointer',
    
    
  },
  details: { flex: 1, minWidth: '300px' },
  title: { fontSize: '28px', marginBottom: '10px' },
  price: { fontSize: '24px', color: '#28a745', marginBottom: '20px' },
  description: { fontSize: '16px', color: '#666', marginBottom: '20px' },
  button: {
    padding: '12px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer'
  },
  relatedSection: { marginTop: '60px'  },
  relatedTitle: { fontSize: '24px', marginBottom: '20px' },
  relatedGrid: { display: 'flex', gap: '20px', flexWrap: 'wrap'},
  relatedItem: { width: '300px', height: '350',textDecoration: 'none', color: '#000' },
  relatedImage: {
    width: '100%',
    height: '70%',
    objectFit: 'cover'
  },
  relatedName: { fontSize: '14px', marginTop: '10px', fontWeight: '500' },
  relatedPrice: { fontSize: '14px', color: '#28a745' }
};

export default Product;
