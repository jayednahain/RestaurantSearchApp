import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ContextProviderUser, UserContext } from '../../CustomContext';

export default function Login() {

  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);
  const { setUser } = useContext(UserContext);

  return (
    <View>
      <Text>Login</Text>
      <TextInput style={{ borderWidth: 0.5, borderColor: 'black', padding: 5, margin: 5, color: "black" }} placeholder='user name' placeholderTextColor={"black"} />
      <TextInput style={{ borderWidth: 0.5, borderColor: 'black', padding: 5, margin: 5, color: "black" }} placeholder='password' placeholderTextColor={"black"} />
      <Button title='submit' />
    </View>
  )
}

const styles = StyleSheet.create({})