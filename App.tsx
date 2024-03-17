import Home from "@/screens/Home";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";


export default function App() {

  return (
      <View style={{flex:1, width:"100%", height:"100%"}}> 
        <Home/>
        <StatusBar translucent style="light"/>

      </View>
  )
}

