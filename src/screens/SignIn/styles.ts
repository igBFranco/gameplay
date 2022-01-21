import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    image:{
        height:375,
        width: 407
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
        fontFamily: theme.fonts.title700,
        lineHeight:40
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign:'center',
        fontSize:15,
        marginBottom: 48,
        fontFamily: theme.fonts.title500,
        lineHeight:25
    }

});