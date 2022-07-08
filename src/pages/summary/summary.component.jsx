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
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { firestore } from '../../firebase/firebase.utils';
import firebase from 'firebase/compat/app';

const SummaryPage = ({ summationProducts, totalEnergy, totalProtein, totalFat, totalCarbo, currentUser }) => {
    const realtotalEnergy = totalEnergy/100;
    const realtotalProtein = totalProtein/100;
    const realtotalFat = totalFat/100;
    const realtotalCarbo = totalCarbo/100;

    let userId = currentUser?.currentUser?.id;

    const upload = () => {
        if(realtotalEnergy === 0 && realtotalProtein === 0 && realtotalFat === 0 && realtotalCarbo === 0) {
            alert('Firstly you have to calculate your consumptions!');
        } else {
            firestore.collection('users').doc(`${userId}`).collection('consumptions').add({
                time: firebase.firestore.FieldValue.serverTimestamp(),
                totalEnergy: realtotalEnergy,
                totalProtein: realtotalProtein,
                totalFat: realtotalFat,
                totalCarbo: realtotalCarbo,
                id: Math.floor(Math.random() * 1000) + 1
            });
            alert('Added to my consumptions!');
        }
    };

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
        {
            (summationProducts.length !== 0) ?
            (summationProducts.map(summationProduct => (
                <SummaryProduct key={summationProduct.id} summationProduct={summationProduct} />
            ))):
            (<div>Add products to calculate your consumptions</div>)
        }
        <CustomButton onClick={() => window.location.reload(false)}>Calculate</CustomButton>
        <div className='total-count'>
            <span className='totals'>TOTAL NUTRITIONAL VALUE:</span>
            <p className='total'>Energy: {Math.round((realtotalEnergy + Number.EPSILON) * 100) / 100} kcal</p>
            <p className='total'>Protein: {Math.round((realtotalProtein + Number.EPSILON) * 100) / 100} g</p>
            <p className='total'>Fat: {Math.round((realtotalFat + Number.EPSILON) * 100) / 100} g</p>
            <p className='total'>Carbohydrate: {Math.round((realtotalCarbo + Number.EPSILON) * 100) / 100} g</p>
        </div>
        {
            currentUser ?
            (<CustomButton onClick={upload}>Add to my consumptions</CustomButton>)
            :
            (null)
        }
        
    </div>
    );
};


const mapStateToProps = createStructuredSelector({
    summationProducts: selectSummationProducts,
    totalEnergy: selectSummationEnergyTotal,
    totalProtein: selectSummationProteinTotal,
    totalFat: selectSummationFatTotal,
    totalCarbo: selectSummationCarboTotal,
    currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(SummaryPage);