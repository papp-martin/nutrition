import NutritionActionTypes  from './nutritions.types';

export const updateNutritions = (productsMap) => ({
    type: NutritionActionTypes.UPDATE_PRODUCTS,
    payload: productsMap
});