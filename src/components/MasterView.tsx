import { useEffect, useState } from 'react';
import axios from 'axios';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import ProductCard from './ProductCard';
import { Product } from '../types';

type Props = {
  selectedProductId?: number;
  clickProduct: (id: number) => void;
};

function MasterView({ clickProduct, selectedProductId }: Props) {
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
    <Grid2
      xs={12}
      sm={4}
      sx={{
        display: { xs: selectedProductId ? 'none' : 'flex', sm: 'flex' },
        flexDirection: 'column',
        height: 'inherit',
        overflowY: 'scroll',
        overflowX: 'hidden',
        padding: '3.2rem',
        rowGap: '1.6rem',
      }}
      className="master-view"
    >
      {products.map((product: Product) => (
        <ProductCard
          data={product}
          handleClick={clickProduct}
          key={product.id}
          selected={selectedProductId === product.id}
        />
      ))}
    </Grid2>
  );
}

export default MasterView;
