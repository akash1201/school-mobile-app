import { StyleSheet } from "react-native";
import { Colors } from "../../global";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.THEME_COLOR,
    },
    mainView:{
        padding:20
    },
    ProfileView:{
        flexDirection: "row",
        alignItems:"center",
        marginBottom:20,
        // backgroundColor:Colors.THEME_COLOR,
        padding:10,
        borderRadius:20,
    },
    ImageView:{
        height:80,
        width:80,
        justifyContent:"center",
        alignItems:"center",
        borderWidth:4,
        borderColor:Colors.LITE_ORANGE,
        borderRadius:100,
    },
    ImageStyle:{
        height: "100%",
        width: "100%",
        borderRadius: 100,
        borderWidth:2,
        borderColor:Colors.THEME_COLOR
    },
    ProfileDetailView:{
        marginLeft:20,
        justifyContent:"flex-start",
        alignItems:"flex-start",
    },
    IconView:{
        flexDirection:"row",
        alignItems:"center"
    }
})