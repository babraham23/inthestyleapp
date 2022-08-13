import React from 'react';
import { TouchableOpacity, StyleSheet, View, Image } from 'react-native';
import { useTheme } from '../../hooks/useTheme';
import { Images } from '../../style/images';
import { Text } from '../../style/typography';

type Props = {
    type?: 'Sort' | 'Filter';
    onPress?: () => void;
};

const SearchFilterbutton = ({ onPress, type }: Props) => {
    const { colors } = useTheme();
    return (
        <View style={styles.container} >
            <TouchableOpacity onPress={onPress} activeOpacity={0.8} style={[styles.wrapper, { borderRightWidth: type === 'Sort' ? 1 : 0, borderColor: colors.primary, borderRightColor: colors.grey }]}>
                <Text center  fontSize={18} color={'black'}>
                    {type}
                </Text>
                <Image source={type === 'Sort' ? Images.SORT : Images.FILTER} style={styles.image}  />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '50%',
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingVertical: 15
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginHorizontal: 5
    }
});

export default SearchFilterbutton;
