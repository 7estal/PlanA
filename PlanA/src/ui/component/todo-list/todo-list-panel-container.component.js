import { connect } from 'react-redux';
import { TodoListPanel } from "./todo-list-panel.component";
import { todoActions } from "../../../app-model/todo/index";
import { convertMapToArray } from "../../../shared/utils";

const mapStateToProps = (state, ownProps) => {
    const todoListData = state.todo.todoListData[ownProps.listId];
    const todoItemArray = state.todo.todoItemsByListId[ownProps.listId];
    return {
        ...ownProps,
        listId: todoListData.id,
        listName: todoListData.name,
        themeColor: todoListData.themeColor,
        todoItemArray,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (todoItem) => dispatch(todoActions.createTodo(todoItem)),
        toggleTodo: (togoTodoProps) => dispatch(todoActions.toggleTodo(togoTodoProps)),
    };
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const TodoListPanelContainer = connector(TodoListPanel);