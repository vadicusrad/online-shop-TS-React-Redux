import React from 'react';
import { addItemToCart } from '../features/cartSlice';
import { useAppDispatch, useAppSelector } from '../hooks';
import ProductCard from './ProductCard';
import { Product } from '../features/productsSlice';

const ProductList: React.FC = () => {
    const allProducts = useAppSelector((state) => state.products.allProducts);
    const filteredByCategoryProducts = useAppSelector(
        (state) => state.products.filteredProducts
    );

    const dispatch = useAppDispatch();

    function handleDispath() {
        console.log('yo');
    }

    return (
        <ul>
            {filteredByCategoryProducts.length
                ? filteredByCategoryProducts.map((product) => {
                      return (
                          <li
                              onClick={() => dispatch(addItemToCart(product))}
                              key={product.id}
                          >
                              {product.title}
                          </li>
                      );
                  })
                : allProducts.map((product) => {
                      return (
                          <ProductCard
                              onClick={() => dispatch(addItemToCart(product))}
                              key={product.id}
                              {...product}
                          />
                      );
                  })}
        </ul>
    );
};

export default ProductList;
