import * as constants from './constants';

export const setBalance = (balance)=>({
    balance,
    type: constants.SET_BALANCE
})

export const deposit = deposit =>{
    return {
        type: constants.DEPOSIT,
        deposit
    }
}

export const withdraw = withdrawal =>{
    return {
        type: constants.WITHDRAW,
        withdrawal
    }
}