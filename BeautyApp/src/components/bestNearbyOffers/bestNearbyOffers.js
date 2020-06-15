import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class BestNearbyOffers extends Component {
  render() {
    return (
        <TouchableOpacity onPress={() =>  
            Actions.bestNearbyOffersDetail({
              imageUri:this.props.imageUri,
              nameB:this.props.nameB,
              studio:this.props.studio,
              drive:this.props.drive,
              price:this.props.price,
              sale:this.props.sale,
              save:this.props.save
            })}  
            style={{height:height/2.7,width:width/2.4, marginLeft:20, borderColor:'#ddd', borderWidth:1}}>
            <View style={{flex:2}}>
                <ImageBackground source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                >
                    <View style={{flex:1, paddingBottom:10, justifyContent:"flex-end"}}>
                        <Text style={{color:'#fff', textAlign:"center", fontSize:14, backgroundColor:'#eb5066', width: 80}}>{this.props.save}</Text>
                    </View>
                </ImageBackground>
                <View style={{flex:1, padding:10, justifyContent: 'space-between'}}>
                    <Text style={{fontSize:14}}>{this.props.nameB}</Text>
                    <Text style={{fontSize:14, color:'#57bb8a'}}>{this.props.studio}</Text>
                    <Text style={{fontSize:14}}>{this.props.drive}</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:17, color: '#eb5066', fontWeight: 'bold'}}>{this.props.price}</Text>
                        <Text style={{justifyContent: "flex-end",fontSize:14, color: '#27262385', textDecorationLine: 'line-through', paddingTop:2}}>{this.props.sale}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

});