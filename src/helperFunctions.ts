import axios from 'axios';

export const fetchAllProducts = async () => {
  const response = await axios.get('https://fakestoreapi.com/products/');
  return response.data;
};

export const fetchSingleProduct = async (id: string) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1);
};
