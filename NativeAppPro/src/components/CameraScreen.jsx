import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity, 
    ScrollView } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import CameraRollGallery from './CameraRoll'


import Context from '../utils/context';
import Constants from "expo-constants";

import globalStyle from './style/global-style'; 

const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
          title: "Cool Photo App Camera Permission",
          message:
            "Cool Photo App needs access to your camera " +
            "so you can take awesome pictures.",
          buttonNeutral: "Ask Me Later",
          buttonNegative: "Cancel",
          buttonPositive: "OK"
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("You can use the camera");
      } else {
        console.log("Camera permission denied");
      }
    } catch (err) {
      console.warn(err);
    }
};


const CameraRollScreen = ({ route, navigation }) => {
    const context = React.useContext(Context);
    // makePhotosState
    const [hasPermission, setPesrmission] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);
    const [flashMode, setFlash] = useState(Camera.Constants.FlashMode.off);
    const [isPreview, setIsPreview] = useState(false);
    const [isCameraReady, setIsCameraReady] = useState(false);
    //const [makePhoto, setMakePhoto] = useState(false)

    const cameraRef = useRef();

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync();
            setPesrmission(status === 'granted');
        })();
      }, []);

    const onCameraReady = () => {
        setIsCameraReady(true);
    };

    const takePicture = async () => {
        if (cameraRef.current) {
            const options = { quality: 0.5, base64: true, skipProcessing: true };
            const data = await cameraRef.current.takePictureAsync(options);

            const source = data.uri;
            if (source) {
                //await cameraRef.current.pausePreview();
                //setIsPreview(true);
                //console.log("picture source", source);
                const permission = await MediaLibrary.requestPermissionsAsync();
                const albumName = "petApp"
                
                if (permission.status === 'granted') {

                    MediaLibrary.getAlbumsAsync()
                    .then( async (albums) => {

                        const asset = await MediaLibrary.createAssetAsync(source);
                        
                        let searchAlbum = albums.find( item => {
                            if(item.title === albumName) return item 
                        });
                        //setMakePhoto(true)
                        //context.makePhotosState(true)
                        if(!searchAlbum){ 
                            MediaLibrary.createAlbumAsync(albumName, asset, false);
                            return
                        } else {
                            MediaLibrary.getAlbumAsync(albumName)
                            .then(album => { 
                                MediaLibrary.addAssetsToAlbumAsync([].concat(asset), album, false);
                            }).catch(err => { console.error(err)})
                        }
                    }) 
                }
           }
        }     
    };
    const cancelPreview = async () => {
        await cameraRef.current.resumePreview();
        //setIsPreview(false);
        //setVideoSource(null);
    };
        
        
        
        
            
                
    const cameraRsult = () => {
        if (isPreview) {
            return;
        }     
            
        if(hasPermission === null) {
            return(
                <View><Text>Null</Text></View>
            ) 
        }else if (hasPermission === false) {
            return <Text>No access to camera</Text>;
        } else {
            return (
                <View style={styles.container}>
                    <Text>Camera Active</Text>
                    <Camera style={styles.camera} 
                        type={type} 
                        flashMode={flashMode}
                        onCameraReady={onCameraReady}
                        onMountError={(error) => {
                            console.log("cammera error", error);
                        }}
                        
                        
                        ref={cameraRef}>
                        <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                            setType(
                                type === Camera.Constants.Type.back
                                ? Camera.Constants.Type.front
                                : Camera.Constants.Type.back
                            );
                            }}>
                            <Text style={styles.text}> Flip </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            disabled={!isCameraReady}
                            onPress={() => {
                                setFlash(
                                    flashMode === Camera.Constants.FlashMode["torch"]
                                    ? Camera.Constants.FlashMode["off"]
                                    : Camera.Constants.FlashMode["torch"]
                                );
                            }}>
                            <Text style={styles.text}> Flash Light </Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button}
                            //disabled={!isCameraReady} 
                            //onPressOut={cancelPreview}
                            onPress={() => {
                                alert('Take Picture')
                                takePicture()
                            }}>
                            <Text style={{...styles.text, ...styles.redBtn}} >
                                take Picture
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </Camera>
                </View>
              );
        }
    }
    return(
        <View style={styles.container}>
            <ScrollView>
                <Text h1>Camer</Text>
                    { cameraRsult() }
                <View>
                    <CameraRollGallery route={route} navigation={navigation}/>
                </View>
                
                <View >
                    <Text style={styles.item}>Try permissions</Text>
                    <Button style={{backgroundColor: 'red'}} 
                        title="request permissions" 
                        onPress={requestCameraPermission} />
                </View>
                
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      backgroundColor: "#ecf0f1",
      padding: 8
    },
    item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
    }, 
    camera: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-around',
        width: '100%',
        height: 300
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
    },
    button: {
  
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
        color: 'white',
        backgroundColor: '#828585',
        padding: 5,
        borderRadius: 5,

    },
    redBtn: {
        backgroundColor: '#ff0000'
    }
  });
export default CameraRollScreen