import { RouteProp } from "@react-navigation/native";
import type { NativeStackNavigationProp } from "@react-navigation/native-stack";

export type AppStackParamList = {
  HomeScreen: undefined;
};

export type AppStackNavProps<T extends keyof AppStackParamList> = {
  navigation: NativeStackNavigationProp<AppStackParamList, T>;
  route: RouteProp<AppStackParamList, T>;
};

export type AuthStackParamList = {
  LoginScreen: undefined;
  RegisterScreen: undefined;
};

export type AuthStackNavProps<T extends keyof AuthStackParamList> = {
  navigation: NativeStackNavigationProp<AuthStackParamList, T>;
  route: RouteProp<AuthStackParamList, T>;
};
