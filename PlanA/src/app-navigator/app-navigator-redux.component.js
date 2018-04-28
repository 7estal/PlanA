import React from 'react';
import { addNavigationHelpers } from 'react-navigation';
import { connect } from 'react-redux';

import { AppNavigator } from './app-navigator.component';

const mapStateToProps = state => ({
    nav: state.navigation.nav,
});

const mapDispatchToProps = dispatch => (
    Object.assign({dispatch: dispatch})
);

const AppWithNavigationState = ({ dispatch, nav}) => (
    <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav})}/>
);

export const AppNavigatorRedux = connect(mapStateToProps, mapDispatchToProps)(AppWithNavigationState);