import { Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native'

const profile = () => {
  return (
    <SafeAreaView className = "bg-blue-950  h-full">
      <View className = "items-center justify-center h-full">
        <Text className = "text-3xl text-green-500">Profile</Text>
      </View>
  </SafeAreaView>
  )
}

export default profile

