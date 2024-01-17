import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {
    GestureHandlerRootView,
    Gesture,
    GestureDetector
} from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
} from 'react-native-reanimated';

const END_POSITION = 200;

export default function App() {
    const onLeft = useSharedValue(true);
    const positionX = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onUpdate((e) => {
            if (onLeft.value) {
                positionX.value = e.translationX;
            } else {
                positionX.value = END_POSITION + e.translationX;
            }
        })
        .onEnd((e) => {  //snaps to one side or the other
            if (positionX.value > END_POSITION / 2) {
                positionX.value = withTiming(END_POSITION, { duration: 100 });
                onLeft.value = false;
            } else {
                positionX.value = withTiming(0, { duration: 100 });
                onLeft.value = true;
            }
        })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: positionX.value }],
    }))

    return (
        <GestureHandlerRootView style={styles.container}>
            <GestureDetector gesture={panGesture}>
                <Animated.View style={[styles.box], animatedStyle } />
            </GestureDetector>
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
    box: {
        height: 120,
        width: 120,
        backgroundColor: 'blue',
        borderRadius: 20,
        marginBottom: 30,
    }
});
