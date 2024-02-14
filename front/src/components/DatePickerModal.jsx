import React, { useState } from 'react';
import { StyleSheet, View, Pressable, Text, Modal } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { theme } from '../colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ModalButtons from './ModalButtons';

const DatePickerModal = ({ isVisible, onClose, onSelectDate }) => {
  const [selectedDate, setSelectedDate] = useState('');

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
  };

  const handleConfirm = () => {
    console.log("날짜 선택: ", selectedDate);
    onSelectDate(selectedDate);
    onClose();
  };

  const handleClose = () => {
    setSelectedDate('');
    onClose();
  }

  return (
    <Modal
      animationType="none"
      transparent={true}
      visible={isVisible}
      onRequestClose={handleClose}
    >
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.calendarContainer}>
            <Calendar
              onDayPress={handleDayPress}
              markedDates={{ [selectedDate]: { selected: true } }}
            />
          </View>
          <ModalButtons 
            primaryText="확인" onPrimaryPress={handleConfirm}
            secondaryText="취소" onSecondaryPress={handleClose}
        />
        </View>
      </View>
    </Modal>
  );
};

export default DatePickerModal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    // width: '80%',
  },
  calendarContainer: {
    // marginBottom: 20,
  }
});
