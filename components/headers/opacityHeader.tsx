import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useUserContext } from '../../context/user.context';
import { Text } from '../../style/typography';
import SearchFilterbutton from '../buttons/searchFilterButton';


const OpacityHeader = (props: any) => {
    const { clampedScroll } = props;
    const { browsingData } = useUserContext();


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
            <View style={styles.wrapper}>
                <View style={styles.buttonWrapper}>
                    <SearchFilterbutton type={'Sort'} onPress={() => props.setVisible(true)} />
                    <SearchFilterbutton type={'Filter'} />
                </View>
                <Text bold color={'white'} fontSize={14} style={styles.text}>
                    Showing {browsingData.length} products
                </Text>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 40,
        width: '100%',
        zIndex: 80,
        flexDirection: 'row',
    },
    wrapper: {},
    buttonWrapper: {
        flexDirection: 'row',
    },
    text: {
        // position: 'absolute',
        // top: 55,
        padding: 10,
        backgroundColor: 'black',
        width: '100%',
        // bottom: 20,
    },
});

export default OpacityHeader;
