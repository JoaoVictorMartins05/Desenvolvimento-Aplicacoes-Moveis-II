import { ImageBackground, Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";

import giveClassesBackgroundImg from '../../../assets/images/give-classes-background.png';
import { useNavigation } from "@react-navigation/native";

export default function GiveClasses() {
	const { goBack } = useNavigation();

	return(
		<View style={styles.container}>
			<ImageBackground source={giveClassesBackgroundImg} style={styles.content} resizeMode="contain">
				<Text style={styles.title}>Quer ser um Coach?</Text>
				<Text style={styles.description}>Para começar, você precisa se cadastrar como coach na nossa plataforma web.</Text>

				<TouchableOpacity style={styles.okButton} onPress={() => goBack()}>
					<Text style={styles.okButtonText}>Tudo bem</Text>
				</TouchableOpacity>
			</ImageBackground>
		</View>
	);
}