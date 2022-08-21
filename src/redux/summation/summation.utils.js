export const addProductToSumm = (summationProducts, productToSumm) => {
    if(productToSumm == null) {
        return [...summationProducts]
    }
         
    return [...summationProducts, { ...productToSumm, quantity: 0 }];
};