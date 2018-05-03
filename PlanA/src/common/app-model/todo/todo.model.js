import { generateUniqueId } from "../../shared/utils";

export type CreateTodoListProps = {
    name: string,
    themeColor: ?string,
};

export function TodoListModel(todoListProps: CreateTodoListProps) {
    const { name, themeColor } = todoListProps;
    this.id = generateUniqueId();
    this.name = name;
    this.themeColor = themeColor || '#fe952b';
    this.deleted = false;
};

export type CreateTodoProps = {
    name: string,
    listId: string,
};

export function TodoItemModel(todoProps: CreateTodoProps) {
    const { name, listId } = todoProps;
    this.id = generateUniqueId();
    this.name = name;
    this.listId = listId;
    this.completed = false;
};