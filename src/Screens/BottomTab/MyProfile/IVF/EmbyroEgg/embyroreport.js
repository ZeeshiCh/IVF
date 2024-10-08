import React from 'react';
import { StyleSheet, View, Text, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../../../../components/Header/header';
import AppColors from '../../../../../utils/appColors';
const { width } = Dimensions.get('window');

export default function EmbyroReport() {
    return (
        <View style={styles.container}>
            <Header headerText="Embryology report" />
            <ScrollView contentContainerStyle={styles.contentContainer}>
                <View style={styles.headerRow}>
                    <TouchableOpacity style={styles.headerButton}>
                        <Text style={styles.headerButtonText}>17th July 2024</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.sectionTitleContainer}>
                    <Text style={styles.sectionTitle}>Here are your results</Text>
                </View>
                <View style={styles.follicleContainer}>
                    <View style={styles.follicleCircleContainer}>
                        <View style={[styles.follicleCircle, styles.follicleCircleFilled]}>
                            <Text style={styles.follicleCount}>8</Text>
                            <View style={styles.follicleInnerCircle} />
                        </View>
                        <Text style={styles.follicleLabel}>Number of eggs</Text>
                    </View>
                    <View style={styles.follicleCircleContainer}>
                        <View style={styles.follicleCircle}>
                            <Text style={styles.follicleCount}>0</Text>
                            <View style={styles.follicleInnerCircle} />
                        </View>
                        <Text style={styles.follicleLabel}>Number of fetuses (total)</Text>
                    </View>
                    <View style={styles.follicleCircleContainer}>
                        <View style={styles.follicleCircle}>
                            <Text style={styles.follicleCount}>0</Text>
                            <View style={styles.follicleInnerCircle} />
                        </View>
                        <Text style={styles.follicleLabel}>Number of embryos transferred</Text>
                    </View>
                    <View style={styles.follicleCircleContainer}>
                        <View style={styles.follicleCircle}>
                            <Text style={styles.follicleCount}>0</Text>
                            <View style={styles.follicleInnerCircle} />
                        </View>
                        <Text style={styles.follicleLabel}>Numbers of frozen embryos</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: AppColors.white,
        paddingTop: 20,
        alignItems: 'center',
    },
    contentContainer: {
        alignItems: 'center',
        paddingVertical: 20,
    },
    headerRow: {
        flexDirection: 'row',
        width: width * 0.9,
        marginBottom: 20,
        justifyContent:'center',
    },
    headerButton: {
        backgroundColor: AppColors.lavenderBlue,
        borderRadius: 25,
        paddingVertical: 10,
        paddingHorizontal: 50,
    },
    headerButtonText: {
        color: AppColors.white,
        fontSize: 16,
    },
    sectionTitleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20,
        textAlign: 'center',
    },
    sectionTitle: {
        color: AppColors.grey,
        fontSize: 26,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    follicleContainer: {
        width: width * 0.8,
    },
    follicleCircleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },
    follicleCircle: {
        width: 160,
        height: 160,
        borderRadius: 80,
        backgroundColor: '#FFE6EB',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        borderWidth: 15,
        borderColor: '#FFCDD2',
    },
    follicleCircleFilled: {
        backgroundColor: 'transparent',
    },
    follicleInnerCircle: {
        position: 'absolute',
        width: 130,
        height: 130,
        borderRadius: 65,
        backgroundColor: AppColors.white,
        zIndex: -1,
    },
    follicleCount: {
        fontSize: 24,
        color: AppColors.cherryBlossom,
        fontWeight: 'bold',
    },
    follicleLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: AppColors.lavenderBlue,
        marginLeft: 15,
    },
});
