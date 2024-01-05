import { Box, Typography } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';

import SelectedProduct from './SelectedProduct';

type Props = {
  selectedProduct: any;
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

function DetailView({ selectedProduct }: Props) {
  return (
    <Grid2
      xs={8}
      className="detail-view"
      display="flex"
      justifyContent="center"
    >
      {!Object.keys(selectedProduct).length && <EmptyView />}
      {selectedProduct && <SelectedProduct data={selectedProduct} />}
    </Grid2>
  );
}

export default DetailView;
