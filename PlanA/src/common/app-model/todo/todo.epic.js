import { combineEpics } from 'redux-observable';
import { TODO_ACTION } from "./todo.action";

export const addTodoListEpic = (actions) =>
    actions
        .ofType(TODO_ACTION.ADD_TODO_LIST)
        .switchMap(({payload}) => {
                const listId = Date.now();
                const newTodoList = {
                    id: listId,
                    name: payload.listName,
                    todoItems: {},
                    themeColor: '#',
                    deleted: false,
                }
            }
        );
