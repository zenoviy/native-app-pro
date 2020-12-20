import React, { useState, useEffect, useRef } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity,
    Platform , 
    ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Context from '../utils/context';

const TaskLIstScreen = ({navigation}) => {
    const context = React.useContext(Context);

    useEffect(() => {
        context.getAllTaskList()
    }, [])

    return(
        <View>
            <ScrollView>
                <Text>Task List</Text>
                {context.taskList.taskList.map((item, i) => {
                    return(
                        <TaskCard key={i} taskData={item} navigation={navigation}/>
                    )
                })}
            </ScrollView>
        </View>
    )
}

const TaskCard = ({ taskData, navigation }) => {
    return(
        <TouchableOpacity
        onPress={() => {
            navigation.navigate('Task screen', {taskData: taskData})
        }}
        >
            <View style={{
                flex: 1, 
                flexDirection: 'row', 
                backgroundColor: "#fff", 
                justifyContent: 'space-around',
                alignItems: "center",
                padding: 5,
                marginTop: 10
            }}>
                
                    <Image 
                        source={{uri: taskData.icon}}
                        style={{
                            width: 70,
                            height: 70,
                            resizeMode: 'cover',
                            backgroundColor: "#FFF"
                        }}
                    />
                    <View>
                        <Text style={{fontSize: 20}}>{taskData.title}</Text> 
                        <Text>{taskData.description}</Text>
                    </View>
                
            </View>
        </TouchableOpacity>
    )
}

export default TaskLIstScreen