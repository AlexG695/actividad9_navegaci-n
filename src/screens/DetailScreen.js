import React ,{ useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen({ route, navigation }) {
   const { itemId } = route.params;
    const [post, setPost] = useState([]);

    const getPost = async() => {

      try{
  
        const url = `https://jsonplaceholder.typicode.com/posts/${itemId}`;
  
        const response = await fetch(url); //consumoir los datos
  
        const json = await response.json(); //convertir a json
  
        setPost(json);
  
      } catch (error) {
  
        console.error(error);
  
      }
  
    }

    useEffect(()=>{

      getPost();
  
    },[post]);

  return (
    <SafeAreaView>
      <Text>Detalle {JSON.stringify(itemId)}</Text>
      <Button onPress={() =>{
        navigation.navigate('Home');
      }} title="REGRESAR" />
    </SafeAreaView>
  );
}
