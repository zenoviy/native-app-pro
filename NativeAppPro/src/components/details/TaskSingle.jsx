import React, { useState, useEffect, useRef, useReducer } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity, 
    ScrollView, InteractionManager } from 'react-native';
import Context from '../../utils/context';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';


import { 
    createNotificationPost 
} from '../../utils/completeTask';


const TaskSingleScreen = ({navigation, route}) => {
    const context = route.params.context//React.useContext(Context);
    const [seconds, setTimer] = useState(null);
    const currentTask = route.params.currentTask;

    const editableSettings = currentTask.checkList.requirement.editableSettings;
    const photoSettings = editableSettings.find(item => item.type === "photo")
    const dateOfTask = new Date(currentTask.startTime);

    const taskGallery = currentTask.attachedMedia;
    //checkMedia(currentTask)

    //completeTaskProcess(currentTask)
    useEffect(() => {
        completeTaskMethod()
    return () => context
    }, [])

    const completeTaskMethod = () => {
        context.completeUserTask({
            id: currentTask.id,
            currentTask: currentTask,
            type: "photo"
        });
        context.completeUserTask({
            id: currentTask.id,
            currentTask: currentTask,
            type: "time"
        })
    }
    
    return(
        <View>
            <ScrollView>
                <View>
                    <View style={{
                        flex: 1, 
                        justifyContent: "flex-start", 
                        flexDirection: "row", 
                        backgroundColor: "#fff"
                    }}>
                        <Image 
                            source={{uri: currentTask.icon}}
                            style={{
                                width: "50%",
                                height: 150,
                                resizeMode: 'cover',
                                backgroundColor: "#FFF"
                            }}
                        />
                        <View style={{
                            flex: 1, 
                            justifyContent: "flex-start", 
                            flexDirection: "column", 
                            padding: 5
                        }}>
                            <Text style={{ fontSize: 30}}>{currentTask.title}</Text>
                            <View style={{flex: 1, justifyContent: "space-between", flexDirection: "row"}}>
                                <Text> 
                                    {dateOfTask.getFullYear()} / {dateOfTask.getMonth()+1} / {dateOfTask.getDate()} 
                                </Text>
                                <Text>
                                    {dateOfTask.getHours()}:{dateOfTask.getMinutes()}:{dateOfTask.getSeconds()}
                                </Text>
                            </View>
                                
                            <Text> Rate: {currentTask.checkList.requirement.rate}</Text>
                            <Text> {currentTask.description}</Text>
                        </View> 
                    </View>
                    <Text>
                        Time to end: { <Timer 
                            seconds={seconds} 
                            setTimer={setTimer} 
                            currentTask={currentTask} 
                            context={context}/> 
                        }
                    </Text>
                    
                    <Text style={{ fontSize: 25, textAlign: "center", padding: 10}}> 
                        {currentTask.completePercent}% Complete
                    </Text>

                    <Button 
                        disabled={currentTask.completePercent === 100 ? false : true}
                        backgroundColor={currentTask.completePercent === 100 ? "#00CD00" : "#F6CD00"}
                        title={"Complete Task"}
                        onPress={() => { 
                            alert("Complete Task")
                            context.finishUserTask({id: currentTask.id, currentTask})
                            navigation.navigate("Home")
                             let notificationPost = createNotificationPost({taskData: currentTask, type: 'finish-task'})
                             context.createTaskNews(notificationPost)
                        }}
                    ></Button>   
                </View>
                

                <View style={{...styles.boxContainer}}>
                    <Text style={{textAlign: 'center'}}>Prove Media { taskGallery.length} of 
                    {photoSettings ? photoSettings.endValue : null}</Text>
                    <ScrollView 
                        horizontal={true} 
                        style={{
                            height: 150, 
                            flex: 1,
                            
                            }}>
                    <View style={{...styles.flexBox}}>
                        <View >
                            <TouchableOpacity
                                onPress={() => {
                                    navigation.navigate("Camera-home", {
                                        mode: 'select photo', 
                                        context: context,
                                        currentTaskId: currentTask.id,
                                        completeTaskMethod: completeTaskMethod
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
                       
                            { taskGallery.length ? taskGallery.map((photo, index) => {
                                return(
                                    <View key={index} style={{
                                        backgroundColor: "#bbb", 
                                        margin: 3, 
                                        width: 150, 
                                        height: 150
                                    }}>
                                       <Image 
                                            key={index}
                                            source={{uri: photo.uri}}
                                            style={{
                                                flex: 1,
                                                width: 100+"%",
                                                height: 100+"%",
                                                resizeMode: 'cover',
                                                backgroundColor: "#FFF"
                                            }}
                                        />
                                    </View>
                                )
                            }).concat(<EmptyPhotoBlocks galleryLength={photoSettings.endValue} currentPictures={taskGallery.length} />) 
                            : <EmptyPhotoBlocks galleryLength={photoSettings.endValue} /> 
                            }
                      
                    </View>
                    </ScrollView>
                </View>
                <View style={{...styles.boxContainer}}>
                    <Text style={{textAlign: 'center'}}>Check List</Text>
                    <View>
                    {editableSettings.map((taskStatus, index) => {    
                                if(!taskStatus.required) return null;
                                return(
                                    <View key={index} style={{
                                        flex: 1, 
                                        justifyContent: "space-between", 
                                        flexDirection: "row", 
                                        alignItems: "center"
                                        }}>
                                        <View style={  
                                            taskStatus.finish ? { ...styles.taskBody, ...styles.finishTask } 
                                            : { ...styles.taskBody, ...styles.unFinishTask } } />  
                                        <View />
                                        <Text>{taskStatus.finish ? "Complete" : "In Progress"}</Text>
                                        <Text>{taskStatus.descriptionInProgress}</Text>
                                        
                                        <Text>{taskStatus.endValue} {taskStatus.units? taskStatus.units : null }</Text>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </ScrollView>

        </View>
    )
} 


const EmptyPhotoBlocks = ({ galleryLength, currentPictures }) => {
    let mock = new Array(galleryLength).fill(null);
    return(
        <View style={{
            ...styles.flexBox, 
            flexWrap: "wrap", 
            justifyContent: "flex-start"
        }}>
            {mock.map((item, i) => {
                if(currentPictures && i < currentPictures){
                    return null
                }
                return(
                    <View key={i} style={{...styles.emptyPhotoBox}}>
                        <Text style={{color: "#fff",}}>{i + 1}</Text>
                    </View>  
                )
            })}
        </View>
    )
}

const Timer = ({seconds, setTimer, currentTask, context }) => {
    let startTime = currentTask.startTime;
    const editableSettings = currentTask.checkList.requirement.editableSettings;
    const timerSettings = editableSettings.find(item => item.type === "time");
    let duration = timerSettings.endValue;

    let currentTime = new Date().getTime();
    let endTime = startTime + ((duration* 1000) * 60 * 60) ;

    let timeToLeft = endTime - currentTime;
    let timeToLeftInSeconds = parseInt(timeToLeft/1000);
    let hours = parseInt(timeToLeftInSeconds/ 60 / 60); 
    let minutes = parseInt((timeToLeftInSeconds/60) - (hours*60)); 
    let sec = parseInt((timeToLeft - ((hours*60*60*1000) + (minutes*60*1000))) /1000);

    if(endTime > currentTime){

    }

    //console.log(timeToLeftInSeconds, timeToLeft, hours, minutes, sec)
    useEffect(() => {
        const timer = setInterval(() => {      
            setTimer(seconds + 1);   
        }, 1000);
        return () => clearInterval(timer);
    })
    return(
        <Text>{hours} : {minutes} : {sec ? sec : 60}</Text>
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
        width: 150,
        height: 150,
        margin: 3,
        borderRadius: 10,
        color: "#fff",
        backgroundColor: "#E4E4E4",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    finishTask: {
        backgroundColor: "#00ff00"
    },
    unFinishTask: {
        backgroundColor: "#ff0000"
    },
    taskBody: {
        width: 10,
        height: 10,
        margin: 10
    }
})

export default TaskSingleScreen