import React, { useState } from 'react';
import { Text, View, Button, Image } from 'react-native';
import Context from '../utils/context';

import globalStyle from './style/global-style'; 


const AppClicker = () => {
    const context = React.useContext(Context);
    const [clicks, setClicks] = useState(0);
    return(
        <View style={globalStyle.container}>

            <Image 
                source={{uri:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}} 
                style={{ width: "40%", height: "40%" }}
            />

            <Text h1>{clicks}</Text>
            <Button 
                onPress={() => setClicks(clicks + 1)}
                title="click">
            </Button>

            <Text>{context.numberOfClicks.numberOfClicks}</Text>
            <Button 
                title="Alternat Click"
                onPress={() => context.clickerMaker()}
            />
        </View>
    )
}


export default AppClicker