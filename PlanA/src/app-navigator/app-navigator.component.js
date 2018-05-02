import React from 'react';
import { StackNavigator } from 'react-navigation';
import { HomeScreenContainer as HomeScreen } from "../home-screen";

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