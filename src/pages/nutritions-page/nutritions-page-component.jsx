import React from 'react';
import { Route } from 'react-router-dom';
import ProductPage from '../product/product.component';
import { firestore, convertProductsSnapshotToMap } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { updateNutritions } from '../../redux/nutritions/nutritions.actions';
import Spinner from '../../components/spinner/spinner.component';

const ProductPageWithSpinner = Spinner(ProductPage);

class NutritionsPage extends React.Component {
    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateNutritions } = this.props;
        const productRef = firestore.collection('products');

        this.unsubscribeFromSnapshot = productRef.onSnapshot(async snapshot => {
            const productsMap = convertProductsSnapshotToMap(snapshot);
            updateNutritions(productsMap);

            this.setState({ loading: false });
        });
    }

    render(){
        const { match } = this.props;
        const { loading } = this.state;
        return(
            <div className='products-page'>
                <Route path={`${match.path}/:productId`} render={(props) => <ProductPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
};

const mapDispatchToProps = dispatch => ({
    updateNutritions: productsMap => dispatch(updateNutritions(productsMap))
})

export default connect(null, mapDispatchToProps)(NutritionsPage);