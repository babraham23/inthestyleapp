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
    const [visible, setVisible] = React.useState(false);
    return (
            <ScrollContext setVisible={setVisible} />
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
