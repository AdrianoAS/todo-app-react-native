import React, { useId, useState } from "react";
import {
  Alert,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { styles } from "./styles";
import Empty from "../../components/Empty";
import Task from "../../components/Task";

interface IITem {
  id: string;
  description: string;
  isCompleted: boolean;
}

interface ITask {
  item: IITem;
}

export const Home = () => {
  const [tasks, setTasks] = useState<IITem[]>([]);
  const [task, setTask] = useState<IITem>({
    id: "",
    description: "",
    isCompleted: false,
  });
  const [status, setStatus] = useState({
    created: 0,
    completed: 0,
  });

  const handleCheckTaks = (id: string) => {
    let statusTaks;
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isCompleted = !task.isCompleted;
        statusTaks = task.isCompleted;
      }

      return task;
    });
    setTasks(newTasks);

    if (statusTaks) {
      setStatus((prevState) => ({
        ...prevState,
        completed: prevState.completed + 1,
      }));
    } else {
      setStatus((prevState) => ({
        ...prevState,
        completed: prevState.completed - 1,
      }));
    }
  };

  const handleDeleteTask = (id: string) => {
    Alert.alert("Deletar", "Realmente deseja remover a tarefa?", [
      {
        text: "Sim",
        onPress: () => {
          const newTask = tasks.filter((task) => task.id !== id);
          setTasks(newTask);
        },
      },
      {
        text: "Não",
      },
    ]);
  };

  const handleChangeAddtask = (description: string) => {
    const uniqueId = Math.floor(Date.now() * Math.random()).toString(36);
    setTask({
      ...task,
      id: uniqueId,
      description,
    });
  };

  const handleSubmitTask = () => {
    if (task.description !== "") {
      setTasks((prevState: IITem[]) => [...prevState, task]);
      setTask({
        description: "",
        id: "",
        isCompleted: false,
      });
      setStatus((prevState) => ({
        ...prevState,
        created: prevState.created + 1,
      }));
    } else {
      Alert.alert("Aviso", "Descreve uma tarefa", [
        {
          text: "Fechar",
        },
      ]);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require("../../../assets/Logo.png")} />
        <View style={styles.search}>
          <TextInput
            style={styles.input}
            placeholder="Adicione uma nova tarefa"
            onChangeText={(description) => handleChangeAddtask(description)}
            value={task.description}
            placeholderTextColor="#808080"
          />
          <TouchableOpacity style={styles.button} onPress={handleSubmitTask}>
            <Image source={require("../../../assets/plus.png")} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.status}>
          <View style={styles.statusTitle}>
            <Text style={styles.statusQuantityText}>Criado</Text>
            <Text style={styles.statusQuantity}>{status.created}</Text>
          </View>

          <View style={styles.statusTitle}>
            <Text style={styles.statusQuantityText}>Concluídos</Text>
            <Text style={styles.statusQuantity}>{status.completed}</Text>
          </View>
        </View>
      </View>

      <View style={styles.list}>
        <FlatList
          data={tasks}
          renderItem={({ item }: ITask) => (
            <Task
              key={item.id}
              description={item.description}
              isCompleted={item.isCompleted}
              onCheckTask={() => handleCheckTaks(item.id)}
              onDeleteTaks={() => handleDeleteTask(item.id)}
            />
          )}
          ListEmptyComponent={() => <Empty />}
        />
      </View>
    </View>
  );
};
