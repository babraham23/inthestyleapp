import { StyleSheet } from 'react-native';
import React from 'react';
import BasicHeader from '../../components/headers/basicHeader';
import ScrollContext from '../../components/scrolls/scrollContext';
import BrowseItem from '../../components/layouts/browseItem';
import { browseDummyDataData } from '../../dummydata/browseData';
import { useUserContext } from '../../context/user.context';
import SortModal from '../../components/modals/sortModal';

const BrowseScreen = () => {
    const { browsingData } = useUserContext();
    const [visible, setVisible] = React.useState(true);
    return (
        <>
        <ScrollContext style={styles.container}>
            {browsingData.map(
                (item: {
                    id: React.Key | null | undefined;
                    description: string | undefined;
                    price: number | undefined;
                    salePrice: number | null | undefined;
                    image: any;
                    isSellingFast: boolean | undefined;
                }) => (
                    <BrowseItem
                        key={item.id}
                        id={item.id}
                        description={item.description}
                        price={item.price}
                        salePrice={item.salePrice}
                        image={item.image}
                        isSellingFast={item.isSellingFast}
                    />
                )
            )}
        </ScrollContext>
        <SortModal visible={visible} setVisible={setVisible} onPress={() => {}} />
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
