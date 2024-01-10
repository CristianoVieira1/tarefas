import * as SecureStore from "expo-secure-store";

const KEYS = {
  KeyAddTask: "LocalStorage-AddTask",
  KeyAddTaskOffiLine: "LocalStorage-AddTaskOffiLine",
};

interface IAddTask {
  id: number;
  task: string;
  completed: boolean;
  image: string;
  file: string;
}

class LocalStorage {
  static async setAddTask(tasks: IAddTask[]) {
    return await SecureStore.setItemAsync(
      KEYS.KeyAddTask,
      JSON.stringify(tasks)
    );
  }

  static async getAddTask(): Promise<IAddTask[]> {
    const tasksString = await SecureStore.getItemAsync(KEYS.KeyAddTask);
    return JSON.parse(tasksString ?? "[]");
  }

  static async setAddTaskOffiLine(tasks: IAddTask[]) {
    return await SecureStore.setItemAsync(
      KEYS.KeyAddTask,
      JSON.stringify(tasks)
    );
  }

  static async getAddTaskOffLine(): Promise<IAddTask[]> {
    const tasksString = await SecureStore.getItemAsync(KEYS.KeyAddTask);
    return JSON.parse(tasksString ?? "[]");
  }
}

export default LocalStorage;
