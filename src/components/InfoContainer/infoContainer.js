import React from 'react';
import { StyleSheet, View, Text, FlatList, Image } from 'react-native';

const InfoContainer = ({ cards = [] }) => {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.infoTitle}>معلومات لك</Text>
            <FlatList
                data={cards}
                keyExtractor={(item, index) => index.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={item.image} style={styles.cardImage} />
                        <Text style={styles.cardTitle}>{item.title}</Text>
                        <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
                    </View>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    infoContainer: {
        paddingVertical: 20,
    },
    infoTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#8ed5d7',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        marginRight: 20,
        elevation: 2,
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#8ed5d7',
        height: 250,
        width: 200,
    },
    cardImage: {
        width: 150,
        height: 120,
        marginBottom: 10,
    },
    cardTitle: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'black',
        marginBottom: 5,
    },
    cardSubtitle: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
});

export default InfoContainer;
