import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
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
    <ProductCard list={product} />
  );
};

export default Home;
