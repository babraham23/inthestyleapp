import { StyleSheet, View } from 'react-native';
import React from 'react';
import BasicHeader from '../../components/headers/basicHeader';
import ScrollContext from '../../components/scrolls/scrollContext';
import BrowseItem from '../../components/layouts/browseItem';
import { useUserContext } from '../../context/user.context';


const Content = () => {
    const { browsingData } = useUserContext();
    const [visible, setVisible] = React.useState(false);
    return (
        <>
            <View style={styles.container}>
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
            </View>
        </>
    );
};

export default Content;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
});
