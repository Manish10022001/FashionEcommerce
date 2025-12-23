import { LinearGradient } from "expo-linear-gradient";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState(null);
  const route = useRoute();
  const { item } = route.params;
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient
          colors={["#f0fdf6", "#e6f7ef"]}
          style={styles.container}
        >
          <View style={styles.headerContainer}>
            <Header />
          </View>
          <Image source={{ uri: item.image }} style={styles.coverImage} />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={[styles.title, styles.price]}>${item.price}</Text>
          </View>

          {/* Size Container */}
          <Text style={[styles.title, styles.sizeText]}>Size</Text>
          {/* get size option from data */}
          <View style={styles.sizeContainer}>
            {sizes.map((size, index) => (
              //on click button  text color change
              <TouchableOpacity key={index} style={styles.sizeValueContainer} onPress={()=>setSelectedSize(size)}>
                <Text
                  style={[
                    styles.sizeValue,
                    selectedSize == size && { color: "#c41313ff" },
                  ]}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    padding: 20,
  },
  coverImage: {
    width: "100%",
    height: 420,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 20,
    marginHorizontal: 20,
  },
  title: {
    fontSize: 20,
    color: "#444444",
    fontWeight: "500",
  },
  price: {
    color: "#4D4C4C",
  },
  sizeText: {
    marginHorizontal: 20,
  },
  sizeContainer: {
    flexDirection: "row",
    marginHorizontal: 20,
  },
  sizeValueContainer: {
    height: 40,
    width: 40,
    borderRadius: 20,
    backgroundColor: "#e9e0e0ff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 18,
    fontWeight: "600",
  },
});
