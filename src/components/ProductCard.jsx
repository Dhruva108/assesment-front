import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductCard = ({ list }) => (
  <div>
    {
      list.map((item) => (
        <div key={item.id} className>
          <Link to={`/detail${item.id}`}>
            <h1>{item.title}</h1>
            <img src={item.img} alt="" />
          </Link>
        </div>
      ))
    }
  </div>
);

ProductCard.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape(),
  ).isRequired,
};

export default ProductCard;
