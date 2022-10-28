import React from 'react';
import {
    changeCartItemCounterDown,
    changeCartItemCounterUp,
    deleteItemFromCart,
} from '../features/cartSlice';
import { CartItem } from '../features/cartSlice';
import { useAppDispatch } from '../hooks';

const CartListItem: React.FC<CartItem> = ({
    title,
    price,
    image,
    id,
    counter,
}) => {
    const dispatch = useAppDispatch();

    return (
        <div className='p-4 w-full h-32  relative flex  '>
            <span
                className='absolute right-8 top-3 cursor-pointer text-slate-500'
                onClick={() => dispatch(deleteItemFromCart(id))}
            >
                x
            </span>
            <img className='w-20 mr-8' src={image} alt={title} />
            <div className='flex flex-col justify-between'>
                <h2 className='font-bold text-xl '>{title}</h2>
                <p className='text-yellow-600 '>${price}</p>
                <div className='bg-yellow-600 h-7 w-24 text-white flex justify-between rounded-sm'>
                    <button
                        onClick={() => dispatch(changeCartItemCounterUp(id))}
                        className='h-full w-1/3 bg-yellow-600 hover:bg-yellow-500 rounded-l-sm'
                    >
                        +
                    </button>
                    <span className='w-1/3  flex justify-center items-center'>
                        {counter}
                    </span>
                    <button
                        onClick={() => dispatch(changeCartItemCounterDown(id))}
                        className='h-full w-1/3 bg-yellow-600 hover:bg-yellow-500 rounded-r-sm'
                    >
                        -
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartListItem;

//
//         <span
//
//         >
//             One minus
//         </span>
//     </Cart>
// );
// }
