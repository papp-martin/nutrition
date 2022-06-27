import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import SummaryProduct from '../../components/summation-product/summary-product.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import { 
    selectSummationProducts, 
    selectSummationEnergyTotal,
    selectSummationProteinTotal,
    selectSummationFatTotal,
    selectSummationCarboTotal 
} from '../../redux/summation/summation.selectors';
import './summary.styles.scss';

const SummaryPage = ({ summationProducts, totalEnergy, totalProtein, totalFat, totalCarbo }) => {
    const realtotalEnergy = totalEnergy/100;
    const realtotalProtein = totalProtein/100;
    const realtotalFat = totalFat/100;
    const realtotalCarbo = totalCarbo/100;
    return(
    <div className='summary-page'>
        <div className='summary-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Name</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Nutritions</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {summationProducts.map(summationProduct => (
            <SummaryProduct key={summationProduct.id} summationProduct={summationProduct} />
        ))}
        <CustomButton onClick={() => window.location.reload(false)}>Summ</CustomButton>
        <div className='total-count'>
            <span className='totals'>TOTAL NUTRITIONAL VALUE:</span>
            <p className='total'>Energy: {Math.round((realtotalEnergy + Number.EPSILON) * 100) / 100} kcal</p>
            <p className='total'>Protein: {Math.round((realtotalProtein + Number.EPSILON) * 100) / 100} g</p>
            <p className='total'>Fat: {Math.round((realtotalFat + Number.EPSILON) * 100) / 100} g</p>
            <p className='total'>Carbohydrate: {Math.round((realtotalCarbo + Number.EPSILON) * 100) / 100} g</p>
        </div>
    </div>
    );
};


const mapStateToProps = createStructuredSelector({
    summationProducts: selectSummationProducts,
    totalEnergy: selectSummationEnergyTotal,
    totalProtein: selectSummationProteinTotal,
    totalFat: selectSummationFatTotal,
    totalCarbo: selectSummationCarboTotal
});

export default connect(mapStateToProps)(SummaryPage);