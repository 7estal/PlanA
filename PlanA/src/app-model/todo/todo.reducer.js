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
                [newList.id]: [],
            };
        case TODO_ACTION.ADD_TODO:
            const newTodo = action.payload;
            state[newTodo.listId].push(newTodo);
            return {
                ...state,
                [newTodo.listId]: state[newTodo.listId],
            };
        case TODO_ACTION.TOGGLE_TODO:
            const { listId, itemIndex } = action.payload;
            const todo = state[listId][itemIndex];
            const updatedTodo = {
                ...todo,
                completed: !todo.completed,
            };
            state[listId][itemIndex] = updatedTodo;
            return {
                ...state,
                [listId]: state[listId],
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