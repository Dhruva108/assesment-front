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
            <div className="detail-container">
              <section className="detail__section1">
                <div className="deatil__image-conatiner">
                  <img
                    className="deatil__image"
                    src={detail.image}
                    alt="element"
                  />
                </div>
                <h2 className="detail__title">{detail.title}</h2>
                <p className="detail__price"><strong>Price: </strong>${detail.price} usd</p>
                <p className="detail__description">{detail.description}</p>

                <div className="detail__category-container">
                  <h4 className="detail__category__title">Category:</h4>
                  <p className="detail__category">{detail.category}</p>
                </div>
              </section>

              <section className="detail__section2">
                <h4 className="detail__rating__title">Raiting</h4>
                <ul className="detail__rating__list">
                  <li>Rate: {detail.rating.rate}</li>
                  <li>Count: {detail.rating.count}</li>
                </ul>
              </section>
            </div>
          ) : <h1>Loading ...</h1>
      }
    </div>
  );
};

export default Detail;
