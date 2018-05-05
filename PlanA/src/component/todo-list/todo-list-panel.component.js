import React from 'react';
import {
    Image,
    Text,
    TouchableHighlight,
    View,
} from 'react-native';
import { styles } from "./todo-list-panel.styles";
import { AddTodoPanel, TodoItemView } from "./todo-item/todo-item-view.component";

export const TodoListPanel = ({
    listId,
    listName,
    themeColor,
    todoItemArray,
    addTodo,
    listStyle,
    onPress,
}) => (
    <View style={[styles.reminderContainer, listStyle]}>
        {/*<Image style={styles.reminderBg} source={{uri:"packed"}}/>*/}
        <View style={styles.reminderContent}>
            <TouchableHighlight underlayColor='transparent'
                                onPress={onPress}>
                <View style={styles.reminderTitleContainer}>
                    <Text style={[styles.reminderTitle, {color: themeColor}]}>{listName}</Text>
                    {/*<Text style={[styles.reminderTitle, {color: themeColor}]}>{todoList.length}</Text>*/}
                </View>
            </TouchableHighlight>
            <View style={styles.reminderListContainer}>
                {todoItemArray.map(todo => (
                    <TodoItemView
                        text={todo.name}
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