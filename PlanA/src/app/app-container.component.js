import React from 'react';
import { App } from './app.component';
import { configureStore } from './app-store.dependency';
import { todoActions } from "../common/app-model/todo/todo.action";
import {
    GREY,
    ORANGE,
    BLUE,
    GREEN,
    RED,
} from '../common/shared/color'

const { store, persistor} = configureStore();

export const dispatchInitActions = dispatch => {
    const hasDefaultTodoList = !!store.getState().todo.todoLists;
    if (!hasDefaultTodoList) {
        dispatch(todoActions.addTodoList({
            name: 'Default',
            themeColor: GREY,
        }));
        dispatch(todoActions.addTodoList({
            name: 'Work',
            themeColor: RED,
        }));
        dispatch(todoActions.addTodoList({
            name: 'Life',
            themeColor: GREEN,
        }));
        dispatch(todoActions.addTodoList({
            name: 'Shopping',
            themeColor: ORANGE,
        }));
        dispatch(todoActions.addTodoList({
            name: 'Development',
            themeColor: BLUE,
        }));
    }
    // dispatch(commonActions.appInit());
};

export const AppContainer = () => (
    <App store={ store }
         persistor={ persistor }
         initApp={() => dispatchInitActions(store.dispatch)}
    />
);