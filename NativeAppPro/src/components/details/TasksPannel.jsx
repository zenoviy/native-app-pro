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



const TasksPanel = ({navigation, context}) => {


    useEffect(() => { 
        console.log('Hook load')
    },[])

    const userTask = context.userData.userTask;  // currentTasks
    return(
        <View>
            <View style={{...styles.taskBlock}}>
                <UserStats navigation={navigation}></UserStats>
            </View> 
           <View style={{...styles.taskBlock}}>
                <Text>Your`s Tasks</Text>
                <View style={{...styles.taskBlockInner}}>
                { userTask ? userTask.currentTasks.map((task, index) => {
                    return(
                        <View key={index} style={{margin: 10,}}>
                            <TouchableOpacity 
                            onPress={() => {
                                navigation.navigate("Single Task", {currentTask: task, context: context})
                            }}
                            >
                                <TaskItem task={task} navigation={navigation} />
                            </TouchableOpacity>
                        </View>
                    )
                }) : null }  
                    <TouchableOpacity 
                        style={{
                            width: 40,
                            height: 40,
                            borderRadius: 50, 
                            borderWidth: 2, 
                            borderColor: "#bbb",
                            justifyContent: 'center',
                            alignItems: 'center',
                            margin: 10
                        }}
                        onPress={() => {
                            navigation.navigate("Create Task")
                        }}
                    >
                            
                        <MaterialIcons name="add" color={"#bbb"}  size={30} />    
                    </TouchableOpacity>            
                </View>
            </View> 
        </View> 
    )
}

const UserStats = ({navigation}) => {
    return(
        <View>
            <Text>User</Text>
            <Button
                title="user profile"
                onPress={() => navigation.navigate('User Profile')}
            ></Button>
        </View>
    )
}

const TaskItem = ({task, navigation}) => {
    return(
        <View>
            <Image 
                source={{uri: task.icon}}
                style={{
                    width: 40,
                    height: 40,
                    resizeMode: 'cover',
                    backgroundColor: "#FFF"
                }}/>
            <Text style={{fontSize: 10}}>
                {task.title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    taskBlock: {
        margin: 5,
        backgroundColor: "#fff",
        padding: 10,
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    taskBlockInner: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        margin: 5,
        fontSize: 10,
        flexWrap: "wrap"
    }
 })
export default TasksPanel