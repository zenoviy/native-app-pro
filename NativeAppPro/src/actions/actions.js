import { ACTION_TYPE, TASK_ACTION_TYPE, USER_PROFILE } from './action-type';
import * as apiWorkers from '../api_workers';

import { newsDatabase } from '../mockData/newsDataDb';
import { taskList } from '../mockData/taskList';
import { profileData } from '../mockData/profileData';

export const getAllAvailableNewsAction = currentNewsData => {
    return new Promise((resolve, reject) => {
        resolve({
            type: ACTION_TYPE.LOAD_LAST_NEWS,
            payload: newsDatabase
        });  
        /*apiWorkers.getAvailebleNewsWorker(currentNewsData)
        .then(res => res.json())
        .then(res => {
            //console.log(res, 'Response')

            resolve({
                type: ACTION_TYPE.LOAD_LAST_NEWS,
                payload: res.body
            });  
        })
        .catch(err => {
             reject({
                type: ACTION_TYPE.LOAD_LAST_NEWS,
                payload: newsDatabase
            })
            console.error(err, 'Error has been occurd in Action getAllAvailableNewsAction')});
    }) */
    })
}

export const getSingleNewsAction = newsData => {
    return({
        type: ACTION_TYPE.LOAD_SINGLE_NEWS,
        payload: newsData
    });
}

export const addTaskMessageToNews = taskNews => {
    return({
        type: ACTION_TYPE.ADD_TASK_MESSAGE_TO_NEWS,
        payload: taskNews
    })
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


export const makePhotoState = state => {
    return({
        type: ACTION_TYPE.MAKE_PHOTO_STATE,
        payload: state
    })
}




/* Tasks */
export const getAllTaskList = state => {
    return({
        type: ACTION_TYPE.GET_ALL_TASKS,
        payload: taskList
    })
}
export const addTaskToUserList = task => {
    return({
        type: USER_PROFILE.ADD_USER_TASK,
        payload: task
    })
}
export const completeTask = ({id, currentTask, type}) => {
    return({
        type: USER_PROFILE.COMPLETE_TASK,
        payload: {id, currentTask, type}
    })
}
export const finishTheTask = ({id, currentTask}) => {
    return({
        type: USER_PROFILE.FINISH_THE_TASK,
        payload: {id, currentTask}
    })
}
export const addMediaToTask = (media, id) => {
    return({
        type: USER_PROFILE.ADD_PHOTO_TO_TASK,
        payload: {media, id}
    })
}
export const codingCodeTask = state => {
    return({
        type: TASK_ACTION_TYPE.CODING_CODE,
        payload: state
    })
}



/* User */

export const userAuthorization = () => {
    return({
        type: USER_PROFILE.AUTHORIZATION_USER,
        payload: profileData
    })
}
