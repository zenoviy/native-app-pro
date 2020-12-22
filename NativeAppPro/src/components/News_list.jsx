import React, {useContext, useCallback, useState} from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    FlatList, 
    Image, 
    TouchableOpacity ,ScrollView,
    RefreshControl
} from 'react-native';
import globalStyle from './style/global-style'; 
import TasksPanel from './details/TasksPannel';
import Context from '../utils/context';


const NewsList = ({currentNewsPosts, navigation}) => {
    const context = useContext(Context);
    const [refreshing, setRefreshing] = useState(false)


    const wait = async (miliseconds) => {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(true)
            }, miliseconds)
        }) 
    }
    const onRefresh = useCallback(() => {
        //console.log('Refresh 3')
        setRefreshing(true);
        context.newsGetter()
        wait(2000).then(() => {
            //console.log('Then')
            setRefreshing(false)
        });
    }, [])
    return(
        <View style={{...globalStyle.container}}>
            <FlatList
                
                data={ currentNewsPosts}
                renderItem={ (item) => { return <Card data={item} navigation={navigation} context={context}  />}  }
                extra={"Extra"}
                ListHeaderComponent={() => <TasksPanel navigation={navigation} context={context} />}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                  }
                keyExtractor={item =>{ 
                    return item.id.toString()
                }}>
            </FlatList>
       </View>
    )
}

const Card = ({data, navigation, context}) => {
    let item = data.item;
    if(!item) return(<Text>No News Yet...</Text>)
    return(
        <View  key={item.id} style={{
                ...globalStyle.card, 
                backgroundColor: (item.type === 'finish-task') ? "#91C0FC": "#fff"
            }}>  

            {
                item.type === "start-new-task" ?
                <Image 
                    source={{uri: item.postBody.titleImage}}
                    style={{
                        flex: 1,
                        width: 150,
                        height: 50,
                        alignSelf: "center",
                        resizeMode: 'contain',
                        backgroundColor: "#FFF"
                    }}
                />  : 
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
            } 
                { item.type === "start-new-task" ? <Text style={{
                    position: "absolute", 
                    width: "100%", 
                    textAlign: "center", 
                    paddingTop: 20}}> You just started {item.title}</Text> :
                    item.type === 'finish-task' ? <Text style={{
                        position: "absolute", 
                        width: "100%", 
                        textAlign: "center",
                        fontSize: 20, 
                        paddingTop: 20}}> Congratulation You just finis th {item.title} task</Text> :  null
                }

                { <PostSocialPanel navigation={navigation} item={item} context={context}/>}
        </View>
    )
}


const PostSocialPanel = ({ item, navigation, context }) => {
    return(
        <View style={globalStyle.cardTextArea}>
                    <TouchableOpacity onPress={() => { 
                        navigation.navigate('SigleNews', {id: item.id, title: item.title})
                    }}>
                        <Text style={{}}>{item.title} </Text>
                    </TouchableOpacity>  
                    
                    <View style={{
                            flex: 1, 
                            justifyContent: "space-between", 
                            alignItems: "center", 
                            flexDirection: "row", 
                            marginTop: 20,
                            borderColor: "#bbb",
                            borderTopWidth: 1,

                            paddingTop: 10
                        }}>

                        <Text style={{
                           // alignSelf: "flex-end"
                        }} 
                        onPress={() => {
                           
                            alert("Like")
                        }}> Like</Text>

                        <Text style={{
                           // alignSelf: "flex-end"
                        }} 
                        onPress={() => {
                            alert("Comments")
                        }}> Comment</Text>
                        
                        <Text style={{
                            //alignSelf: "flex-end"
                        }}
                        onPress={() => {
                            alert("Share")
                        }}
                        >Share</Text>

                         <Text style={{
                           // alignSelf: "flex-end"
                        }} 
                        onPress={() => {
                            item.type === "start-new-task" ?
                            navigation.navigate('SigleNews', {id: item.id, title: item.title})
                            //navigation.navigate("Single Task", {currentTask: item.taskData, context: context})
                            : navigation.navigate('SigleNews', {id: item.id, title: item.title})

                            //
                        }}
                        >Detail</Text>
                    </View>
                </View>
    )
}


export default NewsList