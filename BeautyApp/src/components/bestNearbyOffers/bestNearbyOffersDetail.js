import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Content, Button, Icon, Footer, Left, Body, Title, Right} from 'native-base';
import { SliderBox } from 'react-native-image-slider-box';
import CountDown from 'react-native-countdown-component';
import { FlatList } from 'react-native-gesture-handler';
import { Actions } from 'react-native-router-flux';

export default class BestNearbyOffersDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [
                'https://source.unsplash.com/1024x768/?makeup',
                'https://source.unsplash.com/1024x768/?beauty',
                'https://source.unsplash.com/1024x768/?girl',
            ],
            data1: [
                {text: 'This offer entitle you to $68.00 worth of service listed bolow for only $38.00.'},
                {text: 'Service must be booked and completed by 31 Oct 2019.'},
                {text: 'Booking can be made immediately after thr offer has been purchased, subject to availability. book your offer from My Account>Wallet>Offers tab.'},
                {text: 'Luckylashbrow`s Booking Policy, Cancellation Policy and Service Rules apply.'},
                {text: 'Offer may not be used in conjunction with any other promotion or campaigns.'},
                {text: 'Luckylashbrow`s Booking Policy, Cancellation Policy and Service Rules apply.'},
                {text: 'Luckylashbrow`s Booking Policy, Cancellation Policy and Service Rules apply.'},
            ],
            data2: [
                {text: 'Single 120 Strands'},
                {text: 'Strand by strand'},
                {text: 'Mink Ful from Korea'},
                {text: 'High grade adhesive'},
                {text: 'Strand by strand'},
            ],
            data3: [
                {text: '"Cosy plase, very attentive to your needs too."-Lareita'},
                {text: '"Valerie was very patient, friendly and meticulous! The lashes are comfortable and pretty. Thanks you :)"-Cheryl'},
                {text: '"Thanks you :)"-Rina'}
            ]
        }
    };  
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
                    <Title style={{color:'#000'}}>{this.props.studio}</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <ScrollView scrollEventThrottle={16}>
                    <SliderBox
                    images={this.state.images}
                    sliderBoxHeight={150}
                    onCurrentImagePressed={index =>
                        console.warn(`image ${index} pressed`)
                    }
                    circleLoop
                    />
                    <View style={{flex:1, paddingTop:120,position:"absolute"}}>
                        <Text style={{color:'#fff', textAlign:"center", fontSize:14, backgroundColor:'#eb5066', width: 80}}>{this.props.save}</Text>
                    </View>
                    <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                        <Text style={{fontSize:19}}>{this.props.nameB}</Text>
                        <Text style={{fontSize:17, color:'#27262385', paddingTop:10}}>Bugis</Text>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <View style={{flexDirection:"row"}}>
                                <Text style={{fontSize:19, color: '#eb5066', fontWeight: 'bold'}}>{this.props.price}</Text>
                                <Text style={{fontSize:14, color: '#27262385', textDecorationLine: 'line-through', paddingTop:5}}>{this.props.sale}</Text>
                                
                            </View>
                            <View style={{flexDirection:"row"}}>
                                <CountDown
                                    size={15}
                                    until={1000000}
                                    onFinish={() => alert('Finished')}
                                    digitStyle={{backgroundColor: '#FFF'}}
                                    digitTxtStyle={{color: '#27262385'}}
                                    timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                    separatorStyle={{color: '#27262385'}}
                                    timeToShow={['H', 'M', 'S']}
                                    timeLabels={{m: null, s: null}}
                                    showSeparator
                                />
                            </View>
                        </View>
                        <View style={{backgroundColor:'#27262385',height:1, marginBottom:10,marginTop:10}}/>
                        <View style={{paddingTop:10}}>
                            <Text style={{fontSize:19,paddingBottom:20}}>The Offer</Text>
                            <FlatList
                                data={this.state.data1}
                                renderItem={({ item }) => (
                                    <View style={{flexDirection:"row",paddingBottom:10}}>
                                        <View style={{backgroundColor:'#57bb8a',height:5,width:5, borderRadius:4, marginTop:5}}/>
                                        <Text style={{fontSize:16, paddingLeft: 15, color:'#434343'}}>{item.text}</Text>
                                    </View>
                                )}
                            />
                        </View>
                        <View style={{backgroundColor:'#27262385',height:1, marginBottom:20,marginTop:20}}/>
                        <View>
                            <Text style={{fontSize:19,paddingBottom:20}}>The Service</Text>
                            <View style={{flexDirection:"row"}}>
                                <View style={{backgroundColor:'#57bb8a',height:5,width:5, borderRadius:4, marginTop:5}}/>
                                <View style={{paddingLeft: 15}}>
                                    <Text style={{fontSize:16}}>Class Natural Eyelash Extension</Text>
                                    <Text style={{fontSize:16, color:'#434343'}}>Duration: 90 minutes</Text>
                                    <Text style={{fontSize:16, color:'#434343', paddingBottom:10, paddingTop:10}}>Nutural Eyelash Extension (Strand By Stand). High quality Mink Ful from 8mm to 10mm and up to 120 stands in total</Text>
                                    <FlatList
                                        data={this.state.data2}
                                        renderItem={({ item }) => (
                                            <View style={{flexDirection:"row"}}>
                                                <Icon name='ios-checkmark' style={{ color:'#ccc'}}/>
                                                <Text style={{fontSize:16, paddingLeft: 5, color:'#434343', paddingTop:5}}>{item.text}</Text>
                                            </View>
                                        )}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#27262385',height:1, marginBottom:20,marginTop:20}}/>
                        <View>
                            <Text style={{fontSize:19,paddingBottom:20}}>The Reviews</Text>
                            <View style={{paddingLeft: 15}}>
                                <FlatList
                                    data={this.state.data3}
                                    renderItem={({ item }) => (
                                        <View style={{paddingBottom:10}}>
                                            <View style={{flexDirection:"row"}}>
                                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                            </View>
                                            <Text style={{fontSize:16, color:'#434343', fontStyle: 'italic'}}>{item.text}</Text>
                                        </View>
                                    )}
                                />
                            </View>
                        </View>
                        <View style={{backgroundColor:'#27262385',height:1, marginBottom:20,marginTop:20}}/>
                        <View>
                            <Text style={{fontSize:19,paddingBottom:20}}>More about {this.props.name}</Text>
                            <TouchableOpacity style={{flexDirection:"row", justifyContent:"space-between"}}>
                                <View style={{flexDirection:"row", width:130}}>
                                    <Avatar rounded source={require('../../images/logo1.jpeg')} size="medium"/>
                                    <Text style={{fontSize:16}}>{this.props.name}</Text>
                                </View>
                                <Icon name='arrow-forward' style={{ color:'#27262385', fontSize: 17 }}/>
                            </TouchableOpacity>
                            <View style={{ height:210}}>
                                <Image style={{flex:1, width:null, height:null, resizeMode:'cover'}} source={require('../../images/map.png')}/>
                            </View>
                            <Text style={{fontSize:16, color:'#434343', paddingBottom:10, paddingTop:10}}>Hello! I am a homebased cecrtified lash and brow artist who love all things related to beauty and design. Having been a fashion designer for 10 years, it is my goal to make every woman look beautiful and feel glamorous. Don`t forget to say hello!</Text>
                        </View>
                    </View>
                </ScrollView>
            </Content>
            <Footer>
                <TouchableOpacity style={{flex:1, backgroundColor:'#57bb8a', justifyContent:"center"}}>
                    <Text style={{fontSize:20, textAlign:"center", color:'#fff'}}>BOOK OFFER</Text>
                </TouchableOpacity>
            </Footer>
        </Container>

    );
  }
}
const styles = StyleSheet.create({

});