import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import { Images } from '../../style/images';
import { Text } from '../../style/typography';
import PriceItem from './priceItem';
import BorderButton from '../buttons/borderButton';
import HeartButton from '../buttons/heartButton';

type Props = {
    // style props
    right?: boolean;

    // data props
    id?: number;
    description?: string;
    price?: number;
    salePrice?: number;
    image?: any;
    isSellingFast?: boolean;
};

const BrowseItem: React.FC<Props> = ({ right, description, price, salePrice, image, isSellingFast }: Props) => {
    return (
        <View style={[styles.container, { marginLeft: right ? 10 : 0, marginRight: right ? 0 : 10 }]}>
            <Image source={image} style={styles.image} />
            <Text numberOfLines={2} lineHeight={17} fontSize={16} style={styles.description}>
                {description}
            </Text>
            <PriceItem price={price} salePrice={salePrice} />
            <BorderButton title="QUICK  ADD" />
            <HeartButton style={styles.heart} />
        </View>
    );
};

export default BrowseItem;

const styles = StyleSheet.create({
    container: {
        // borderWidth: 1,
        // height: 300,
        width: '47.2%',
        borderColor: 'white',
        marginBottom: 25,
    },
    image: {
        width: '100%',
        height: 270,
        resizeMode: 'contain',
    },
    description: {
        paddingTop: 20,
        // paddingBottom: 10,
        height: 65,
    },
    heart: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});
