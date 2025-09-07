import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Router from "./src/router";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import { Provider as PaperProvider } from "react-native-paper";
import { requestPermissions } from "./src/permissions";
import { useEffect } from "react";
import { AuthProvider } from "./src/feature/auth/provider/AuthProvider";

export default function App() {
  const { askAllPermissions } = requestPermissions();
  useEffect(() => {
    askAllPermissions();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <AuthProvider>
          <SafeAreaView style={styles.container}>
            <StatusBar style="dark" />
            <Router />
          </SafeAreaView>
        </AuthProvider>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
