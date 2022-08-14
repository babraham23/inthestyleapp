import { StyleSheet, View, Modal, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

type Props = {
    onPress?: any;
    visible?: boolean;
    setVisible?: any;
    title?: string
};

const SortItem = ({ onPress, title }: Props) => {
    return (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={styles.button}>
            <Text color={'black'} center fontSize={16}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};

const SortModal = ({ onPress, visible, setVisible }: Props) => {
    const { colors } = useTheme();
    return (
        <>
            {visible ? (
                <GestureRecognizer onSwipeDown={() => setVisible(false)}>
                    <Modal animationType={'slide'} transparent={true} visible={visible} onRequestClose={() => setVisible(false)}>
                        <View style={[styles.modalWrapper, { backgroundColor: colors.card, borderColor: colors.grey }]}>
                            <TouchableOpacity activeOpacity={0.8} onPress={() => setVisible(false)} style={styles.dragger}>
                                <Text bold center fontSize={16}>
                                    SORT BY
                                </Text>
                            </TouchableOpacity>
                            <SortItem title={'WE RECOMMEND'} />
                            <SortItem title={'PRICE HIGH TO LOW'} />
                            <SortItem title={'PRICE LOW TO HIGH'} />
                            <SortItem title={'NEWEST TO OLDEST'} />
                        </View>
                    </Modal>
                </GestureRecognizer>
            ) : null}
        </>
    );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
    modalWrapper: {
        height: 300,
        marginTop: height - 300,
    },
    dragger: {
        width: '100%',
        backgroundColor: '#2d2d2d',
        paddingVertical: 10,
    },
    buttonWrapper: {},
    button: {
        borderBottomColor: 'darkgrey',
        borderBottomWidth: 0.5,
        paddingVertical: 10,
    }
});

export default SortModal;
