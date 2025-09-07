import { ConfigureParams } from "@react-native-google-signin/google-signin";

export const googleSignInConfig: ConfigureParams = {
  iosClientId: process.env.EXPO_PUBLIC_IOS_CLIENT_ID,
  webClientId: process.env.EXPO_PUBLIC_ANDROID_CLIENT_ID,
};

