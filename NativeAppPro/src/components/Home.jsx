import React, { useEffect, useContext} from 'react';
import { Text, View, Button, Image } from 'react-native';
import Context from '../utils/context';

import globalStyle from './style/global-style'; 
import NewsList from './News_list';


const Home = ({navigation}) => {
    const context = useContext(Context);
    let currentNewsPosts = context.availableNews.currentNewsPosts ? context.availableNews.currentNewsPosts : [];
    //context.newsGetter()
    return(
        <View style={ globalStyle.container}>
             <Text>Home Screen</Text>
            <Button 
                title="Go to clicker"
                onPress={() => navigation.navigate('Clicker')}
            />
            <View style={globalStyle.appBoard}>
                <NewsList currentNewsPosts={currentNewsPosts} navigation={navigation} />
            </View>
        </View>
    )
}



  

export default Home

