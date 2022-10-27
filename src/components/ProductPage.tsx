import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleProduct } from '../features/productsSlice';

import { useAppDispatch, useAppSelector } from '../hooks';

const ProductPage = () => {
    let params = useParams();
    const curenntProductId = Number(params.id);
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );

    useEffect(() => {
        dispatch(getSingleProduct(curenntProductId));
    }, [dispatch]);
    return (
        <>
            {currentProduct && (
                <div>
                    <h1>{currentProduct.title}</h1>
                </div>
            )}
        </>
    );
};

export default ProductPage;
