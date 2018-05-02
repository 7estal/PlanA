import React from 'react';
import {
    Image,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styles } from "./todo-list-panel.styles";
import { AddTodoPanel, TodoItemView } from "./todo-item/todo-item-view.component";
import type { TodoItem } from "../../common/app-model/todo/todo.reducer";
import {addTodo} from "../../common/app-model/todo/todo.action";

type TodoListProps = {
    listName: string,
    themeColor: string,
    todoItemArray: Array<TodoItem>,
    addTodo: Function,
};

export const TodoListPanel = ({
    listId,
    listName,
    themeColor,
    todoItemArray,
    addTodo,
}: TodoListProps) => (
    <View style={[styles.reminderContainer]}>
        {/*<Image style={styles.reminderBg} source={{uri:"packed"}}/>*/}
        <View style={styles.reminderContent}>
            <TouchableHighlight underlayColor="transparent">
                <View style={styles.reminderTitleContainer}>
                    <Text style={[styles.reminderTitle, {color: themeColor}]}>{listName}</Text>
                    {/*<Text style={[styles.reminderTitle, {color: themeColor}]}>{todoList.length}</Text>*/}
                </View>
            </TouchableHighlight>
            <View style={styles.reminderListContainer}>
                {todoItemArray.map(todo => (
                    <TodoItemView
                        text={todo.title}
                        selected={todo.completed}
                        key={todo.id}
                    />
                ))}
                <AddTodoPanel
                    listId={listId}
                    addTodo={addTodo}/>
            </View>
        </View>
    </View>
);