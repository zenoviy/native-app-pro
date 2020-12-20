import React, { useState, useEffect, useRef, useContext } from 'react';
import { Text, 
    View, 
    Button, 
    Image, 
    StyleSheet, 
    PermissionsAndroid, 
    TouchableOpacity, 
    ScrollView, 
    BackHandler } from 'react-native';
import { Camera } from 'expo-camera';
import * as Permissions from 'expo-permissions';
import * as MediaLibrary from 'expo-media-library';
import CameraRoll from "@react-native-community/cameraroll";

import Context from '../utils/context';


const CameraRollGallery  = ({ route, navigation, navigation: { goBack } }) => {
    const context = React.useContext(Context);
    //const [permission, setPermission] = useState(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
    const [allPictures, setPictures] = useState(null);
    const [galleryEdit, setGalleryEdit] = useState(false);
    const [selectedPicture, setSelectedPicture] = useState([]);
    const [taskPicture, setTaskPicture] = useState([]);

    const mediaMode = route? route.params.mode : null;

    async function hasAndroidPermission() {
        let access = await MediaLibrary.requestPermissionsAsync();
        //console.log('Permission', access)
        if (access.status === 'granted') {
          return true;
        } else {
            console.log('No permission')
            return
        }
    }
      
    async function loadPicture() {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        MediaLibrary.getAlbumAsync('petApp').then(album => {
            MediaLibrary.getAssetsAsync({
                first : 20,
                album: album,
                sortBy : [[ MediaLibrary.SortBy.creationTime, false ]]
            }).then(r => {
                setPictures({picturesAsets: r.assets})
            })
        }).catch(err => { console.error(err)})
        
    };


    const selectPictureForTask = async (asset) => {
        if(mediaMode === "select photo") {
            let displaySelect = taskPicture.find(selectedAsset => selectedAsset.id === asset.id);
            if(displaySelect){
                let indexInSelectedPictures = Object.assign([], taskPicture).indexOf(displaySelect);
                let SelectedPicturesRenew = Object.assign([], taskPicture)
                SelectedPicturesRenew.splice(indexInSelectedPictures, 1);

                setTaskPicture(SelectedPicturesRenew)
                return 
            }
            let taskPictures = [].concat(taskPicture);
            taskPictures.push(asset);
            setTaskPicture(taskPictures)
        }
    }

    function choseToDelatePIcture(asset){
        if(galleryEdit){
            let displaySelect = selectedPicture.find(selectedAsset => selectedAsset.id === asset.id);
            if(displaySelect) {
                
                let indexInSelectedPictures = Object.assign([], selectedPicture).indexOf(displaySelect);
                let SelectedPicturesRenew = Object.assign([], selectedPicture)
                SelectedPicturesRenew.splice(indexInSelectedPictures, 1);

                setSelectedPicture(SelectedPicturesRenew)
                return
            }

            let allSelectedPicture = Object.assign([], selectedPicture);
            allSelectedPicture = allSelectedPicture.concat(asset);
            setSelectedPicture(allSelectedPicture)
        }
    }

    const deletePicturesProcess = async () => {
        if (Platform.OS === "android" && !(await hasAndroidPermission())) {
            return;
        }
        MediaLibrary.getAlbumAsync('petApp').then(async (album) => {
            let deleteResule = await MediaLibrary.removeAssetsFromAlbumAsync(selectedPicture, album)
            if(deleteResule) loadPicture()
        })
    }

    

    BackHandler.addEventListener('hardwareBackPress', function () { 
        if(galleryEdit){
            setGalleryEdit(false)    
        }
    })

    const ShowSelectedPicture = (asset) => {
        let displaySelect = mediaMode === "select photo" && !galleryEdit ?
            taskPicture.find(selectedAsset => selectedAsset.id === asset.id )
        : selectedPicture.find(selectedAsset => selectedAsset.id === asset.id );
        if(displaySelect && galleryEdit){
            return(
            <Text style={{
                position: 'absolute', 
                backgroundColor: "#D40000",
                color: "#ffffff",
                zIndex: 11,
                alignItems: "center",
                justifyContent: 'center',
                borderRadius: 50,
                width: 20, 
                height: 20, 
                backgroundColor: '#00FF00'}}>
            </Text>
            )
        } else if(mediaMode === "select photo" && displaySelect){
            return(
                <Text style={{
                    position: 'absolute', 
                    backgroundColor: "#fff",
                    color: "#ffffff",
                    zIndex: 11,
                    alignItems: "center",
                    justifyContent: 'center',
                    borderRadius: 50,
                    width: 20, 
                    height: 20, 
                    right: 0,
                    }}>
                </Text>
                )
        } return null 
    }

loadPicture()
    /*if(context.makePhoto.makePhoto){
        //alert(1)
        
        context.makePhotosState(false)
    }*/

    return(
        <View style={styles.container}>
            <Text>Gallery</Text>
            {mediaMode === "select photo" ? 
            <Button 
                title="Take selected picture"
                onPress={() => {
                    route.params.context.taskAddMedia(taskPicture,  route.params.currentTaskId)
                    //goBack()
                }}
            /> : null }
            <Button title="Refresh" onPress={ loadPicture } />
            <ScrollView>
                <View style={{flex: 1, flexWrap: 'wrap', flexDirection: 'row'}}>
                   {
                        allPictures ?
                        allPictures.picturesAsets.map((pictureData, index) => {
                            return(
                                <TouchableOpacity
                                    style={{width: 100 / 2 + '%', height: 200}}
                                    key={pictureData.id}
                                    onLongPress={async () => {
                                        //alert(`LongPress ${pictureData.id}`)
                                        await setGalleryEdit(true)
                                        choseToDelatePIcture(pictureData)
                                    }}
                                    onPress={() => {
                                        choseToDelatePIcture(pictureData)
                                        selectPictureForTask(pictureData)
                                    }}
                                >
                                    { ShowSelectedPicture(pictureData)}
                                    <Image 
                                            style={{ 
                                                width: 100 + '%', 
                                                height: 200, 
                                                borderWidth: galleryEdit? 2 : 0,
                                                borderColor: galleryEdit? "#ff0000": null,
                                            }}
                                            key={pictureData.id}
                                            source={{uri: pictureData.uri}}
                                    /> 
                                </TouchableOpacity>
                            )
                        }) : <Text>Press load Image</Text>
                    } 
                    { galleryEdit ? 
                    <EditArea 
                        setGalleryEdit={setGalleryEdit} 
                        deletePicturesProcess={deletePicturesProcess}
                        setSelectedPicture={setSelectedPicture}
                        /> : null }
                </View>
            </ScrollView>
        </View>
    )
}


const EditArea = ({ setGalleryEdit, deletePicturesProcess, setSelectedPicture }) => {
    return(
        <View>
            <Text>Edit area</Text>
            <Button 
                title="confirm delate"
                onPress={() => {
                    //alert('delate pic')
                    deletePicturesProcess()
                    setSelectedPicture([])
                }}
            ></Button>
            <Button 
                title="Cancel"
                onPress={() => {
                    //alert('Cancel')
                    setGalleryEdit(false)
                }}
            ></Button>
        </View>
    )
}




const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    },
    editableArea: {
        flexDirection: 'row'
    }
})

export default CameraRollGallery