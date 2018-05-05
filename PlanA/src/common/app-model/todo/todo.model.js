import { generateUniqueId } from "../../shared/utils";
import { ORANGE } from "../../shared/color";

export const todoListPropsCreator = (name, themeColor) => ({
    name,
    themeColor,
});

export function TodoListModel(todoListProps) {
    const { name, themeColor } = todoListProps;
    this.id = generateUniqueId();
    this.name = name;
    this.themeColor = themeColor || ORANGE;
    this.deleted = false;
};

export const todoPropsCreator = (name, listId) => ({
    name,
    listId,
});

export function TodoItemModel(todoProps) {
    const { name, listId } = todoProps;
    this.id = generateUniqueId();
    this.name = name;
    this.listId = listId;
    this.completed = false;
};