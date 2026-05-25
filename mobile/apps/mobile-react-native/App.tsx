import { StatusBar } from 'expo-status-bar'
import { appManifest } from '@design-spec/shared'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { mobileTheme } from './src/theme'

export default function App() {
  return (
    <SafeAreaView style={styles.shell}>
      <StatusBar style="light" />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.appName}>{appManifest.appName}</Text>
        {appManifest.screens.map(screen => (
          <View key={screen.id} style={styles.row}>
            <View>
              <Text style={styles.title}>{screen.title}</Text>
              <Text style={styles.meta}>{screen.route}</Text>
            </View>
            <Text style={styles.badge}>{screen.id}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  shell: {
    flex: 1,
    backgroundColor: mobileTheme.color.background,
  },
  content: {
    gap: 12,
    padding: 20,
  },
  appName: {
    color: mobileTheme.color.onSurface,
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 8,
  },
  row: {
    minHeight: 72,
    borderRadius: mobileTheme.radius.card,
    borderWidth: 1,
    borderColor: mobileTheme.color.outline,
    backgroundColor: mobileTheme.color.surface,
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: mobileTheme.color.onSurface,
    fontSize: 16,
    fontWeight: '700',
  },
  meta: {
    color: mobileTheme.color.onSurfaceVariant,
    fontSize: 12,
    marginTop: 4,
  },
  badge: {
    color: mobileTheme.color.primary,
    fontSize: 12,
    fontWeight: '700',
  },
})
