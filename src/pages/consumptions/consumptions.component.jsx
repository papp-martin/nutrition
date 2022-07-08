import React from 'react'
import { useState } from 'react'
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { firestore } from '../../firebase/firebase.utils';
import './consumptions.styles.scss';
import { doc, deleteDoc } from 'firebase/firestore';

const ConsumptionPage = ({currentUser}) => {
  const [consumptions, setConsumptions] = useState([]);

  let userId = currentUser?.currentUser?.id;

  useEffect(() => {
    if(userId) {
      firestore.collection('users')
        .doc(`${userId}`)
        .collection('consumptions')
        .orderBy('time', 'desc')
        .onSnapshot((snapshot) => {
            setConsumptions(snapshot.docs.map((doc) => ({
              consumptionId: doc.id,
              consumption: doc.data()})));
        });
    }
  }, [userId]);

  const handleDelete = (id) => {
    try {
        deleteDoc(doc(firestore, `users/${userId}/consumptions`, id))
        setConsumptions((consumptions.filter((consumption) => consumption.id !== id)))
    } catch (error) {
        console.log(error);
    }
  };

  return (
    <div className='consumptions-page'>
      <div className='consumptions-header'>
        <div className='header-block'>
          <span>Day</span>
        </div>
        <div className='header-block'>
          <span>Energy (kcal)</span>
        </div>
        <div className='header-block'>
          <span>Protein (g)</span>
        </div>
        <div className='header-block'>
          <span>Fat (g)</span>
        </div>
        <div className='header-block'>
          <span>Carbohydrate (g)</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
        {
          currentUser ? 
          (consumptions.map(({consumptionId, consumption}) => (
            <div key={consumptionId} className='consumption-datas'>
              <span className='day'>{consumption.time?.toDate().toDateString()}</span>
              <span className='energy'>{Math.round((consumption.totalEnergy + Number.EPSILON) * 100) / 100}</span>
              <span className='protein'>{Math.round((consumption.totalProtein + Number.EPSILON) * 100) / 100}</span>
              <span className='fat'>{Math.round((consumption.totalFat + Number.EPSILON) * 100) / 100}</span>
              <span className='carbo'>{Math.round((consumption.totalCarbo + Number.EPSILON) * 100) / 100}</span>
              <span className='remove-button' onClick={() => handleDelete(consumptionId)}>&#10005;</span>
            </div>
          ))):
          (<div>SIGN IN TO SAVE YOUR CONSUMPTIONS</div>)
        }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(ConsumptionPage);