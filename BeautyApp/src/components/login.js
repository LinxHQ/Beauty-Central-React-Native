import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Button, Icon, Item, Input, Label, Form, Left, Body, Title, Right} from 'native-base';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');
export default class Login extends Component {
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
                    <Title style={{color:'#000'}}>Login</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <View style={{ padding: 10}}>
                    <Form>
                        <Label>Email</Label>
                        <Item fixedLabel>
                        <Input />
                        </Item>
                        <Label>Password</Label>
                        <Item fixedLabel last>
                        <Input />
                        </Item>
                    </Form>
                </View>
                <View style={{paddingTop: 20, padding: 10, height: height/10}}>
                    <TouchableOpacity style={{flex:1, backgroundColor:'#eb5066', justifyContent:"center"}}>
                        <Text style={{fontSize:15, textAlign:"center", color:'#fff'}}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{color:'#eb5066', textAlign:"center"}}>Forgot your password?</Text>
            </Content>
        </Container>

    );
  }
}
const styles = StyleSheet.create({

});