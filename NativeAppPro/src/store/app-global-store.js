import React, { useReducer, useEffect }  from 'react';
import Context from '../utils/context';
import  ACTIONS  from '../actions';

import TabBar from '../components/navigation/TabNavigation';

import * as ClickerReducer from '../reducers/clicker_reducers';
import * as NewsReducer from '../reducers/news_reducers'; 
import * as PhotoMakerReducer from '../reducers/photosReducers';
import * as TaskListReducer from '../reducers/taskListReducer';
import * as UserProfileReducer from '../reducers/userProfileReducer';

import GLOBAL_VARIABLES from '../global_variables/app_global_variables';


/*
    All Globall states around the App
*/
const AppGlobalState = () => {
    const [availableNews, getAvailebleNews] = useReducer( NewsReducer.AllAvailebleNewsReducer, NewsReducer.initialState );
    const [numberOfClicks, makeClick] = useReducer( ClickerReducer.AppClicker, ClickerReducer.initialState );
    const [makePhoto, setMakePhoto] = useReducer( PhotoMakerReducer.PhotoMakerReducer, PhotoMakerReducer.initialState );

    const [taskList, setTaskList] = useReducer(TaskListReducer.TaskListReducer, TaskListReducer.initialState);
    const [userData, setUserData] = useReducer(UserProfileReducer.UserProfileReducer, UserProfileReducer.initialState);

    const newsGetter = () => {
        //console.log(1)
        let newsData = {
            HOST: GLOBAL_VARIABLES.HOST,
            PORT: GLOBAL_VARIABLES.PORT,
            ALL_NEWS: GLOBAL_VARIABLES.ALL_NEWS,
            maxArticle: availableNews.newsAtThisSession.lastNews,
            minArticle: availableNews.newsAtThisSession.currentNews
        };
        let res = ACTIONS.getAllAvailableNewsAction(newsData)
        res.then(resolve => {
            getAvailebleNews(resolve)
        }, reject => {
            getAvailebleNews(reject)
        }).catch(err => console.error(`${err} Error has been occured in newsGetter Promise`));
    }


    const getLocalNews = (id) => {
        getAvailebleNews(ACTIONS.getLocalNews(id));
    }

    const createTaskNews = (taskNews) => {
        getAvailebleNews(ACTIONS.addTaskMessageToNews(taskNews))
    }

    const clickerMaker = () => {
        makeClick(ACTIONS.clickerAction())
    }


    const makePhotosState = (photosState) => {
       // console.log(photosState)
        setMakePhoto(ACTIONS.makePhotoState(photosState))
    }


    const getAllTaskList = () => {
        setTaskList(ACTIONS.getAllTaskList())
    }
    // Task
    const addUserTask = (task) => {
        setUserData(ACTIONS.addTaskToUserList(task))
    }
    const taskAddMedia = (media, id) => {
        setUserData(ACTIONS.addMediaToTask(media, id))
    }
    const completeUserTask = ({id, currentTask, type}) => {
        setUserData(ACTIONS.completeTask({id, currentTask, type}))
    }
    const finishUserTask = ({id, currentTask}) => {
        setUserData(ACTIONS.finishTheTask({id, currentTask}))
    }

    // user 
    // userAuthorization
    const authorizedUser = () => {
        setUserData(ACTIONS.userAuthorization())
    }

    useEffect(() => {
        authorizedUser()
        newsGetter()
        console.log("get news")
    }, [])
    //console.log("get news 1")
    return(
        <Context.Provider value={{
                availableNews,
                numberOfClicks,
                makePhoto,
                taskList,
                userData,
                clickerMaker: () => clickerMaker(),
                newsGetter: () => newsGetter(),
                getLocalNews: (id) => getLocalNews(id),
                makePhotosState: (state) => makePhotosState(state),
                getAllTaskList: () => getAllTaskList(),
                addUserTask: (task) => addUserTask(task),
                taskAddMedia: (media, id) => taskAddMedia(media, id),
                createTaskNews: (taskNews) => createTaskNews(taskNews),
                completeUserTask: ({id, currentTask, type}) => completeUserTask({id, currentTask, type}),
                finishUserTask: ({id, currentTask}) => finishUserTask({id, currentTask})
            }}>
            <TabBar />
        </Context.Provider>
    )

}
export default AppGlobalState