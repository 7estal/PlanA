import type { Id } from "../../shared/shared-types";
import { generateUniqueId } from "../../shared/utils";

export type TodoItem = {
    id: Id,
    listId: Id,
    title: string,
    completed: boolean,
};

export type TodoItemsMap = { +[id: Id]: TodoItem };

export type TodoList = {
    id: Id,
    name: string,
    todoItems: TodoItemsMap,
    themeColor: string,
    deleted: boolean,
};

export type TodoListsMap = { +[id: Id]: TodoList };

export type TodoSlice = {
    todoLists: TodoListsMap,
};

export function TodoListModel(listName: string) {
    this.name = listName;
    this.id = generateUniqueId();
    this.todoItems = {};
    this.themeColor = '#fe952b';
    this.deleted = false;
};

export function TodoItemModel(itemName: string, todoListId: string) {
    this.title = itemName;
    this.id = generateUniqueId();
    this.listName = todoListId;
    this.completed = false;
};