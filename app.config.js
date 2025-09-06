const IS_DEV = process.env.APP_VARIANT === "dev";
const iosUrlScheme = process.env.EXPO_PUBLIC_IOS_URL_SCHEME;

export default {
  expo: {
    name: IS_DEV ? "Bahikhata (Dev)" : "Bahikhata",
    slug: "Bahikhata-mobile",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/logo.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "com.msha.bhkta",
    splash: {
      image: "./assets/logo.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: IS_DEV ? "com.dev.bhkta" : "com.msha.bhkta",
      infoPlist: {
        ITSAppUsesNonExemptEncryption: false,
      },
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/logo.png",
        backgroundColor: "#ffffff",
      },
      edgeToEdgeEnabled: true,
      package: "com.msha.bhkta",
    },
    web: {
      favicon: "./assets/logo.png",
    },
    extra: {
      eas: {
        projectId: "8bded6b5-b228-450b-8391-77ce798613cd",
      },
    },
    plugins: [
      [
        "expo-camera",
        {
          cameraPermission: "Allow $(PRODUCT_NAME) to access your camera",
          microphonePermission:
            "Allow $(PRODUCT_NAME) to access your microphone",
          recordAudioAndroid: true,
        },
      ],
      [
        "react-native-vision-camera",
        {
          cameraPermissionText: "$(PRODUCT_NAME) needs access to your Camera.",
          microphonePermissionText:
            "$(PRODUCT_NAME) needs access to your Microphone.",
          enableMicrophonePermission: true,
        },
      ],
      [
        "@react-native-google-signin/google-signin",
        {
          iosUrlScheme: iosUrlScheme,
        },
      ],
    ],
    owner: "mshakya93",
  },
};
