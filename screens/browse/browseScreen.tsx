import { StyleSheet } from 'react-native';
import React from 'react';
import BasicHeader from '../../components/headers/basicHeader';
import ScrollContext from '../../components/scrolls/scrollContext';
import BrowseItem from '../../components/layouts/browseItem';
import { browseData } from '../../dummydata/browseData';

const BrowseScreen = () => {
    return (
        <>
            <BasicHeader />
            <ScrollContext style={styles.container}>
                {browseData.map((item) => (
                    <BrowseItem 
                      key={item.id} 
                      id={item.id}
                      description={item.description}
                      price={item.price}
                      salePrice={item.salePrice}
                      image={item.image}
                      isSellingFast={item.isSellingFast}  
                    />
                ))}
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
    },
});
