import React from 'react';
import { View, TextInput, Alert, StyleSheet, Text } from "react-native";
import { FONT_STYLE } from "../../data";

function NoteContents({ contents }: any) {
    console.log(contents.length);

    console.log("akjhndkjsankdjnakjdnjk", contents.map((el: any) => console.log(el)
    ));

    const renderContent = (item: any) => {
        console.log("itemitem", item);

        if (item.type == "text") {
            return (
                <TextInput
                    key={item.id}
                    defaultValue={item.text}
                    multiline={true}
                    style={styles.text}
                    // onChangeText={(e) => console.log(e)}
                    disableFullscreenUI={true}
                    placeholder="Title"
                    placeholderTextColor="grey"
                />
            )
        }
    }

    return (
        contents.map((item: any) => {
            return renderContent(item);
        })
    )
}

export default NoteContents;

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        fontFamily: FONT_STYLE,
        color: '#fff',
        lineHeight: 30,
    },
})