import React from "react"
import { observer } from "mobx-react-lite"
import { View, ViewStyle } from "react-native"
import { StatusBar } from "expo-status-bar"
import { NativeWebView, Screen, Text } from "../../components"
// import { useNavigation } from "@react-navigation/native"
// import { useStores } from "../../models"
import { color } from "../../theme"

const FULL: ViewStyle = { flex: 1, backgroundColor: "#171F46" }
const ROOT: ViewStyle = {
  // backgroundColor: color.palette.black,
  backgroundColor: color.transparent,
  flex: 1,
}

export const ApplyToCareCarScreen = observer(function ApplyToCareCarScreen() {
  // Pull in one of our MST stores
  // const { someStore, anotherStore } = useStores()

  // Pull in navigation via hook
  // const navigation = useNavigation()
  return (
    <View testID="ApplyToCareCarScreen" style={FULL}>
      <Screen style={ROOT} preset="scroll">
        <NativeWebView
          target="https://www.fountain.com/carecar/apply/care-partner-driver"
          style={{ marginTop: 0 }}
        />
      </Screen>
      <StatusBar style="auto" />
    </View>
  )
})
