import React, {useState, useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function Effect() {

    const [joke, setJoke] = useState('Why did the chicken cross the road lol');

    useEffect(() => {
        const newJoke = fetch('https://api.chucknorris.io/jokes/random')
        .then(response => {
            console.log(response);
        })
        .catch(err => {
            console.log(err)
        });
    }, []);

    const changeJoke = () => {
        setJoke('This is a new joke')
    }

    return (
        <View>
            <Text>{joke}</Text>
        </View>
    )
}