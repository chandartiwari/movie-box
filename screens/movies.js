
import React from "react";
import { Text, View, Image, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import StarRating  from 'react-native-star-rating'
import {BlurView} from 'expo-blur'
import { ScrollView } from "react-native-gesture-handler";
import { themeStyles } from '../theme/theme'

export default function Movies({navigation}) {
  return (
    <View style={themeStyles.container}>
      <StatusBar style="auto" />
      <Image style={themeStyles.blurredImage} source= {require('../assets/bg.jpg')}/>
      <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFill}> 
        <View style={{flex :1, paddingHorizontal: 15,}}>
          <Text style={themeStyles.title_about}>{ navigation.getParam ("title")}</Text>
          <View style={themeStyles.header_about}>
            <View>
              <View style={{flexDirection : 'row', marginBottom : 10 }}>
                <Text style ={{fontSize: 18, fontWeight: '600', color : '#ECF0F1'}}>category : </Text>
                <Text style={themeStyles.category_about}>{ navigation.getParam ("category")}</Text>
              </View>
              <View style ={{alignItems: 'center', flexDirection: "row", alignItems : 'center'}}>
                <Text style={{fontSize: 15, color : "#F1FEEF",}}>rating : </Text>
                <StarRating
                  disabled={true}
                  maxStars={10} 
                  starSize={18}
                  emptyStarColor={'#333a'}
                  rating={navigation.getParam ("rating")}
                  fullStarColor ={'gold'}          
                />         
             </View>
            </View>
            <View style ={{alignItems : 'flex-end'}}>
              <Text style={themeStyles.rating_about}>{ navigation.getParam ("rating")}</Text>
            </View>            
          </View>
          <ScrollView showsVerticalScrollIndicator = {false}>
            <Text style={themeStyles.about_about}>{ navigation.getParam ("about")}</Text>
          </ScrollView>
        </View>
      </BlurView>
    </View>
  );
}
