import React from 'react';
import { App } from './app.component';
import { configureStore } from './app-store.dependency';


export const dispatchInitActions = dispatch => {

};

const { store, persistor} = configureStore();

export const AppContainer = () => (
    <App store={ store }
         persistor={ persistor }
         initApp={() => dispatchInitActions(store.dispatch)}
    />
);