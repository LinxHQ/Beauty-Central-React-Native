import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class BeautyTrends extends Component {
  render() {
    return (
        <View style={{height:height/4.6,width:width/2.4, marginLeft:20, borderColor:'#ddd', borderWidth:1}}>
            <View style={{flex:2}}>
                <Image source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                />
                <View style={{flex:1, paddingLeft:10, paddingTop:10, justifyContent: 'space-between'}}>
                    <Text style={{fontSize:15}}>{this.props.name}</Text>
                </View>
            </View>
        </View>
    );
  }
}
const styles = StyleSheet.create({

});