import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import * as DocumentPicker from "expo-document-picker";
import * as FileSystem from "expo-file-system";
import { useEffect, useState } from "react";
import { Alert } from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import {
  CameraOptions,
  ImageLibraryOptions,
} from "react-native-image-picker/src/types";

import LocalStorage from "../../persistence/LocalStorage";

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
  image: string;
  file: string;
}

export const useViewModel = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openModalOffiLine, setOpenModalOffiLine] = useState(false);
  const [image, setImage] = useState<string>("");
  const [file, setFile] = useState<string | null>(null);
  const [showCompleted, setShowCompleted] = useState(false);

  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [textInput, setTextInput] = useState<string>("");

  useEffect(() => {
    getTodosFromUserDevice();
  }, []);

  useEffect(() => {
    saveTodoToUserDevice(todos);
  }, [todos]);

  const handleConnectivityChange = (state: NetInfoState) => {
    if (!state.isConnected) {
      handleModalOff();
    } else {
      sendOfflineTasks();
    }
  };

  useEffect(() => {
    NetInfo.fetch().then(handleConnectivityChange);

    const unsubscribe = NetInfo.addEventListener(handleConnectivityChange);

    return () => {
      unsubscribe();
    };
  }, []);

  const sendOfflineTasks = async () => {
    const offlineTasks = await LocalStorage.getAddTaskOffLine();

    if (offlineTasks.length > 0) {
      try {
        await sendTasksToServer(offlineTasks);
        await LocalStorage.setAddTaskOffiLine([]);
      } catch (error) {
        console.error("Erro ao enviar tarefas offline:", error);
      }
    }
  };

  const sendTasksToServer = async (offlineTasks: TodoItem[]) => {
    try {
      await Promise.all(offlineTasks.map(sendTaskToServer));
    } catch (error) {
      console.error("Erro ao enviar tarefas offline:", error);
    }
  };

  const sendTaskToServer = async (newTodo: TodoItem) => {
    try {
      await sendTaskToServer(newTodo);
    } catch (error) {
      await saveOfflineTask(newTodo);
    }
  };

  const saveOfflineTask = async (newTodo: TodoItem) => {
    try {
      const offlineTasks = await LocalStorage.getAddTaskOffLine();
      await LocalStorage.setAddTaskOffiLine([...offlineTasks, newTodo]);
    } catch (error) {
      console.error("Erro ao salvar tarefa offline:", error);
    }
  };

  const addTodo = async () => {
    if (textInput === "") {
      Alert.alert("Error", "Please input todo");
    } else {
      let newFile = "";
      if (file) {
        const fileUri = file;
        const fileName = `document_${Math.random()}.pdf`;
        const destinationUri = `${FileSystem.documentDirectory}${fileName}`;

        try {
          await FileSystem.copyAsync({
            from: fileUri,
            to: destinationUri,
          });

          newFile = destinationUri;
        } catch (copyError) {
          console.error("Error copying document:", copyError);
        }
      }

      const newTodo: TodoItem = {
        id: Math.random(),
        task: textInput,
        completed: false,
        image: image,
        file: newFile,
      };

      setTodos((prevTodos) => [...prevTodos, newTodo]);

      await saveTodoToUserDevice([...todos, newTodo]);

      handleModalNewTask();
      setTextInput("");
      setFile(null);

      await sendTaskToServer(newTodo);
    }
  };

  const saveTodoToUserDevice = async (todos: TodoItem[]) => {
    try {
      await LocalStorage.setAddTask(todos);
    } catch (error) {
      console.log("error", error);
    }
  };

  const getTodosFromUserDevice = async () => {
    try {
      const storedTodos = await LocalStorage.getAddTask();
      if (storedTodos !== null) {
        setTodos(storedTodos);
      } else {
        console.log("Stored Todos is null");
      }
    } catch (error) {
      console.log("getTodosFromUserDevice", error);
    }
  };

  const markTodoComplete = (todoId: number) => {
    const newTodosItem = todos.map((item) => {
      if (item.id === todoId) {
        return { ...item, completed: true };
      }
      return item;
    });

    setTodos(newTodosItem);
  };

  const deleteTodo = (todoId: number) => {
    const newTodosItem = todos.filter((item) => item.id !== todoId);
    setTodos(newTodosItem);
    setImage("");
  };

  const clearAllTodos = () => {
    Alert.alert("Excluir", "Excluir todas as tarefas?", [
      {
        text: "Yes",
        onPress: () => setTodos([]),
      },
      {
        text: "No",
      },
    ]);
  };

  function handleModalNewTask() {
    setOpenModal(!openModal);
    setTextInput("");
    setFile(null);
  }

  function handleModalOff() {
    setOpenModalOffiLine(!openModalOffiLine);
  }

  const handleImageUser = () => {
    Alert.alert("Selecione uma opção", "", [
      {
        text: "Tirar foto",
        onPress: () => pickerImageFromCamera(),
      },
      {
        text: "Escolher da galeria",
        onPress: () => pickerImageFromGalery(),
      },
      {
        text: "Cancelar",
        style: "cancel",
        onPress: () => {
          return;
        },
      },
    ]);
  };

  const pickerImageFromGalery = async () => {
    const options: ImageLibraryOptions = {
      mediaType: "photo",
      presentationStyle: "fullScreen",
    };

    const result = await launchImageLibrary(options);

    if (result?.assets) {
      const imageUri: string | undefined = result.assets[0].uri;
      if (imageUri) {
        try {
          setImage(imageUri);
        } catch (error) {
          console.log("pickerImageFromGalery", error);
        }
      }
    }
  };

  const pickerImageFromCamera = async () => {
    const options: CameraOptions = {
      mediaType: "photo",
      cameraType: "front",
      saveToPhotos: false,
      quality: 1,
    };

    const result = await launchCamera(options);
    if (result?.assets) {
      const imageUri: string | undefined = result.assets[0].uri;
      if (imageUri) {
        try {
          setImage(imageUri);
        } catch (error) {
          console.log("pickerImageFromCamera", error);
        }
      }
    }
  };

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({});

      if (!result.canceled && result.assets[0].uri) {
        setFile(result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking document:", error);
    }
  };

  return {
    file,
    image,
    todos,
    addTodo,
    textInput,
    openModal,
    deleteTodo,
    pickDocument,
    setTextInput,
    setOpenModal,
    clearAllTodos,
    showCompleted,
    handleModalOff,
    handleImageUser,
    markTodoComplete,
    setShowCompleted,
    openModalOffiLine,
    handleModalNewTask,
  };
};
