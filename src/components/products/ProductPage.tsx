import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addItemToCart } from '../../features/cartSlice';
import { getSingleProduct } from '../../features/productsSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import loadingIcon from '../../icons/loadingIcon';
import { Product } from '../../features/productsSlice';
import LinkComponent from '../LinkComponent';
const ProductPage: React.FC = () => {
    let params = useParams();
    let navigate = useNavigate();
    const currentProductId = Number(params.id);
    const dispatch = useAppDispatch();
    const currentProduct = useAppSelector(
        (state) => state.products.currentProduct
    );
    const loadingStatus = useAppSelector((state) => state.products.loading);

    useEffect(() => {
        dispatch(getSingleProduct(currentProductId));
    }, [dispatch]);

    function handleAdditemInCart(product: Product) {
        dispatch(addItemToCart(product));
        toast.success('Товар добавлен в корзину', {
            position: 'bottom-right',
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
        });
    }

    return (
        <>
            {loadingStatus && (
                <div className='flex justify-center min-h-screen max-h-fit'>
                    {loadingIcon}
                </div>
            )}
            {currentProduct && (
                <div className='flex flex-col items-center px-5'>
                    <div className='flex flex-col md:flex-row lg:px-40 py-10 md:py-10  max-h-fit'>
                        <div className='h-[250px] w-full md:w-1/2 flex justify-center'>
                            <img
                                className='object-scale-down'
                                src={currentProduct.image}
                                alt={currentProduct.title}
                            />
                        </div>

                        <div className='w-full md:w-1/2 flex flex-col md:items-start'>
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
                                    handleAdditemInCart(currentProduct)
                                }
                                className='h-10 w-44 rounded-sm text-white bg-lime-500 hover:shadow-lg mb-4 mt-4 duration-300'
                            >
                                В корзину
                            </button>
                            <hr className='w-full mb-4' />
                            <p>{currentProduct.description}</p>
                        </div>
                    </div>
                    {/* <button
                        onClick={() => navigate(-1)}
                        className='h-10 w-44 rounded-sm text-white bg-lime-500 hover:bg-yellow-500 mb-4 mt-4'
                    >
                        Вернуться назад
                    </button> */}
                    <LinkComponent to='/' children='На главную' />
                </div>
            )}
        </>
    );
};

export default ProductPage;
