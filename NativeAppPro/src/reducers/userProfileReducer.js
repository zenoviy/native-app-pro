import { ACTION_TYPE, TASK_ACTION_TYPE, USER_PROFILE } from '../actions/action-type';
import { completeTaskProcess, percentCount } from '../utils/completeTask';

export const initialState = {
    userProfile: {
        id: null,
        userName: null,
        userEmail: null,
        password: null,
        avatar: null,
    },
    userTask: {
        currentTasks: [],
        completeTasks: []
    }
}

export const UserProfileReducer = ( store = initialState, action ) => {

    switch(action.type){
        case USER_PROFILE.AUTHORIZATION_USER:
            return {
                ...store,
                userProfile: action.payload
            }
        case USER_PROFILE.ADD_PHOTO_TO_TASK:
            let newCurrentTasks =  store.userTask.currentTasks.slice();
            let currentTask = newCurrentTasks.find(item => item.id == action.payload.id);
            let indexOfTask = newCurrentTasks.indexOf(currentTask);
            newCurrentTasks[indexOfTask].attachedMedia = newCurrentTasks[indexOfTask].attachedMedia.concat(action.payload.media)
            console.log(indexOfTask, store.userTask, newCurrentTasks)
            return {
                ...store,
                userTask: {
                    ...store.userTask,
                    currentTasks: newCurrentTasks
                }
            }
        case USER_PROFILE.COMPLETE_TASK:
            completeTaskProcess(action)
            percentCount(action)
            return {
                ...store
            }
        case USER_PROFILE.ADD_USER_TASK:
            let newTask = Object.assign({}, action.payload);
            return {
                ...store,
                userTask: {
                    ...store.userTask,
                    currentTasks: store.userTask.currentTasks.concat(newTask)
                }
            }
        case USER_PROFILE.FINISH_THE_TASK:
            console.log("complete task")
            let finishingTask = store.userTask.currentTasks.find(item => item.id === action.payload.id)
            let indexOfFinishingTask = store.userTask.currentTasks.indexOf(finishingTask);

            let newFinishedTask = Object.assign([], store.userTask.currentTasks);
            newFinishedTask.splice(indexOfFinishingTask, 1);
            return {
                ...store,
                userTask: {
                    ...store.userTask,
                    currentTasks: newFinishedTask,
                    completeTasks: store.userTask.completeTasks.concat(action.payload.currentTask)
                }
            }
        default:
            return store
        
    }
    return store
}