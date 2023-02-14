import React from 'react'
import { StyleSheet, View } from 'react-native'
import Colors from '../../constants/Colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>

  )
}

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: Colors.primary800,
    // elevetion only for andriod to give shadow around box
    elevation: 4,
    // for ios
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.5,
  },
})