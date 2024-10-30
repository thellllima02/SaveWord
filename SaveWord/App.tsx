import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

export default function App(){
  return(
    <View style={styles.container}>
      <Text>Save PassWord</Text>
      <TouchableOpacity style={styles.button}>
        <Text style = {styles.buttonText}>Aceitar</Text>
      </TouchableOpacity>

    </View>  
  )  
}
    

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#FFFFFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  button:{
    backgroundColor: "blue",
  },
  buttonText:{
    color:"white",
  }
})

