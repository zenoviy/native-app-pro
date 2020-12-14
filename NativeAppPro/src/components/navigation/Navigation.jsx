import { Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Home';
import BlocksDesign from '../BlocksDesignTest';
import SingleNews from '../SinglePost';
import AppClicker from '../AppClicker';

 
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
                    name="SigleNews"
                    component={SingleNews}
                    options={{ title: 'News name' }, menuStyle}
                />
                <Stack.Screen 
                    name="BlocksDesign"
                    component={BlocksDesign}
                    options={{ title: 'Design test' }, menuStyle}
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
                  name="BlocksDesign"
                  component={BlocksDesign}
                  options={{ title: 'Design test' }, menuStyle}
              />
          </Stack.Navigator>

  )
}

