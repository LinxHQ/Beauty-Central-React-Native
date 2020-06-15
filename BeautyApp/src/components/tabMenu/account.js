import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import { Container, Button, Icon} from 'native-base';
import { Actions } from 'react-native-router-flux';
const { height } = Dimensions.get('window');
export default class Account extends Component { 
  render() {
    return (
        <Container>
            <View style={{flex:1,backgroundColor:'#000', justifyContent:"center", opacity:0.8}}>
                <Text style={{color:'#fff', fontSize:35, fontWeight:"bold", textAlign:'center'}}>Beautiful App</Text>
                <Text style={{paddingLeft: 50, paddingRight:50,color:'#fff', fontSize:17, textAlign:'center'}}>Join us and book the hottest local independent beauty artist near you.</Text>
                <View style={{padding: 20,}}>
                    <Button primary block>
                        <Icon name='logo-facebook' style={{ color:'#fff'}}/>
                        <Text style={{color:'#fff'}}>Facebook</Text>
                    </Button>
                    <View style={{flexDirection:"row", paddingTop: 20, height: height/10}}>
                        <TouchableOpacity onPress={() => Actions.login()} style={{backgroundColor:'#eb5066', borderRightColor: '#ccc', borderRightWidth:1, justifyContent:"center", paddingLeft:50, paddingRight:50}}>
                            <Text style={{fontSize:15, textAlign:"center", color:'#fff'}}>LOGIN</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => Actions.signup()} style={{flex:1, backgroundColor:'#eb5066', justifyContent:"center"}}>
                            <Text style={{fontSize:15, textAlign:"center", color:'#fff'}}>SIGN UP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Container>

    );
  }
}
const styles = StyleSheet.create({
  
});