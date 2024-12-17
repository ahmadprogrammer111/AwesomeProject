import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import { Button } from 'react-native';

const ImagePicker = () => {
    const [selectedImage, setSelectedImage] = useState<any>(null)

    const openImagePicker = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
    
        launchImageLibrary(options, (response : any) => {
          if (response.didCancel) {
            console.log('User cancelled image picker');
          } else if (response.error) {
            console.log('Image picker error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
          }
        });
      };

       const handleCameraLaunch = () => {
        const options = {
          mediaType: 'photo',
          includeBase64: false,
          maxHeight: 2000,
          maxWidth: 2000,
        };
      
        launchCamera(options, (response : any) => {
          if (response.didCancel) {
            console.log('User cancelled camera');
          } else if (response.error) {
            console.log('Camera Error: ', response.error);
          } else {
            let imageUri = response.uri || response.assets?.[0]?.uri;
            setSelectedImage(imageUri);
            console.log(imageUri);
          }
        });
      }

  return (
    <View>
      <Text style={{color: 'black'}}>ImagePicker</Text>
      <Button title='Upload image from gallery' onPress={openImagePicker} />
      <Button title='Upload image from camera' onPress={handleCameraLaunch} />

      {
        selectedImage &&
        <Image style={{height: 100, width: 100}} source={{uri: selectedImage}}/>
      }
    </View>
  )
}

export default ImagePicker

const styles = StyleSheet.create({})