import { StyleSheet, Platform} from "react-native";

const color = "#117864" ;

export const themeStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9F9",
  },
  blurredImage: {
    width: '100%',
    height: '100%',
  },
  fab: {
    position: 'absolute',
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    right: 20,
    bottom: 30,
    borderRadius : 25,
    backgroundColor : '#117864',
    shadowColor: '#333a',
    shadowOffset: { width: 1, height: 5 },
    shadowOpacity: 0.8,
    shadowRadius: 8,  
    elevation: 5
  },
  modelHeader :{
    flexDirection : 'row',
    alignItems: 'center',
    backgroundColor : '#117864',
    ...Platform.select({
      ios: { paddingTop : 20 },
      android: { paddingTop :0 }
    })
  },
  buttonclose: {
    flexDirection: 'row',
    alignSelf: 'center',
    color: 'white',
    borderRadius : 10,
    borderColor : '#333a',
    marginHorizontal : 10,
    paddingVertical : 5
  },
  input :{
    borderWidth : 1,
    margin : 10,
    borderRadius :5,
    borderColor : '#ddd',
    padding : 10,
    fontSize : 22,
    color :'white'
  },
  button :{
    alignItems :'center',
    padding: 15,
    elevation: 8,
    backgroundColor: '#117864',
    borderRadius :8,
    marginHorizontal: 10,
    shadowColor: '#333a',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.8,
    shadowRadius: 15,  
    marginBottom : 30,
  },

  list :{
    flex : 1,
    alignItems: 'center',
    paddingBottom : 10,
    borderBottomWidth : 1,
    borderColor: '#D7DBDD',
  },
  ratingHome: {
    fontSize : 140, 
    textAlign : 'center',
    color : '#F1FEEF'
  },
  titleHome : {
    color : '#F1FEEF',
    fontSize : 35,
  },
  categoryHome: {
    fontSize : 20,
    color : '#D0D3D4',
  },
 
  title_about:{
    alignItems: "center",
    fontSize: 40,
    color : "#F1FEEF",
    textAlign : 'center',

  },
  header_about :{
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    paddingVertical : 20,
    borderBottomWidth : 1,
    borderColor: '#BDC3C7'
  },
  category_about:{
    textAlign : 'center',
    fontSize : 18,
    color : '#FDFEFE'
  },
  rating_about: {
    fontSize: 40,
    justifyContent : 'flex-end',
    color : 'gold'
  },
  about_about:{
    fontSize : 25,
    marginTop : 20,    
    color : '#ECF0F1',
  },
});
  