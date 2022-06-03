import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SummaryProduct from '../../components/summation-product/summary-product.component';

import { 
    selectSummationProducts, 
    selectSummationEnergyTotal,
    selectSummationProteinTotal,
    selectSummationFatTotal,
    selectSummationCarboTotal 
} from '../../redux/summation/summation.selectors';
import './summary.styles.scss';

const SummaryPage = ({ summationProducts, totalEnergy, totalProtein, totalFat, totalCarbo}) => {
    const realtotalEnergy = totalEnergy/100;
    const realtotalProtein = totalProtein/100;
    const realtotalFat = totalFat/100;
    const realtotalCarbo = totalCarbo/100;
    return(
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
                <span>Tápértékek (100g)</span>
            </div>
            <div className='header-block'>
                <span>Eltávolít</span>
            </div>
        </div>
        {summationProducts.map(summationProduct => (
            <SummaryProduct key={summationProduct.id} summationProduct={summationProduct} />
        ))}
        <span className='totals'>BEVITT TÁPÉRTÉK ÖSSZESEN:</span>
        <p className='total'>Energia: {Math.round((realtotalEnergy + Number.EPSILON) * 100) / 100} kcal</p>
        <p className='total'>Fehérje: {Math.round((realtotalProtein + Number.EPSILON) * 100) / 100} g</p>
        <p className='total'>Zsír: {Math.round((realtotalFat + Number.EPSILON) * 100) / 100} g</p>
        <p className='total'>Szénhidrát: {Math.round((realtotalCarbo + Number.EPSILON) * 100) / 100} g</p>
    </div>
    )
};

const mapStateToProps = createStructuredSelector({
    summationProducts: selectSummationProducts,
    totalEnergy: selectSummationEnergyTotal,
    totalProtein: selectSummationProteinTotal,
    totalFat: selectSummationFatTotal,
    totalCarbo: selectSummationCarboTotal
});

export default connect(mapStateToProps)(SummaryPage);