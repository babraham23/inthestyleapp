import React, { useState } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { Text } from '../../style/typography';
import OpacityHeader from '../headers/opacityHeader';

const ScrollContext = ({ children, applyState, style }: any) => {
    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));

    const clampedScroll = Animated.diffClamp(
        Animated.add(
            scrollYValue.interpolate({
                inputRange: [0, 5],
                outputRange: [0, 1],
                extrapolateLeft: 'clamp',
            }),
            new Animated.Value(0)
        ),
        0,
        50
    );

    const snapToOffsets = [0, 210];

    return (
        <View style={styles.container}>
            <View style={styles.notificationWrapper}>
                <Text center fontSize={14}>
                    £5 OUTLET SHOP HERE
                </Text>
            </View>
            <OpacityHeader clampedScroll={clampedScroll} applyState={applyState} />
            <Animated.ScrollView
                snapToOffsets={snapToOffsets}
                snapToEnd={false}
                decelerationRate="normal"
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContianer}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], { useNativeDriver: true })}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={style}>{children}</View>
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    contentContianer: {
        flexGrow: 1,
        paddingTop: 100,
    },
    notificationWrapper: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        zIndex: 99,
        justifyContent: 'center',
    },
});

export default ScrollContext;
