/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Router, Stack, Scene, Drawer } from 'react-native-router-flux';
import Layout from './src/components/tabMenu/layout';
import BestNearbyOffersDetail from './src/components/bestNearbyOffers/bestNearbyOffersDetail';
import FeaturedShopDetail from './src/components/featureadShop/featuredShopDetail';
import ReviewDetail from './src/components/review/reviewDetail';
import CollectionDetail from './src/components/collection/collectionDetail';
import Search from './src/components/tabMenu/search';
import Account from './src/components/tabMenu/account';
import Login from './src/components/login';
import SignUp from './src/components/signup';

const getScenceStyle = (scene) => {
  let style = {
    backgroundColor: 'transparent'
  };
  return style;
}
export default class App extends Component {
  render() {
    return (
      <Router getSceneStyle={getScenceStyle}>
        <Stack key="root">
          <Scene key="layout" initial component={Layout} hideNavBar />
          <Scene key="collectionDetail" component={CollectionDetail} hideNavBar />
          <Scene key="bestNearbyOffersDetail" component={BestNearbyOffersDetail} hideNavBar />
          <Scene key="featuredShopDetail" component={FeaturedShopDetail} hideNavBar />
          <Scene key="reviewDetail" component={ReviewDetail} hideNavBar />
          <Scene key="search" component={Search} hideNavBar />
          <Scene key="account" component={Account} hideNavBar />
          <Scene key="login" component={Login} hideNavBar />
          <Scene key="signup" component={SignUp} hideNavBar />
        </Stack>
      </Router>
    );
  }
}