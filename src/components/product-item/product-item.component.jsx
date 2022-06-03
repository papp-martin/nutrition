import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/summation/summation.actions';

const ProductItem = ({ termek, addProduct }) => {
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
            <CustomButton onClick={() => addProduct(termek)} inverted>Hozzáad</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addProduct: termek => dispatch(addProduct(termek))
});

export default connect(null, mapDispatchToProps)(ProductItem);