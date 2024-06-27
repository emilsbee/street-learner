import * as i from 'types';
import * as React from 'react';
import { StyleSheet, View, Text, Modal, Pressable } from 'react-native';

export const StreetModal = ({ visible, onClose, street }: StreetModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
    >
      <View style={styles.modal}>
        <Text>Locate {street} on the map</Text>
        <Pressable
          style={styles.button}
          onPress={() => onClose()}
        >
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

type StreetModalProps = {
  visible: boolean;
  onClose: () => void;
  street: string;
};

const styles = StyleSheet.create({
  modal: {
    margin: 20,
    marginTop: '50%',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
    backgroundColor: '#e63946',
    minWidth: 150,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
