import React, { useContext } from 'react';

// Context
import { ShopContext } from '../context/ShopContext';

// React Router
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);
    return (
        <React.Fragment>
            <Link to={`/product/${id}`} className='text-gray-700 cursor-pointer'>
                <div className='overflow-hidden'>
                    <img className='hover:scale-110 transition ease-in-out' src={image[0]} alt='Product' />
                </div>
                <p className='pt-3 pb-1 text-sm'>{name}</p>
                <p className='font-medium text-sm'>{currency}{price}</p>
            </Link>
        </React.Fragment>
    )
}

export default ProductItem;