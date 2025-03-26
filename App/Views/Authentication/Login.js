import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { ContextProviderUser, UserContext } from '../../CustomContext';
import { useUserAuth , useTheme } from '../../CustomContext/ContextHook.js';
export default function Login() {

  const [ userName , setUserName ] = useState(null);
  const [ password , setPassword ] = useState(null);  
  const { setUser } = useUserAuth();
  const {theme , toggleTheme} = useTheme()
  const { backgroundColor , textColor } = theme;

  const handleOnPressSubmit = () => {
    setUser({ userName, password });
  }

  return (
    <View style={{backgroundColor:theme.backgroundColor, flex:1}}>
      <TextInput 
        style={{ borderWidth: 0.5, borderColor: textColor , padding: 5, margin: 5, color: textColor }}
        placeholder='user name'
        placeholderTextColor={textColor}
        onChangeText={value => setUserName(value)}
      />
      <TextInput
        style={{ borderWidth: 0.5, borderColor: textColor, padding: 5, margin: 5, color: textColor }}
        placeholder='password'
        placeholderTextColor={textColor}
        onChangeText={value => setPassword(value)}
      />
      <Button title='submit' onPress={handleOnPressSubmit} />
      <Button title='switch theme' onPress={toggleTheme} />
    </View>
  )
}

const styles = StyleSheet.create({})