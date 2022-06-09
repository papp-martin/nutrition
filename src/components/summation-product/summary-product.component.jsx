import React from 'react';
import { connect } from 'react-redux';
import { clearProductFromSumm, addProduct, removeProduct } from '../../redux/summation/summation.actions';
import './summary-product.styles.scss';

const SummaryProduct = ({ summationProduct, clearProduct, addProduct, removeProduct }) => {
    const { name, imageUrl, energy, protein, fat, carbohydrate, quantity } = summationProduct;
    return(
    <div className='summation-product'>
        <div className='image-container'>
            <img src={imageUrl} alt="product" />
        </div>
        <span className='name'>{name}</span>
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
            <p className='data'>Energy: {energy} kcal</p>
            <p className='data'>Protein: {protein} g</p>
            <p className='data'>Fat: {fat} g</p>
            <p className='data'>Carbohydrate: {carbohydrate} g</p>
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