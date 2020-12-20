import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity,
    TouchableHighlight,
    Platform , 
    ScrollView,
    Modal,
    TextInput
 } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';
import Context from '../utils/context';

// Home
const TaskScreen = ({route, navigation}) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [taskData, setTaskData] = useState(route.params.taskData);

    const context = useContext(Context);


    const chaneSettings = (currentSettings) => {
        //console.log(currentSettings)

        let changeSettings = Object.assign({}, taskData);
        //console.log(changeSettings.checkList)
        if(!changeSettings) return false
        changeSettings.checkList.requirement.editableSettings[currentSettings.index][currentSettings.name] = currentSettings.text;
        setTaskData(changeSettings)/**/
    }

    return(
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Start this task: {taskData.title}?  </Text>

                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}
                    >
                        <Text style={styles.textStyle}>Close</Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={{ ...styles.openButton, backgroundColor: "#4BA918" }}
                        onPress={() => {
                            //alert("start this task")
        
                            setModalVisible(!modalVisible);
                            taskData.startTime = new Date().getTime();
                            taskData.id = new Date().getTime();
                    
                            context.addUserTask(taskData)
                            navigation.navigate("Home")
                        }}
                    >
                        <Text style={styles.textStyle}>Start this task</Text>
                    </TouchableHighlight>
                </View>
                </View>
            </Modal>
            <Text style={{fontSize: 20}}>{taskData.title}</Text>
            <Text>{taskData.description}</Text>
            <View>
                { taskData.checkList.requirement.editableSettings.map((settings, index) => {
                    return(
                        <TaskSettings   
                            key={index} 
                            taskData={taskData} 
                            settings={settings}
                            chaneSettings={chaneSettings}
                            index={index}
                        />
                    )
                })}
                
            </View>
            <Button
                title="Take this task"
                color="#4BA918"
                onPress={() => {
                    //alert("Start task")
                    setModalVisible(true)
                }}
            />
        </View>
    )
}

const TaskSettings = ({taskData, settings, index, chaneSettings}) => {
   // console.log(settings)
    return(
        <View>
            <Text>{settings.description}</Text>
            <TextInput 
                style={{borderColor: "blue", borderBottomWidth: 2}}
                multiline
                onChangeText={text => chaneSettings({text, index, name: settings.name})}
                value={settings[settings.name].toString()}
                placeholder={"enter text"}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      minWidth: 200,
      margin: 5
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });

export default TaskScreen