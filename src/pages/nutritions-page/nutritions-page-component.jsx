import React from 'react';
import { Route } from 'react-router-dom';
import ProductsOverview from '../../components/products-overview/products-overview.component';
import ProductPage from '../product/product.component';


const NutritionsPage = ({ match }) => (
    <div className='products-page'>
        <Route exact path={`${match.path}`} component={ProductsOverview} />
        <Route path={`${match.path}/:productId`} component={ProductPage} />
    </div>
);

export default NutritionsPage;