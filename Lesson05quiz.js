import React from 'react';
import {View, Text, Image} from 'react-native';
//INSERT DATA HERE

const Lesson05quiz = () => {
    const PET_DATA = {name: 'Gizmo', age: '5', image: require('./src/img/bird.jpg')};
    const OWNER_DATA = {name: 'Daniyah Bai', contact: '97502219', membership: 'gold'};
    let str = "----------";
    var display = [];

    display.push(<Text key={PET_DATA.name}>{str + PET_DATA.name}</Text>);
    display.push(<Text key={PET_DATA.age}>{str + PET_DATA.age}</Text>);
    display.push(<Image source ={PET_DATA.image}/>);
    display.push(<Text key={OWNER_DATA.name}>{str + OWNER_DATA.name}</Text>)
    display.push(<Text key={OWNER_DATA.contact}>{str + OWNER_DATA.contact}</Text>)
    display.push(<Text key={OWNER_DATA.membership}>{str + OWNER_DATA.membership}</Text>)
    return (
        <View>
            {display}
        </View>
    );
};
export default Lesson05quiz;
