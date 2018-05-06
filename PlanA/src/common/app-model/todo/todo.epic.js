import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/mergeMap';
import { todoActions, TODO_ACTION } from "./todo.action";
import {
    todoListProps,
    todoItemPropsWithIndex,
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
    todoListProps('Default', GREY),
    todoListProps('Work', RED),
    todoListProps('Life', GREEN),
    todoListProps('Shopping', ORANGE),
    todoListProps('Development', BLUE),
];

const getNewTodoItemIndex = (state, listId) =>
    state.todo.todoItemsByListId[listId].length;

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

export const addTodoEpic = (actions, store) =>
    actions
        .ofType(TODO_ACTION.CREATE_TODO)
        .map(({payload}) => {
            const { name, listId } = payload;
            const itemIndex = getNewTodoItemIndex(store.getState(), listId);
            return todoItemPropsWithIndex(name, listId, itemIndex)
        })
        .map((props) => new TodoItemModel(props))
        .map(todoActions.addTodo);


export const todoEpic = combineEpics(
    addTodoEpic,
    addTodoListEpic,
    addDefaultTodoListEpic,
);