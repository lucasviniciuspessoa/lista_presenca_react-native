// Home.js
import {
  Alert,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  FlatList
} from "react-native";
import { styles } from "./styles";
import { Participant } from "@/components/Participant";
import { useState } from "react";

export default function Home() {
  const [participants, setParticipants] = useState<string[]>([])
  const [participantName, setParticipantName] = useState("")


  function handleParticipantAdd() {
    if (participants.includes(participantName) || participantName.length <1) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    

    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name:string) {

   


    Alert.alert('Remover',`Remover o participante ${name} ?` , [ {
      text:"Sim ",
      onPress: () => setParticipants(prevState => prevState.filter(participants => participants !== name))
    },
    {
      text:"Não",
      style:"cancel"
    }
  ]  )
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#131016" }}>
      <View style={styles.container}>
        <Text style={styles.eventName}>Nome do evento</Text>
        <Text style={styles.eventDate}>Sexta, 7 de novembro de 2024</Text>
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6b6b6b"
            keyboardType="default"
            onChangeText={e=> setParticipantName(e)}

            value={participantName}
        
          />
          <TouchableOpacity
            style={styles.button}
            onPress={handleParticipantAdd}

          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <FlatList
        keyExtractor={item => item}
        data={participants}
        renderItem={({item}) => (
        <Participant key={item} name={item} onRemove={() => handleParticipantRemove(item)}/>

        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>Adicione participantes a sua lista</Text>
        )}
        />
  
      
        
      </View>
    </SafeAreaView>
  );
}
