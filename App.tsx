import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet } from "react-native";
import Router from "./src/router";
import { Provider as StoreProvider } from "react-redux";
import store from "./src/store";

export default function App() {
  return (
    <StoreProvider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <Router />
      </SafeAreaView>
    </StoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
