import React from 'react';
import { StackNavigator, DrawerNavigator } from 'react-navigation';
import { HomeScreen } from "../home-screen";

const stackNavigatorConfigDefault = {
    headerMode: 'none',
    navigationOptions: {
        gesturesEnabled: false,
    },
    cardStyle: {
        backgroundColor: 'white',
    },
};

export const AppNavigator = StackNavigator(
    {
        Home: {
            screen: HomeScreen,
        },
    },
    stackNavigatorConfigDefault
);