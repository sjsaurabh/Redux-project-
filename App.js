import { StyleSheet, Text, View } from "react-native";

import App1 from "./React_Redux/App1";
import { Provider } from "react-redux";
import store from "./React_Redux/Redux/store";
 const  App=()=> (
  <Provider store={store}>
    <App1 />
  </Provider>
)

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default App