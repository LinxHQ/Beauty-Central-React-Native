import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, ImageBackground} from 'react-native';
import OfferDetail from '../collection/offerDetail';

const { height } = Dimensions.get('window');
export default class Massage extends Component {
  render() {
    return (
        <ScrollView scrollEventThrottle={16}>
                    <View style={{ height:height/4 }}>
                        <ImageBackground style={{flex:1, width:null, height:null, resizeMode:'cover',backgroundColor:'#000', justifyContent:"center", opacity: 0.7}} source={require('../../images/massage.jpg')} >
                            <Text style={{color:'#fff', fontSize:30, fontWeight:"bold", textAlign:'center'}}>Massage</Text>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1, paddingTop:30}}>
                        <OfferDetail imageUri={require
                                ('../../images/massage2.jpeg')}
                                logo={require 
                                    ('../../images/logo1.jpeg')}
                                save="Save $70" nameB="Massage" studio="fennystudio" drive="Admiralty Drive"
                                price="$50.00" sale=" $120.00" time="100000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/massage3.png')}
                                logo={require 
                                    ('../../images/logo2.png')}
                                save="Save $70" nameB="Massage" studio="fennystudio" drive="Admiralty Drive"
                                price="$450.00" sale=" $550.00" time="200000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/massage4.jpg')}
                                logo={require 
                                    ('../../images/logo3.jpg')}
                                save="Save $70" nameB="Massage" studio="janicechongmua" drive="Yishun"
                                price="$280.00" sale=" $300.00" time="300000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/massage1.jpg')}
                                logo={require 
                                    ('../../images/logo4.png')}
                                save="Save $70" nameB="Massage" studio="fennystudio" drive="Admiralty Drive"
                                price="$110.00" sale=" $130.00" time="400000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/massage5.jpg')}
                                logo={require 
                                    ('../../images/logo5.png')}
                                save="Save $70" nameB="Massage" studio="fennystudio" drive="Admiralty Drive"
                                price="$40.00" sale=" 50.00" time="500000"
                            />
                    </View>
                </ScrollView>

    );
  }
}
const styles = StyleSheet.create({

});