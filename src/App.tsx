import React, { useState } from 'react';

import './App.css';
import DetailView from './components/DetailView';
import MasterView from './components/MasterView';
import Grid2 from '@mui/material/Unstable_Grid2/Grid2';
import { ThemeProvider } from '@mui/material';
import theme from './theme';

function App() {
  const [selectedProductId, setSelectedProductId] = useState<
    number | undefined
  >(undefined);

  const clickProduct = (id: number) => {
    setSelectedProductId(id);
  };

  const deselectProduct = () => {
    setSelectedProductId(undefined);
  };

  return (
    <ThemeProvider theme={theme}>
      <Grid2 container spacing={2} sx={{ height: '100vh', margin: 0 }}>
        <MasterView
          clickProduct={clickProduct}
          selectedProductId={selectedProductId}
        />
        <DetailView productId={selectedProductId} deselectProduct={deselectProduct}/>
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
