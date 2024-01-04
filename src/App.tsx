import React, { useState } from 'react';

import './App.css';
import DetailView from './components/DetailView';
import MasterView from './components/MasterView';
import { Grid } from '@mui/material';

function App() {
  const [selectedProduct, setSelectedProduct] = useState({});

  const clickProduct = (product: {}) => {
    setSelectedProduct(product);
  };

  return (
    <Grid container spacing={2} sx={{ height: '95vh' }}>
      <MasterView clickProduct={clickProduct} />
      <DetailView selectedProduct={selectedProduct} />
    </Grid>
  );
}

export default App;
