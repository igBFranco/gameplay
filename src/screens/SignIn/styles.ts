import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor: theme.colors.background
    },
    image:{
        //height:360,
        //width:'100%'
    },
    content:{
        marginTop: -40,
        paddingHorizontal: 50,
    },
    title: {
        color: theme.colors.heading,
        textAlign:'center',
        fontSize:40,
        fontWeight:'bold',
        marginBottom: 16,
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign:'center',
        fontSize:15,
        marginBottom: 48,
    }

});