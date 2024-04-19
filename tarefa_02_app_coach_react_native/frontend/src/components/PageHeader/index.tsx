import { Image, Text, View } from "react-native";
import styles from "./styles";

import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../../assets/images/icons/back.png';
import logoImg from '../../../assets/images/logo.png';
import { useNavigation } from "@react-navigation/native";
import { ReactNode } from "react";

interface Props {
	title: string,
	headerRigth?: ReactNode,
	children: ReactNode
}

export default function PageHeader( { title, headerRigth, children }: Props ) {
	const { navigate } = useNavigation();

	return(
		<View style={styles.container} >			
			<View style={styles.topBar} >
				<BorderlessButton onPress={() => navigate('Landing')}>
					<Image source={backIcon} resizeMode="contain" />
				</BorderlessButton>

				<Image source={logoImg} resizeMode="contain" />
			</View>

			<View style={styles.header}>
				<Text style={styles.title}>{title}</Text>
				{headerRigth}
			</View>


			{children}
		</View>
	);
}