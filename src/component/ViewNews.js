import React, { Component } from 'react'
import { WebView } from 'react-native-webview'
import { ActivityIndicator, StyleSheet } from 'react-native'

class ViewNews extends Component {
  LoadingIndicatorView() {
    return <ActivityIndicator color='#009b88' size='large' style={styles.ActivityIndicatorStyle} />
  }

  render() {
    return (
      <WebView
        source={{ uri: 'https://www.google.com/' }}
        renderLoading={this.LoadingIndicatorView}
        startInLoadingState={true}
      />
    )
  }
}

const styles = StyleSheet.create({
  ActivityIndicatorStyle: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default ViewNews