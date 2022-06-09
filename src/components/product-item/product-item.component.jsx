import React from 'react';
import CustomButton from '../custom-button/custom-button.component';
import './product-item.styles.scss';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/summation/summation.actions';

const ProductItem = ({ oneProduct, addProduct }) => {
    const { name, energy, protein, fat, carbohydrate, imageUrl } = oneProduct;
    return (
        <div className='product-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}} />
            <div className='item-details'>
                <div className='container'>
                    <p className='detail'>Energy: {energy} kcal</p>
                    <p className='detail'>Protein: {protein} g</p>
                    <p className='detail'>Fat: {fat} g</p>
                    <p className='detail'>Carbohydrate: {carbohydrate} g</p>
                </div>
            </div>
            <div className='product-footer'>
                <span className='name'>{name}</span>
            </div>
            <CustomButton onClick={() => addProduct(oneProduct)} inverted>Add</CustomButton>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    addProduct: oneProduct => dispatch(addProduct(oneProduct))
});

export default connect(null, mapDispatchToProps)(ProductItem);