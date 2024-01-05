import { Box, CircularProgress, Typography } from '@mui/material';

import SelectedProduct from './SelectedProduct';
import { fetchSingleProduct } from '../helperFunctions';
import { useQuery } from 'react-query';

type Props = {
  productId: any;
  deselectProduct: () => void;
};

const EmptyView = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      rowGap="1.6rem"
      width="50%"
    >
      <Typography variant="purple" fontSize="1.6rem">
        Nothing to display...
      </Typography>
      <Typography fontSize="3.6rem" fontWeight="600" lineHeight="4.4rem">
        Select an item to display
      </Typography>
      <Typography
        variant="description"
        fontSize="2rem"
        textAlign="center"
        pt="1.2rem"
      >
        Select an item from the master view to display details in the detail
        view.
      </Typography>
    </Box>
  );
};

function DetailView({ productId, deselectProduct }: Props) {
  const {
    data: product,
    error,
    isLoading,
  } = useQuery(['detailData', productId], () => fetchSingleProduct(productId));

  /* show empty view when no product is selected */
  if (!productId) return <EmptyView />;

  if (isLoading)
    return (
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <CircularProgress />
      </Box>
    );
  if (error) return <div>An error occurred.</div>;

  return (
    <>
      {Object.keys(product).length > 0 && (
        <SelectedProduct
          data={product}
          handleClickBackArrow={deselectProduct}
        />
      )}
    </>
  );
}

export default DetailView;
