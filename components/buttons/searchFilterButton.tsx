import React from 'react';
import { TouchableOpacity, StyleSheet, View } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Text } from '../../style/typography';

type Props = {
    type?: 'Sort' | 'Filter';
    onPress?: () => void;
};

const SearchFilterbutton = ({ onPress, type }: Props) => {
    const { colors, borderRadius } = useTheme();
    return (
        <>
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.container, { borderRadius: borderRadius.button, borderColor: colors.primary }]}>
                <Text center style={styles.text} fontSize={18} color={'black'}>
                    {type}
                </Text>
            </TouchableOpacity>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: 50,
        justifyContent: 'center',
        // borderWidth: 2,
        // marginTop: 3,
        backgroundColor: 'white',
    },
    text: {},
});

export default SearchFilterbutton;
