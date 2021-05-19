import * as React from "react"
import { WebView } from "react-native-webview"

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{
          // uri: "https://expo.io",
          uri: "https://www.fountain.com/carecar/apply/care-partner-driver",
        }}
        style={{ marginTop: 20 }}
      />
    )
  }
}
