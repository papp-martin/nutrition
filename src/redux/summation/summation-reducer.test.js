import summationReducer from './summation.reducer';

it('should return the initial state', () => {
    expect(summationReducer(undefined, {})).toEqual({ summationProducts: []})
})