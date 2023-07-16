import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";

export interface ITaksProps {
  description: string;
  isCompleted: boolean;
  onCheckTask: () => void;
  onDeleteTaks: () => void;
}
const Task = ({
  description,
  isCompleted,
  onCheckTask,
  onDeleteTaks,
}: ITaksProps) => {
  return (
    <View style={[styles.container, isCompleted && styles.containerCompleted]}>
      <TouchableOpacity style={styles.check} onPress={onCheckTask}>
        <Image
          source={
            isCompleted
              ? require("../../../assets/checked.png")
              : require("../../../assets/not-checked.png")
          }
        />
      </TouchableOpacity>
      <Text style={[styles.text, isCompleted && styles.isCompleted]}>
        {description}
      </Text>
      <TouchableOpacity style={styles.removeTaks} onPress={onDeleteTaks}>
        <Image source={require("../../../assets/trash.png")} />
      </TouchableOpacity>
    </View>
  );
};

export default Task;
