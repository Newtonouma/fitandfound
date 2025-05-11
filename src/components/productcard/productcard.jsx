import React, { useState, memo } from 'react';

const ProductCard = ({ images = [], title, price}) => {
  const [hovered, setHovered] = useState(false);
  const primaryImage = images[0] || '';
  const hoverImage = images[1] || primaryImage;
  const displayImage = hovered ? hoverImage : primaryImage;

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={displayImage} alt={title} style={styles.image} />
      <h2 style={styles.title}>{title}</h2>
      <p style={styles.price}>Ksh {price.toLocaleString()}</p>
    
      
    </div>
  );
};

const styles = {
  card: {
    width: '100%',  
    textAlign: 'left',
   
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
   
    
  },
  image: {
    width: '100%',
    height: '300px',
    objectFit: 'cover',    
    marginBottom: '12px',
  },
  title: {color:'#68635f', fontSize: '18px', margin: '0 0 8px' },
  price: { color: '#9d9c9a', fontWeight: 'bold', margin: '0 0 8px' },
  description: { fontSize: '14px', color: '#666', margin: '0 0 12px' },
};

export default memo(ProductCard);
