import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import InfoContainer from '../../components/InfoContainer/infoContainer';
import Image1 from '../../assets/images/1.png';
import Image2 from '../../assets/images/2.png';
import Image3 from '../../assets/images/3.png';
import Image4 from '../../assets/images/4.png';

const cards = [
    { title: 'علاج الصداع والأرق', subtitle: 'وصف المنتج بشكل مختصر وصف المنتج', image: Image1 },
    { title: 'قرآءوا عاحصلما جلاء', subtitle: 'وصف المنتج بشكل مختصر وصف المنتج', image: Image2 },
    { title: 'علاج الصداع والأرق', subtitle: 'وصف المنتج بشكل مختصر وصف المنتج', image: Image3 },
    { title: 'علاج الصداع والأرق', subtitle: 'وصف المنتج بشكل مختصر وصف المنتج', image: Image4 },
];

const generateWeekDates = (startDate) => {
    const weekDates = [];
    for (let i = 0; i < 7; i++) {
        const date = new Date(startDate);
        date.setDate(date.getDate() + i);
        weekDates.push(date);
    }
    return weekDates;
};

const formatDate = (date) => {
    const day = date.getDate();
    const weekday = date.toLocaleDateString('en-US', { weekday: 'short' });
    return { day, weekday };
};

export default function HomeScreen() {
    const today = new Date();
    const weekDates = generateWeekDates(today);

    const [selectedDate, setSelectedDate] = useState(today.toDateString());
    const [isToggled, setIsToggled] = useState(false);

    const handleDatePress = (date) => {
        setSelectedDate(date.toDateString());
    };

    const handleToggle = (value) => {
        setIsToggled(value);
    };

    const tasks = [
        { time: '6:00 PM', title: 'خُذ وصفة طبية', subtitle: 'Paracetamol, 10 mg' },
        { title: 'أعراضك اليومية', subtitle: 'سعيد، اكتشاف أحمر، etc' },
        { time: '7:00 PM', title: 'اختبار معمل', subtitle: 'النص أو الملاحظة تذكر المريض' },
    ];

    const chatData = {
        username: 'فاطمة',
        time: '10 ساعات',
        message: 'انه يهذي ناوعلا نص نصفي فقط للسياق نص نصفي فقط للسياق نص نصفي فقط للسياق نص نصفي فقط للسياق نص نصفي فقط للسياق نص نصفي فقط للسياق هذا نص نصفي',
    };

    return (
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor="white" barStyle="dark-content" />
            <View style={styles.header}>
                <View style={styles.profileIcon}>
                    <Ionicons name="person-circle" size={42} color="white" />
                </View>
                <Text style={styles.headerText}>صفحة المنزل</Text>
                <View style={styles.menuIcon}>
                    <Ionicons name="menu" size={32} color="white" />
                </View>
            </View>

            <View style={styles.welcomeContainer}>
                <Text style={styles.welcomeText}>مرحباً بك على متن المستخدم</Text>
            </View>

            <View style={styles.contentContainer}>
                <View style={styles.stageContainer}>
                    <Text style={styles.stageTitle}>المرحلة الخاصة بك</Text>
                    <View style={styles.stageSteps}>
                        <View style={styles.step}>
                            <Ionicons name="color-palette" size={30} color="#ccc" />
                            <Text style={styles.stepText}>دورة الحمل</Text>
                        </View>
                        <View style={styles.step}>
                            <Ionicons name="flask" size={30} color="#ccc" />
                            <Text style={styles.stepText}>تاريخ</Text>
                        </View>
                        <View style={styles.step}>
                            <Ionicons name="clipboard" size={30} color="#ccc" />
                            <Text style={styles.stepText}>تشخيص</Text>
                        </View>
                        <View style={styles.step}>
                            <Ionicons name="medkit" size={30} color="#45b7c4" />
                            <Text style={styles.stepTextActive}>أساسي</Text>
                        </View>
                    </View>
                </View>

                <View style={styles.calendarContainer}>
                    <View style={styles.calendarHeader}>
                        <Text style={styles.calendarTitle}>July 2024</Text>
                        <Ionicons name="calendar" size={20} color="#8ed5d7" />
                    </View>
                    <FlatList
                        data={weekDates}
                        keyExtractor={(item) => item.toISOString()}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            const { day, weekday } = formatDate(item);
                            const isSelected = item.toDateString() === selectedDate;
                            return (
                                <TouchableOpacity
                                    onPress={() => handleDatePress(item)}
                                    style={[styles.day, isSelected && styles.selectedDay]}
                                >
                                    <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{day}</Text>
                                    <Text style={[styles.dayText, isSelected && styles.selectedDayText]}>{weekday}</Text>
                                </TouchableOpacity>
                            );
                        }}
                    />
                </View>

                <View style={styles.tasksContainer}>
                    <FlatList
                        data={tasks}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <View style={[styles.task, index === tasks.length - 1 && styles.lastTask]}>
                                <View style={styles.taskTextContainer}>
                                    <Text style={styles.taskTime}>{item.time}</Text>
                                    <Text style={styles.taskTitle}>{item.title}</Text>
                                    <Text style={styles.taskSubtitle}>{item.subtitle}</Text>
                                </View>
                                {item.time && (
                                    <Ionicons name={item.time === 'N/A' ? 'document' : item.time === '7:00 PM' ? 'flask' : 'checkmark-circle'} size={24} color="#8ed5d7" style={styles.taskIcon} />
                                )}
                            </View>
                        )}
                    />
                </View>

                <InfoContainer cards={cards} />

                <View style={styles.chatContainer}>
                    <View style={styles.chatHeader}>
                        <Switch
                            value={isToggled}
                            onValueChange={handleToggle}
                            thumbColor={isToggled ? "#4ab0a3" : "#f4f3f4"}
                            trackColor={{ false: "#ccc", true: "#4ab0a3" }}
                            style={styles.switch}
                        />
                        <Text style={styles.chatTitle}>أحدث محادثة</Text>
                    </View>
                    <View style={styles.chatMessageContainer}>
                        <View style={styles.chatUserInfo}>
                            <View style={{ marginRight: 10 }}>
                                <Text style={styles.chatUsername}>{chatData.username}</Text>
                                <Text style={styles.chatTime}>{chatData.time}</Text>
                            </View>
                            <Ionicons name="person-circle" size={40} color="#8ed5d7" />
                        </View>
                        <Text style={styles.messageTitle}>أحدث محادثة</Text>
                        <Text style={styles.chatMessage}>{chatData.message}</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    header: {
        backgroundColor: '#8ed5d7',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        paddingTop: 10 + (StatusBar.currentHeight || 0),
    },
    headerText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },
    menuIcon: {
        padding: 5,
    },
    profileIcon: {
        padding: 5,
    },
    welcomeContainer: {
        backgroundColor: '#8ed5d7',
        padding: 25,
        alignItems: 'center',
        borderBottomRightRadius: 30,
        borderBottomLeftRadius: 30,
    },
    welcomeText: {
        color: 'white',
        fontSize: 26,
    },
    contentContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    stageContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 0,
    },
    stageTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    stageSteps: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    step: {
        alignItems: 'center',
    },
    stepText: {
        color: '#ccc',
        marginTop: 5,
    },
    stepTextActive: {
        color: '#45b7c4',
        marginTop: 5,
    },
    calendarContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 0,
    },
    calendarHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginBottom: 10,
    },
    calendarTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#8ed5d7',
        marginRight: 5,
    },
    day: {
        alignItems: 'center',
        padding: 20,
        marginRight: 15,
        borderRadius: 15,
        borderWidth: 1.5,
        borderColor: '#8ed5d7',
        backgroundColor: '#fff',
    },
    selectedDay: {
        backgroundColor: '#8ed5d7',
        borderColor: '#8ed5d7',
    },
    selectedDayText: {
        color: '#fff',
    },
    dayText: {
        color: '#333',
        fontSize: 18,
        fontWeight: 'bold'
    },
    tasksContainer: {
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        marginVertical: 10,
        elevation: 3,
    },
    task: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        justifyContent: 'space-between',
        borderBottomWidth: 2,
        borderBottomColor: '#8ed5d7',
        paddingBottom: 10,
    },
    lastTask: {
        borderBottomWidth: 0,
    },
    taskIcon: {
        marginLeft: 10,
    },
    taskTextContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    taskTitle: {
        fontWeight: 'bold',
        color: '#8ed5d7',
        fontSize: 22,
    },
    taskSubtitle: {
        color: '#8ed5d7',
        fontSize: 16,
    },
    taskTime: {
        color: '#8ed5d7',
        marginBottom: 5,
    },
    chatContainer: {
        backgroundColor: '#e6fcfc',
        padding: 20,
        borderRadius: 10,
        marginVertical: 10,
    },
    chatHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
    },
    switch: {
        marginRight: 10,
    },
    chatTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#8ed5d7',
    },
    chatMessageContainer: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        borderColor: '#8ed5d7',
        borderWidth: 2,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    chatUserInfo: {
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    chatUsername: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
        marginBottom: 5,
    },
    chatTime: {
        fontSize: 14,
        color: '#999',
    },
    messageTitle:{
        marginTop:10,
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
    },
    chatMessage: {
        fontSize: 16,
        color: '#333',
        lineHeight: 24,
        flex: 1,
    },
});
