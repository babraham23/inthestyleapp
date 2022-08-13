import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

const BorderButton = ({ onPress, title, style }: any) => {
    const { colors, borderRadius } = useTheme();
    return (
        <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[style, styles.container, { borderRadius: borderRadius.button, borderColor: colors.primary}]}>
                <Text bold center style={styles.text} fontSize={16} color={colors.primary}>
                    {title}
                </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderWidth: 2,
        marginTop: 3
    },
    text: {},
});

export default BorderButton;
