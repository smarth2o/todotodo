import React, { useState } from 'react';
import { Modal, StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import {theme} from "../colors";
import ModalTitle from './ModalTitle';
import BottomButtons from './BottomButtons';

const BottomSheet = ({ title, isVisible, onClose, contentComponent, primaryText, onPrimaryPress }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.sheet}> 
            <ModalTitle title={title} onClose={onClose}/>
            {contentComponent}
            <BottomButtons primaryText={primaryText} secondaryText="취소하기" 
                onPrimaryPress={onPrimaryPress} onSecondaryPress={onClose}
            />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
  },
  sheet: {
    backgroundColor: theme.background,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 30,
    paddingVertical: 30,
  },
});

export default BottomSheet;
