import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity, 
    ScrollView } from 'react-native';

import Context from '../utils/context';


const UserProfileScreen = () => {
    const context = useContext(Context);
    const userProfile = context.userData.userProfile;
    const userTask = context.userData.userTask;  //currentTasks

    return(
        <View>
            <ScrollView>
                <Text>User Profile</Text>
                <Text style={{fontSize: 30}}>{context.userData ? userProfile.userName : null}</Text>
                <Text style={{fontSize: 20}}>{context.userData ? userProfile.userEmail : null}</Text>

                { userTask.currentTasks.length ? <Text>{userTask.currentTasks.length}</Text> : <Text>No Taskyet</Text> }
            </ScrollView>
            
        </View>
    )
}

export default UserProfileScreen
