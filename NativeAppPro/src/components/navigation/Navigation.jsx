import { Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import BlocksDesign from '../BlocksDesignTest';
import SingleNews from '../SinglePost';
import AppClicker from '../AppClicker';
import CameraRollScreen from '../CameraScreen';
import ImagePickerScreen from '../ImagePicker';
import UserList from '../UserList';

import TaskLIstScreen from '../TaskList';
import TaskScreen from '../TaskScreen';
import UserProfileScreen from '../UserProfile';
import TaskSingleScreen from '../details/TaskSingle';

 
const Stack = createStackNavigator();

export const NavigationStack = ({navigation}) => {
    const menuStyle = { 
      headerStyle: {
        backgroundColor: '#5965BA',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
    return(
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen
                    name="Home"
                    component={Home}
                    options={{
                      title: 'My home',
                      headerStyle: {
                        backgroundColor: '#f4511e',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerRight: () => (
                        <Button
                          onPress={() => alert('This is a button!')}
                          title="Info"
                          color="#00cc00"
                        />
                      )
                    }}
                />
                <Stack.Screen 
                    name="Clicker"
                    component={AppClicker}
                    options={{ 
                      title: 'Clicker',
                      headerStyle: {
                        backgroundColor: '#bbb',
                      },
                      headerTintColor: '#fff',
                      headerTitleStyle: {
                        fontWeight: 'bold',
                      },
                      headerRight: () => (
                        <Button
                          onPress={() => alert('This is a button!')}
                          title="Info"
                          color="#00cc00"
                        />
                      ) }}
                />   
                
                <Stack.Screen 
                    name="User Profile"
                    component={UserProfileScreen}
                    options={{ ...menuStyle, title: 'User profile' }}
                />
                <Stack.Screen 
                    name="Single Task"
                    component={TaskSingleScreen}
                    options={{ ...menuStyle, title: 'Task' }}
                />
                <Stack.Screen 
                    name="User list"
                    component={UserList}
                    options={{...menuStyle, title: 'User List' }}
                />
                <Stack.Screen 
                    name="Camera-home"
                    component={CameraRollScreen}
                    options={{...menuStyle, title: 'Camera' }}
                />
                <Stack.Screen 
                    name="Image Picker"
                    component={ImagePickerScreen}
                    options={{...menuStyle, title: 'Image Picker' }}
                />
                <Stack.Screen 
                    name="SigleNews"
                    component={SingleNews}
                    options={{...menuStyle, title: 'News name' }}
                />
                <Stack.Screen 
                    name="BlocksDesign"
                    component={BlocksDesign}
                    options={{...menuStyle, title: 'Design test' }}
                />
            </Stack.Navigator>

    )
}
export const NavigationTask = () => {
  const menuStyle = { 
    headerStyle: {
      backgroundColor: '#5965BA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  return(
    <Stack.Navigator>
      <Stack.Screen 
        name="Create Task"
        component={TaskLIstScreen}
        options={{ 
          title: 'Create Task',
          headerStyle: {
            backgroundColor: '#3D3094',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => alert('This is a button!')}
              title="Info"
              color="#00cc00"
            />
          ) }} // TaskScreen
      />
      <Stack.Screen 
          name="Task screen"
          component={TaskScreen}
          options={{...menuStyle, title: 'Task screen' }}
        />
      <Stack.Screen 
          name="User list"
          component={UserList}
          options={{...menuStyle, title: 'User List' }}
        />
      <Stack.Screen 
          name="Camera-task"
          component={CameraRollScreen}
          options={{...menuStyle, title: 'Camera' }}
      />
    </Stack.Navigator>
  )
}


export const NavigationClicker = ({navigation}) => {
  const menuStyle = { 
    headerStyle: {
      backgroundColor: '#5965BA',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }
  return(
          <Stack.Navigator initialRouteName="Home">
              <Stack.Screen 
                  name="Clicker"
                  component={AppClicker}
                  options={{ 
                    ...menuStyle,
                    title: 'Clicker',
                    headerStyle: {
                      backgroundColor: '#bbb',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                    },
                    headerRight: () => (
                      <Button
                        onPress={() => alert('This is a button!')}
                        title="Info"
                        color="#00cc00"
                      />
                    ) }}
              />
              <Stack.Screen 
                name="Camera-clicker"
                component={CameraRollScreen}
                options={{...menuStyle, title: 'Camera' }}
              />
              <Stack.Screen 
                  name="BlocksDesign"
                  component={BlocksDesign}
                  options={{ ...menuStyle, title: 'Design test' }}
              />
          </Stack.Navigator>

  )
}

