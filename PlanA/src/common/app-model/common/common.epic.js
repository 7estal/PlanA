import { Observable } from 'rxjs/Observable';
import { combineEpics } from 'redux-observable';
import { COMMON_ACTION } from "./common.action";
import { todoActions } from "../todo/todo.action";

export const appInitEpic = (actions, store) =>
    actions
        .ofType(COMMON_ACTION.APP_INIT)
        .map(() => {
                const hasDefaultTodoList = !!store.getState().todo;
                if (!hasDefaultTodoList) {
                    const listName = 'Default';
                    return todoActions.addTodoList(listName);
                } else {
                    return Observable.empty();
                }
            }
        );

export const commonEpic = combineEpics(

);