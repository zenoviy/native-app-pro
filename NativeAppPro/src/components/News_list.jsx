import React, {useContext} from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    FlatList, 
    Image, 
    TouchableOpacity ,ScrollView
} from 'react-native';
import globalStyle from './style/global-style'; 
import TasksPanel from './details/TasksPannel';

import Context from '../utils/context';


const NewsList = ({currentNewsPosts, navigation}) => {
    const context = useContext(Context);

    //console.log('>>', context)
    return(
        <View style={globalStyle.container}>
            <FlatList
                data={ currentNewsPosts}
                renderItem={ (item) => { return <Card data={item} navigation={navigation}  />}  }
                extra={"Extra"}
    
                ListHeaderComponent={() => <TasksPanel navigation={navigation} context={context} />}
                keyExtractor={item =>{ 
                    return item.id.toString()
                }}>

            </FlatList>

        </View>       
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
                    height: 250,
                    resizeMode: 'cover',
                    backgroundColor: "#FFF"
                }}
            />
                <View style={globalStyle.cardTextArea}>
                    <TouchableOpacity onPress={() => { 
                        navigation.navigate('SigleNews', {id: item.id, title: item.title})
                    }}>
                        <Text style={globalStyle.heading_4}>{item.title} </Text>
                        <Text style={{
                            alignSelf: "flex-end"
                        }}>Detail</Text>
                    </TouchableOpacity>
                </View>
        </View>
    )
}


export default NewsList