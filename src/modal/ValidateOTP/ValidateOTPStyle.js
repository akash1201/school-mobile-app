import { StyleSheet } from "react-native";
import { Colors } from "../../global";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BLACK + '77',
    },
    blurView: {
        flex: 1,
    },
    mainView: {
        backgroundColor: Colors.WHITE,
        margin: 10,
        justifyContent: "center",
        padding: 20,
        borderRadius: 20,
    },
    CodeTextInput: {
        borderWidth: 1,
        borderColor: Colors.THEME_COLOR,
        height: 50,
        width: 50,
        margin: 5,
        color: Colors.BLACK,
        backgroundColor: 'lightblue'
    }
})