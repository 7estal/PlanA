import { generateUniqueId } from "../../shared/utils";
import { ORANGE } from "../../shared/color";

export const todoListProps = (name, themeColor) => ({
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

export const todoItemProps = (name, listId)  => ({
    name,
    listId,
});

export const toggleTodoProps = (listId, itemIndex) => ({
    listId,
    itemIndex,
});

export const todoItemPropsWithIndex = (name, listId, itemIndex) => ({
    name,
    listId,
    itemIndex,
});

const TODO_ID_SEPARATOR = '#';

export function TodoItemModel(todoProps) {
    const { name, listId, itemIndex } = todoProps;
    this.id = `${listId}${TODO_ID_SEPARATOR}${itemIndex}`;
    this.name = name;
    this.listId = listId;
    this.itemIndex = itemIndex;
    this.completed = false;
};