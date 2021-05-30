import { Icon } from '@ui-kitten/components';
import React, { useRef } from 'react';
import { Alert, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import Layout from "../components/generics/Layout";
import Toolbar from '../components/generics/Toolbar';
import Typography from "../components/generics/Typography";
import { FONT_STYLE, ICON_COLOR, notes } from '../data';

function NoteDetailScreen({
    navigation,
    route,
}: any) {

    const { id } = route.params;

    const note = notes[id - 1];
    const titleRef = useRef<any>();

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
                <TextInput
                    defaultValue={note.title}
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
                />
                <TextInput
                    ref={titleRef}
                    defaultValue={note.description}
                    multiline={true}
                    disableFullscreenUI={true}
                    style={styles.description}
                    placeholder="Write your note..."
                />
            </ScrollView>
            <Toolbar />
        </Layout>
    )
}

export default NoteDetailScreen;

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