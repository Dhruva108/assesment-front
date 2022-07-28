import { useEffect, useState } from 'react';
import Products from '../components/Products';
import { getProducts } from '../services/products';

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getProducts();
      setProduct(result);
    };

    fetchData();
  }, []);

  return (
    <Products list={product} />
  );
};

export default Home;
