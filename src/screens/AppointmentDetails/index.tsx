import React from "react";
import { View, ImageBackground, Text, FlatList } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { styles } from "./styles";
import { Member } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";

export function AppointmentDetails() {
    const members = [
        {
            id: '1',
            username: 'Igor',
            avatar_url: 'https://github.com/igBFranco.png',
            status: 'online'
        },
        {
            id: '2',
            username: 'Guilherme Rambo',
            avatar_url: 'https://github.com/insidegui.png',
            status: 'offline'
        }
    ]

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    <BorderlessButton>
                        <Fontisto name="share" size={24} color= {theme.colors.primary} />
                    </BorderlessButton>
                }
            >
            </Header>

            <ImageBackground 
                source={BannerImg}
                style={styles.banner}
            >
                <View style={styles.bannerContent}>
                    <Text 
                        style={styles.title}
                    >
                        Lendários
                    </Text>

                    <Text
                        style={styles.subtitle}
                    >
                        É hoje que vamos chegar ao challenger sem perder uma partida da md10
                    </Text>
                </View>
            </ImageBackground>
            <ListHeader 
                title="Jogadores"
                subtitle="Total 3"    
            >
            </ListHeader>
            <FlatList
                data={members}
                keyExtractor={item =>item.id}
                renderItem={({item}) => (
                    <Member data={item}></Member>
                )}
                ItemSeparatorComponent={() => <ListDivider></ListDivider>}
                style={styles.members}
            >   
            </FlatList>

            <View style={styles.footer}>
                <ButtonIcon title="Entrar no servidor do Discord">
                </ButtonIcon>
            </View>
        </Background>
    );
}