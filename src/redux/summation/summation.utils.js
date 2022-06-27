export const addProductToSumm = (summationProducts, productToSumm) => {
    const existingSummationProduct = summationProducts.find(
        summationProduct => summationProduct.id === productToSumm.id
    );

    // if (existingSummationProduct) {
    //     return summationProducts.map(summationProduct => 
    //         summationProduct.id === productToSumm.id
    //         ? { ...summationProduct, quantity: summationProduct.quantity + 10 }
    //         : summationProduct
    //     );
    // }

    return [...summationProducts, { ...productToSumm, quantity: 0 }];
};

export const removeProductFromSumm = (summationProducts, summationProductToRemove) => {
    const existingSummationProduct = summationProducts.find(
        summationProduct => summationProduct.id === summationProductToRemove.id
    );

    if (existingSummationProduct.quantity === 10) {
        return summationProducts.filter(summationProduct => summationProduct.id !== summationProductToRemove.id);
    }

    return summationProducts.map(summationProduct => 
        summationProduct.id === summationProductToRemove.id
        ? { ...summationProduct, quantity: summationProduct.quantity - 10 }
        : summationProduct
    );
};