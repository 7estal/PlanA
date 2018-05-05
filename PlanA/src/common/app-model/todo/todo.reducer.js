// @flow

import { combineReducers } from 'redux';
import { TODO_ACTION } from "./todo.action";

const initialized = (state = false, action) => {
    switch (action.type) {
        case TODO_ACTION.ADD_DEFAULT_TODO_LIST:
            return true;
        default:
            return state;
    }
};

const todoListData = (state = {}, action) => {
    switch (action.type) {
        case TODO_ACTION.ADD_TODO_LIST:
            const newList = action.payload;
            return {
                ...state,
                [newList.id]: newList,
            };
        default:
            return state;
    }

};

const todoItemsByListId = (state = {}, action) => {
    switch (action.type) {
        case TODO_ACTION.ADD_TODO_LIST:
            const newList = action.payload;
            return {
                ...state,
                [newList.id]: {},
            };
        case TODO_ACTION.ADD_TODO:
            const newTodo = action.payload;
            const todoItemsMap = state[newTodo.listId];
            const newTodoItemsMap = {
                ...todoItemsMap,
                [newTodo.id]: newTodo,
            };
            return {
                ...state,
                [newTodo.listId]: newTodoItemsMap,
            };


        default:
            return state;
    }
};

export const todo = combineReducers({
    initialized,
    todoListData,
    todoItemsByListId,
});