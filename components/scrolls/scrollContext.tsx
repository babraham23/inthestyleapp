import React, { useState } from 'react';
import { Animated, View, StyleSheet, FlatList } from 'react-native';
import { useUserContext } from '../../context/user.context';
import { Text } from '../../style/typography';
import BasicHeader from '../headers/basicHeader';
import OpacityHeader from '../headers/opacityHeader';
import FadingText from '../layouts/fadingText';
import Content from './content';
import BrowseItem from '../../components/layouts/browseItem';

const ScrollContext = ({ children, applyState, style, setVisible }: any) => {
    const [scrollYValue, setScrollYValue] = useState(new Animated.Value(0));
    const { browsingData } = useUserContext();

    return (
        <>
            <BasicHeader />
            <View style={styles.container}>
                <FadingText />
                <OpacityHeader setVisible={setVisible} scrollYValue={scrollYValue} applyState={applyState} />
                <FlatList
                    data={browsingData}
                    indicatorStyle="black"
                    snapToEnd={false}
                    decelerationRate="normal"
                    scrollEventThrottle={16}
                    onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], { useNativeDriver: false })}
                    contentContainerStyle={styles.container}
                    style={styles.contentContainer}
                    renderItem={({ item }) => (
                        <BrowseItem
                            key={item.id}
                            id={item.id}
                            description={item.description}
                            price={item.price}
                            salePrice={item.salePrice}
                            image={item.image}
                            isSellingFast={item.isSellingFast}
                        />
                    )}
                />

                {/* <Animated.ScrollView
                snapToOffsets={snapToOffsets}
                snapToEnd={false}
                decelerationRate="normal"
                scrollEventThrottle={16}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.contentContianer}
                onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: scrollYValue } } }], { useNativeDriver: true })}
                contentInsetAdjustmentBehavior="automatic"
            >
                <View style={style}>{children}</View>
            </Animated.ScrollView> */}
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    contentContianer: {
        flexGrow: 1,
        paddingTop: 100,
    },
    notificationWrapper: {
        width: '100%',
        height: 40,
        backgroundColor: 'black',
        zIndex: 99,
        justifyContent: 'center',
    },
});

export default ScrollContext;
