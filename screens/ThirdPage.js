import { StyleSheet, Text } from "react-native";
import MainButton from "../components/MainButton";
function ThirdPage(props) {
  return (
    <MainButton onPress={props.changePage}>Home!</MainButton>
  );
}

export default ThirdPage;

const styles = StyleSheet.create({

});
