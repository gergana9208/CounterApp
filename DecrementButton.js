/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import type {Node} from 'react';
 import {
   Text,
   View,
   Button,
   StyleSheet,
   TouchableOpacity
 } from 'react-native';

 export default function DecrementButton({text, onPress}) {
     return(
         <TouchableOpacity onPress={onPress}>
             <View style={styles.button}>
                <Text style={styles.buttonText}>{ text } </Text>
             </View>
         </TouchableOpacity>
     )
 }

 const styles = StyleSheet.create({
button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#d32f2f'
    
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
      
    }

 })
 
 
    
 
 
 