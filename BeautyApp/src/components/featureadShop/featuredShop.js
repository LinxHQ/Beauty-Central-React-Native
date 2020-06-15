import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import { Icon } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class FeaturedShop extends Component {
  render() {
    return (
        <TouchableOpacity onPress={() =>  
          Actions.featuredShopDetail({
            imageUri:this.props.imageUri,
            logo:this.props.logo,
            studio:this.props.studio,
            content:this.props.content
          })}  
          style={{height:height/3.1,width:width/2.4, marginLeft:20, borderColor:'#ddd', borderWidth:1}}>
            <View style={{flex:2}}>
                <Image source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                />
                <View style={{marginLeft: width/7.5, position:'absolute', marginTop:height/10}}>
                  <Avatar rounded source={this.props.logo} size="medium"/>
                  <View style={{backgroundColor:'#ff9f02',borderRadius:4}}>
                    <Text style={{color:'#fff', textAlign:"center", fontSize:14}}>{this.props.numStar}<Icon name='star' style={{ color:'#fff', fontSize: 15 }}/></Text>
                  </View>
                </View>
                <View style={{flex:1, paddingTop:10, paddingBottom:10, justifyContent: 'flex-end'}}>
                    <Text style={{fontSize:14, color:'#57bb8a', textAlign:"center"}}>{this.props.studio}</Text>
                    <Text style={{fontSize:14, color: '#27262385', textAlign:"center"}}>{this.props.drive}</Text>
                    <Text style={{fontSize:14, textAlign:"center"}}>{this.props.content}</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

});