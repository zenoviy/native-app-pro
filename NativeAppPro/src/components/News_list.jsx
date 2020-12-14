import React from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    FlatList, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import globalStyle from './style/global-style'; 

const NewsList = ({currentNewsPosts, navigation}) => {
    return(
        <SafeAreaView style={globalStyle.container}>
            <Text>News Screen</Text>
            <FlatList
                data={ currentNewsPosts}
                renderItem={ (item) => { return <Card data={item} navigation={navigation}  />}  }
                extra={"Extra"}
                keyExtractor={item =>{ 
                    return item.id.toString()
                }}>

            </FlatList>
        </SafeAreaView>       
    )
}

const Card = ({data, navigation}) => {
    let item = data.item;
    if(!item) return(<Text>No News Yet...</Text>)
    return(
        <View  key={item.id} style={globalStyle.card}>   
            <Image 
                source={{uri: item.postBody.titleImage}}
                style={{
                    flex: 1,
                    width: "100%",
                    height: null,
                    resizeMode: 'cover',
                    backgroundColor: "#FFF"
                }}
            />
                <View style={globalStyle.cardTextArea}>
                    <TouchableOpacity onPress={() => { 
                        navigation.navigate('SigleNews', {id: item.id, title: item.title})
                    }}>
                    <Text style={globalStyle.heading_2}>{item.title} </Text>
                    <Text style={{
                        alignSelf: "flex-end"
                    }}>Detail</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}


export default NewsList