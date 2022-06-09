import FOODS from "./nutritions.data"

const INITIAL_STATE = {
    products: FOODS
};

const nutritionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default nutritionsReducer;