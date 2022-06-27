import CartActionTypes from './summation.types';
import { addProductToSumm, removeProductFromSumm } from './summation.utils';

const INITIAL_STATE = {
    summationProducts: []
};

const summationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case CartActionTypes.ADD_PRODUCT:
            return {
                ...state,
                summationProducts: addProductToSumm(state.summationProducts, action.payload)
            };
        case CartActionTypes.QUANTITY_CHANGED:
            return {
                ...state,
                summationProducts: state.summationProducts
            };
        case CartActionTypes.CLEAR_PRODUCT_FROM_SUMM:
            return {
                ...state,
                summationProducts: state.summationProducts.filter(
                    summationProduct => summationProduct.id !== action.payload.id
                )
            };
        case CartActionTypes.REMOVE_PRODUCT:
            return {
                ...state,
                summationProducts: removeProductFromSumm(state.summationProducts, action.payload)
            };
        default:
            return state;
    }
};

export default summationReducer;