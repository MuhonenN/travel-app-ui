import { View } from 'react-native';
import React from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { styles } from '../styles/styles';
import { TextInput } from 'react-native-gesture-handler';

export default function Input({ placeholder, onChangeText }) {
    return (
        <>
            <View style={styles.inputContainer}>
                <FontAwesome5
                    style={{
                        position: 'absolute',
                        left: 15,
                        top: 15,
                        color: '#aaa',
                    }}
                    name="search"
                    size={20}
                />
                <TextInput
                    placeholderTextColor="#aaa"
                    placeholder={placeholder}
                    style={styles.input}
                />
            </View>
        </>
    );
}
