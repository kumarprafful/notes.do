import React from "react";
import { StyleSheet, View } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

interface Props {
    children: JSX.Element[] | JSX.Element,
    scrollView?: boolean,
}

function Layout({
    children,
    scrollView = true,
}: Props) {
    return (
        <SafeAreaView
            style={styles.container}
        >
            {
                scrollView
                    ?
                    <ScrollView>
                        {children}
                    </ScrollView>
                    :
                    <View
                        style={styles.container}
                    >
                        {children}
                    </View>
            }

        </SafeAreaView>
    )
}

export default Layout;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
    }
})