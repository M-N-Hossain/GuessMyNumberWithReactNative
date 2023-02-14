import React from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import Colors from '../../constants/Colors'

export default function Card({children}) {
  return (
    <View style={styles.card}>{children}</View>

  )
}

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
  card: {
    // flex: 1,
    alignItems: "center",
    marginTop: deviceWidth <380 ? 12 : 36,
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