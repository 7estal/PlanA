import { createPayloadActionCreator } from "../../shared/payload-action";

const ADD_TODO = 'todo/ADD_TODO';
const ADD_TODO_LIST = 'todo/ADD_TODO_LIST';
const TOGGLE_TODO_STATUS = 'todo/TOGGLE_TODO_STATUS';

export const addTodo = createPayloadActionCreator(ADD_TODO);
export const addTodoList = createPayloadActionCreator(ADD_TODO_LIST);
export const toggleTodoStatus = createPayloadActionCreator(TOGGLE_TODO_STATUS);

export const todoActions = {
    addTodo,
    addTodoList,
    toggleTodoStatus,
};

export const TODO_ACTION = {
    ADD_TODO,
    ADD_TODO_LIST,
    TOGGLE_TODO_STATUS,
};