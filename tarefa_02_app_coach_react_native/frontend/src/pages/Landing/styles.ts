import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2D9CDB',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		padding: 32	
	},

	banner: {
		width: '100%',
		resizeMode: 'contain',
	},

	title: {
		fontFamily: 'Poppins_400Regular',
		color: '#FFF',
		fontSize: 20,
		lineHeight: 30,
		marginTop: 10,
		width: '100%'
	},

	titleBold: {
		fontFamily: 'Poppins_600SemiBold'
	},

	buttonsContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '100%',
		marginTop: 96
	},

	button: {
		height: 150,
		width: '48%',
		backgroundColor: '#333',
		borderRadius: 8,
		padding: 24,
		justifyContent: 'space-between'
	},

	buttonText: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 20
	},

	buttonPrimary: {
		backgroundColor: '#56CCF2'
	},

	buttonSecondary: {
		backgroundColor: '#04D361'
	},

	totalConnections: {
		width: '100%'
	},

	totalConnectionsText: {
		fontFamily: 'Poppins_400Regular',
		color: '#D4C2FF',
		fontSize: 12,
		lineHeight: 20,
		maxWidth: 140,
		marginTop: 40
	}
});

export default styles;
