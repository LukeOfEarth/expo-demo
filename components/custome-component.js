import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function CustomComponent() {

    const [text, setText] = useState('This text is coming from the state');
    const [count, setCount] = useState(0);

    const buttonClick = () => {
        setText('The button was clicked!');
    }

    const increment = () => {
        setCount(count +1);
    }

    return (
      <View>
        <Text>
          {text}
        </Text>
        <Button onPress={buttonClick}><Text>Change Text</Text></Button>
        <Text>{count}</Text>
        <Button onPress={increment}><Text>Change Text</Text></Button>
      </View>
    )
}