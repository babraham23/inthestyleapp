import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
// import Searchbar from '../searchbar';

const OpacityHeader = (props: any) => {
    const { clampedScroll } = props;

    const searchBarTranslate = clampedScroll.interpolate({
        inputRange: [0, 40],
        outputRange: [0, -250],
        extrapolate: 'clamp',
    });

    const searchBarOpacity = clampedScroll.interpolate({
        inputRange: [0, 7],
        outputRange: [2, 0],
        extrapolate: 'clamp',
    });

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    transform: [
                        {
                            translateY: searchBarTranslate,
                        },
                    ],
                    opacity: searchBarOpacity,
                },
            ]}
        >
            {/* <Searchbar applyState={props.applyState} /> */}
            <View style={{ width: '100%', height: 80, backgroundColor: 'green' }} />
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 50,
        width: '100%',
        zIndex: 80,
    },
});

export default OpacityHeader;
