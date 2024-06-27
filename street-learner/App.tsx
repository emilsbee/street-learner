import * as i from 'types';
import React from 'react';
import MapView, { Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

import { StreetModal } from 'components/StreetModal';
import { useQuestion } from 'services/hooks/useQuestion';

const customMapStyle = [
  {
    "elementType": "labels",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "featureType": "administrative.neighborhood",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  }
]

export default function App() {
  const { currentStreet, minimize, isOpen } = useQuestion();

  return (
    <>
      <View style={styles.container}>
        <MapView
          initialRegion={{
            latitude: 56.9677,
            longitude: 24.1056,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          style={styles.map}
          provider="google"
          customMapStyle={customMapStyle}
          onPress={(e) => console.log(e.nativeEvent.coordinate)}
        >
          {/* {generateStreets().map((street) => (
            <Polyline
              key={street.streetName}
              coordinates={street.coordinates}
              strokeWidth={3}
              strokeColor='#0000FF'
              tappable
              onPress={(e) => setSelectedStreet(street)}
            />
          ))} */}
        </MapView>
      </View>
      <StreetModal
        street={currentStreet}
        visible={isOpen}
        onClose={minimize}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '100%',
    zIndex: -1,
  },
  modal: {
    width: '50%',
    height: '50%',
    position: 'absolute',
    top: '25%',
    right: '25%',
    backgroundColor: '#0000FF'
  }
});