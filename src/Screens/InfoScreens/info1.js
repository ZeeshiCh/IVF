import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import Button from '../../components/Button/button';

const info1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.footerText}>التطبيقالتطبيقالتطبيقالتطبيقا عيادة</Text>
                <Text style={styles.footerText1}>التطبيقالتطبيقالتطبيق عيادةعيادة</Text>
            </View>
            <Button
                title="التطبيق"
                backgroundColor="#8ed5d7"
                textColor="white"
            />
        </View>
    )
}

export default info1

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        alignItems: 'center',
    },
    footerText: {
        fontSize: 28,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 2,
    },
    footerText1: {
        color: 'black',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 10,
    },
})