import { ACTION_TYPE } from './action-type';
import * as apiWorkers from '../api_workers';

export const getAllAvailableNewsAction = currentNewsData => {
    return new Promise((resolve, reject) => {
        apiWorkers.getAvailebleNewsWorker(currentNewsData)
        .then(res => res.json())
        .then(res => {
            console.log(res, 'Response')

            resolve({
                type: ACTION_TYPE.LOAD_LAST_NEWS,
                payload: res.body
            });
        })
        .catch(err => console.error(err, 'Error has been occurd in Action getAllAvailableNewsAction'));
    }) 
}

export const getSingleNewsAction = newsData => {
    return({
        type: ACTION_TYPE.LOAD_SINGLE_NEWS,
        payload: newsData
    });
}

export const clickerAction = clickValue => {
    return({
        type: ACTION_TYPE.MAKE_CLICK,
        payload: clickValue
    })
}



export const getLocalNews = id => {
    return({
        type: ACTION_TYPE.GET_SINGLE_DATA_LOCAL,
        payload: id
    })
}