import React, { useState } from "react";
import { Text, View, Image, Keyboard, KeyboardAvoidingView, StyleSheet } from "react-native";
import { TextInput, TouchableWithoutFeedback, TouchableOpacity } from "react-native-gesture-handler";
import * as yup from 'yup'
import { MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';

import { Formik } from 'formik'
import { themeStyles } from '../theme/theme'


const Formvalidation = yup.object({
  title: yup.string().required().min(3),
  rating: yup.string().required().test('is-num-1-10','rating must Be 1 to 10', (val) =>{ return parseInt(val) < 11 && parseInt(val) > 0}),
  category: yup.string().required().min(3),
  about: yup.string().required().min(10),
});

export default function Form({ addMovies }) {
  const [keybordview , setkeybordview] =useState(false);

  return (
    <View style={themeStyles.containerModel}>
      <Image style={themeStyles.blurredImage} source= {require('../assets/bg.jpg')}/>
      <BlurView intensity={60} tint='dark' style={StyleSheet.absoluteFill}>
        <Formik
          initialValues ={{title : '', rating : '' , category : '', about : ''}}
          validationSchema={Formvalidation}
          onSubmit = {(values, actions ) => {
            actions.resetForm();
            addMovies(values);
          }}
          >
          {(props) => ( 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>   
              <KeyboardAvoidingView behavior='position' enabled= {keybordview}>
                  <Text style={{ fontSize : 30 , color: '#FAFAFA',alignSelf: 'center', paddingVertical: 5}}>Add New Movie</Text>
                  <View style ={{paddingBottom : 80}}>          
                    <Text style={{paddingLeft : 20,color: '#FF0000'}}>{ props.touched.title && props.errors.title}</Text>
                      <TextInput 
                        placeholder=' Movie Name' 
                        onFocus={() =>setkeybordview(false)}  
                        style={themeStyles.input}
                        onChangeText={props.handleChange('title')} 
                        value={props.values.title}
                        onBlur={props.handleBlur('title')}
                      />
                    <Text style={{paddingLeft : 20,color: '#FF0000'}}>{props.touched.rating && props.errors.rating}</Text>
                      <TextInput 
                        placeholder=' Rating' 
                        keyboardType='numeric' 
                        onFocus={() =>setkeybordview(false)} 
                        style={themeStyles.input} 
                        onChangeText={props.handleChange('rating')} 
                        value={props.values.rating}
                        onBlur={props.handleBlur('rating')}
                      />
                    <Text style={{paddingLeft : 20,color: '#FF0000'}}>{props.touched.category && props.errors.category}</Text>
                      <TextInput 
                        placeholder=' Category' 
                        onFocus={() =>setkeybordview(false)} 
                        style={themeStyles.input}
                        onChangeText={props.handleChange('category')} 
                        value={props.values.category}
                        onBlur={props.handleBlur('category')} 
                      />
                    <Text style={{paddingLeft : 20,color: '#FF0000'}}>{props.touched.about && props.errors.about}</Text>
                      <TextInput 
                        multiline placeholder=' About' 
                        returnKeyType='done' 
                        onSubmitEditing={Keyboard.dismiss} 
                        onFocus={() =>setkeybordview(true)}  
                        style={themeStyles.input}
                        onChangeText={props.handleChange('about')} 
                        value={props.values.about}
                        onBlur={props.handleBlur('about')}
                      />
                    <TouchableOpacity  
                      activeOpacity={0.8} 
                      style={themeStyles.button}
                      onPress={props.handleSubmit}
                      >
                      <View style={{flexDirection: 'row'}}>
                        <MaterialIcons name='check-circle' size={30} color= 'white' />
                        <Text style={{fontSize : 20, color : 'white', marginLeft: 5}}>Add</Text>
                      </View>
                    </TouchableOpacity>
                  </View> 
              </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
          )}  
        </Formik>  
      </BlurView>
    </View>
  );
}