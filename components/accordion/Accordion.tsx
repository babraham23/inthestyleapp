import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/useTheme';

type Props = {
    title?: string;
    style?: any;
    content?: any;
    paddingInside?: number;
};

const Accordion = ({ style, content, title, paddingInside }: Props) => {
    const { colors, borderRadius } = useTheme();
    const [open, setOpen] = useState(false);
    const animatedController = useRef(new Animated.Value(0)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(0);

    const bodyHeight = animatedController.interpolate({
        inputRange: [0, 1],
        outputRange: [0, bodySectionHeight],
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
        <View style={[style, { width: '100%' }]}>
            <View style={[styles.container, { borderColor: colors.border, borderTopLeftRadius: borderRadius.card, borderTopRightRadius: borderRadius.card }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => toggleListItem()}>
                    <View style={[styles.topContainer, { paddingTop: paddingInside ? paddingInside : 20 }]}>
                        <Text style={styles.title}>Product Details</Text>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.bodyBackground, { height: bodyHeight, backgroundColor: 'white' }]}>
                    <View style={styles.bodyContainer} onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}>
                        <View style={[styles.contentWrapper]}>
                            <Text>CONTENT HERE!!!!</Text>
                        </View>
                    </View>
                </Animated.View>
            </View>
            <View style={[styles.bottomContainer]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        backgroundColor: 'white',
        marginTop: 10,
        width: '100%',
    },
    topContainer: {
        paddingHorizontal: 20,
        width: '100%',
    },
    title: {},
    iconWrapper: {
        width: '15%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {},
    bodyBackground: {
        overflow: 'hidden',
    },
    bodyContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
    },
    bottomContainer: {
        borderBottomWidth: 0.5,
        backgroundColor: 'white',
        borderColor: 'green',
        height: 20,
    },
    contentWrapper: {
        marginHorizontal: 20,
        paddingTop: 20,
    },
});

export default Accordion;
