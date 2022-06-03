import React from 'react';
import { connect } from 'react-redux';
import { clearProductFromSumm, addProduct, removeProduct } from '../../redux/summation/summation.actions';
import './summary-product.styles.scss';

const SummaryProduct = ({ summationProduct, clearProduct, addProduct, removeProduct }) => {
    const { nev, imageUrl, energia, feherje, zsir, szenhidrat, quantity } = summationProduct;
    return(
    <div className='summation-product'>
        <div className='image-container'>
            <img src={imageUrl} alt="termék" />
        </div>
        <span className='name'>{nev}</span>
        <span className='quantity'>
            <div className='arrow' onClick={() => removeProduct(summationProduct)}>
                &#10094;
            </div>
            <span className='value'>{quantity} g</span>
            <div className='arrow' onClick={() => addProduct(summationProduct)}>
                &#10095;
            </div>
        </span>
        <div className='datas'>
            <p className='data'>Energia: {energia} kcal</p>
            <p className='data'>Fehérje: {feherje} g</p>
            <p className='data'>Zsír: {zsir} g</p>
            <p className='data'>Szénhidrát: {szenhidrat} g</p>
        </div>
        <div className='clear-button' onClick={() => clearProduct(summationProduct)}>&#10005;</div>
    </div>
    );
};

const mapDispatchToProps = dispatch => ({
    clearProduct: termek => dispatch(clearProductFromSumm(termek)),
    addProduct: termek => dispatch(addProduct(termek)),
    removeProduct: termek => dispatch(removeProduct(termek))
});

export default connect(null, mapDispatchToProps)(SummaryProduct);