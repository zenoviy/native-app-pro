import { ACTION_TYPE } from '../actions/action-type';

export const initialState = {
    numberOfClicks: 0
}

export const AppClicker = ( store = initialState, action ) => {
    switch(action.type){
        case ACTION_TYPE.MAKE_CLICK: 
            return {
                ...store,
                numberOfClicks: action.payload ?  store.numberOfClicks + action.payload : store.numberOfClicks + 1
            }
        default:
            return store
    }
}