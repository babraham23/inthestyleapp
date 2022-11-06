import React, { useState, useEffect } from 'react';
import { Text, Animated, Easing, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import HeartButton from '../buttons/heartButton';

interface Props {
    title?: string;
    hideBack?: boolean;
    onBackPress?: any;
    hideClose?: boolean;
    onClosePress?: any;
    titleShowing?: any;
}

const FadeHeader = ({ title, hideBack, onBackPress, hideClose, titleShowing }: Props) => {

    const [titleFade] = useState(new Animated.Value(0));

    useEffect(() => {
        titleShowing === false &&
            Animated.timing(titleFade, {
                toValue: 0,
                duration: 350,
                useNativeDriver: true,
                easing: Easing.sin,
            }).start();
        titleShowing === true &&
            Animated.timing(titleFade, {
                toValue: 1,
                duration: 350,
                useNativeDriver: true,
                easing: Easing.sin,
            }).start();
    }, [titleShowing]);

    return (
        <>
            {hideBack ? null : (
                <TouchableOpacity onPress={onBackPress ? onBackPress : () => {}} style={[styles.backWrapper, { backgroundColor: 'white' }]}>
                    <Ionicons name="arrow-back-sharp" size={24} color={'black'} />
                </TouchableOpacity>
            )}

            <Animated.View
                style={{
                    opacity: titleFade,
                    ...styles.headerTitle,
                    borderBottomColor: 'white',
                    borderBottomWidth: 1,
                    backgroundColor: 'white',
                }}
            >
                <Text >
                    {title}
                </Text>
            </Animated.View>

            {hideClose ? null : (
                <HeartButton style={[styles.closeWrapper]} />
                // <TouchableOpacity onPress={onClosePress ? onClosePress : () => navigation.goBack()} style={[styles.closeWrapper, { backgroundColor: colors.card }]}>
                //     <MaterialCommunityIcons name="window-close" size={20} color={colors.text} />
                // </TouchableOpacity>
            )}
        </>
    );
};

const styles = StyleSheet.create({
    backWrapper: {
        position: 'absolute',
        top: 10,
        left: 15,
        zIndex: 10,
        elevation: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerTitle: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingTop: 3    0,
        position: 'absolute',
        top: 0,
        zIndex: 9,
        elevation: 9,
    },
    closeWrapper: {
        position: 'absolute',
        top: 10,
        right: 15,
        zIndex: 10,
        elevation: 10,
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default FadeHeader;
