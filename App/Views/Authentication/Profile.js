import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { UserContext } from '../../CustomContext'

export default function Profile() {
  const {user} = useContext(UserContext)
  return (
    <View>
      <Text>Profile</Text>
    </View>
  )
}

const styles = StyleSheet.create({})