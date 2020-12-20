import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import Context from '../../utils/context';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';


const TaskSingleScreen = ({navigation, route}) => {
    const context = React.useContext(Context);
    // route.params.currentTask
    const currentTask = route.params.currentTask;


    const editableSettings = currentTask.checkList.requirement.editableSettings;
    const photoSettings = editableSettings.find(item => item.type === "photo")
    const dateOfTask = new Date(currentTask.startTime);

    const taskGallery = currentTask.attachedMedia;
    console.log(taskGallery, " <<< taskGallery")
    //const toDoes = 
    //console.log(context, "<<<")
    // taskAddMedia
    return(
        <View>
            <ScrollView>
               <Image 
                    source={{uri: currentTask.icon}}
                    style={{
                        width: "100%",
                        height: 250,
                        resizeMode: 'cover',
                        backgroundColor: "#FFF"
                    }}
                />
                <View>
                    <Text style={{ fontSize: 30}}>{currentTask.title}</Text>
                    <View style={{...styles.boxContainer}}>
                        <Text> {dateOfTask.getFullYear()} / {dateOfTask.getMonth()+1} / {dateOfTask.getDate()}</Text>
                    </View>
                    
                    <View> 
                        { editableSettings ? editableSettings.map((item, index) => {
                            return(
                                <View key={index} style={{...styles.boxContainer}}>
                                    <Text style={{
                                        fontSize: 20, 
                                        borderBottomWidth: 1, 
                                        borderColor: "#bbb",
                                        padding: 5}}>{item.description}</Text>
                                    <Text style={{
                                        paddingTop: 10
                                    }}>{item.endValue}</Text>
                                </View>
                            )
                        }) : null}
                    </View>
                    <Text> {currentTask.description}</Text>
                    <Text style={{ fontSize: 18}}> 
                        {currentTask.checkList.toDo.completePercent}% Complete
                    </Text>

                    <Button 
                        title={"Complete Task"}
                        onPress={() => { alert("Complete Task")}}
                    ></Button>
                </View>
                

                <View style={{...styles.boxContainer}}>
                    <Text style={{textAlign: 'center'}}>Prove Photos { taskGallery.length} of 
                    {photoSettings ? photoSettings.endValue : null}</Text>
                    <View style={{...styles.flexBox}}>
                        <View >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Camera-home", {
                                        mode: 'select photo', 
                                        context: context,
                                        currentTaskId: currentTask.id
                                    })
                                }}
                            >
                                <View style={{ 
                                    width: 150,
                                    height: 150,
                                    borderRadius: 10,
                                    
                                    borderColor: "#bbb",
                                    borderWidth: 2,
                                    alignContent: "center",
                                    alignItems:"center",
                                    justifyContent: "center"
                                }} 
                                >
                                    <MaterialIcons name="camera-alt" color={"#bbb"}  size={60} /> 
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: "60%", flex: 1, flexWrap: "wrap",}}>
                            { taskGallery.length ? taskGallery.map((photo, index) => {
                                console.log(photo.uri, " <<Photo")
                                return(
                                    <View style={{backgroundColor: "#bbb",margin: 3, width: 70, height: 70}}>
                                       <Image 
                                            source={{uri: photo.uri}}
                                            style={{
                                                flex: 1,
                                                width: 100+"%",
                                                
                                                height: 70,
                                                resizeMode: 'cover',
                                                backgroundColor: "#FFF"
                                            }}
                                        />
                                    </View>
                                )
                            }) : <EmptyPhotoBlocks /> 
                            }
                        </View>
                    </View>
                </View>
                <View style={{...styles.boxContainer}}>
                    <Text style={{textAlign: 'center'}}>Check List</Text>
                </View>
            </ScrollView>

        </View>
    )
}

const EmptyPhotoBlocks = () => {
    return(
        <View style={{
            ...styles.flexBox, 
            flexWrap: "wrap", 
            justifyContent: "space-between"
        }}>
            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>1</Text></View>
            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>2</Text></View>
            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>3</Text></View>

            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>4</Text></View>
            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>5</Text></View>
            <View style={{...styles.emptyPhotoBox}}>
                <Text style={{color: "#fff",}}>6</Text></View>
        </View>
    )
}


const styles = StyleSheet.create({ 
    boxContainer: {
        backgroundColor: "#fff",
        padding: 10,
        flex: 1,
        margin: 5
    },
    flexBox: {
        flex: 1,
        flexDirection: "row"
    },
    emptyPhotoBox: {
        width: 90/3+"%",
        height: 70,
        margin: 3,
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "#E4E4E4",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default TaskSingleScreen