import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, ScrollView, Image, TouchableOpacity} from 'react-native';
import { Avatar } from 'react-native-elements';
import { Container, Header, Content, Button, Icon, Footer, Left, Body, Title, Right} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class ReviewDetail extends Component { 
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
                    <Title style={{color:'#000'}}>{this.props.name}</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <ScrollView scrollEventThrottle={16}>
                    <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                        <View style={{flexDirection:"row", paddingBottom: 20}}>
                            <Avatar rounded source={this.props.logo} size="large"/>
                            <View style={{paddingLeft:10}}>
                                <Text style={{fontSize:16}}>{this.props.studio}</Text>
                                <Text style={{fontSize:16, color:'#27262385'}}>{this.props.drive}</Text>
                                <View style={{flexDirection:"row"}}>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Text style={{fontSize:16, color:'#27262385'}}>(65)</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ height:170}}>
                            <Image style={{flex:1, width:null, height:null, resizeMode:'cover'}} source={this.props.imageUri}/>
                        </View>
                        <View style={{ paddingTop:20}}>
                            <Text style={{fontSize:19}}>{this.props.nameR} - </Text>
                            <Text style={{fontSize:19}}>$78.00 </Text>
                            <View style={{flexDirection:"row",justifyContent:"space-between", paddingBottom:10}}>
                                <View style={{flexDirection:"row"}}>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                    <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                                </View>
                                <Text style={{fontSize:16, color:'#434343'}}>17 thg 6 2019</Text>
                            </View>
                            <Text style={{fontSize:17, color:'#434343'}}>{this.props.comment} </Text>
                        </View>
                    </View>
                </ScrollView>
            </Content>
            <Footer>
                <TouchableOpacity style={{flex:1, backgroundColor:'#57bb8a', justifyContent:"center"}}>
                    <Text style={{fontSize:20, textAlign:"center", color:'#fff'}}>View Profile</Text>
                </TouchableOpacity>
            </Footer>
        </Container>

    );
  }
}
const styles = StyleSheet.create({
});