import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import { Icon } from 'native-base';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');
export default class Review extends Component {
  constructor(props) {
    super(props);
    this.state = {
      limit: 13
    }
  };  
  render() {
    return (
        <TouchableOpacity onPress={() =>  
            Actions.reviewDetail({
              imageUri:this.props.imageUri,
              nameR:this.props.nameR,
              comment:this.props.comment,
              logo:this.props.logo,
              studio:this.props.studio,
              drive:this.props.drive
            })} 
            style={{height:height/2.4,width:width/2.4, marginLeft:20, borderColor:'#ddd', borderWidth:1}}>
            <View style={{flex:2}}>
                <Image source={this.props.imageUri}
                    style={{flex:1, width:null, height:null, resizeMode:'cover'}}
                />
                <View style={{flex:1, padding:10, justifyContent: 'space-between'}}>
                    <View style={{height:height/10}}>
                      <Text numberOfLines={2} style={{fontSize:14}}>{this.props.nameR}</Text>
                      <View style={{flexDirection:"row"}}>
                          <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                          <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                          <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                          <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                          <Icon name='star' style={{ color:'#ff9f02', fontSize: 17 }}/>
                      </View>
                      <Text numberOfLines={2} style={{fontSize:13, color:'#27262385'}}>{this.props.comment}</Text>
                    </View>
                </View>
                <View style={{backgroundColor:'#ccc',height:1}}/>
                  <View style={{flexDirection:"row", padding:10}}>
                    <Avatar rounded source={this.props.logo} size="small"/>
                    <View>
                      <Text style={{fontSize:14, color:'#57bb8a'}}>{ ((this.props.studio).length > this.state.limit) ? (((this.props.studio).substring(0,this.state.limit-3)) + '...') : this.props.studio }</Text>
                      <Text style={{fontSize:14}}>{ ((this.props.drive).length > this.state.limit) ? (((this.props.drive).substring(0,this.state.limit-3)) + '...') : this.props.drive }</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({

});