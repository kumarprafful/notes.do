import React, { useState } from 'react';
import { Dimensions, Platform, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import Layout from '../components/generics/Layout';
import SearchBar from '../components/generics/SearchBar';
import Typography from '../components/generics/Typography';
import { PRIMARY_COLOR, PRIMARY_COLOR_TRANSPARENT, notes } from '../data';

function HomeScreen({
    navigation,
}: any) {
    const platform = Platform.OS;
    const isWeb = platform === 'web';
    const [selected, setSelected] = useState<any>([2,]);

    const select = (id: number) => {
        const index = selected.findIndex((el: number) => el === id);
        if (index === -1) {
            const newSelected = selected.concat(id);
            setSelected(newSelected);
        } else {
            const newSelected = selected.filter((el: number) => el !== id);
            setSelected(newSelected);
        }
    }

    const isSelected = (id: number) => {
        const index = selected.findIndex((el: number) => el === id);
        if (index === -1) return false;
        return true;
    }

    const { height } = Dimensions.get('window');

    return (
        <Layout
            scrollView={false}
        >
            <SearchBar />
            <ScrollView contentContainerStyle={styles.grid}>
                {
                    notes.map((item, index) => (
                        <TouchableOpacity
                            activeOpacity={1}
                            // onLongPress={() => {
                            //     Vibration.vibrate(50);
                            //     select(item.id);
                            // }}
                            onPress={() => {
                                navigation.navigate('Detail', { id: item.id })
                            }}
                            delayLongPress={5}
                            style={[
                                styles.card,
                                {
                                    width: isWeb ? 'fit-content' : '48%',
                                    backgroundColor: isSelected(item.id) ? PRIMARY_COLOR_TRANSPARENT : 'transparent',
                                    minHeight: height / 5,
                                    height: height / 5,
                                }
                            ]}
                            key={index}
                        >
                            <Typography
                                variant="h4"
                            >
                                {item.title}
                            </Typography>
                            <Typography>
                                {item.description}
                            </Typography>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>
        </Layout>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    grid: {
        flexWrap: 'wrap',
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    card: {
        backgroundColor: '#000',
        color: '#fff',
        borderColor: '#3d2f2f',
        borderWidth: 0.5,
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 4,
        borderRadius: 3,
        flexWrap: 'nowrap',
        alignItems: 'flex-start',
        overflow: 'hidden',
    }
})