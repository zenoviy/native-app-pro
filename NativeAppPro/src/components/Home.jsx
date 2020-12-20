import React, { useEffect, useContext} from 'react';
import { Text, View, Button, Image, ScrollView } from 'react-native';
import Context from '../utils/context';

import globalStyle from './style/global-style'; 
import NewsList from './News_list';
import TasksPanel from './details/TasksPannel';


const Home = ({navigation}) => {
    const context = useContext(Context);
    let currentNewsPosts = context.availableNews.currentNewsPosts ? context.availableNews.currentNewsPosts : [];
    //context.newsGetter()
    return(
        <View style={ globalStyle.container}>    
            <View style={globalStyle.appBoard}>
                <NewsList currentNewsPosts={currentNewsPosts} navigation={navigation} />
            </View>
        </View>
    )
}

export default Home

