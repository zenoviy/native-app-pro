import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet, ScrollView } from 'react-native';
import Context from '../utils/context';

import globalStyle from './style/global-style'; 


const AppClicker = ({navigation}) => {
    const context = React.useContext(Context);
    const [clicks, setClicks] = useState(0);
    return(
        <View >
                <Image 
                    source={{uri:'https://www.planetware.com/wpimages/2020/02/france-in-pictures-beautiful-places-to-photograph-eiffel-tower.jpg'}} 
                    style={{ width: "40%", height: "40%", alignSelf: 'center' }}
                />

                <Text h1 style={{textAlign: 'center'}}>{clicks}</Text>
                <Button 
                    style={styles.buttonMargin}
                    onPress={() => setClicks(clicks + 1)}
                    title="click">
                </Button>

                <Text style={{textAlign: 'center'}}>{context.numberOfClicks.numberOfClicks}</Text>
                <Button 
                    style={styles.buttonMargin}
                    title="Alternat Click"
                    onPress={() => context.clickerMaker()}
                />
                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: 10}}>
                        <Button 
                            style={{...styles.buttonMargin}}
                            color="#42BE48"
                            title="To Blocks test"
                            onPress={() => navigation.navigate('BlocksDesign')}
                        />
                        <Button
                            style={{...styles.buttonMargin, color: 'red'}}
                            color="#841584"
                            title="Camera"
                            onPress={() => navigation.navigate('Camera-clicker')}
                        />
                        <Button
                            style={{...styles.buttonMargin}}
                            title="Image Picker"
                            onPress={() => navigation.navigate('Image Picker')}
                        /> 
                        <Button
                            style={{...styles.buttonMargin}}
                            title="User list"
                            onPress={() => navigation.navigate('User list')}
                        /> 
                    </View>
                </ScrollView>

        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonMargin: {
        flex: 1,
        marginTop: 15,
        marginBottom: 10,
        alignContent: 'center',
        justifyContent: "space-between",
        flexDirection: "row",
        flexWrap: "wrap",
        alignContent: "space-around"
    }
})

export default AppClicker