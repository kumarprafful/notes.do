import React from 'react';
import { StyleSheet, TextInput } from "react-native";

function SearchBar() {
    return (
        <>
            <TextInput
                placeholder="Search..."
                style={styles.input}
            />
        </>
    )
}
export default SearchBar;

const styles = StyleSheet.create({
    input: {
        backgroundColor: '#1b1b1b',
        padding: 10,
        margin: 10,
        borderRadius: 3,
        color: '#fff',
    }
})