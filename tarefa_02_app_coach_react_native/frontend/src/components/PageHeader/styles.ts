import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		padding: 40,
		backgroundColor: '#2D9CDB'
	},

	topBar: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	},

	title: {
		fontFamily: 'Archivo_700Bold',
		color: '#FFF',
		fontSize: 24,
		lineHeight: 32,
		maxWidth: 180,
		marginVertical: 40
	},

	header: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between'
	}

});

export default styles;
