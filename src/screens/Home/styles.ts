import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex:1,
    
      backgroundColor:"#131016",
      padding:24,
    },
    form: {
      width:"100%",
      flexDirection:"row",
      marginBottom:42,
      marginTop:36

    },
    eventName: {
      color:"white",
      fontSize:24,
      fontWeight:"bold",
      marginTop:48
    },
    eventDate: {
      color:"#6b6b6b",
      fontSize:16,
    },
    input: {
      marginRight:7,
        backgroundColor:"#1F1E25",
        height:56,
        borderRadius:8,
        color:"white",
        padding:20,
        fontSize:16,
        flex:1
    },
    buttonText: {
      color:"white",
      fontSize:24
    },
    button: {
      width:56,
      height:56,
      borderRadius:5,
      backgroundColor:"#31CF67",
      justifyContent:"center",
      alignItems:"center",

    },
    listEmptyText: {
      color:"#FFF",
      textAlign:"center",
      fontSize:14
    }
  });
  
