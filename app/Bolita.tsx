import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler';


const Bolita = () => {

    const x = useSharedValue(0);
    const y = useSharedValue(0);
    const scale = useSharedValue(10);

    const arrastrar = Gesture.Pan()
    .onChange((event) => {
        x.value += event.changeX;
        y.value += event.changeY;
        console.log("X: ", x.value, "    Y: ", y.value);
    })

    const aumentar = Gesture.Tap().numberOfTaps(2)
    .onStart((event) => {
        scale.value *= 2;
    })

    const animatedStyleX = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: x.value },
                { translateY: y.value },
            ]
        }
    })

    const animatedStyleAumentar = useAnimatedStyle(() => {
        return {
            width: withSpring(scale.value),
            height: withSpring(scale.value),
        }
    })

  return (
    <GestureHandlerRootView style={styles.container}>
        <GestureDetector gesture={aumentar}>
        <GestureDetector gesture={arrastrar}>
        <Animated.View style={[animatedStyleX, animatedStyleAumentar, styles.bolitaStyle]}>

        </Animated.View>
        </GestureDetector>
        </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default Bolita

const styles = StyleSheet.create({
    bolitaStyle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: "blue",
        justifyContent: "center",
        alignItems: "center",
    },
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
    }

})