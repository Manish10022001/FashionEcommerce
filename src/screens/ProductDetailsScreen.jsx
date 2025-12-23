import { LinearGradient } from "expo-linear-gradient";
import { View,ScrollView, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { useRoute } from "@react-navigation/native";
import { useState } from "react";

const sizes = ["S", "M", "L", "XL", "XXL"];
const colors = ["#91A180","#B11D1D", "#1F44A3", "#9F632A", "#1D752B", "#000000"]
export default function ProductDetailsScreen() {
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

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
          <ScrollView contentContainerStyle={{paddingBottom:40}}>
          <Image source={{ uri: item.image }} style={styles.coverImage}  resizeMode="contain"/>
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

          {/* 5.Color */}
          <Text style={[styles.title, styles.colorText]}>Color</Text>
          <View style={styles.colorContainer}>
            {colors.map((color,index)=>(
                <TouchableOpacity key={index} 
                                  onPress={()=>setSelectedColor(color)} 
                                  style={[styles.colorBorder, 
                                          selectedColor===color && 
                                            {borderColor:color, borderWidth:2}]}>
                    <View style={[styles.circle, {backgroundColor:color}]}/>
                </TouchableOpacity>
            ))}
          </View>
          {/*6. Button Container */}
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to Cart</Text>
          </TouchableOpacity>

          </ScrollView>
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
    height: 30,
    width: 30,
    borderRadius: 15,
    backgroundColor: "#e9e0e0ff",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
  },
  sizeValue: {
    fontSize: 14,
    fontWeight: "600",
  },
  colorText:{
    marginHorizontal:20,
    marginTop:10,
  },
  colorContainer:{
    flexDirection:"row",
    marginHorizontal:20,
  },
  circle:{
    height:28,
    width:28,
    borderRadius:14,
  },
  colorBorder:{
    // borderWidth:2,
    height:40,
    width:40,
    borderRadius:20,
    justifyContent:"center",
    alignItems:"center",
    marginHorizontal:5,
  },
  button:{
    backgroundColor:"#34c38f",
    padding:20,
    margin:20,
    borderRadius:18
  },
  buttonText:{
    fontSize:24,
    fontWeight:"600",
    color:"white",
    textAlign:"center"
  }
});
