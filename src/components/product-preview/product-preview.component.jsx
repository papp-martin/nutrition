import React from 'react';
import ProductItem from '../product-item/product-item.component';
import './product-preview.styles.scss';

const ProductPreview = ({ cim, termekek }) => (
    <div className='product-preview'>
        <h1 className='title'>{cim}</h1>
        <div className='preview'>
            {termekek
            .filter((termek, idx) => idx < 4)
            .map(termek => (
                <ProductItem key={termek.id} termek={termek}/>
            ))}
        </div>
    </div>
);

export default ProductPreview;