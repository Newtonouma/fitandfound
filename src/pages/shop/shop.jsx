import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/productcard/productcard';
import './shop.css';

const API_URL = 'https://api.escuelajs.co/api/v1/products';
const CATEGORIES_URL = 'https://api.escuelajs.co/api/v1/categories';
const PRODUCTS_PER_PAGE = 10;

function Shop() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [sortOption, setSortOption] = useState('default');
  const [showSort, setShowSort] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const [prodRes, catRes] = await Promise.all([
          fetch(API_URL),
          fetch(CATEGORIES_URL)
        ]);
        if (!prodRes.ok) throw new Error(`Products HTTP ${prodRes.status}`);
        if (!catRes.ok) throw new Error(`Categories HTTP ${catRes.status}`);
        const [prods, cats] = await Promise.all([prodRes.json(), catRes.json()]);
        setProducts(prods);
        setCategories(cats);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryClick = cat => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleSortSelect = opt => {
    setSortOption(opt);
    setShowSort(false);
  };

  let filtered = products
    .filter(p => p.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter(p => !selectedCategory || p.category.id === selectedCategory.id);

  if (sortOption === 'priceAsc') filtered.sort((a, b) => a.price - b.price);
  if (sortOption === 'priceDesc') filtered.sort((a, b) => b.price - a.price);
  if (sortOption === 'nameAsc') filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sortOption === 'nameDesc') filtered.sort((a, b) => b.title.localeCompare(a.title));

  const totalPages = Math.ceil(filtered.length / PRODUCTS_PER_PAGE);
  const startIdx = (currentPage - 1) * PRODUCTS_PER_PAGE;
  const pageItems = filtered.slice(startIdx, startIdx + PRODUCTS_PER_PAGE);

  const handlePrev = () => setCurrentPage(p => Math.max(p - 1, 1));
  const handleNext = () => setCurrentPage(p => Math.min(p + 1, totalPages));
  const handlePageClick = p => setCurrentPage(p);

  if (loading) return <div className="loader">Loading products...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="main">
      {/* Products Section */}
      <div className="productsSection">
        {/* Sort Accordion */}
        <div className="accordion">
          <div className="accordionHeader" onClick={() => setShowSort(s => !s)}>
            Sort: {sortOption === 'default' ? 'Default' : sortOption}
            {showSort ? ' ▲' : ' ▼'}
          </div>
          {showSort && (
            <div className="accordionBody">
              <button className="sortBtn" onClick={() => handleSortSelect('default')}>Default</button>
              <button className="sortBtn" onClick={() => handleSortSelect('priceAsc')}>Price: Low → High</button>
              <button className="sortBtn" onClick={() => handleSortSelect('priceDesc')}>Price: High → Low</button>
              
            </div>
          )}
        </div>

        {/* Products Grid */}
        <div className="container">
          {pageItems.map(product => (
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

        {/* Pagination */}
        <div className="pagination">
          <button
            className="pageButton"
            onClick={handlePrev}
            disabled={currentPage === 1}
          >
            ←
          </button>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className="pageButton"
              onClick={() => handlePageClick(i + 1)}
              style={{ fontWeight: currentPage === i + 1 ? 'bold' : 'normal' }}
            >
              {i + 1}
            </button>
          ))}
          <button
            className="pageButton"
            onClick={handleNext}
            disabled={currentPage === totalPages}
          >
            →
          </button>
        </div>
      </div>

      {/* Sidebar */}
      <div className="sidebar">
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="search"
        />
        <div className="categories">
          <button
            className="categoryBtn"
            style={{ fontWeight: !selectedCategory ? 'bold' : 'normal' }}
            onClick={() => handleCategoryClick(null)}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat.id}
              className="categoryBtn"
              style={{ fontWeight: selectedCategory?.id === cat.id ? 'bold' : 'normal' }}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Shop;
