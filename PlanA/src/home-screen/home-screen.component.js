import React, { Component,  } from 'react';
import {
    Image,
    StyleSheet,
    StatusBar,
    TouchableHighlight,
    View,
} from 'react-native';

import { TodoListPanelContainer } from "../component/todo-list";

export const HomeScreen = ({
   todoListDataArray,
   todoItemsByListId,
}) => (
    <View style={styles.container}>
        <Image source={{uri:"desktop"}} style={styles.container}>
        </Image>
        {todoListDataArray.map(todoList => (
            <TodoListPanelContainer
                listId={todoList.id}
                key={todoList.id}
            />
        ))}
    </View>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
