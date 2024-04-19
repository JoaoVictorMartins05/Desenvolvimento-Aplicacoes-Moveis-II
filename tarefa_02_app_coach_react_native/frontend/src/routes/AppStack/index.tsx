import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Landing from '../../pages/Landing';
import GiveClasses from '../../pages/GiveClasses';
import StudyTabs from '../StydyTabs';

const Stack = createNativeStackNavigator();

export default function AppStack() {
	return (		
		<Stack.Navigator initialRouteName="Landing" screenOptions={{ headerShown: false }}>
			<Stack.Screen name="Landing" component={Landing} />
			<Stack.Screen name="GiveClasses" component={GiveClasses} /> 
			<Stack.Screen name='Study' component={StudyTabs} />
		</Stack.Navigator>		
	);
} 