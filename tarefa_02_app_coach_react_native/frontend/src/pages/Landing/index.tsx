import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import landingImg from '../../../assets/images/landing.png';
import studyIcon from '../../../assets/images/icons/study.png';
import giveClassesIcon from '../../../assets/images/icons/give-classes.png';
import heartIcon from '../../../assets/images/icons/heart-outline.png';
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import api from "../../services/api";

export default function Landing() {
	const [totalConnections, setTotalConnections] = useState(0);
	
	const { navigate } = useNavigation();

	useEffect(() => {
		api.get('connections').then((response: any) => {
			const { total } = response.data.at(0);

			console.log(total)

			setTotalConnections(total);
		})
	}, []);

	return (
		<View style={styles.container}>			
			<Image source={landingImg} style={styles.banner} />

			<Text style={styles.title}>
				Seja bem vindo, {'\n'}
				<Text style={styles.titleBold}>O que deseja fazer?</Text>
			</Text>

			<View style={styles.buttonsContainer}>
				<TouchableOpacity style={[styles.button, styles.buttonPrimary]} onPress={() => navigate('Study')}>
					<Image source={studyIcon} />
					<Text style={styles.buttonText} >Estudar</Text>
				</TouchableOpacity>
				<TouchableOpacity style={[styles.button, styles.buttonSecondary]} onPress={() => navigate('GiveClasses')}>
					<Image source={giveClassesIcon} />
					<Text style={styles.buttonText}>Dar aulas</Text>
				</TouchableOpacity>
			</View>			

			<View style={styles.totalConnections}>
				<Text style={styles.totalConnectionsText}>
					Total de {totalConnections} conexões já realizadas { ' ' }
					<Image source={heartIcon} />
				</Text>
			</View>		
		</View>
	);
}