import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import ProductCard from './ProductCard';
import { Product } from '../types';
import { useQuery } from 'react-query';
import { fetchAllProducts } from '../helperFunctions';
import { Box, CircularProgress } from '@mui/material';

type Props = {
  selectedProductId?: number;
  clickProduct: (id: number) => void;
};

function MasterView({ clickProduct, selectedProductId }: Props) {
  // get product data using react-query
  const {
    data: products,
    error,
    isLoading,
  } = useQuery('productsData', fetchAllProducts);

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <div>Error retrieving data</div>;

  return (
    <>
      {products.map((product: Product) => (
        <ProductCard
          data={product}
          handleClick={clickProduct}
          key={product.id}
          selected={selectedProductId === product.id}
        />
      ))}
    </>
  );
}

export default MasterView;
