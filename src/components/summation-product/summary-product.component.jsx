import React from 'react';
import { connect } from 'react-redux';
import { clearProductFromSumm, quantityChange } from '../../redux/summation/summation.actions';
import './summary-product.styles.scss';
import SummaryProductForTest from './summary-productForTest.component';


class SummaryProduct extends React.Component {
    render() {
        return <SummaryProductForTest {...this.props}/>
    };
};

const mapDispatchToProps = dispatch => ({
    clearProduct: oneProduct => dispatch(clearProductFromSumm(oneProduct)),
    quantityChanging: () => dispatch(quantityChange())
});

export default connect(null, mapDispatchToProps)(SummaryProduct);