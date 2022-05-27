import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import ProductPreview from '../product-preview/product-preview.component';
import { selectProductsFor } from '../../redux/nutritions/nutritions.selectors';
import './products-overview.styles.scss';

const ProductsOverview = ({ products }) => (
    <div className='products-overview'>
        {products.map(({ id, ...otherProductProps }) =>(
            <ProductPreview key={id} {...otherProductProps} />
        ))}
    </div>
);

const mapStateToProps = createStructuredSelector({
    products: selectProductsFor
});

export default connect(mapStateToProps)(ProductsOverview);