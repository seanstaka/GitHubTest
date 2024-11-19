import { StyleSheet, Text, View } from "react-native";
import MainButton from "../components/MainButton";
function SecondPage(props) {
  return (
    <View style={styles.container}>
      <Text>Adding more text</Text>
      <MainButton onPress={props.changePage}>Home!</MainButton>
    </View>

  );
}

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex:1,
  }
});
