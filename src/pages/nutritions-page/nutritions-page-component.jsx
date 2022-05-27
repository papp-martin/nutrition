import React from 'react';
import { Route } from 'react-router-dom';
import ProductPage from '../product/product.component';


const NutritionsPage = ({ match }) => (
    <div className='products-page'>
        <Route path={`${match.path}/:productId`} component={ProductPage} />
    </div>
);

export default NutritionsPage;