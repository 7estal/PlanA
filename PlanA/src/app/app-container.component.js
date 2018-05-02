import React from 'react';
import { App } from './app.component';
import { configureStore } from './app-store.dependency';
import { commonActions } from "../common/app-model/common/common.action";
import { todoActions } from "../common/app-model/todo/todo.action";

const { store, persistor} = configureStore();

export const dispatchInitActions = dispatch => {
    const hasDefaultTodoList = !!store.getState().todo.todoLists;
    if (!hasDefaultTodoList) {
        const listName = 'Default';
        dispatch(todoActions.addTodoList(listName));
    }
    // dispatch(commonActions.appInit());
};

export const AppContainer = () => (
    <App store={ store }
         persistor={ persistor }
         initApp={() => dispatchInitActions(store.dispatch)}
    />
);