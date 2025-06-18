import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";

const DATA=[ 
       { id:'1', title: 'Item 1', description:'Descrição do item 1'},
       { id:'2', title: 'Item 2', description:'Descrição do item 2'},
       { id:'3', title: 'Item 3', description:'Descrição do item 3'},
       { id:'4', title: 'Item 4', description:'Descrição do item 4'},
       { id:'5', title: 'Item 5', description:'Descrição do item 5'},
       { id:'6', title: 'Item 6', description:'Descrição do item 6'},
       { id:'7', title: 'Item 7', description:'Descrição do item 7'},
       { id:'8', title: 'Item 8', description:'Descrição do item 8'},
       { id:'9', title: 'Item 9', description:'Descrição do item 9'},
       
]

export default function HomeScreen({ navigation}){
     const renderItem=({item})=>(
        <TouchableOpacity style={styles.card}
        onPress={()=>navigation.navigate('Details',{item})}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
        </TouchableOpacity>
     )
    
     return(
        <View style={styles.container}>
            <Text style={styles.title}>Lista de Itens</Text>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item)=>item.id}
            style={styles.list}
            ItemSeparatorComponent={()=> <View style={styles.separador}/>}
            ListHeaderComponent={()=>(
                <Text style={styles.ListHeader}>Meus Itens</Text>
            )}/>
            <TouchableOpacity style={[styles.button,{backgroundColor:'#28a745'}]}
            onPress={()=> navigation.navigate('Profile')}>
                <Text style={styles.buttonText}>Ir para Profile</Text>
            </TouchableOpacity>
        </View>
    )
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
        textAlign: 'center',
    },
    list:{
        flex:1
    },
    card:{
        backgroundColor:'#fff',
        padding:15,
        borderRadius:10,
        marginBottom:10,
        borderWidth:1,
        borderColor:'#ddd',
        shadowColor:'#000',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.1,
        shadowRadius:5,
        elevation:3,
    },
    cardTitle:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333',
    },
    cardDescription:{
        fontSize:14,
        color:'#666',
        marginTop:5,
    },
    button:{
        backgroundColor:'#007bff',
        paddingVertical:10,
        paddingHorizontal:20,
        borderRadius:5,
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'bold',
    },
    separador:{
        height:1,
        backgroundColor:'#000',
        marginVertical:5,
    },
    ListHeader:{
        fontSize:18,
        fontWeight:'bold',
        color:'#333',
        marginBottom:10,
        textAlign:'center'
    }
})