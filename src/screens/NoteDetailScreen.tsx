import { Icon } from '@ui-kitten/components';
import { observer } from 'mobx-react-lite';
import React, { useEffect, useRef } from 'react';
import { StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Layout from "../components/generics/Layout";
import Toolbar from '../components/generics/Toolbar';
import Typography from "../components/generics/Typography";
import NoteContents from '../components/Notes/NoteContents';
import { FONT_STYLE, ICON_COLOR } from '../data';
import { useStores } from '../hooks/useStores';

function NoteDetailScreen({
    navigation,
    route,
}: any) {

    const titleRef = useRef<any>();
    const { id } = route.params;
    const { noteStore } = useStores();
    // const { note, contents, fetchANote, fetchContents } = noteStore;

    useEffect(() => {
        noteStore.fetchANote(id);
    }, []);

    console.log("noteStore.contents", noteStore.contents);

    useEffect(() => {
        console.log("--->>>>><<<<<<------");
        if (noteStore.note) {
            noteStore.fetchContents(noteStore.note.id);
        }
    }, [noteStore.note,]);

    return (
        <Layout
            scrollView={false}
        >
            <View style={styles.header}>
                <Icon
                    name="arrow-ios-back-outline"
                    fill={ICON_COLOR}
                    style={styles.icon}
                    onPress={() => navigation.goBack()}
                />
                <Typography>
                    Updated at
                </Typography>
                <Icon
                    name="trash-2-outline"
                    fill={ICON_COLOR}
                    style={styles.iconAlt}
                    onPress={() => navigation.goBack()}
                />
            </View>

            <ScrollView
                style={styles.container}
            >
                {
                    noteStore.note
                        ?
                        <>
                            <TextInput
                                defaultValue={noteStore.note.title}
                                multiline={true}
                                style={styles.title}
                                onKeyPress={(e) => {
                                    if (e.nativeEvent.key === 'Enter') {
                                        titleRef.current.focus();
                                    }
                                }}
                                // onChangeText={(e) => console.log(e)}
                                disableFullscreenUI={true}
                                placeholder="Title"
                                placeholderTextColor="grey"
                            />
                            {
                                noteStore.contents.length > 0 && noteStore.contents
                                    ?
                                    <NoteContents
                                        contents={noteStore.contents}
                                    />
                                    : null
                            }
                        </>
                        : null
                }
            </ScrollView>
            <Toolbar />
        </Layout>
    )
}

export default observer(NoteDetailScreen);

const styles = StyleSheet.create({
    header: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    icon: {
        width: 32,
        height: 32,
    },
    iconAlt: {
        width: 22,
        height: 22,
    },
    container: {
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 32,
        fontFamily: FONT_STYLE,
        color: '#fff',
    },
    description: {
        fontFamily: FONT_STYLE,
        color: '#fff',
        lineHeight: 20,
    }
})