import { User } from "../feature/user/typings";
import AsyncStorage from "@react-native-async-storage/async-storage";

export class UserService {
  private static USER_KEY: string = "user";

  static storeUserInAsyncStorage = async (user: User) => {
    await AsyncStorage.setItem(this.USER_KEY, JSON.stringify(user));
  };

  static getUserFromAsyncStorage = async (): Promise<User> => {
    try {
      const userString = await AsyncStorage.getItem(this.USER_KEY);
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

  static removeUserFromAsyncStorage = async () => {
    await AsyncStorage.removeItem(this.USER_KEY);
  };
}
