import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import './App.css';
import ProductCard from './components/ProductCard';

function App() {
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
    <Grid container spacing={2} sx={{ height: '95vh' }}>
      <Grid
        item
        xs={4}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 'inherit',
          overflow: 'scroll',
        }}
        className="master-view"
      >
        {products.map((product: { title: string }) => (
          <ProductCard data={product} />
        ))}
      </Grid>
      <Grid item xs={8} justifyContent="center">
        <div className="detail-view">Detail view</div>
      </Grid>
      {/* <Box sx={{ display: 'flex' }} className="product-list">
        products
      </Box>
      <div className="detail-view">Detail view</div> */}
    </Grid>
  );
}

export default App;
