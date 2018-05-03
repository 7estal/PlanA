import { connect } from 'react-redux';
import { HomeScreen } from './home-screen.component';
import { todoActions } from "../common/app-model/todo";
import { convertMapToArray } from "../common/shared/utils";

const mapStateToProps = (state) => {
    const todoListDataArray = convertMapToArray(state.todo.todoListData);
    const todoItemsByListId = state.todo.todoItemsByListId;
    return {
        todoListDataArray,
        todoItemsByListId,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

const connector = connect(mapStateToProps, mapDispatchToProps);
export const HomeScreenContainer = connector(HomeScreen);
