import React from "react";
import { View, Text, ImageBackground } from 'react-native'

import StyledButton from "../StyledButton";
import styles from './styles'

const CarItem = (props) => {
  return (
    <View style={styles.carContainer}>

      <ImageBackground
        source={require('../../assets/images/ModelS.jpeg')}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting at $69,420</Text>
      </View>

      <StyledButton
        content={"Custom Order"}
        onPress={() => {
          console.warn("Custom Button Pressed")
        }}
        type="primary"
      />
      <StyledButton
        type="secondary"
        content={"Existing Inventory"}
        onPress={() => {
          console.warn("Existing Button Pressed")
        }}
      />

    </View>
  )
};

export default CarItem;