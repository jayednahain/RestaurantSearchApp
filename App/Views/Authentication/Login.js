import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ContextProviderUser, UserContext } from '../../CustomContext';
import { useUserAuth } from '../../CustomContext/ContextHook.js/useContextHook';

export default function Login() {

  const [ userName , setUserName ] = useState(null);
  const [ password , setPassword ] = useState(null);
  // const { setUser } = useContext(UserContext);
  const { setUser } = useUserAuth();

  const handleOnPressSubmit = () => {
    setUser({ userName, password });
  }

  return (
    <View>
      <TextInput 
        style={{ borderWidth: 0.5, borderColor: 'black', padding: 5, margin: 5, color: "black" }}
        placeholder='user name'
        placeholderTextColor={"black"}
        onChangeText={value => setUserName(value)}
      />
      <TextInput
        style={{ borderWidth: 0.5, borderColor: 'black', padding: 5, margin: 5, color: "black" }}
        placeholder='password'
        placeholderTextColor={"black"}
        onChangeText={value => setPassword(value)}
      />
      <Button title='submit' onPress={handleOnPressSubmit} />
      <Button title='switch theme' onPress={()=>{}} />
    </View>
  )
}

const styles = StyleSheet.create({})