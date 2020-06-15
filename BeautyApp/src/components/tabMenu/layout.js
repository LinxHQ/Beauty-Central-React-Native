import React, { Component } from 'react';
import { Text, StyleSheet, Dimensions, View, TouchableOpacity} from 'react-native';
import { Container, Content, Button, Icon, Footer, FooterTab} from 'native-base';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import MenuDrawer from 'react-native-side-drawer'
import { Actions } from 'react-native-router-flux';
import Discover from '../tabView/discover';
import Nail from '../tabView/nails';
import Makeups from '../tabView/makeup';
import Bodys from '../tabView/bodys';
import BrowLash from '../tabView/browLash';
import Facials from '../tabView/facial';
import Massages from '../tabView/massage';
import HairRemoval from '../tabView/hairRemoval';
import Hairs from '../tabView/Hair';
import Menu from './menu';

const Discovers = () => (
  <Discover />
);
const Nails = () => (
  <Nail />
);
const Makeup = () => (
  <Makeups />
);
const Body = () => (
  <Bodys />
);
const Brow_Lash = () => (
  <BrowLash />
);
const Facial = () => (
  <Facials />
);
const Massage = () => (
  <Massages />
);
const Hair_Removal= () => (
  <HairRemoval />
);
const Hair = () => (
  <Hairs/>
);

const { width } = Dimensions.get('window');
export default class Layout extends Component {
  constructor(props) {
    super(props);
      this.state = {
        index: 0,
        routes: [
          { key: 'discover', title: 'Discover' },
          { key: 'nails', title: 'Nails' },
          { key: 'makeup', title: 'Makeup' },
          { key: 'body', title: 'Body' },
          { key: 'brow_lash', title: 'Brow & Lash' },
          { key: 'facial', title: 'Facial' },
          { key: 'massage', title: 'Massage' },
          { key: 'hair_removal', title: 'Hair Removal' },
          { key: 'hair', title: 'Hair' },
        ],
        open: false
      }
    };
    _renderTabBar = props => (
      <TabBar
        {...props}
        scrollEnabled
        labelStyle={{fontSize:13,color:'#000'}}
        style={{width: Dimensions.get('window').width, backgroundColor: '#fff'}}
        tabStyle={{padding: 0, width: width/3.1}}
        indicatorStyle={{ backgroundColor: '#eb5066'}}
      />
    );
    drawerContent = () => {
      return (
        <Menu/>
      );
    };
    toggleOpen = () => {
      this.setState({ open: !this.state.open });
    };
    goToMenu() {
      Actions.menu();
    }
  render() {
    return (
      
      <Container style={ styles.container }>
        <Content/>
        <MenuDrawer 
          open={this.state.open} 
          drawerContent={this.drawerContent()}
          drawerPercentage={70}
          animationTime={200}
          overlay={true}
          opacity={0.4}
        >
        
        <TouchableOpacity onPress={() => Actions.search()} style={{padding:15}}>
          <Text style={{color:'#ccc', fontSize:16}}><Icon name='search' style={{ color:'#000', fontSize: 17 }}/> Search for services and mor...</Text>
        </TouchableOpacity>
        <View style={{backgroundColor:'#ccc',height:1, marginBottom:10}}/>

        <TabView
            renderTabBar={this._renderTabBar}
            navigationState={this.state}
            renderScene={SceneMap({
              discover: Discovers,
              nails: Nails,
              makeup: Makeup,
              body: Body,
              brow_lash: Brow_Lash,
              facial: Facial,
              massage: Massage,
              hair_removal: Hair_Removal,
              hair: Hair,
            })}
            onIndexChange={index => this.setState({ index })}
            initialLayout={{ width: Dimensions.get('window').width, color: '#000' }}
          />
          <View style={{marginBottom:100}}/>
          </MenuDrawer>
        <Footer>
          <FooterTab style={{backgroundColor: '#fff'}}>
            <Button active style={{backgroundColor: '#fff'}}> 
              <Icon style={styles.icon} name='home' />
              <Text style={styles.textAction}>Home</Text>
            </Button>
            <Button onPress={() => Actions.search()}>
              <Icon name='search' style={{color: '#27262385'}}/>
            </Button>
            <Button onPress={() => Actions.account()}>
              <Icon name='person' style={{color: '#27262385'}}/>
            </Button>
            <Button onPress={this.toggleOpen}>
              <Icon name='menu' style={{color: '#27262385'}}/>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textSearch: {
      fontSize: 11
  },
  icon: {
    color: '#eb5066'
  },
  textAction: {
    color: '#eb5066'
  },
  scene: {
    flex: 1,
  },
});