import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { AppNavigatorRedux } from "../app-navigator";

export const App = ({ store, persistor, initApp }) => (
    <Provider store={store}>
        <PersistGate
            onBeforeLift={initApp}
            persistor={persistor}>
            <AppNavigatorRedux />
        </PersistGate>
    </Provider>
);