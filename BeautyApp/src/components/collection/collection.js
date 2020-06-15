import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class Collection extends Component {
  render() {
    return (
        <TouchableOpacity onPress={() =>  
          Actions.collectionDetail({
            imageUri:this.props.imageUri,
            offer:this.props.offer,
            nameOffer:this.props.nameOffer
          })}   
          style={{height:height/4.6,width:width/2.4, marginLeft:20, borderColor:'#ddd'}}>
            <View style={{flex:2}}>
            <ImageBackground source={this.props.imageUri}
                style={{flex:1, width:null, height:null, resizeMode:'cover', backgroundColor:'#000', opacity: 0.7}}
            >
                <View style={{flex:1, paddingLeft:10, paddingBottom:10, justifyContent:"flex-end", height:130}}>
                    <Text style={{color:'#fff', fontSize:15}}>{this.props.offer}</Text>
                    <Text style={{color:'#fff', fontSize:17, fontWeight:"bold"}}>{this.props.nameOffer}</Text>
                </View>
            </ImageBackground>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

});