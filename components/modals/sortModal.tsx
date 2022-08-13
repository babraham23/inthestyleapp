import { StyleSheet, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
// import GestureRecognizer from 'react-native-swipe-gestures';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';


type Props = {
    onPress?: any;
    visible?: boolean;
    setVisible?: any;
};

const SortModal = ({ onPress, visible, setVisible }: Props) => {
    const { colors } = useTheme();
    return (
        <>
            {visible ? (
                // <BlurView tint="dark" intensity={40} style={[styles.screenPositioning]}>
                    // <GestureRecognizer style={{ flex: 1 }} onSwipeDown={() => setVisible(false)}>
                        <Modal animationType={'slide'} transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
                            <View style={[styles.modalWrapper, { backgroundColor: colors.card, borderColor: colors.grey }]}>
                                <TouchableOpacity onPress={() => setVisible(false)} style={styles.dragger} >
                                    <Text bold center fontSize={18} >SORT BY</Text>
                                </TouchableOpacity>
                                <View style={styles.buttonWrapper}>

                                </View>
                            </View>
                        </Modal>
                    // </GestureRecognizer>
                // </BlurView>
            ) : null}
        </>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    animatiableFill: {
        ...StyleSheet.absoluteFillObject,
    },
    screenPositioning: {
        zIndex: 100,
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalWrapper: {
        height: 300,
        marginTop: height - 300,
    },
    dragger: {
        width: '100%',
        backgroundColor: 'grey',
        paddingVertical: 10
    },
    buttonWrapper: {
        
    }
});

export default SortModal;
