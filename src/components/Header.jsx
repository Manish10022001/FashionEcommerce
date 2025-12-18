import { Text, View, StyleSheet, Image } from "react-native";

export default function Header() {
  return (
    <View style={styles.container}>
        <View style={styles.appIconContainer}>
            <Image 
                source={require('../assets/appicon.png')}
                style={styles.appIcon}
            />
        </View>
        <Image 
            source={require('../assets/dp.jpg')}
            style={styles.dp}
        />
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    appIconContainer:{
        backgroundColor:"white",
        height:44,
        width:44,
        borderRadius:55,
        justifyContent:"center",
        alignItems:"center",
        overflow:"hidden",
    },
    appIcon:{
        height:28,
        width:28,
    },
    dp:{
        height:44,
        width:44,
        borderRadius:55
    }
});
