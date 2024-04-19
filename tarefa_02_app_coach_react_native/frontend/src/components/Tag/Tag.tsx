import { Text } from "react-native";
import styles from "./styles";

interface Props {
	name: string;
}

const Tag = ({ name }: Props) => {
	return(
		<Text style={styles.container}>{name}</Text>
	);
}

export { Tag }