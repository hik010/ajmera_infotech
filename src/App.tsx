import React, { useState } from 'react';

import './App.css';
import DetailView from './components/DetailView';
import MasterView from './components/MasterView';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  const [selectedProduct, setSelectedProduct] = useState({});

  const clickProduct = (product: {}) => {
    setSelectedProduct(product);
  };
  return (
    <ThemeProvider theme={theme}>
      <Grid2 container spacing={2} sx={{ height: '95vh' }}>
        <MasterView clickProduct={clickProduct} />
        <DetailView selectedProduct={selectedProduct} />
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
