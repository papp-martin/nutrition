import React from 'react';
import './homepage.styles.scss';
import { Route } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';
import ProductsPage from '../products-page/products-page-component';

const HomePage = ({ match }) => (
    <div className='homepage'>
        <Directory />
        <Route path={`${match.path}:productId`} component={ProductsPage} />
    </div>
);
export default HomePage;