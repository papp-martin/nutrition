import React from 'react';
import { connect } from 'react-redux'
import './products-page.styles.scss';
import { selectProduct } from '../../redux/nutritions/nutritions.selectors';
import ProductItem from '../../components/product-item/product-item.component';

const ProductsPage = ({ product }) => {
    const { cim, termekek } = product;
    return (
        <div className='products-page'>
            <h2>{cim}</h2>
            <div>
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

export default connect(mapStateToProps)(ProductsPage);