import React, { useEffect, useState } from 'react';
import './summary-product-for-test.styles.scss';

function SummaryProductForTest({ summationProduct, clearProduct, addProduct}) {
    const [quantity, setQuantity] = useState(0);

    const handleChange = () => {
        summationProduct.quantity = quantity;
        addProduct();
    }

    useEffect(() => {
      handleChange();
    }, [quantity])
    

  return (
        <div className='summation-product'>
            <div className='image-container'>
                <img src={summationProduct.imageUrl} alt="product" />
            </div>
            <span className='name'>{summationProduct.name}</span>
            <span className='quantity'>
                <input id='gramm-input' className='gramm-input' type="number" onChange={(event) => setQuantity(parseInt(event.target.value))} max="1000" /> g
            </span>
            <div className='datas'>
                <p className='data'>Energy: {summationProduct.energy} kcal</p>
                <p className='data'>Protein: {summationProduct.protein} g</p>
                <p className='data'>Fat: {summationProduct.fat} g</p>
                <p className='data'>Carbohydrate: {summationProduct.carbohydrate} g</p>
            </div>
                <div className='clear-button' onClick={() => clearProduct(summationProduct)}>&#10005;</div>
        </div>
    )
}

export default SummaryProductForTest