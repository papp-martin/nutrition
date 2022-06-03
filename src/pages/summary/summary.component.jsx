import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SummaryProduct from '../../components/summation-product/summary-product.component';

import { selectSummationProducts, selectSummationEnergyTotal } from '../../redux/summation/summation.selectors';
import './summary.styles.scss';

const SummaryPage = ({ summationProducts, totalEnergy }) => (
    <div className='summary-page'>
        <div className='summary-header'>
            <div className='header-block'>
                <span>Termék</span>
            </div>
            <div className='header-block'>
                <span>Név</span>
            </div>
            <div className='header-block'>
                <span>Mennyiség</span>
            </div>
            <div className='header-block'>
                <span>Tápértékek</span>
            </div>
            <div className='header-block'>
                <span>Eltávolít</span>
            </div>
        </div>
        {summationProducts.map(summationProduct => (
            <SummaryProduct key={summationProduct.id} summationProduct={summationProduct} />
        ))}
        <div className='total'>BEVITT ENERGIA ÖSSZESEN: {totalEnergy} kcal</div>
    </div>
);

const mapStateToProps = createStructuredSelector({
    summationProducts: selectSummationProducts,
    totalEnergy: selectSummationEnergyTotal
});

export default connect(mapStateToProps)(SummaryPage);