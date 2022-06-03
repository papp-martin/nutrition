import { createSelector } from "reselect";

const selectSummation = state => state.summation;

export const selectSummationProducts = createSelector(
    [selectSummation],
    summation => summation.summationProducts
);


export const selectSummationEnergyTotal = createSelector(
    [selectSummationProducts],
    summationProducts => summationProducts.reduce(
        (accumulatedQuantity, summationProduct) =>
            accumulatedQuantity + summationProduct.quantity * summationProduct.energia,
        0
    )
);