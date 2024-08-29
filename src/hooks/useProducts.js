import { useQuery } from 'react-query';
import { getProducts } from '../api';
export const useProducts = () => {
  return useQuery('products', getProducts);
};
