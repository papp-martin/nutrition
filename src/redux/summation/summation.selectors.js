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
            accumulatedQuantity + summationProduct.quantity * summationProduct.energy,
        0
    )
);

export const selectSummationProteinTotal = createSelector(
    [selectSummationProducts],
    summationProducts => summationProducts.reduce(
        (accumulatedQuantity, summationProduct) =>
            accumulatedQuantity + summationProduct.quantity * summationProduct.protein,
        0
    )
);

export const selectSummationFatTotal = createSelector(
    [selectSummationProducts],
    summationProducts => summationProducts.reduce(
        (accumulatedQuantity, summationProduct) =>
            accumulatedQuantity + summationProduct.quantity * summationProduct.fat,
        0
    )
);

export const selectSummationCarboTotal = createSelector(
    [selectSummationProducts],
    summationProducts => summationProducts.reduce(
        (accumulatedQuantity, summationProduct) =>
            accumulatedQuantity + summationProduct.quantity * summationProduct.carbohydrate,
        0
    )
);