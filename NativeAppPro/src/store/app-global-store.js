import React, { useReducer, useEffect }  from 'react';
import Context from '../utils/context';
import  ACTIONS  from '../actions';

import TabBar from '../components/navigation/TabNavigation';

import * as ClickerReducer from '../reducers/clicker_reducers';
import * as NewsReducer from '../reducers/news_reducers'; 

import GLOBAL_VARIABLES from '../global_variables/app_global_variables';


/*
    All Globall states around the App
*/
const AppGlobalState = () => {
    const [availableNews, getAvailebleNews] = useReducer( NewsReducer.AllAvailebleNewsReducer, NewsReducer.initialState );
    const [numberOfClicks, makeClick] = useReducer( ClickerReducer.AppClicker, ClickerReducer.initialState );


    const newsGetter = () => {
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
        }).catch(err => console.error(`${err} Error has been occured in newsGetter Promise`));
    }


    const getLocalNews = (id) => {
        getAvailebleNews(ACTIONS.getLocalNews(id));
    }

    const clickerMaker = () => {
        makeClick(ACTIONS.clickerAction())
    }




    useEffect(() => {
        newsGetter()
    }, [])
    return(
        <Context.Provider value={{
                availableNews,
                numberOfClicks,
                clickerMaker: () => clickerMaker(),
                newsGetter: () => newsGetter(),
                getLocalNews: (id) => getLocalNews(id)
            }}>
            <TabBar />
        </Context.Provider>
    )

}
export default AppGlobalState