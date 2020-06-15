import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Content, Button, Icon, Footer, Left, Body, Title, Right} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class featuredShopDetail extends Component {
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
                    <View style={{ height:170}}>
                        <Image style={{flex:1, width:null, height:null, resizeMode:'cover'}} source={this.props.imageUri}/>
                    </View>
                    <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                        <View style={{ paddingTop:20}}>
                            <View style={{flexDirection:"row", paddingBottom: 20}}>
                                <Avatar rounded source={this.props.logo} size="large"/>
                                <View style={{paddingLeft:10}}>
                                    <Text style={{fontSize:16}}>{this.props.studio}</Text>
                                    <Text style={{fontSize:16, color:'#27262385'}}>171 Bookings</Text>
                                    <TouchableOpacity style={{flexDirection:"row"}}>
                                        <Text style={{fontSize:16, width: 150}}>20 Ah Hôd Road, whampoa, 329984</Text>
                                        <Icon name='arrow-forward' style={{ color:'#27262385', fontSize: 17 }}/>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={{backgroundColor:'#27262385',height:1, marginBottom:20,marginTop:20}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:16, width: 150}}><Icon name='ios-calendar' style={{ color:'#27262385', fontSize: 20}}/> Instant Book</Text>
                            <Text style={{fontSize:16, width: 150}}><Icon name='home' style={{ color:'#27262385', fontSize: 20 }}/> Salon</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#b4b9b80f',height:5}}/>
                    <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                       <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>Reviews</Text>
                            <Text style={{fontSize:15, color:'#27262385'}}>See All <Icon name='arrow-forward' style={{ color:'#27262385', fontSize: 17 }}/></Text>
                       </View>
                       <View style={{paddingBottom:10, paddingRight:30}}>
                            <View style={{flexDirection:"row"}}>
                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                <Text style={{fontSize:16, color:'#434343'}}> (485)</Text>
                            </View>
                            <Text style={{fontSize:16, color:'#434343'}}> "customer service was really good" -keerthana</Text>
                        </View>
                    </View>
                    <View style={{backgroundColor:'#b4b9b80f',height:5}}/>
                    <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                       <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                            <Text style={{fontSize:20, fontWeight:"bold"}}>Gallery</Text>
                            <Text style={{fontSize:15, color:'#27262385'}}>See All <Icon name='arrow-forward' style={{ color:'#27262385', fontSize: 17 }}/></Text>
                       </View>
                    </View>
                    <View style={{backgroundColor:'#b4b9b80f',height:5}}/>
                </ScrollView>
            </Content>
            <Footer>
                <View style={{flex:1,flexDirection:"row", }}>
                    <TouchableOpacity style={{backgroundColor:'#fff', justifyContent:"center", paddingLeft:50, paddingRight:50}}>
                        <Image source={require('../../images/telephone-receiver-with-up-arrow.png')}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{flex:1, backgroundColor:'#57bb8a', justifyContent:"center"}}>
                        <Text style={{fontSize:20, textAlign:"center", color:'#fff'}}>Book Now</Text>
                    </TouchableOpacity>
                </View>
            </Footer>
        </Container>

    );
  }
}
const styles = StyleSheet.create({
 
});