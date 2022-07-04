import NutritionActionTypes from "./nutritions.types";

const INITIAL_STATE = {
    products: null
};

const nutritionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case NutritionActionTypes.UPDATE_PRODUCTS:
            return {
                ...state,
                products: action.payload
            }
        default:
            return state;
    }
};

export default nutritionsReducer;