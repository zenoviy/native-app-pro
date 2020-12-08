import React, { useContext, useEffect } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { WebView } from 'react-native-webview';
import globalStyle from './style/global-style'; 
import Context from '../utils/context';
import pageTextParser  from '../utils/pageParser';


const SinglePost = ({ route, navigation }) => {
    const context = useContext(Context);
    
    useEffect(() => {
        context.getLocalNews(route.params.id)
    }, []);
    
    let singlePost = context.availableNews.singlePost;
    if(!singlePost ) return(<View style={globalStyle.container}><Text>Loading...</Text></View>)

    console.log(singlePost.postBody.mainText)
    return(
        <View style={globalStyle.container}>
            <ImageBackground source={{ uri: singlePost.postBody.titleImage}} 
            style={globalStyle.image, globalStyle.singlePageHeader}>
                <Text style={{
                    alignSelf: "center",
                    color: "white"
                }}>Single News {route.params.id} {route.params.title}</Text>
            </ImageBackground>

            <Text >{pageTextParser(singlePost.postBody.mainText)}</Text>
           
        </View>
    )
}
// <WebView source={{html: '<p>Here I am</p>'}} />
export default SinglePost