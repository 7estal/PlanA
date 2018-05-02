// @flow

import { TODO_ACTION } from "./todo.action";
import { TodoListModel, TodoItemModel } from "./todo.model";
import type { TodoSlice, TodoList } from "./todo.model";

const initialState: TodoSlice = {
    todoLists: null,
};

const addTodoList = (name: string, state: TodoList) => {
    const newList = new TodoListModel(name);
    return {
        ...state,
        [newList.id]: newList,
    };
};

const addTodo = (todoItemData, todoLists) => {
    const { listId, itemName } = todoItemData;
    const oldTodoList = todoLists[listId];
    const oldTodoItems = oldTodoList.todoItems;
    const newTodoItem = new TodoItemModel(itemName, listId);
    const newTodoItems = {
        ...oldTodoItems,
        [newTodoItem.id]: newTodoItem,
    };
    const newTodoList = {
        ...oldTodoList,
        todoItems: newTodoItems,
    };
    return newTodoList;
};

export const todo = (state = initialState, action) => {
    switch (action.type) {
        case TODO_ACTION.ADD_TODO_LIST:
            return {
                todoLists: addTodoList(action.payload, state.todoLists),
            };
        case TODO_ACTION.ADD_TODO:
            const newTodoItemData = action.payload;
            const updatedTodoList = addTodo(newTodoItemData, state.todoLists);
            return {
                todoLists: {
                    ...state.todoLists,
                    [updatedTodoList.id]: updatedTodoList,
                }
            };
        case TODO_ACTION.TOGGLE_TODO_STATUS:
        default:
            return state;
    }
};