import React from 'react';
import { App } from './app.component';
import { configureStore } from './app-store.dependency';
import { commonActions } from "../common/app-model/common/common.action";

const { store, persistor } = configureStore();

export const dispatchInitActions =
        dispatch => dispatch(commonActions.appInit());

export const AppContainer = () => (
    <App store={ store }
         persistor={ persistor }
         initApp={() => dispatchInitActions(store.dispatch)}
    />
);