
import React from 'react';
import { 
    Text, 
    View, 
    SafeAreaView, 
    FlatList, 
    Image, 
    TouchableOpacity 
} from 'react-native';
import globalStyle from '../components/style/global-style';


const pageTextParser = (textToParse) => {

    let finalListOfElements = [];
    let parsingProcess = true;

    let index = 0;
   

    let allPElIndexStart = textToParse.matchAll(new RegExp("<p>", "g"));

    console.log(allPElIndexStart)

    return textToParse

}




export default pageTextParser