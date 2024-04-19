import { ScrollView, View } from "react-native";
import styles from "./styles";
import PageHeader from "../../components/PageHeader";
import CoachItem, { Coach } from "../../components/CoachItem";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";

export default function Favorites() {
	const [favorites, setFavorites] = useState<Coach[]>([]);

	const loadfavorites = () => {
		AsyncStorage.getItem('favorites').then(response => {
			
			const favoritedCoaches = !response ? [] : JSON.parse(response);
			
			setFavorites(favoritedCoaches);
		})
	}

	useFocusEffect(() => {
		loadfavorites();
	});

	return(
		<View style={styles.container}>			
				<PageHeader title="Meus Coaches favoritos">
					<></>
				</PageHeader>

				<ScrollView style={styles.coachList} contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}>
				{favorites.map((coach: Coach) => {
					return <CoachItem key={coach.id} coach={coach} favorited={favorites.includes(coach)} />
				})}
				</ScrollView>
		</View>
	);
}