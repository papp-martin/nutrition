import React from 'react';
import './summary-product.styles.scss';

const SummaryProduct = ({ summationProduct }) => {
    const { nev, imageUrl, energia, feherje, quantity } = summationProduct;
    return(
    <div className='summation-product'>
        <div className='image-container'>
            <img src={imageUrl} alt="termék" />
        </div>
        <span className='name'>{nev}</span>
        <span className='quantity'>
            <span className='value'>{quantity}</span>
        </span>
        <span className='data'>Energia: {energia} kcal</span>
    </div>
    );
};

export default SummaryProduct;