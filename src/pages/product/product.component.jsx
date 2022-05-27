import React from 'react';
import { connect } from 'react-redux';
import './product.styles.scss';
import ProductItem from '../../components/product-item/product-item.component';
import { selectProduct } from '../../redux/nutritions/nutritions.selectors';

const ProductPage = ({ product }) => {
    const { cim, termekek } = product;
    return (
        <div className='product-page'>
            <h2 className='title'>{cim.toUpperCase()}</h2>
            <div className='termekek'>
                {termekek.map(termek => (
                    <ProductItem key={termek.id} termek={termek} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    product: selectProduct(ownProps.match.params.productId)(state)
});

export default connect(mapStateToProps)(ProductPage);