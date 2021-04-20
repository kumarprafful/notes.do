import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import NoteDetailScreen from '../screens/NoteDetailScreen';
import HomeTabNav from './HomeTabNav';
import { DarkTheme, NavigationContainer } from '@react-navigation/native';

function NoteScreenStack() {
    const Stack = createStackNavigator();
    const theme = {
        ...DarkTheme,
        colors: {
            ...DarkTheme.colors,
            primary: 'rgb(255, 45, 85)',
            background: '#000',
        },
    };
    return (
        <NavigationContainer
            theme={theme}
        >
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
            >
                <Stack.Screen
                    name="Home"
                    component={HomeTabNav}
                />
                <Stack.Screen
                    name="Detail"
                    component={NoteDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NoteScreenStack;