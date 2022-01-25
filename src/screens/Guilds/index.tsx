import React from "react";
import { FlatList, View } from "react-native";
import { styles } from './styles';


export function Guilds(){
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: null,
            owner: true
        }
    ];

    return(
        <View style={styles.container}>
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    
                )}
            >

            </FlatList>
        </View>
    );
}

