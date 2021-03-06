import React, { Component } from 'react';
import {
    Dimensions,
    TextInput,
    TouchableHighlight,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { todoItemProps, toggleTodoProps } from "../../../../app-model/todo/todo.model";

export const TodoItemView = ({
    text,
    selected,
    themeColor,
    onPress,
    toggleTodo,
    listId,
    itemIndex,
}) => (
    <View style={[styles.reminderList, {opacity: selected ? 0.5 : 1}]}>
        <TouchableHighlight
            underlayColor='transparent'
            style={[styles.check, {borderColor: selected ? themeColor : "#c6c6c6"}]}
            onPress = {() => toggleTodo(toggleTodoProps(listId, itemIndex))}>
            <View style={selected ? [styles.fill , {backgroundColor: themeColor}] : null}/>
        </TouchableHighlight>
        <View style={styles.input}>
            <TextInput defaultValue={text} style={styles.inputText}/>
        </View>
    </View>
);

export class AddTodoPanel extends Component {
    createTodo(text) {
        const { listId, addTodo } = this.props;
        if (!!text) {
            const todoName = text;
            addTodo(todoItemProps(todoName, listId));
            this.refs.textInput.clear();
        }
    }
    render() {
        return (
            <View style={styles.reminderList}>
                <View style={styles.add}>
                    <Icon name="md-add"
                          style={styles.addIcon}
                          color="#c6c6c6"
                          size={22}
                    />
                </View>
                <View style={styles.input}>
                    <TextInput autoCapitalize='none'
                               ref='textInput'
                               onBlur={event => this.createTodo(event.nativeEvent.text)}
                               style={styles.inputText}
                    />
                </View>
            </View>
        );
    }
}

const {width}  = Dimensions.get('window');
export const styles = StyleSheet.create({
    reminderList: {
        flexDirection: "row",
        paddingLeft: 15,
        height: 45,
        width: width,
        justifyContent: "space-between",
        alignItems: "center"
    },
    input: {
        width: width-50,
        height: 45,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
    },
    inputText: {
        height: 43,
        color: "#363636",
    },
    fill:{
        width: 16,
        height: 16,
        borderRadius: 8,
    },
    check: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "#c6c6c6",
        width: 22,
        height: 22,
        borderRadius: 11,
        shadowOffset: {
            width:  0,
            height:  1,
        },
        shadowRadius: 1,
        shadowColor:  '#aaa',
        shadowOpacity:  0.3,
        justifyContent: "center",
        alignItems: "center"
    },
    addIcon: {
        paddingLeft:  5
    },
});

