import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { todoActions, TODO_ACTION } from "./todo.action";
import {
    todoListPropsCreator,
    TodoListModel,
    TodoItemModel,
} from "./todo.model";
import {
    GREY,
    RED,
    GREEN,
    ORANGE,
    BLUE,
} from "../../shared/color";


const defaultTodoLists = [
    todoListPropsCreator('Default', GREY),
    todoListPropsCreator('Work', RED),
    todoListPropsCreator('Life', GREEN),
    todoListPropsCreator('Shopping', ORANGE),
    todoListPropsCreator('Development', BLUE),
];

export const addDefaultTodoListEpic = (actions) =>
    actions
        .ofType(TODO_ACTION.ADD_DEFAULT_TODO_LIST)
        .mergeMap(() =>
            defaultTodoLists.map(todoListProps =>
                todoActions.createTodoList(todoListProps))
        );

export const addTodoListEpic = (actions) =>
    actions
        .ofType(TODO_ACTION.CREATE_TODO_LIST)
        .map(({payload}) => new TodoListModel(payload))
        .map(todoActions.addTodoList);

export const addTodoEpic = (actions) =>
    actions
        .ofType(TODO_ACTION.CREATE_TODO)
        .map(({payload}) => new TodoItemModel(payload))
        .map(todoActions.addTodo);


export const todoEpic = combineEpics(
    addTodoEpic,
    addTodoListEpic,
    addDefaultTodoListEpic,
);