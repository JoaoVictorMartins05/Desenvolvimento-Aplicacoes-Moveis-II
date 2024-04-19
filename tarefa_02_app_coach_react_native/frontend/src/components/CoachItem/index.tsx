import { Image, Linking, Text, View } from "react-native";

import { RectButton } from 'react-native-gesture-handler';

import styles from "./styles";

import heartOutlineIcon from '../../../assets/images/icons/heart-outline.png';
import unFavoriteIcon from '../../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../../assets/images/icons/whatsapp.png';
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../../services/api";
import { TagList } from "../TagList/TagList";

export interface Schedule {
  week_day: number,
  from: number,
  to: number
}

export interface Coach {
	id: number,
	avatar?: string;
	bio: string;
	cost: number;
	name: string;
	subject: string;
	whatsapp: string;
  schedule: Schedule[]
}

interface Props {
	coach: Coach;
	favorited: boolean;
}

export default function CoachItem({ coach, favorited }: Props) {
	const [isFavorited, setIsfavorited] = useState(false);

	const handleLinkToWhatsapp = () => {
    api.post('connections', {
      coach_id: coach.id
    })
		Linking.openURL(`whatsapp://send?phone=${coach.whatsapp}`);
	}

	const handleToggleFavorite = async () => {
		const favorites = await AsyncStorage.getItem('favorites');
		
		const favoritesArray = favorites ? JSON.parse(favorites) : [];

		if(isFavorited) {
			const favoriteIndex = favoritesArray.findIndex((coachItem: Coach) => {
				return coachItem.id === coach.id
			});
			favoritesArray.splice(favoriteIndex, 1);

			setIsfavorited(false);
		} else {
			favoritesArray.push(coach);

			setIsfavorited(true);
		}

		await AsyncStorage.setItem('favorites', JSON.stringify(favoritesArray));
	}

	return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image style={styles.avatar} source={{ uri: coach.avatar }} />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>{coach.name}</Text>
          <Text style={styles.subject}>{coach.subject}</Text>
        </View>
      </View>

      <Text style={styles.bio}>{coach.bio}</Text>

      <View style={styles.footer}>
        <TagList tags={coach.schedule} />

        <Text style={styles.price}>
          Preço/Hora {"  "}
          <Text style={styles.priceValue}>R$ {coach.cost}</Text>
        </Text>

        <View style={styles.buttonContainer}>
          <RectButton
            style={[styles.favoriteButton, !isFavorited ? styles.favorited : {}]}
            onPress={handleToggleFavorite}
          >
            {favorited ? (
              <Image source={heartOutlineIcon} />
            ) : (
              <Image source={unFavoriteIcon} />
            )}
          </RectButton>
          <RectButton
            style={styles.contactButton}
            onPress={handleLinkToWhatsapp}
          >
            <Image source={whatsappIcon} />
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>
      </View>
    </View>
  );
}