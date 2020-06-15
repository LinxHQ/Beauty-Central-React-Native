import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { Button, ListItem, Body} from 'native-base';
import { Avatar } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';

export default class Menu extends Component {
  render() {
    return (
    <View style={styles.animatedBox}>
        <View>
            <ListItem>
                <Body>
                <Avatar
                    size="large"
                    rounded
                    title="BT"
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    />
                    <Text>Hello, I see you</Text>
                    <Text style={{color:'#ccc'}}>Welcom to beauty app</Text>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                    <TouchableOpacity>
                        <Text>Help</Text>
                    </TouchableOpacity>
                </Body>
            </ListItem>
            <ListItem>
                <Body>
                    <TouchableOpacity>
                        <Text>Join Vanitee Business</Text>
                    </TouchableOpacity> 
                </Body>
            </ListItem>
        </View>
        <View style={{paddingBottom: 120, padding: 10}}>
            <Button onPress={() => Actions.account()} style={{backgroundColor:'#76ced2', padding: 10}} primary block>
                <Text style={{color:'#fff'}}>Login/Create Account</Text>
            </Button>
        </View>
    </View>
    );
  }
}
const styles = StyleSheet.create({
    animatedBox: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "#fbfafa",
    },
});