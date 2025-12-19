import { Text, View, TextInput, StyleSheet, FlatList } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Header from "../components/Header";
import { Ionicons } from "@expo/vector-icons";
import Category from "../components/Category";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import data from "../data/data.json"
const categories = ['Trending Now', 'All', 'New', 'Men', 'Women']

export default function HomeScreen() {
  const [selectedCategory , setSelectedCategory] = useState('Trending Now');
  const [isLiked, setIsLiked] = useState(false);
  const [products, setProducts] = useState(data.products)

  function handleLiked(item){
    const newProducts = products.map((prod)=>{
      if(prod.id === item.id){
        return{
          ...prod,
          isLiked:true,
        }
      }
      return prod;
    })
    setProducts(newProducts)
  }
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <LinearGradient colors={["#f0fdf6", "#e6f7ef"]} style={styles.container}>

          <Header />

          {/* Input Container */}
          {/* <Text style={styles.matchText}>Match Your Style</Text>
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}>
                <Ionicons name="search" size={26} color={"#C0C0C0"}/>
            </View>
            <TextInput style={styles.TextInput} placeholder="search"/>
          </View> */}

          {/* Category */}
          {/* <FlatList 
            data={categories}
            renderItem={({item})=> <Category 
              item={item} 
              selectedCategory={selectedCategory} 
              setSelectedCategory={setSelectedCategory}
              />}
            keyExtractor={(item)=>item}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          /> */}

          {/* Product Card */}
          <FlatList 
            numColumns={2}
            ListHeaderComponent={
              <>
                <Text style={styles.matchText}>Match Your Style</Text>
                <View style={styles.inputContainer}>
                  <View style={styles.iconContainer}>
                    <Ionicons name="search" size={26} color={"#C0C0C0"}/>
                  </View>
                  <TextInput style={styles.TextInput} placeholder="search"/>
                </View>

                <FlatList 
                  data={categories}
                  renderItem={({item})=> <Category 
                    item={item} 
                    selectedCategory={selectedCategory} 
                    setSelectedCategory={setSelectedCategory}
                    />}
                  keyExtractor={(item)=>item}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
              </>
            }
            data={products}
            renderItem={({item, index})=><ProductCard 
              item={item} 
              handleLiked={handleLiked}
              // isLiked={isLiked} 
              // setIsLiked={setIsLiked}
            />}
            showsVerticalScrollIndicator={false}
          
            contentContainerStyle={{
                    paddingBottom:60, //full scroll
                  }}
          />
          {/* <View style={{flexDirection:"row"}}>
            <ProductCard />
            <ProductCard />
            
          </View>
          <View style={{flexDirection:"row"}}>
            <ProductCard />
            <ProductCard />
            
          </View> */}
        </LinearGradient>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {

    padding:20,
  },
  matchText:{
    fontSize:28,
    color:"#000000",
    marginTop:15,
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
