import { ACTION_TYPE, TASK_ACTION_TYPE, USER_PROFILE } from '../actions/action-type';

export const initialState = {
    taskList: []
}

export const TaskListReducer = ( store = initialState, action ) => {
    switch(action.type){
        case ACTION_TYPE.GET_ALL_TASKS:
            return {
                ...store,
                taskList: action.payload
            }
        case ACTION_TYPE.GET_SINGLE_TASKS:
            return store
       /* case USER_PROFILE.ADD_PHOTO_TO_TASK:
            let newTaskList = Object.assign({}, store.taskList)
            return {
                ...store,
            }*/
        case TASK_ACTION_TYPE.CODING_CODE: 
            return {
                ...store,
                taskList: store.taskList.concat(action.payload)
            }
        
        default:
            return store
    }
}