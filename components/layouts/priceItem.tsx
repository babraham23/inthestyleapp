import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Images } from '../../style/images';
import { Text } from '../../style/typography';

type Props = {
    // data props
    price?: number;
    salePrice?: number;
};

const PriceItem = ({ price, salePrice }: Props) => {
    return (
        <View style={[styles.container]}>
            {!salePrice ? (
                <>
                    <View>
                        <View style={styles.line} />
                        <Text bold numberOfLines={2} lineHeight={18} fontSize={17}>
                            £20.00
                        </Text>
                    </View>

                    <View>
                        <Text color="red" bold numberOfLines={2} lineHeight={18} fontSize={17} style={styles.price}>
                            £20.00
                        </Text>
                    </View>
                </>
            ) : (
                <View>
                    <Text bold numberOfLines={2} lineHeight={18} fontSize={17}>
                        £20.00
                    </Text>
                </View>
            )}
        </View>
    );
};

export default PriceItem;

const styles = StyleSheet.create({
    container: {
        height: 25,
        flexDirection: 'row',
    },
    price: {
        paddingLeft: 5,
    },
    line: {
        width: 50,
        height: 1.3,
        backgroundColor: '#E6E6E6',
        position: 'absolute',
        top: 9,
        left: 5,
    },
});
