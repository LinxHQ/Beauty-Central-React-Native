import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, ImageBackground} from 'react-native';
import { Container, Header, Content, Button, Icon, Left, Body, Title, Right} from 'native-base';
import { Actions } from 'react-native-router-flux';
import OfferDetail from '../collection/offerDetail';

const { height } = Dimensions.get('window');
export default class CollectionDetail extends Component {  
  render() {
    return (
        <Container>
            <Header style={{backgroundColor:'#fff'}}>
                <Left>
                    <Button onPress={() => Actions.pop()} transparent>
                    <Icon name='arrow-back' style={{ color:'#000'}}/>
                    </Button>
                </Left>
                <Body>
                    <Title style={{color:'#000'}}>{this.props.nameOffer}</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{ height:height/4 }}>
                        <ImageBackground style={{flex:1, width:null, height:null, resizeMode:'cover',backgroundColor:'#000', justifyContent:"center", opacity: 0.7}} source={this.props.imageUri}>
                            <Text style={{color:'#fff', fontSize:25, fontWeight:"bold", textAlign:'center'}}>{this.props.nameOffer}</Text>
                            <Text style={{color:'#fff', fontSize:17, textAlign:'center'}}>{this.props.offer}</Text>
                        </ImageBackground>
                    </View>
                    <View style={{flex:1, paddingTop:30}}>
                        <OfferDetail imageUri={require
                                ('../../images/makeup5.jpg')}
                                logo={require 
                                    ('../../images/logo1.jpeg')}
                                save="Save $70" nameB="Makeup &Hairstyling- 1 pax" studio="fennystudio" drive="Admiralty Drive"
                                price="$50.00" sale=" $120.00" time="100000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/makeup6.jpg')}
                                logo={require 
                                    ('../../images/logo2.png')}
                                save="Save $70" nameB="Bridal Makeup&Hairstyli..." studio="fennystudio" drive="Admiralty Drive"
                                price="$450.00" sale=" $550.00" time="200000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/hair5.jpg')}
                                logo={require 
                                    ('../../images/logo3.jpg')}
                                save="Save $70" nameB="Actual Day Makeup and Hair" studio="janicechongmua" drive="Yishun"
                                price="$280.00" sale=" $300.00" time="300000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/22179872_783572505136727_6530930384593596483_o.jpg')}
                                logo={require 
                                    ('../../images/logo4.png')}
                                save="Save $70" nameB="eyebrw Threading Full Body Waxing..." studio="fennystudio" drive="Admiralty Drive"
                                price="$110.00" sale=" $130.00" time="400000"
                            />
                            <OfferDetail imageUri={require
                                ('../../images/42586795_996112553882720_163809614582775808_o.jpg')}
                                logo={require 
                                    ('../../images/logo5.png')}
                                save="Save $70" nameB="Eyebrow Threading, Sexy Back Treatm..." studio="fennystudio" drive="Admiralty Drive"
                                price="$40.00" sale=" 50.00" time="500000"
                            />
                    </View>
                </ScrollView>
            </Content>
        </Container>

    );
  }
}
const styles = StyleSheet.create({

});