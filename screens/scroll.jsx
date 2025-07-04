import { StyleSheet, ScrollView, View, Text, TouchableOpacity,Image } from "react-native";

export default function ScrollScreen({navigation}){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Tela com ScrollView</Text>
            <ScrollView style={styles.scrollContainer}>
            {Array.from({length:20}).map((_,index)=>(
                <View key={index} style={styles.item}>
                     <Image
                    source={require('../assets/download.png')}
                    style={styles.itemImage}/>
                    <Text style={styles.itemText}>Item {index+1}</Text>
                    </View>
            ))}
            </ScrollView>
            <TouchableOpacity
            style={styles.button}
            onPress={()=>navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Voltar Home</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#f5f5f5',
        padding:20,
    },
    title:{
        fontSize:24,
        fontWeight:'bold',
        marginBottom:20,
        color:'#333',
        alignItems:'center',
    },
    scrollContainer:{
        flex:1,
    },
    item:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ddd',
    },
    itemImage:{
        width:50,
        height:50,
        marginRight:10,
    },
    itemText:{
        fontSize:20,
        color:'#333'
    },
    button:{
        backgroundColor:'#dc3545',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
});