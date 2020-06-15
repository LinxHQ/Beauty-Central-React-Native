import React, { Component } from 'react';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity, Dimensions} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CountDown from 'react-native-countdown-component';
import { Avatar } from 'react-native-elements';

const { height } = Dimensions.get('window');
export default class OfferDetail extends Component {
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
            style={{height:height/2.5, marginLeft:20, marginRight:20, marginBottom:20, borderColor:'#ddd', borderWidth:1}}>
            <View style={{flex:2}}>
                <ImageBackground source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                >
                    <View style={{flex:1, paddingBottom:10, justifyContent:"flex-end"}}>
                        <Text style={{color:'#fff', textAlign:"center", fontSize:14, backgroundColor:'#eb5066', width: 80}}>{this.props.save}</Text>
                    </View>
                </ImageBackground>
                <View style={{padding:10, justifyContent: 'flex-end'}}>
                    <Text style={{fontSize:14}}>{this.props.nameB}</Text>
                    <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{fontSize:19, color: '#eb5066', fontWeight: 'bold'}}>{this.props.price}</Text>
                            <Text style={{fontSize:14, color: '#27262385', textDecorationLine: 'line-through', paddingTop:5}}>{this.props.sale}</Text>
                            
                        </View>
                        <View style={{flexDirection:"row"}}>
                            <CountDown
                                size={15}
                                until={this.props.time}
                                digitStyle={{backgroundColor: 'none', margin:-5}}
                                digitTxtStyle={{color: '#27262385'}}
                                timeLabelStyle={{color: 'red', fontWeight: 'bold'}}
                                separatorStyle={{color: '#27262385'}}
                                timeToShow={['H', 'M', 'S']}
                                timeLabels={{m: null, s: null}}
                                showSeparator
                            />
                        </View>
                    </View>
                </View>
                <View style={{backgroundColor:'#ccc',height:1, marginBottom:10,marginTop:10}}/>
                <View style={{flexDirection:"row", padding: 10}}>
                    <Avatar rounded source={this.props.logo} size="small"/>
                    <View>
                        <Text style={{fontSize:14, color:'#57bb8a'}}>{this.props.studio}</Text>
                        <Text style={{fontSize:14}}>{this.props.drive}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
});