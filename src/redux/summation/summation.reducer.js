import CartActionTypes from './summation.types';
import { addProductToSumm } from './summation.utils';

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
        default:
            return state;
    }
};

export default summationReducer;