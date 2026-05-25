import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { mobileTheme } from './src/theme'

const webAppUrl = process.env.EXPO_PUBLIC_WEB_APP_URL ?? 'http://127.0.0.1:5174'

export default function App() {
  return (
    <SafeAreaView style={styles.shell}>
      <StatusBar style="light" />
      <WebView
        source={{ uri: webAppUrl }}
        style={styles.webview}
        startInLoadingState
        renderError={() => (
          <View style={styles.fallback}>
            <Text style={styles.title}>design-spec</Text>
            <Text style={styles.body}>Set EXPO_PUBLIC_WEB_APP_URL to your running web app URL.</Text>
          </View>
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: mobileTheme.color.background,
  },
  webview: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  fallback: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    padding: 24,
    backgroundColor: mobileTheme.color.background,
  },
  title: {
    color: mobileTheme.color.onSurface,
    fontSize: 22,
    fontWeight: '700',
  },
  body: {
    color: mobileTheme.color.onSurfaceVariant,
    fontSize: 14,
    textAlign: 'center',
  },
})
