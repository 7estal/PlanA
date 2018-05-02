import { StyleSheet, Dimensions } from 'react-native';

const { width, height }  = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height:  height,
        width:  width,
    },
    reminderContainer: {
        height:  height-65,
        width: width,
        borderRadius:  10,
        position: "absolute",
        top: 20,
        left: 0,
        backgroundColor: "#fff",
        shadowColor:  "#000",
        shadowOpacity:  0.3,
        shadowRadius:  2,
        shadowOffset:  {
            height:  -1,
            width:  0,
        }
    },
    reminderBg: {
        height:  height-65,
        width: width,
        borderRadius:  10,
        resizeMode: "cover",
        opacity: 0.5,
    },
    reminderContent: {
        height:  height-65,
        width: width,
        backgroundColor: "transparent",
        position: "absolute",
        top: 0,
        left: 0,
    },
    reminderTitleContainer: {
        height:  65,
        width:  width,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        alignItems: "center"
    },
    reminderTitle: {
        fontSize: 28,
        fontWeight: "300",
        textShadowColor: "#ccc",
        textShadowOffset: {width: 0, height: 1,},
        textShadowRadius: 1,
    },
    reminderListContainer: {
        flex: 1,
        borderTopColor: "#ccc",
        borderTopWidth: 1,
    },
    reminderList: {
        flexDirection: "row",
        paddingLeft: 15,
        height: 45,
        width: width,
        justifyContent: "space-between",
        alignItems: "center"
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
    fill: {
        width: 16,
        height: 16,
        borderRadius: 8,
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
    addIcon: {
        paddingLeft:  5
    }
});

