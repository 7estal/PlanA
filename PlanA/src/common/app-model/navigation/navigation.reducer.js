import { AppNavigator } from '../../../app-navigator';

const initialState = AppNavigator.router.getStateForAction(
    AppNavigator.router.getActionForPathAndParams('Home')
);


export const nav = (state = initialState, action) => {
    if (!AppNavigator) {
        return null;
    }

    const nextState = AppNavigator.router.getStateForAction(action, state);
    return (
        nextState || state
    );
};