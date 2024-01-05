import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import ProductCard from './ProductCard';
import { Product } from '../types';
import { useQuery } from 'react-query';
import { fetchAllProducts } from '../helperFunctions';

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

  if (isLoading) return <div>Fetching product info...</div>;
  if (error) return <div>Error retrieving data</div>;

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
