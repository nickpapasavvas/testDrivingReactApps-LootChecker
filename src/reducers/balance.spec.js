import balanceReducer from './balance';
import * as constants from '../actions/constants';

describe('balanceReducer', () => {
    it('should set a balance', () => {
        const balance = 10;
        expect(balanceReducer(undefined,{type:constants.SET_BALANCE, balance}))
        .toEqual(balance)
    });
    it('should deposit into the balance', () => {
        const deposit = 10;
        const initialState = 5;
        expect(balanceReducer(5,{type:constants.DEPOSIT, deposit})).toEqual(initialState+deposit)
    });
    it('should withdraw from the balance', () => {
        const withdrawal = 5;
        const initialState = 10;
        expect(balanceReducer(10,{type:constants.WITHDRAW, withdrawal})).toEqual(initialState-withdrawal)
    });
});