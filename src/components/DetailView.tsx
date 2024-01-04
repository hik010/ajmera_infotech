import { Box, Grid, Typography } from '@mui/material';
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
    >
      <Typography fontSize="16px" color="#6941C6">
        Nothing to display...
      </Typography>
      <Typography fontSize="36px">Select an item to display</Typography>
      <Typography fontSize="20px" textAlign="center">
        Select an item from the master view to display details in the detail
        view.
      </Typography>
    </Box>
  );
};

function DetailView({ selectedProduct }: Props) {
  return (
    <Grid item xs={8} justifyContent="center" className="detail-view">
      {!Object.keys(selectedProduct).length && <EmptyView />}
      {selectedProduct && <SelectedProduct data={selectedProduct} />}
    </Grid>
  );
}

export default DetailView;
