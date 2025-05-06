import './productCard.css';
import { FaWhatsapp } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />
      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>
        <ul className="product-specs">
          {(product.specs || []).map((spec, i) => (
            <li key={i}>{spec}</li>
          ))}
        </ul>
        <div className="product-footer">
          <span className="product-price">{product.price} TZS</span>
          <a 
            href={`https://wa.me/255655750791?text=Interested in ${product.name}`}
            className="whatsapp-btn"
          >
            <FaWhatsapp /> Inquire
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
