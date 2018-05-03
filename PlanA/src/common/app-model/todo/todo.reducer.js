// @flow

import { combineReducers } from 'redux';
import { TODO_ACTION } from "./todo.action";
import { TodoListModel, TodoItemModel } from "./todo.model";

const todoListData = (state = {}, action) => {

    switch (action.type) {
        case TODO_ACTION.ADD_TODO_LIST:
            const todoListProps = action.payload;
            const newList = new TodoListModel(todoListProps);
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

        case TODO_ACTION.ADD_TODO:
            const todoProps = action.payload;
            const newTodo = new TodoItemModel(todoProps);
            const todoItemsMap = state[newTodo.listId] || {};
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
    todoListData,
    todoItemsByListId,
});