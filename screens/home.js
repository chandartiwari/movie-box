import React, { useState } from "react";
import { Text, View, Modal, FlatList, Image, StyleSheet} from "react-native";
import {  TouchableOpacity } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';

import { themeStyles } from '../theme/theme'
import Form from "./form";

export default function Home ({ navigation }) {
  
  const [modelopen , setmodelopen] = useState(false);

  const [movies , setMovies] = useState([
    {key:  '1', title: 'angraj' , rating:8.5, category: 'love story', about:"Geja falls in love with Maarho. When her family learns of their relationship, it is scorned up. Before their love fully blooms, a rich man enters Maarho's life and Geja finds solace in Dhan Kaur."},
    {key:  '2', title: 'walk to remamber' , rating :8,category: 'Romance/Drama', about:"Landon is assigned community service after getting in trouble. His punishment also involves participating in the spring play, during which he falls in love with Jamie, the reverend's daughter."},
    {key:  '3', title: 'sanam teri kasm' , rating :7.3, category: 'Romance', about:"When Saraswati's father throws her out of the house, Inder stands with her against all odds and this brings them close to each other. However, destiny has its own plans to separate them."},
    {key:  '4', title: 'k.g.f' , rating :8 ,category: 'action', about:"Rocky, a young man, seeks power and wealth in order to fulfil a promise to his dying mother. His quest takes him to Mumbai, where he gets involved with the notorious gold mafia."},
    {key:  '5', title: 'wonder woman' , rating :7 ,category: 'Action/War', about:"Princess Diana of an all-female Amazonian race rescues US pilot Steve. Upon learning of a war, she ventures into the world of men to stop Ares, the god of war, from destroying mankind."},
  ]);
  
  const addMovies = (movies) => {
    movies.key = Math.random().toString();
    setMovies ((currentMovies)=> {
      return [movies, ...currentMovies]
    });
    setmodelopen(false);
  }
    
  return (
    <View style={themeStyles.container}>
      <StatusBar style="dark" />
      <Modal visible={modelopen} animationType='slide'>
        <View style={themeStyles.modelHeader}>
          <TouchableOpacity onPress={() => setmodelopen(false)} style={themeStyles.buttonclose}>
            <MaterialIcons name = 'close' size = {40} color={'white'} />
            <Text style={{color : 'white', alignSelf : 'center'}}>Close</Text>
          </TouchableOpacity>
        </View>
          <Form addMovies={addMovies} />
      </Modal> 
      <Image style={themeStyles.blurredImage} source= {require('../assets/bg.jpg')}/>
      <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFill}> 
        <View style={{flex :1, paddingHorizontal: 15,}}>
          <FlatList 
            showsVerticalScrollIndicator = {false}
            data = {movies}
            renderItem={({ item }) => (
            <TouchableOpacity onPress = { ()=> navigation.navigate ('Movies', item)} >
              <View style={themeStyles.list}>
                  <Text style={themeStyles.ratingHome}>{item.rating}</Text>
                <View style={{flexDirection :'row', alignItems : 'center' }}>
                  <MaterialIcons name = 'movie-filter' size = {26} color = '#AFFCA5'/>
                  <Text style={themeStyles.titleHome}> {item.title} </Text>
                </View>
                  <Text style={themeStyles.categoryHome}> {item.category} </Text>         
              </View>
            </TouchableOpacity>
          )}/>
        </View>
      </BlurView>
        <View style={themeStyles.fab}>
          <TouchableOpacity onPress={() => setmodelopen(true)} >
            <MaterialIcons name = 'add' size = {40} color = 'white'/>
          </TouchableOpacity>
        </View>
    </View>
  );
} 