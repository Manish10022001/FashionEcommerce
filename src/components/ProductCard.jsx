import { Ionicons } from "@expo/vector-icons";
import {Text, Image, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
export default function ProductCard({item, handleLiked}){
    const navigation = useNavigation();
    // const [isLiked, setIsLiked] =useState(false);
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate("Product_details", {item})
        }} style={styles.container}>
            <Image 
                source={{uri:item.image}}
                style={styles.coverImage}
            />
            <View style={styles.content}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.price}>${item.price}</Text>
            </View>
            {/* Heart icon */}
            <TouchableOpacity onPress={()=>{handleLiked(item)}} style={styles.likeContainer}>
                {item.isLiked ?
                    (<Ionicons name="heart" size={20} color={"#e68383ff"}/>) :
                    (<Ionicons name="heart-outline" size={20} color={"#e68383ff"}/>)
                }
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
        position:'relative', //for like
    },
    coverImage:{
        height:200,
        width:"90%",
        borderRadius:20,
        marginVertical:10,
        marginLeft:10,
    },
    content:{
        paddingLeft:15,
    },
    title:{
        fontSize:18,
        color:"#444444",
        fontWeight:"600",
    },
    price:{
        fontSize:12,
        color:"#9c9c9c",
        fontWeight:"600",
    },
    likeContainer:{
        height:34,
        width:34,
        backgroundColor:"#ffffff",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:17,
        position:'absolute',
        top:20,
        right:20,
    }
})