import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import Mapview, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps'
import {Feather} from '@expo/vector-icons'
import mapMarker from '../images/mapMarker.png';
import { useNavigation } from '@react-navigation/native';








export default function OrphanageMap(){


    const navigation = useNavigation();



    function handleNavigateToOrphanageDetails(){

        navigation.navigate('OrphanagesDetails')

    }




    return (
        <View style={styles.container}>
        <Mapview initialRegion={{
          latitude: -21.673189,
          longitude: -49.747083,
          latitudeDelta: 0.008,
          longitudeDelta: 0.008,
        }} provider={PROVIDER_GOOGLE} style={styles.map}
        
        >
  
          <Marker icon={mapMarker} 
          calloutAnchor={{
            x: 2.8,
            y: 0.8,
          }}
          coordinate={{
            latitude: -21.673189,
            longitude: -49.747083,
          }}
          >
  
            <Callout tooltip onPress={handleNavigateToOrphanageDetails}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutText}>
                  Orfanato
                </Text>
              </View>
            </Callout>
  
            
          </Marker>
  
  
  
  
  
        </Mapview>
  
        <View style={styles.footer}>
          <Text style={styles.footerText}>2 orfanatos encontrados</Text>
          <TouchableOpacity style={styles.createOrphanageButton} onPress={()=>{}} >
            <Feather name="plus" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>
        <StatusBar style="auto" />
      </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  
    map: {
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
  
    },
  
    calloutContainer: {
      width: 160,
      height: 46,
      paddingHorizontal: 16,
      backgroundColor: 'rgba(255,255,255,0.8)',
      borderRadius: 16,
      justifyContent: 'center',
  
    },
  
    calloutText:{
      color: '#0089a5',
      fontSize: 14,
      fontFamily: 'Nunito_700Bold'
  
    },
  
    footer: {
  
      position: 'absolute',
      left: 24,
      right: 24,
      bottom: 32,
  
  
      backgroundColor: '#FFF',
      borderRadius: 20,
      height: 56,
      paddingLeft: 24,
  
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      elevation: 5,
    },
  
  
    footerText: {
      color: '#8fa7b3',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Nunito_700Bold'
    },
  
    createOrphanageButton: {
      width: 56,
      height: 56,
      backgroundColor: '#15c3d6',
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
    }
  
  
  
  });
  