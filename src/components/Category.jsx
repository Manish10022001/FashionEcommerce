import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default function Category({item, selectedCategory, setSelectedCategory}){
    return(
        <TouchableOpacity onPress={()=>setSelectedCategory(item)}>
            <Text style={[styles.categoryText, selectedCategory===item && {color:"#FFFFFF", backgroundColor:"#34c38f"}]}>{item}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    categoryText:{
        fontSize:16,
        fontWeight:600,
        color:"#ffffff",
        // backgroundColor:"#34c38f",
        backgroundColor:"#DFDCDC",
        // padding:10,
        paddingHorizontal:20,
        paddingVertical:10,
        textAlign:"center",
        borderRadius:16, 
        marginHorizontal:10,
    }
})