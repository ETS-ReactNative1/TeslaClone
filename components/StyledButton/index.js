import React from 'react'
import { Text, View, Pressable } from 'react-native'
import { back } from 'react-native/Libraries/Animated/Easing';

import styles from './styles'

const StyledButton = (props) => {

    const { type, content, onPress } = props

    const backgroundColour = type == 'primary' ? '#171A20CC' : '#FFFFFFA6'
    const textColour = type == 'primary' ? '#FFFFFF' : '#171A20'

    return (
        <View style={styles.container}>
            <Pressable
                style={[styles.button, { backgroundColor: backgroundColour }]}
                onPress={onPress}
            >
                <Text style={[styles.text, { color: textColour }]}>
                    {content}
                </Text>
            </Pressable>
        </View>
    );
};

export default StyledButton;