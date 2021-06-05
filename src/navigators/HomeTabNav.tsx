import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens';
import NoteDetailScreen from '../screens/NoteDetailScreen';
import { Icon } from '@ui-kitten/components';
import { PRIMARY_COLOR } from '../data';


function HomeTabNav() {
    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName = 'browser-outline';
                    if (route.name === 'Notes') {
                        iconName = 'browser-outline';
                    } if (route.name === 'ToDo') {
                        iconName = 'checkmark-square-2-outline';
                    } if (route.name === 'Calendar') {
                        iconName = 'calendar-outline';
                    }
                    return <Icon
                        name={iconName}
                        fill={focused ? PRIMARY_COLOR : color}
                        style={{
                            height: size,
                            width: size
                        }}
                    />
                }
            })}
            tabBarOptions={{
                style: {
                }
            }}
        >
            <Tab.Screen
                name="Notes"
                component={HomeScreen}

            />
            <Tab.Screen
                name="ToDo"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Calendar"
                component={HomeScreen}
            />
        </Tab.Navigator>
    )
}

export default HomeTabNav;