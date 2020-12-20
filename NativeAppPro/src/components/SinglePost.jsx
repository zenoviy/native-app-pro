import React, { useContext, useEffect } from 'react';
import { View, Text, ImageBackground, ScrollView, useWindowDimensions } from 'react-native';
import globalStyle from './style/global-style'; 
import Context from '../utils/context';
import pageTextParser  from '../utils/pageParser';
import HTML from "react-native-render-html";


const SinglePost = ({ route, navigation }) => {
    const context = useContext(Context);
    
    useEffect(() => {
        context.getLocalNews(route.params.id)
    }, []);
    let contentWidth = useWindowDimensions().width;
    
    let singlePost = context.availableNews.singlePost;
    if(!singlePost ) return(<View style={globalStyle.container}><Text>Loading...</Text></View>)

    //console.log(singlePost.postBody.mainText)
    return(
        <View style={{...globalStyle.container}}>
            <ScrollView>
                <ImageBackground source={{ uri: singlePost.postBody.titleImage}} 
                style={{...globalStyle.image, ...globalStyle.singlePageHeader, justifyContent: "center"}}>
                    <Text style={{
                        alignSelf: "center",
                        color: "white",
                        width: "50%",
                        textAlign: "center",
                        fontWeight: "900",
                        
                    }}>Single News {route.params.id} {route.params.title}</Text>
                </ImageBackground>
                <View style={{padding: 20, backgroundColor: "#fff"}}>
                    <HTML
                        source={{ html: singlePost.postBody.mainText }} 
                        contentWidth={contentWidth} 
                    />
                </View>
                
            </ScrollView>
        </View>
    )
}
// <WebView source={{html: '<p>Here I am</p>'}} />
export default SinglePost