import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

type Props = {
    title?: string;
    style?: any;
    content?: any;
    closed?: boolean;
    paddingInside?: number;
};

const AccordionWithIcon = ({ style, content, title, closed, paddingInside }: Props) => {
    const [open, setOpen] = useState(closed ? false : true);
    const animatedController = useRef(new Animated.Value(closed ? 0 : 1)).current;
    const [bodySectionHeight, setBodySectionHeight] = useState(closed ? 0 : 1);

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
        <View style={style}>
            <View style={[styles.container, { borderColor: 'black' }]}>
                <TouchableOpacity activeOpacity={1} onPress={() => toggleListItem()}>
                    <View style={[styles.topContainer, { paddingTop: paddingInside ? paddingInside : 20 }]}>
                        <View style={styles.center}>
                            <Text style={styles.title}>
                                'Hello World'
                            </Text>
                        </View>
                        <View style={styles.iconWrapper}>
                            <Animated.View style={[styles.arrow, { transform: [{ rotateZ: arrowAngle }] }]}>
                                <View style={{ transform: [{ rotate: '0deg' }] }}>
                                    {open ? <AntDesign name="minus" size={20} /> : <AntDesign name="plus" size={18}  />}
                                </View>
                            </Animated.View>
                        </View>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.bodyBackground, { height: bodyHeight, backgroundColor: 'white' }]}>
                    <View style={styles.bodyContainer} onLayout={(event) => setBodySectionHeight(event.nativeEvent.layout.height)}>
                        <View style={[styles.contentWrapper]}><Text>CONTENT HERE!!!!</Text></View>
                    </View>
                </Animated.View>
            </View>
            <View
                style={[
                    styles.bottomContainer,
                    {
                        borderColor: 'black',
                    },
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderTopWidth: 0.5,
        backgroundColor: 'white',
        marginTop: 10,
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        // height: 80,
        // paddingTop: 20,
        paddingHorizontal: 20,
    },
    icon: {
        width: '10%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    center: {
        width: '80%',
    },
    textWrapper: {
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
        borderLeftWidth: 0.5,
        borderRightWidth: 0.5,
        backgroundColor: 'white',
        // height: 20,
    },
    contentWrapper: {
        marginHorizontal: 20,
        // borderTopWidth: 0.5,
        paddingTop: 20,
        // backgroundColor: 'red'
    },
});

export default AccordionWithIcon;
