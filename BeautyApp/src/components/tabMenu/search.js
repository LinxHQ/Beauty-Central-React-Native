import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View} from 'react-native';
import { Container, Header, Content, Button, Icon, Item, Input} from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    };  
  render() {
    return (
        <Container>
            <Header style={{backgroundColor:'#fff'}} searchBar rounded>
                <Item>
                  <Button onPress={() => Actions.pop()} transparent>
                      <Icon name='arrow-back' style={{ color:'#000'}}/>
                  </Button>
                  <Icon name="ios-search" />
                  <Input editable={true} placeholder="Search for services and more..." />
                </Item>
            </Header>
            <Content>
                <View style={{flex:1, padding:15, justifyContent: 'space-between'}}>
                    <Text style={{fontSize:20, fontWeight:"bold"}}>Popular Keywords</Text>
                    <View style={{flexDirection:"row", paddingTop:15}}>
                        <Text style={{padding: 10, color:'#57bb8a', borderColor:'#57bb8a', borderRadius: 20, borderWidth:1, marginRight:10}}>Nails</Text>
                        <Text style={{padding: 10, color:'#57bb8a', borderColor:'#57bb8a', borderRadius: 20, borderWidth:1, marginRight:10}}>Pedicure</Text>
                        <Text style={{padding: 10, color:'#57bb8a', borderColor:'#57bb8a', borderRadius: 20, borderWidth:1, marginRight:10}}>Olaplex</Text>
                    </View>
                </View>
            </Content>
        </Container>

    );
  }
}
const styles = StyleSheet.create({
});