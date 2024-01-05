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
          <MasterView
            clickProduct={clickProduct}
            selectedProductId={selectedProductId}
          />
        </Grid2>

        <Grid2
          className="detail-view"
          xs={12}
          sm={8}
          sx={{
            // hide detail view if no product is selected in mobile view
            display: { xs: selectedProductId ? 'flex' : 'none', sm: 'flex' },
          }}
          justifyContent="center"
        >
          <DetailView
            productId={selectedProductId}
            deselectProduct={deselectProduct}
          />
        </Grid2>
      </Grid2>
    </ThemeProvider>
  );
}

export default App;
