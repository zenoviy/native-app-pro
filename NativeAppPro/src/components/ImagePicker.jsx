import React, { useState, useEffect, useRef } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity,
    Platform , 
    ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Constants from 'expo-constants';



const ImagePickerScreen = () => {
    const [image, setImage] = useState(null);

    ////console.log(ImagePicker)
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);

    const pickImage = async () => {
        //alert('Camera Roll')
        const permission = await ImagePicker.getCameraRollPermissionsAsync();
        //console.log(permission);
        if (permission.status === 'granted') {
                let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                quality: 1,
            });
            //console.log(result);
            if (!result.cancelled) {
                setImage(result.uri);
            }
        }
        
    };
    return(
        <View>
            <Text>Image Picker</Text>
            <View style={{  alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick an image from camera roll" onPress={pickImage} />
                {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
            </View>
        </View>
    )
}

export default ImagePickerScreen
