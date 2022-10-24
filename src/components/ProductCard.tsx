import React from 'react';
import { Product } from '../features/productsSlice';

const ProductCard: React.FC<Product> = ({ title, id }) => {
    return <div>{title}</div>;
};

export default ProductCard;
