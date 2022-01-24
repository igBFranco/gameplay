import React from "react";
import { Image } from "react-native";
import { styles } from "./styles";



export function GuildIcon() {
    const uri = 'https://pentagram-production.imgix.net/cc7fa9e7-bf44-4438-a132-6df2b9664660/EMO_LOL_02.jpg?rect=0%2C0%2C1440%2C1512&w=640&crop=1&fm=jpg&q=70&auto=format&fit=crop&h=672';

    return(
        <Image 
            source={{ uri }} 
            style={styles.image}
            resizeMode="cover"    
        />   
        
    );
}