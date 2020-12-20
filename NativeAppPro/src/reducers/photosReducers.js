import { ACTION_TYPE } from '../actions/action-type';

export const initialState = {
    makePhoto: false
}

export const PhotoMakerReducer = ( store = initialState, action ) => {
    switch(action.type){
        case ACTION_TYPE.MAKE_PHOTO_STATE: 
            return {
                ...store,
                makePhoto: action.payload
            }
        default:
            return store
    }
}

// makePhotoState