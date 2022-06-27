import React from 'react';
import { connect } from 'react-redux';
import { clearProductFromSumm, quantityChange } from '../../redux/summation/summation.actions';
import './summary-product.styles.scss';


class SummaryProduct extends React.Component {
    constructor() {
        super();

        this.state = {
            quantity: 0
        };

    };

    handleChange = event => {
        this.setState({
            quantity: parseInt(event.target.value)
        });
    };


    render() {
    const { summationProduct, clearProduct, quantityChanging } = this.props;
    //var { name, imageUrl, energy, protein, fat, carbohydrate, quantity } = summationProduct;

    summationProduct.quantity = this.state.quantity;
    // this.state.quantity = quantity;

    return(
        <div>
            <div className='summation-product'>
                <div className='image-container'>
                    <img src={summationProduct.imageUrl} alt="product" />
                </div>
                <span className='name'>{summationProduct.name}</span>
                <span className='quantity'>
                    <input className='gramm-input' type="number" onChange={this.handleChange} onInput={() => quantityChanging()} max="1000" /> g
                </span>
                <div className='datas'>
                    <p className='data'>Energy: {summationProduct.energy} kcal</p>
                    <p className='data'>Protein: {summationProduct.protein} g</p>
                    <p className='data'>Fat: {summationProduct.fat} g</p>
                    <p className='data'>Carbohydrate: {summationProduct.carbohydrate} g</p>
                </div>
                <div className='clear-button' onClick={() => clearProduct(summationProduct)}>&#10005;</div>
            </div>
        </div>
    );
    };
};

const mapDispatchToProps = dispatch => ({
    clearProduct: oneProduct => dispatch(clearProductFromSumm(oneProduct)),
    quantityChanging: () => dispatch(quantityChange())
});

export default connect(null, mapDispatchToProps)(SummaryProduct);