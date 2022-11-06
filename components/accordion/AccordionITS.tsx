import { AntDesign } from '@expo/vector-icons';
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
// import * as colors from '../../res/colors';
// import * as keys from '../../res/keys';

type Props = {
    title?: string;
    content?: any;
};

const AccordionITS = ({ content, title }: Props) => {
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
    });

    const arrowAngle = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: ['0rad', `${Math.PI}rad`],
    });

    const toggleListItem = () => {
        if (open) {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 0,
                useNativeDriver: false,
            }).start();
        } else {
            Animated.timing(animatedController, {
                duration: 300,
                toValue: 1,
                useNativeDriver: false,
            }).start();
        }
        setOpen(!open);
    };

    return (
        <View style={{ width: '100%' }}>
            <View style={[styles.container]}>
                <TouchableOpacity activeOpacity={1} onPress={() => toggleListItem()}>
                    <View style={styles.topContainer}>
                        <Text style={styles.title}>{title}</Text>
                        <Animated.View style={[styles.arrow, { transform: [{ rotateZ: arrowAngle }] }]}>
                            <View style={{ transform: [{ rotate: '0deg' }] }}>
                                <AntDesign name="minus" size={20} />
                            </View>
                        </Animated.View>
                    </View>
                </TouchableOpacity>

                <Animated.View style={[styles.bodyBackground, { height: bodyHeight }]}>
                    <View style={styles.bodyContainer} onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}>
                        <View style={[styles.contentWrapper]}>
                            <Text>{content}</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        marginTop: 10,
        width: '100%',
        borderColor: 'grey',
        justifyContent: 'center',
        paddingVertical: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    arrow: {},
    title: {
        color: 'black',
        fontSize: 16,
        textTransform: 'capitalize',
    },
    bodyBackground: {
        overflow: 'hidden',
    },
    bodyContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    contentWrapper: {
        paddingTop: 10,
    },
});

export default AccordionITS;
