import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CoachList from '../../pages/CoachList';
import Favorites from '../../pages/Favorites';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function StudyTabs() {
	return (		
		<Tab.Navigator screenOptions={
			{ 
				headerShown: false,
				tabBarStyle: { height: 64 },
				tabBarItemStyle: { flexDirection: 'row', gap: 20, alignItems: 'center', justifyContent: 'center' },
				tabBarIconStyle: { flex: 0, width: 20, height: 20 },
				tabBarLabelStyle:  { fontFamily: 'Archivo_700Bold', fontSize: 16 },
				tabBarInactiveBackgroundColor: '#FAFAFC',
				tabBarActiveBackgroundColor: '#EBEBF5',
				tabBarInactiveTintColor: '#C1BCBC',
				tabBarActiveTintColor: '#8257E5'
				
			}}>
      <Tab.Screen 
				name="CoachList" 
				component={CoachList} 
				options={
					{ tabBarLabel: 'Coaches', 
						tabBarIcon: ({ color, size, focused }) => { return(<Ionicons name='easel' size={size} color={focused ? '#8257E5' : color}/>) } }
					} />
      <Tab.Screen 
				name="Favorites" 
				component={Favorites} 
				options={
					{ tabBarLabel: 'Favoritos', 
						tabBarIcon: ({ color, size, focused }) => { return(<Ionicons name='heart' size={size} color={focused ? '#8257E5' : color}/>) } }
					} />				
    </Tab.Navigator>
	);
} 