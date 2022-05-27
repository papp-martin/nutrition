import React from 'react';
import './product-item.styles.scss';

const ProductItem = ({ termek }) => {
    const { nev } = termek;
    return (
        <div className='product-item'>
            <span>{nev}</span>
        </div>
    );
};

export default ProductItem;