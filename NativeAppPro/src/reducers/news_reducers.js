import { ACTION_TYPE } from '../actions/action-type';
import itemDuplicateChecker from '../utils/checkDuplicateItem';
import searchSingleItem from '../utils/searchSingleItems';

export const initialState = {
    singlePost: null,
    currentNewsPosts: [],
    newsAtThisSession: {
        lastNews: 5,
        currentNews: 1,
        stepOfNewsPerScroll: 3
    }
}


export const AllAvailebleNewsReducer = ( store = initialState, action ) => {
    switch(action.type){
        case ACTION_TYPE.LOAD_LAST_NEWS:
            if(itemDuplicateChecker( action.payload, store.currentNewsPosts)) return store
            return {
                ...store,
                currentNewsPosts: store.currentNewsPosts.concat(action.payload) 
            }
        case ACTION_TYPE.GET_SINGLE_DATA_LOCAL:

            let foundNews = searchSingleItem({id: action.payload}, store.currentNewsPosts);

            console.log(foundNews, action.payload)
            if(!foundNews) return store;
            return {
                ...store,
                singlePost: foundNews
            }
        default: 
            return store
    }
}