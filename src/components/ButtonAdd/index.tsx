import React from "react";
import { RectButton, RectButtonProps } from "react-native-gesture-handler";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { styles } from "./styles";
import { theme } from "../../global/styles/theme";


export function ButtonAdd({...rest}: RectButtonProps) {
    return(
        <RectButton 
            style={styles.container}
        >
          <MaterialCommunityIcons 
            name="plus" 
            size={24} 
            color={theme.colors.heading}
        />  
        </RectButton>
    );
}