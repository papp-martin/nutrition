import SummationActionTypes from './summation.types';
import { addProductToSumm } from './summation.utils';

const INITIAL_STATE = {
    summationProducts: []
};

const summationReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SummationActionTypes.ADD_PRODUCT:
            return {
                ...state,
                summationProducts: addProductToSumm(state.summationProducts, action.payload)
            };
        case SummationActionTypes.CLEAR_PRODUCT_FROM_SUMM:
            return {
                ...state,
                summationProducts: state.summationProducts.filter(
                    summationProduct => summationProduct.id !== action.payload.id
                )
            };
        case SummationActionTypes.CLEAR_SUMMATION:
            return {
                ...state,
                summationProducts: []
            };
        default:
            return state;
    }
};

export default summationReducer;