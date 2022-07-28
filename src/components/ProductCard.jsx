import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => (
  <div key={product.id} className="card-container">
    <div className="card__image-container">
      <img
        className="card__image__image"
        src={product.image}
        alt="item"
      />
    </div>
    <div>
      <h1 className="card__title">{product.title}</h1>
    </div>
    <div className="card__button-container">
      <Link to={`/detail/${product.id}`} className="card__button__link">
        <button type="button" className="card__button">
          Detail
        </button>
      </Link>
    </div>
  </div>
);

ProductCard.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default ProductCard;
