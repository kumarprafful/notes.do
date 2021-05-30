import React, { useRef } from 'react';
import { Icon } from '@ui-kitten/components';

import { Animated, KeyboardAvoidingView, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

function Toolbar() {

    const tools = [
        {
            key: 'image',
            icon: 'image-outline',
        },
        {
            key: 'video',
            icon: 'video-outline',
        },
        {
            key: 'imagea',
            icon: 'image-outline',
        },
        {
            key: 'audio',
            icon: 'mic-outline',
        },
    ]
    const animatedHeight = useRef(new Animated.Value(100)).current;
    const animatedWidth = useRef(new Animated.Value(100)).current;

    const animatedIcon = () => {
        Animated.timing(animatedWidth, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: true // Add This line

        }).start()
        Animated.timing(animatedWidth, {
            toValue: 200,
            duration: 1000,
            useNativeDriver: true // Add This line
        }).start()

    }

    const animatedStyle = {
        transform: [{
            scaleY: animatedWidth,
            // scaleY: animatedHeight,
        }],
    }

    return (
        <KeyboardAvoidingView
            style={styles.toolbar}
        >
            <ScrollView
                horizontal={true}
                contentContainerStyle={styles.toolbarContainer}
            >
                <View
                    style={styles.container}
                >
                    {
                        tools.map((tool) => (
                            <TouchableOpacity
                                key={tool.key}
                            >
                                <Icon
                                    name={tool.icon}
                                    style={styles.icon}
                                    fill='#000'
                                />
                            </TouchableOpacity>
                        ))
                    }
                </View>
            </ScrollView>
            <TouchableOpacity
                style={styles.micIconContainer}
                onPress={animatedIcon}
                onLongPress={() => { }}
            >
                {/* <Animated.View
                    style={animatedStyle}
                > */}
                    <Icon
                        name="mic-outline"
                        style={styles.micIcon}
                        fill='#000'
                    />
                {/* </Animated.View> */}
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    toolbar: {
        position: 'relative',
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'pink',
        height: 35,
        flexDirection: "row",
    },
    toolbarContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        // width: '80%',
    },
    container: {
        flexDirection: 'row',
    },
    icon: {
        height: 28,
        width: 28,
        margin: 5,
    },
    micIconContainer: {
        position: "absolute",
        right: 0,
        bottom: 0,
        backgroundColor: "pink",
        borderColor: "#000",
        borderWidth: 1,
        height: 60,
        width: 60,
        padding: 10,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center",

    },
    micIcon: {
        width: 32,
        height: 32,
    }
})

export default Toolbar;