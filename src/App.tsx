import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Grid } from '@mui/material';

import './App.css';
import ProductCard from './components/ProductCard';
import SelectedProduct from './components/SelectedProduct';

function App() {
  // State to store the fetched product data
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState({});

  const fetchAllProducts = async () => {
    try {
      const response = await axios.get('https://fakestoreapi.com/products/');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const clickProduct = (product: {}) => {
    setSelectedProduct(product);
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
        {products.map((product: { title: string; id: string }) => (
          <ProductCard
            data={product}
            handleClick={clickProduct}
            key={product.id}
          />
        ))}
      </Grid>
      <Grid item xs={8} justifyContent="center" className="detail-view">
        {selectedProduct && <SelectedProduct data={selectedProduct} />}
      </Grid>
    </Grid>
  );
}

export default App;
