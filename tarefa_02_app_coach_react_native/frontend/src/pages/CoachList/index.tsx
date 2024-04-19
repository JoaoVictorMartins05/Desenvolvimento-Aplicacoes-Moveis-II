import { useState } from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

import { BorderlessButton, RectButton } from "react-native-gesture-handler";

import { Feather } from "@expo/vector-icons";

import PageHeader from "../../components/PageHeader";
import CoachItem, { Coach } from "../../components/CoachItem";

import styles from "./styles";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CoachList() {
  const [coaches, setCoaches] = useState<Coach[]>([]);

  const [isFiltersVisible, setisFiltersVisible] = useState(false);

  const [subject, setSubject] = useState('');
  const [weekDay, setWeekDay] = useState('');
  const [time, setTime] = useState('');
  
	const [favorites, setFavorites] = useState<number[]>([]);

	const loadfavorites = () => {
		AsyncStorage.getItem('favorites').then(response => {
			
			const favoritedCoaches = !response ? [] : JSON.parse(response);
			
			setFavorites(favoritedCoaches.map((coach: Coach) => coach.id));
		})
	}

  const handleToggleFiltersVisible = () => {
    setisFiltersVisible(!isFiltersVisible);
  };

	const handleSubmit = async () => {
		loadfavorites();

		const { data } = await api.get('classes', {
			params: {
				subject, week_day: weekDay, time
			}
		});

		setisFiltersVisible(false);

		setCoaches(data.map((d: any)=> { return { ...d, avatar: '' } }));
	}

  return (
    <View style={styles.container}>
      <PageHeader
        title="Coaches disponíveis"
        headerRigth={
          <BorderlessButton onPress={handleToggleFiltersVisible}>
            <Feather name="filter" size={20} color={"#FFF"} />
          </BorderlessButton>
        }
      >
        {isFiltersVisible && (
          <View style={styles.searchForm}>
            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual sua matéria?"
              placeholderTextColor="#B1BCCC"
							value={subject}
							onChangeText={(text) => setSubject(text)}
            />

            <View style={styles.inputGroup}>
              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#B1BCCC"
									value={weekDay.toString()}
									onChangeText={(text) => setWeekDay(text)}
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual a hora?"
                  placeholderTextColor="#B1BCCC"
									value={time}
									onChangeText={(text) => setTime(text)}
                />
              </View>
            </View>

            <RectButton style={styles.submmitButton} onPress={handleSubmit}>
              <Text style={styles.submmitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

      <ScrollView
        style={styles.coachList}
        contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 8 }}
      >
        {coaches.map((coach: Coach) => {
					return <CoachItem key={coach.id} coach={coach} favorited={favorites.includes(coach.id)} />
				})}
      </ScrollView>
    </View>
  );
}
