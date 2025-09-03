import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Router from "./src/router";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";
import { Provider as PaperProvider } from "react-native-paper";
import { requestPermissions } from "./src/permissions";
import { useEffect } from "react";

export default function App() {
  const { askAllPermissions } = requestPermissions();
  useEffect(() => {
    askAllPermissions();
  }, []);

  return (
    <StoreProvider store={store}>
      <PaperProvider>
        <SafeAreaView style={styles.container}>
          <StatusBar style="auto" />
          <Router />
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
