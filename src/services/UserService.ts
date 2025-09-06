import { User } from "../feature/user/typings";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserService {
  static instance: UserService;

  constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new UserService();
    }
    return this.instance;
  }

  static setUserInAsyncStorage(user: User) {
    AsyncStorage.setItem("user", JSON.stringify(user));
  }

  static getUserFromAsyncStorage = async (): Promise<User> => {
    try {
      const userString = await AsyncStorage.getItem("user");
      if (userString) {
        const user: User = JSON.parse(userString);
        return user;
      } else {
        throw new Error("No user found");
      }
    } catch (error) {
      throw error;
    }
  };
}
