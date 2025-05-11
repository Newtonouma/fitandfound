import React, { useState } from 'react';
import blogData from '../../assets/data/blogData.json';
import './blog.css'

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [email, setEmail] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  const filteredPosts = blogData.blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         post.shortContent.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="main">
      <div className="blog-container">
        {/* Main Blog Section */}
        <section className="blog-posts">       
          
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-post">
              <img src={post.image} alt={post.title} className="post-image" />
              <div className="post-meta">
                <span className="post-date">{post.publishedDate}</span>
                <span className="post-category">{post.category}</span>
              </div>
              <h2 className="post-title">{post.title}</h2>
              <p className="post-excerpt">{post.shortContent}</p>
              <button className="read-more">Read More</button>
            </article>
          ))}
        </section>

        {/* Sidebar Section */}
        <aside className="sidebar">
          {/* Search */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Search</h3>
            <input 
              type="text" 
              placeholder="Search posts..." 
              className="search-input"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>

          {/* Popular Posts */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Popular Posts</h3>
            {blogData.popularPosts.map(post => (
              <div key={post.id} className="popular-post">
                <img src={post.image} alt={post.title} className="popular-post-image" />
                <div className="popular-post-content">
                  <h4>{post.title}</h4>
                  <div className="post-meta">
                    <span>{post.publishedDate}</span>
                    <span>{post.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Categories */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Categories</h3>
            <select 
              className="category-select"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="All">All Categories</option>
              {blogData.categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Newsletter */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="newsletter-form">
              <p>Subscribe to get the latest tailoring tips and offers</p>
              <input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>
          </div>

          {/* Tags */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Tags</h3>
            <div className="tags-container">
              {blogData.tags.map(tag => (
                <a key={tag} href={`#${tag}`} className="tag">{tag}</a>
              ))}
            </div>
          </div>

          {/* Archive */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Archive</h3>
            <ul className="archive-list">
              {blogData.archives.map(archive => (
                <li key={archive}><a href={`#${archive}`}>{archive}</a></li>
              ))}
            </ul>
          </div>

          {/* Social Share */}
          <div className="sidebar-widget">
            <h3 className="widget-title">Share</h3>
            <div className="social-share">
              <button className="social-btn facebook">Facebook</button>
              <button className="social-btn twitter">Twitter</button>
              <button className="social-btn instagram">Instagram</button>
              <button className="social-btn pinterest">Pinterest</button>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default BlogPage;