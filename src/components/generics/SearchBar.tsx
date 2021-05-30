import { Icon } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, TextInput, View } from "react-native";
import { ICON_COLOR } from '../../data';

function SearchBar() {
    return (
        <View
            style={styles.searchBar}
        >
            <Icon
                name="menu-outline"
                style={styles.icon}
                fill={ICON_COLOR}
            />
            <TextInput
                placeholder="Search..."
                style={styles.input}
            />
        </View>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    searchBar:{
        backgroundColor: '#1b1b1b',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10,
        paddingLeft: 5,
        borderRadius: 3,
    },
    input: {
        padding: 8,
        color: '#fff',
        width: '100%'
    },
    icon: {
        width: 32,
        height: 32,
    }
})