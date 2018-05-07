import React, { Component } from 'react';
import {
    Image,
    LayoutAnimation,
    StyleSheet,
    StatusBar,
    TouchableHighlight,
    View,
} from 'react-native';
import { screenWidth, screenHeight } from "../shared/utils";
import { TodoListPanelContainer } from "../ui/component/todo-list";

export class HomeScreen extends Component {
    constructor() {
        super();

        this.state = {
            // lists are all collapsed initially, no list selected
            selectedListIndex: -1,
        };

        this.animations = {
            duration: 200,
            create: {
                type: LayoutAnimation.Types.linear,
            },
            update: {
                type: LayoutAnimation.Types.linear,
                springDamping: 0.5,
            },
        };
    }

    componentDidMount() {
        StatusBar.setBarStyle(1);
    }

    switchList(index) {
        if (index === this.state.selectedListIndex) {
            this.collapse();
        } else {
            this.setState({
                selectedListIndex: index,
            });
            LayoutAnimation.configureNext(this.animations);
        }
    }

    collapse() {
        this.setState({
            selectedListIndex: -1,
        });
        LayoutAnimation.configureNext(this.animations);
    }

    render() {
        const { todoListDataArray } = this.props;
        const len = todoListDataArray.length;
        const bgImage = require('./assets/bg.png');
        return (
            <View style={styles.container}>
                {/*<View style={styles.searchBar}/>*/}
                <View style={styles.todoListsPanel}>
                    {todoListDataArray.map((todoList, index) => (
                        <TodoListPanelContainer
                            key={todoList.id}
                            onPress={() => this.switchList(index)}
                            listId={todoList.id}
                            listStyle={this.state.selectedListIndex < 0
                                ? {top: 20 + index*65}
                                : {top: this.state.selectedListIndex == index ? 20 : screenHeight + 5*index - 5*len}}
                        />
                    ))}
                </View>
                <TouchableHighlight underlayColor="transparent"
                                    style={styles.collapseArea}
                                    onPress={() => this.collapse()}>
                    <View/>
                </TouchableHighlight>

                <Image source={bgImage} style={styles.container}/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        zIndex: 0,
    },
    todoListsPanel: {
        zIndex: 100,
    },
    collapseArea: {
        position: 'absolute',
        height: 30,
        width: '100%',
        bottom: 0,
        left: 0,
        zIndex: 200,
    }
});
