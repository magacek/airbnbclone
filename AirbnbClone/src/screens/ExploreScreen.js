import React from 'react';
import { View, FlatList, TextInput, TouchableOpacity, Image, Text, StyleSheet } from 'react-native';

import PropertyCard from '../components/PropertyCard';

// ExploreScreen Component
// This screen displays a list of properties available for booking.
// It includes a search bar, category filters, and uses the PropertyCard component to display each property.
// It handles navigation to the property detail screen on selecting a property.


const properties = [
    { 
      id: '1', 
      image: 'https://github.com/magacek/Media/assets/70607808/96cf1f29-940e-4c43-8ddd-8e87425f5229', 
      title: 'Beach House', 
      location: 'Miami',
      shortDescript:'Entire home in Miami',
      accomodation: '1 guest - 1 bedroom - 1 bed - 1 bathroom.',
      description: 'Nested amidst the whimsical whispers of the wind, this enchanting abode is a symphony of serene splendor. Its a place where the sun plays peek-a-boo through the dancing leaves, and the moonbeams glow kisses the night. Here, time meanders lazily, entwined with the melody of chirping birds and the gentle hum of the nearby brook. Its not just a home; its a magical retreat where every corner tells a story, and every moment is laced with a bit of wonder and a pinch of delight.',

      rating: '4.8', 
      hostName: 'Serkan',
      price: '45',
      hostSince: '2016-07-07'
    },
    
      { 
        id: '2', 
        image: 'https://github.com/magacek/Media/assets/70607808/676e8e57-4d44-41a6-96fd-6b53d90105af', 
        title: 'Mountain Retreat', 
        location: 'Aspen',
        shortDescript: 'Cozy cabin in Aspen',
        accomodation: '4 guests - 2 bedrooms - 2 beds - 2 bathrooms',
        description: 'Escape to the tranquility of the mountains in this cozy cabin. Surrounded by towering pines and breathtaking views, it’s the perfect getaway for those seeking peace and adventure. With a crackling fireplace and a star-lit sky, this home promises a memorable stay.',
        rating: '4.9', 
        hostName: 'Alyssa',
        price: '120',
        hostSince: '2017-09-15'
      },
      { 
        id: '3', 
        image: 'https://github.com/magacek/Media/assets/70607808/6aa936ca-e60c-414a-82e6-179c43265289', 
        title: 'Urban Apartment', 
        location: 'New York City',
        shortDescript: 'Modern apartment in the heart of NYC',
        accomodation: '2 guests - 1 bedroom - 1 bed - 1 bathroom',
        description: 'Experience the vibrant city life in this modern apartment located in the heart of New York. With sleek design and all the comforts of home, it’s a perfect urban retreat. Step outside and immerse yourself in the bustling city, with endless things to explore.',
        rating: '4.7', 
        hostName: 'David',
        price: '150',
        hostSince: '2018-05-21'
      },
      { 
        id: '4', 
        image: 'https://github.com/magacek/Media/assets/70607808/5770743a-ec47-4b00-81a3-58a65304d17a', 
        title: 'Countryside Villa', 
        location: 'Tuscany',
        shortDescript: 'Spacious villa in the Tuscan countryside',
        accomodation: '6 guests - 3 bedrooms - 4 beds - 3 bathrooms',
        description: 'Nestled in the rolling hills of Tuscany, this spacious villa offers a peaceful retreat in a picturesque setting. With a private pool and vineyard views, it’s the epitome of Italian charm. Enjoy the local cuisine, explore historic sites, and relax in luxury.',
        rating: '5.0', 
        hostName: 'Marco',
        price: '200',
        hostSince: '2019-04-12'
      },
    
]
const ExploreScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.searchSection}>
        <TextInput 
            style={styles.searchInput} 
            placeholderTextColor="#000"
        >   
        </TextInput>
        <Image style={styles.categoryIcon1} source={require('../images/search.png')}/>
        <View style={styles.searchinputtext}>
         <Text style={styles.searchPlaceholder1}>Where to?</Text>
         <Text style={styles.searchPlaceholder}>Anywhere - Any week</Text>
         </View>
        <TouchableOpacity style={styles.settingsButton}>
            <Image source={require('../images/filter.png')} style={styles.categoryIcon} />
        </TouchableOpacity>
        </View>
  
        <View style={styles.categorySection}>
        <View style={styles.category}>
        <Image  source={require('../images/cabin.png')}  style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>Cabins</Text>
            <View style={styles.underline}></View>
        </View>
        <View style={styles.category}>
        <Image  source={require('../images/trending.png')}  style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>Trending</Text>
        </View>
        <View style={styles.category}>
        <Image  source={require('../images/play.png')}  style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>Play</Text>
        </View>
        <View style={styles.category}>
        <Image  source={require('../images/city.png')}  style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>City</Text>
        </View>
        <View style={styles.category}>
        <Image  source={require('../images/beach.png')}  style={styles.categoryIcon} />
            <Text style={styles.categoryLabel}>Beachfront</Text>
        </View>
        </View>

  
        <FlatList
          data={properties}
          renderItem={({ item }) => (
            <PropertyCard
              property={item}
              onPress={() => navigation.navigate('Detail', { property: item, fromExplore: true })}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    searchinputtext:{
        left: 50,
        top: 16,
        position: 'absolute',
        flexDirection:'column'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 10,
    },
    searchSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 10,
      },
      inputIcon: {
        position: 'relative',
        left: -40,
        top: 40,
        width: 40,
        height: 40,
      },
      
      searchInput: {
        flex: 3,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        borderRadius: 30,
        paddingLeft: 40,
        fontSize: 16,
        height: 60,
        marginRight: 5,
      },
      searchPlaceholder1:{
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
      },
    searchPlaceholder: {
      fontSize: 12,
      color: 'gray',
    },
    settingsButton: {
        borderWidth:1.5,
    borderColor: 'black',
      width: 60,
      height: 60,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: 50,
    },
    categorySection: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 5,
    },
    category: {
      alignItems: 'center',
    },
    categoryLabel: {
      marginTop: 5,
    },
    underline: {
      marginTop: 2,
      height: 2,
      width: 60,
      backgroundColor: '#000',
    },
    categoryIcon1:{
        position: 'absolute',
        top:20,
        left: 12,
        width: 24,
        height: 24,
        marginBottom: 5, 
    },
    categoryIcon: {
        width: 24,
        height: 24,
        marginBottom: 5, 
      },
  });
  
  
  export default ExploreScreen;