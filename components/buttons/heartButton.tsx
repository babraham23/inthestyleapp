import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useTheme } from '../../hooks/useTheme';

type Props = {
    style?: any;
};

const HeartButton = ({ style }: Props) => {
    const { colors } = useTheme();
    const [liked, setLiked] = React.useState(false);

    const handleLike = () => {
        if (liked) {
            setLiked(false);
        } else {
            setLiked(true);
        }
    };

    return (
        <TouchableOpacity onPress={() => handleLike()} style={[style]}>
            {liked ? <MaterialCommunityIcons name="heart" size={30} color={colors.primary} /> : <MaterialCommunityIcons name="heart-outline" size={30} color={colors.primary} />}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({});

export default HeartButton;
