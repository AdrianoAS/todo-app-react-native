import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

const Empty = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require("../../../assets/Clipboard.png")}
      />
      <Text style={styles.title}>Você ainda não tem terafas cadastradas</Text>
      <Text style={styles.subTitle}>
        Crie tarefas e organize seus items a fazer
      </Text>
    </View>
  );
};

export default Empty;
