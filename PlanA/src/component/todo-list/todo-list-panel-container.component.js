import { connect } from 'react-redux';
import { TodoListPanel } from "./todo-list-panel.component";
import { todoActions } from "../../common/app-model/todo";
import { convertMapToArray } from "../../common/shared/utils";

const mapStateToProps = (state, ownProps) => {
    const todoList = state.todo.todoLists[ownProps.listId];
    return {
        listId: todoList.id,
        listName: todoList.name,
        themeColor: todoList.themeColor,
        todoItemArray: convertMapToArray(todoList.todoItems),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoItem) => dispatch(todoActions.addTodo(todoItem)),
        toggleTodoStatus: (todoId) => dispatch(todoActions.toggleTodoStatus(todoId)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const TodoListPanelContainer = connector(TodoListPanel);