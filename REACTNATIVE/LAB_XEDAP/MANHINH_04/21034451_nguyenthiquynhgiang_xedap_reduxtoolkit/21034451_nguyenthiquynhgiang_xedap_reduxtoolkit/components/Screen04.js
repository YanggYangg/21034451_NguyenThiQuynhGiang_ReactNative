import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

const EditScreen = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const { item } = route.params;

    const [name, setName] = useState(item.name);
    const [price, setPrice] = useState(item.price);

    const handleSave = () => {
        navigation.navigate('Screen02', { updatedItem: { ...item, name, price } });
    };

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={name}
                onChangeText={setName}
            />
            <TextInput
                style={styles.input}
                value={price}
                onChangeText={setPrice}
            />
            <TouchableOpacity onPress={handleSave} style={styles.button}>
                <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingLeft: 10,
    },
    button: {
        backgroundColor: 'pink',
        padding: 10,
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default EditScreen;