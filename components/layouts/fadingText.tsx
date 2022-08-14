import { Animated, StyleSheet, View } from 'react-native';
import React from 'react';
import { Text } from '../../style/typography';

const FadingText = () => {
    const [title, setTitle] = React.useState('£5 OUTLET SHOP HERE');
    const fadeAnim = React.useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 3000,
            useNativeDriver: false,
        }).start();
    };

    const fadeOut = () => {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    };

    const handleTitle = () => {
        fadeIn()
    };

    React.useEffect(() => {
        handleTitle();
    }, []);

    return (
        <Animated.View
            style={[
                styles.container,
                {
                    opacity: fadeAnim,
                },
            ]}
        >
            <Text center fontSize={14}>
                {title}
            </Text>
        </Animated.View>
    );
};

export default FadingText;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        zIndex: 99,
        justifyContent: 'center',
    },
});
