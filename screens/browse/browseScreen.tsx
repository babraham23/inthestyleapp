import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import BasicHeader from '../../components/headers/basicHeader';
import ScrollContext from '../../components/scrolls/scrollContext';
import BrowseItem from '../../components/layouts/browseItem';

const BrowseScreen = () => {
    return (
        <>
            <BasicHeader />
            <ScrollContext style={styles.container} > 
                <BrowseItem />
                <BrowseItem right />
                <BrowseItem />
                <BrowseItem right />
                <BrowseItem />
                <BrowseItem right />
                <BrowseItem />
                <BrowseItem right />
            </ScrollContext>
        </>
    );
};

export default BrowseScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'black',
    },
});
