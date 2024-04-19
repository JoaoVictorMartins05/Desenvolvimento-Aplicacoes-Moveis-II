import { Text, View } from "react-native";
import { Tag } from "../Tag/Tag";
import styles from "./styles";
import { Schedule } from "../CoachItem";

interface Props {
  tags: Schedule[];
}

const horarioFormatado = (numeroHora: number) => {
  const horas = Math.floor(numeroHora / 60);
  const minutos = numeroHora % 60;

  const data = new Date();
  data.setHours(horas);
  data.setMinutes(minutos);

  return data.toLocaleString("pt-BR", { hour: "2-digit", minute: "2-digit" });
};

const TagList = ({ tags }: Props) => {
  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];

  const tagsFormatadas = tags.map(
    (s) =>
      `${weekDays[s.week_day]}\n${horarioFormatado(s.from)}\n${horarioFormatado(
        s.to
      )}h`
  );

  return (
    <View style={styles.container}>
      {tagsFormatadas.map((tag) => (
        <Tag name={tag} />
      ))}
    </View>
  );
};

export { TagList };
