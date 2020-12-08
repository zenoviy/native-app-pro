import { Text } from 'react-native';
import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import NewsList from './News_list';
import SingleNews from './SinglePost';
import AppClicker from './AppClicker';
 
const Stack = createStackNavigator();

const Navigation = ({navigation}) => {
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
                    name="Home"
                    component={Home}
                    options={{ title: 'Home' }, menuStyle}
                />
                <Stack.Screen 
                    name="Clicker"
                    component={AppClicker}
                    options={{ title: 'Clicker' }, menuStyle}
                />
                <Stack.Screen 
                    name="SigleNews"
                    component={SingleNews}
                    options={{ title: 'News name' }, menuStyle}
                />
            </Stack.Navigator>

    )
}



export default Navigation