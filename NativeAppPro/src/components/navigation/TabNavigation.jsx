import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {MaterialIcons, MaterialCommunityIcons} from '@expo/vector-icons';

import * as StackNav from './Navigation';  //Navigation

const Tab = createMaterialBottomTabNavigator();

const TabBar = () => {
    return(
        <Tab.Navigator>
            <Tab.Screen 
            name="Home" 
            component={StackNav.NavigationStack}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color }) => (
                  <MaterialIcons name="home" color={color} size={27} />
                ),
            }}/>
            <Tab.Screen 
            name="Clicker" 
            component={StackNav.NavigationClicker}
            options={{
                tabBarLabel: 'Clicker',
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons name="cursor-default-click" color={color} size={27} />
                ),
            }}
            />
        </Tab.Navigator>
    )
}


export default TabBar



