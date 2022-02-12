import React, { useState, useEffect } from "react";
import { View, ImageBackground, Text, FlatList, Alert, Share, Platform } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { BorderlessButton } from "react-native-gesture-handler";
import { Background } from '../../components/Background';
import { ListHeader } from "../../components/ListHeader";
import { Header } from "../../components/Header";
import { theme } from "../../global/styles/theme";
import BannerImg from '../../assets/banner.png'
import { styles } from "./styles";
import { Member, MemberProps } from "../../components/Member";
import { ListDivider } from "../../components/ListDivider";
import { ButtonIcon } from "../../components/ButtonIcon";
import { useRoute } from "@react-navigation/native";
import { AppointmentProps } from "../../components/Appointment";
import { api } from "../../services/api";
import { Load } from "../../components/Load";
import * as Linking from 'expo-linking';


type Params = {
    guildSelected: AppointmentProps;
}

type GuildWidget = {
    id: string;
    name: string;
    instant_invite: string;
    members: MemberProps[];
}

export function AppointmentDetails() {
    const [widget, setWidget] = useState<GuildWidget>({} as GuildWidget);
    const [loading, setLoading] = useState(true);

    const route = useRoute();
    const { guildSelected } = route.params as Params;

    async function fetchGuildWidget() {
        try {
            const response = await api.get(`/guilds/${guildSelected.guild.id}/widget.json`);
            setWidget(response.data);
            setLoading(false);
        } catch {
            Alert.alert('Erro', 'Verifique nas configurações do servidor se o Widget está habilitado!');
        } finally {
            setLoading(false);
        }
    }

    function handleShareInvitation() {
        const message = Platform.OS === 'ios' 
        ? 
            `Junte-se ao servidor ${guildSelected.guild.name} no Discord! ${widget.instant_invite}`
        :
            widget.instant_invite;

        Share.share({
            message,
            url: widget.instant_invite,
        });
    }

    function handleOpenGuild(){
        Linking.openURL(widget.instant_invite);
    }

    useEffect(() => {
        fetchGuildWidget();
    },[]);

    return (
        <Background>
            <Header
                title="Detalhes"
                action={
                    guildSelected.guild.owner &&
                    <BorderlessButton onPress={handleShareInvitation}>
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
                        { guildSelected.guild.name }
                    </Text>

                    <Text
                        style={styles.subtitle}
                    >
                        { guildSelected.description }
                    </Text>
                </View>
            </ImageBackground>
            {
                loading ? <Load/> :
                <>
                    <ListHeader 
                        title="Jogadores"
                        subtitle={`Total ${widget.members.length}`} 
                    >
                    </ListHeader>
                    <FlatList
                        data={widget.members}
                        keyExtractor={item =>item.id}
                        renderItem={({item}) => (
                            <Member data={item}></Member>
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        style={styles.members}
                    >   
                    </FlatList>
                </>
            }



            <View style={styles.footer}>
                <ButtonIcon title="Entrar no servidor do Discord" onPress={handleOpenGuild}>
                </ButtonIcon>
            </View>
        </Background>
    );
}