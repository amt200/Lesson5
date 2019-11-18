import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import Getaboatapp from './Getaboatapp';
const App = () => {
  let moviesArr = [];
  for (let i = 0; i < MOVIES_DATA.length; i++) {
    let movie = MOVIES_DATA[i];
    moviesArr.push(<Text key={movie.title}>{movie.title}</Text>);
    moviesArr.push(<Text key={movie.year}>{movie.year}</Text>);
    moviesArr.push(<Image source={movie.poster} />);
    console.log(moviesArr);
  }
  return (
    <ScrollView>
      <View>{moviesArr}</View>
    </ScrollView>
  );
};

export default App;
