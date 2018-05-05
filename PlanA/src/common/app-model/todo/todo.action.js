import { createPayloadActionCreator } from "../../shared/payload-action";

const CREATE_TODO = 'todo/CREATE_TODO';
const CREATE_TODO_LIST = 'todo/CREATE_TODO_LIST';

const ADD_TODO = 'todo/ADD_TODO';
const ADD_TODO_LIST = 'todo/ADD_TODO_LIST';
const ADD_DEFAULT_TODO_LIST = 'todo/ADD_DEFAULT_TODO_LIST';

const TOGGLE_TODO_STATUS = 'todo/TOGGLE_TODO_STATUS';

export const createTodo = createPayloadActionCreator(CREATE_TODO);
export const createTodoList = createPayloadActionCreator(CREATE_TODO_LIST);

export const addTodo = createPayloadActionCreator(ADD_TODO);
export const addTodoList = createPayloadActionCreator(ADD_TODO_LIST);
export const addDefaultTodoList = createPayloadActionCreator(ADD_DEFAULT_TODO_LIST);

export const toggleTodoStatus = createPayloadActionCreator(TOGGLE_TODO_STATUS);

export const todoActions = {
    addTodo,
    addTodoList,
    addDefaultTodoList,
    createTodo,
    createTodoList,
    toggleTodoStatus,
};

export const TODO_ACTION = {
    ADD_TODO,
    ADD_TODO_LIST,
    ADD_DEFAULT_TODO_LIST,
    CREATE_TODO,
    CREATE_TODO_LIST,
    TOGGLE_TODO_STATUS,
};