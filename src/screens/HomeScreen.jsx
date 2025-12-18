import { Text, View, TextInput, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={["#f0fdf6", "#e6f7ef"]} style={styles.container}>
            <Header />
          <Text style={styles.matchText}>Match Your Style</Text>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="search" size={26} color={"#C0C0C0"}/>
            </View>
            <TextInput style={styles.TextInput} placeholder="search"/>
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:20,
  },
  matchText:{
    fontSize:28,
    color:"#000000",
    marginTop:25,
  },
  inputContainer:{
    backgroundColor:"#FFFFFF",
    height:48,
    borderRadius:12,
    flexDirection:"row",
    alignItems:"center",
    marginVertical:20,
  },
  iconContainer:{
    marginHorizontal:20,
  },
  TextInput:{
    flex:1
  }
});
