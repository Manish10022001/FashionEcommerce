import {Text, Image, View, StyleSheet } from "react-native";

export default function ProductCard(){
    return(
        <View style={styles.container}>
            <Image 
                source={require('../assets/mitem1.jpg')}
                style={styles.coverImage}
            />
            <View style={styles.content}>
                <Text style={styles.title}>Zip-Neck Sweatshirt</Text>
            1   <Text style={styles.price}>$3343.33</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:10,
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
    }
})