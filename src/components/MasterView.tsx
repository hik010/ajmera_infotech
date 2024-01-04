import { Grid } from '@mui/material';
import ProductCard from './ProductCard';
import { useEffect, useState } from 'react';
import axios from 'axios';

type Props = {
  clickProduct: (product: {}) => void;
};

function MasterView({ clickProduct }: Props) {
  // State to store the fetched product data
  const [products, setProducts] = useState([]);

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Call fetchAllProducts when component mounts
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <Grid
      item
      xs={4}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: 'inherit',
        overflow: 'scroll',
      }}
      className="master-view"
    >
      {products.map((product: { title: string; id: string }) => (
        <ProductCard
          data={product}
          handleClick={clickProduct}
          key={product.id}
        />
      ))}
    </Grid>
  );
}

export default MasterView;
