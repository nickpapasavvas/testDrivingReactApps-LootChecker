import * as constants from './constants';

export const setBalance = (balance)=>({
    balance,
    type: constants.SET_BALANCE
})