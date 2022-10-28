import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { addItemToCart } from '../features/cartSlice';
import { getSingleProduct } from '../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../hooks';

const ProductPage: React.FC = () => {
    let params = useParams();
    const curenntProductId = Number(params.id);
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );
    const loading = useAppSelector((state) => state.products.loading);
    console.log('loading ===', loading);
    useEffect(() => {
        dispatch(getSingleProduct(curenntProductId));
    }, [dispatch]);
    return (
        <>
            {currentProduct && (
                <div className='flex px-40 py-20 h-screen '>
                    <div className='w-1/2 flex justify-center'>
                        <img
                            className='h-1/2 '
                            src={currentProduct.image}
                            alt={currentProduct.title}
                        />
                    </div>

                    <div className='w-1/2 flex flex-col items-start'>
                        <span className='mb-2'>
                            {currentProduct.rating.rate}
                        </span>
                        <h1 className='font-bold text-2xl mb-2'>
                            {currentProduct.title}
                        </h1>
                        <span className='text-4xl font-thin mb-4'>
                            ${currentProduct.price}
                        </span>

                        <button
                            onClick={() =>
                                dispatch(addItemToCart(currentProduct))
                            }
                            className='h-10 w-44 rounded-sm text-white bg-yellow-600 hover:bg-yellow-500 mb-4'
                        >
                            В корзину
                        </button>
                        <hr className='w-full mb-4' />
                        <p>{currentProduct.description}</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default ProductPage;
