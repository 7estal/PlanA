import { combineEpics } from 'redux-observable';
import 'rxjs/add/operator/map';

import { commonActions, COMMON_ACTION } from "./common.action";
import { todoActions } from "../todo/todo.action";

export const appInitEpic = (actions, store) =>
    actions
        .ofType(COMMON_ACTION.APP_INIT)
        .map(() => store.getState().todo.initialized ?
            commonActions.empty() : todoActions.addDefaultTodoList());

export const commonEpic = combineEpics(
    appInitEpic,
);