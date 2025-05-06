import { featuredProducts } from '../data/products';
import ProductCard from '../components/productCard/productCard';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1 className="page-title">Premium PCs & Laptops in Tanzania</h1>
            <p className="hero-subtitle">
              Custom-built rigs with warranty & free delivery in Dar es Salaam
            </p>
            <Link to="/products" className="hero-cta">Shop Now</Link>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="quick-links">
          <h2 className="section-title">Quick Links</h2>
          <div className="links-container">
            <Link to="/" className="quick-link">Home</Link>
            <Link to="/products" className="quick-link">Products</Link>
            <Link to="/about" className="quick-link">About</Link>
            <Link to="/contact" className="quick-link">Contact</Link>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="featured-products">
          <h2 className="section-title">Featured Products</h2>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
