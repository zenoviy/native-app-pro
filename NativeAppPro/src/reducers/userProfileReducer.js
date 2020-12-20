import { ACTION_TYPE, TASK_ACTION_TYPE, USER_PROFILE } from '../actions/action-type';

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
            let newTaskList = Object.assign([], store.userTask.currentTasks)
            let currentTask = store.userTask.currentTasks.find(item => item.id == action.payload.id);

            let indexOfTask = store.userTask.currentTasks.indexOf(currentTask);
            console.log("Add Media", action.payload.id, indexOfTask, action.payload.media)
            newTaskList[indexOfTask].attachedMedia = newTaskList[indexOfTask].attachedMedia.concat(action.payload.media)

            console.log(newTaskList, '|||', )
            return {
                ...store,
                userTask: {
                    ...store.userTask,
                    currentTasks: newTaskList
                }
            }
        case USER_PROFILE.ADD_USER_TASK:{
            //console.log("<<<", store.userTask)
            return {
                ...store,
                userTask: {
                    ...store.userTask,
                    currentTasks: store.userTask.currentTasks.concat(action.payload)
                }
            }
        }
    }
    return store
}