import { persistStore, persistCombineReducers } from 'redux-persist';
import storage from 'redux-persist/es/storage';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createEpicMiddleware, combineEpics } from 'redux-observable';

import { configureEpicDependencies } from './app-epic.dependency';
import { appReducers } from "../app-model/index.reducer";
import {
    commonEpic,
    todoEpic,
} from "../app-model/index.epic";

const createAppEpic = () => combineEpics(
    commonEpic,
    todoEpic,
);

const config = {
    key: 'plan-a-persist',
    storage,
    version: 1,
    whitelist: ['_persist', 'todo'],
    debug: true,
};

export function configureStore() {
    const middlewares = [
        createEpicMiddleware(createAppEpic(), {
            dependencies: configureEpicDependencies(),
        }),
    ];
    const middlewareEnhancer = applyMiddleware(...middlewares);
    const enhancers = composeWithDevTools(middlewareEnhancer);
    const reducer = persistCombineReducers(config, appReducers);

    const store = createStore(reducer, enhancers);
    const persistor = persistStore(store);

    return { persistor, store };
}
