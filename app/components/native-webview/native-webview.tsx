import React, { CSSProperties } from "react"
import { Platform } from "react-native"
import { WebView } from "react-native-webview"

interface NativeWebViewProps {
  target: string
}

export const NativeWebView = (props: NativeWebViewProps): JSX.Element => {
  // if (Platform.OS === "web") {
  //   return <iframe src={props.target} style={styles} />
  // }
  return <WebView source={{ uri: props.target }} />
}

const styles: CSSProperties = {
  height: 600,
  width: 800,
}
