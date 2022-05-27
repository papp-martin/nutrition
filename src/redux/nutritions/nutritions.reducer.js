import TAPANYAGOK from "./nutritions.data"

const INITIAL_STATE = {
    products: TAPANYAGOK
};

const nutritionsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

export default nutritionsReducer;