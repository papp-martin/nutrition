import React from 'react';
import { connect } from 'react-redux';
import { addProduct, clearProductFromSumm } from '../../redux/summation/summation.actions';
import './summary-product.styles.scss';
import SummaryProductForTest from './summary-productForTest.component';


class SummaryProduct extends React.Component {
    render() {
        return <SummaryProductForTest {...this.props}/>
    };
};

const mapDispatchToProps = dispatch => ({
    addProduct: () => dispatch(addProduct()),
    clearProduct: oneProduct => dispatch(clearProductFromSumm(oneProduct)),
});

export default connect(null, mapDispatchToProps)(SummaryProduct);