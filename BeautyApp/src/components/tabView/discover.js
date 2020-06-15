import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, Text, TouchableOpacity, Dimensions} from 'react-native';
import { SliderBox } from 'react-native-image-slider-box';
import Collection from '../collection/collection';
import BestNearbyOffers from '../bestNearbyOffers/bestNearbyOffers';
import FeaturedShop from '../featureadShop/featuredShop';
import NearbyShops from '../nearbyShops/nearbyShops';
import Review from '../review/review';
import BeautyTrends from '../beautyTrends/beautyTrends';

const { height } = Dimensions.get('window');
export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        'https://source.unsplash.com/1024x768/?makeup',
        'https://source.unsplash.com/1024x768/?beauty',
        'https://source.unsplash.com/1024x768/?girl',
      ]
    };
  }

  render() {
    return (
      <ScrollView scrollEventThrottle={16}>
        <SliderBox
          images={this.state.images}
          sliderBoxHeight={150}
          onCurrentImagePressed={index =>
              console.warn(`image ${index} pressed`)
          }
        />
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Collections</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/4.6, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Collection imageUri={require('../../images/beauty1.jpg')}
                offer="7 OFFERS"
                nameOffer="TIMELESS BEAUTY"
              />
              <Collection imageUri={require('../../images/beauty2.jpg')}
                offer="8 OFFERS"
                nameOffer="FLAWLESS COMPLEXION"
              />
            </ScrollView>
          </View>
        </View>
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Best Nearby Offers</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/2.7, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BestNearbyOffers imageUri={require
                ('../../images/makeup3.jpg')}
                save="Save $70" nameB="Makeup &Hairstyling- 1 pax" studio="fennystudio" drive="Admiralty Drive"
                price="$50.00" sale=" $120.00"
              />
              <BestNearbyOffers imageUri={require
                ('../../images/makeup2.jpeg')}
                save="Save $70" nameB="Bridal Makeup&Hairstyli..." studio="fennystudio" drive="Admiralty Drive"
                price="$450.00" sale=" $550.00"
              />
              <BestNearbyOffers imageUri={require
                ('../../images/hair5.jpg')}
                save="Save $70" nameB="Actual Day Makeup and Hair" studio="janicechongmua" drive="Yishun"
                price="$280.00" sale=" $300.00"
              />
              <BestNearbyOffers imageUri={require
                ('../../images/22179872_783572505136727_6530930384593596483_o.jpg')}
                save="Save $70" nameB="eyebrw Threading Full Body Waxing..." studio="fennystudio" drive="Admiralty Drive"
                price="$110.00" sale=" $130.00"
              />
              <BestNearbyOffers imageUri={require
                ('../../images/42586795_996112553882720_163809614582775808_o.jpg')}
                save="Save $70" nameB="Eyebrow Threading, Sexy Back Treatm..." studio="fennystudio" drive="Admiralty Drive"
                price="$40.00" sale=" 50.00"
              />
            </ScrollView>
          </View>
        </View>
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Featured Shops</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/3.1, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <FeaturedShop imageUri={require
                ('../../images/nail2.jpg')}
                logo={require 
                ('../../images/logo1.jpeg')}
                studio="abeautyslimming" drive="Balestier" content="Facial, Brow & lash" numStar="5,0"
              />
              <FeaturedShop imageUri={require
                ('../../images/mi.jpeg')}
                logo={require 
                ('../../images/logo2.png')}
                studio="annsnailspabugis" drive="Bugis" content="Nails, Brow & lash" numStar="5,0"
              />
              <FeaturedShop imageUri={require
                ('../../images/lamtoc.jpeg')}
                logo={require 
                ('../../images/logo3.jpg')}
                studio="hairzcouture" drive="Bukit Batok" content="Hair, Nails Removal" numStar="4,9"
              />
              <FeaturedShop imageUri={require
                ('../../images/makeup.jpeg')}
                logo={require 
                ('../../images/logo4.png')}
                studio="makeupbysuzanna" drive="Housecall" content="Makeup" numStar="5,0"
              />
              <FeaturedShop imageUri={require
                ('../../images/18581475_720386374788674_7470258828992294667_n.jpg')}
                logo={require 
                ('../../images/logo5.png')}
                studio="spabeauty" drive="Balestier" content="spa" numStar="5,0"
              />
            </ScrollView>
          </View>
        </View>
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Nearby Shops</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/3.1, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <NearbyShops imageUri={require
                ('../../images/18581475_720386374788674_7470258828992294667_n.jpg')}
                logo={require 
                ('../../images/logo5.png')}
                studio="kimiebeauty" drive="Admiralty Drive" content="Brow & Lash" numStar="4,8"
              />
              <NearbyShops imageUri={require
                ('../../images/nghe-lam-nail-cua-nguoi-viet-tren-dat-my-va-nhung-cau-chuyen-cua-du-hoc-sinh1568089021.jpg')}
                logo={require 
                ('../../images/logo4.png')}
                studio="naildelour" drive="Admiralty Drive" content="Nails" numStar="5,0"
              />
              <NearbyShops imageUri={require
                ('../../images/hair.jpg')}
                logo={require 
                ('../../images/logo3.jpg')}
                studio="fennystudio" drive="Admiralty Drive" content="Makeup, Hair, Brow" numStar="4,7"
              />
              <NearbyShops imageUri={require
                ('../../images/makeup.jpeg')}
                logo={require 
                ('../../images/logo2.png')}
                studio="gracekanmua" drive="Admiralty Drive" content="Makeup" numStar="5,0"
              />
            </ScrollView>
          </View>
        </View>
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Reviews</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/2.4, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <Review imageUri={require
                ('../../images/18581475_720386374788674_7470258828992294667_n.jpg')}
                nameR="4D Volume eyelash Extensions" comment='"comfortable experience, no stinging, nice and full yet natural looking" -Celine'
                logo={require('../../images/logo1.jpeg')} studio="beautybydenise" drive="Ang Mo kio"/>
              <Review imageUri={require
                ('../../images/19989802_746646382162673_3813945632903119522_n.jpg')}
                nameR="Bridesmaid / Mother Makeup & hair (2pax)" comment='"comfortable experience, no stinging, nice and full yet natural looking" -Celine'
                logo={require('../../images/logo2.png')} studio="janicechongmua" drive="Yishun"/>
            </ScrollView>
          </View>
        </View>
        <View style={{flex:1,backgroundColor: 'white', paddingTop: 20}}>
          <TouchableOpacity style={{flexDirection:"row", paddingHorizontal:20, justifyContent:"space-between"}}>
            <Text style={{fontSize:20, fontWeight:"bold"}}>Beauty Trends</Text>
            <Text style={{color:'#ccc', fontSize:20}}>More</Text>
          </TouchableOpacity>
          <View style={{height: height/4.6, marginTop: 20}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
              <BeautyTrends imageUri={require
                ('../../images/42586795_996112553882720_163809614582775808_o.jpg')}
                name="How You Can Prevent Acne (8 Steps)"
              />
              <BeautyTrends imageUri={require
                ('../../images/22179872_783572505136727_6530930384593596483_o.jpg')}
                name="Everything You Need to Know About Permanent"
              />
              <BeautyTrends imageUri={require
                ('../../images/49438989_1054502371377071_8641983376514875392_n.jpg')}
                name="Having Trouble Growing Nails"
              />
              <BeautyTrends imageUri={require
                ('../../images/62412219_1161481540679153_8198794033477189632_o.jpg')}
                name="5 Creative Ways To Sport A Cat Eye"
              />
              <BeautyTrends imageUri={require
                ('../../images/21616012_778022405691737_1532443085905106547_n.jpg')}
                name="How to Best Treat Acne Scars"
              />
            </ScrollView>
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
});