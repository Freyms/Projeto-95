import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicos from 'react-native-vector-icons/Ionicos';
import Feed from '../screens/CreatePost';
import CreatePost from '../CreatePost';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator
            screenOptions = {({ route }) => ({
                tabBarIcon: ({ focused, color, size}) => {
                    let iconName;
                    if(route.name === 'Feed') {
                        iconName = focused
                        ? 'book'
                        :'book-outline';
                    } else if (route.name === 'CriarPost') {
                        iconName = focused ? 'create' : 'create-outline';
                    }
                    return <Ionicons name = {iconName} size = {size} color = {color} />;
                },
            })}
            tabBarOptions  = {{
                activeTintColor: 'tomato',
                ianctiveTintColor: 'gray',
            }}
         >
            <Tab.Screen name = 'Feed' component = {Feed} />
            <Tab.Screen name = 'CriarPost' component = {CriarPost} />
            </Tab.Navigator>
    );
}
export default BottomTabNavigator;