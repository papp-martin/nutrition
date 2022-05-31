import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';

const ProductItem = ({ termek }) => {
    const { nev, energia, feherje, zsir, szenhidrat, imageUrl } = termek;
    return (
        <div className='product-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='item-details'>
                <div className='container'>
                    <p className='detail'>Energia: {energia} kcal</p>
                    <p className='detail'>Fehérje: {feherje} g</p>
                    <p className='detail'>Zsír: {zsir} g</p>
                    <p className='detail'>Szénhidrát: {szenhidrat} g</p>
                </div>
            </div>
            <div className='product-footer'>
                <span className='name'>{nev}</span>
            </div>
            <CustomButton inverted>Hozzáad</CustomButton>
        </div>
    );
};

export default ProductItem;