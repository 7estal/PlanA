import { connect } from 'react-redux';
import { TodoListPanel } from "./todo-list-panel.component";
import { todoActions } from "../../common/app-model/todo";
import { convertMapToArray } from "../../common/shared/utils";

const mapStateToProps = (state, ownProps) => {
    const todoListData = state.todo.todoListData[ownProps.listId];
    const todoItems = state.todo.todoItemsByListId[ownProps.listId] || {};
    return {
        ...ownProps,
        listId: todoListData.id,
        listName: todoListData.name,
        themeColor: todoListData.themeColor,
        todoItemArray: convertMapToArray(todoItems),
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