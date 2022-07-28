import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProduct } from '../services/products';

const Detail = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProduct(id);

      setDetail(result);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {
        detail
          ? (
            <div>
              <h2>{detail.title}</h2>
              <p>Price: {detail.price}</p>
              <h4>Description</h4>
              <p>{detail.description}</p>
              <h4>Category:</h4>
              <p>{detail.category}</p>
              <img src={detail.image} alt="element" />
              <h4>Raiting</h4>
              <ul>
                <li>Rate: {detail.rating.rate}</li>
                <li>Count: {detail.rating.count}</li>
              </ul>
            </div>
          ) : null
      }
    </div>
  );
};

export default Detail;
