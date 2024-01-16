import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
    GestureHandlerRootView,
    Gesture,
    GestureDectector
} from 'react-native-gesture-handler';
import {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';

export default function App() {
  return (
    <GestureHandlerRootView style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
