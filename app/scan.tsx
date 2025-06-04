import { CameraView, useCameraPermissions } from 'expo-camera';
import * as FileSystem from 'expo-file-system';
import React, { useRef, useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import { supabase } from '../lib/supabase'; // ✅ Supabase client
import scanStyles from './ScanScreenStyles';

export default function ScanScreen() {
  const [permission, requestPermission] = useCameraPermissions();
  const [capturedPhoto, setCapturedPhoto] = useState<string | null>(null);
  const cameraRef = useRef<CameraView>(null);

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      if (photo && photo.uri) {
        setCapturedPhoto(photo.uri);
      }
    }
  };

  //DAE HIROUN! NAG GAGANA NA NI!
const uploadPhoto = async () => {
  if (!capturedPhoto) return;

  try {
    const photoName = `scan-${Date.now()}.jpg`;

    // Read the image file as base64
    const base64 = await FileSystem.readAsStringAsync(capturedPhoto, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Convert base64 to a Blob-like object using a data URL
    const base64DataUrl = `data:image/jpeg;base64,${base64}`;

    // Upload using Supabase’s `upload` (this works with data URLs!)
    const { error } = await supabase.storage
      .from('documents')
      .upload(photoName, base64DataUrl, {
        contentType: 'image/jpeg',
        upsert: true, // optional: overwrite if file with same name exists
      });

    if (error) throw error;

    Alert.alert('Success', 'Image uploaded to Supabase Storage!');
    setCapturedPhoto(null);
  } catch (error: any) {
    console.error('Upload error:', error.message || error);
    Alert.alert('Upload Failed', error.message || 'Unknown error');
  }
};

  if (!permission) {
    return (
      <View style={scanStyles.centeredView}>
        <Text>Requesting camera permissions...</Text>
      </View>
    );
  }

  if (!permission.granted) {
    return (
      <View style={scanStyles.centeredView}>
        <Text>No access to camera</Text>
        <TouchableOpacity style={scanStyles.button} onPress={requestPermission}>
          <Text style={scanStyles.buttonText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {capturedPhoto ? (
        <>
          <Image source={{ uri: capturedPhoto }} style={scanStyles.previewImage} />
          <TouchableOpacity style={scanStyles.button} onPress={uploadPhoto}>
            <Text style={scanStyles.buttonText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity style={scanStyles.button} onPress={() => setCapturedPhoto(null)}>
            <Text style={scanStyles.buttonText}>Retake</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <CameraView style={scanStyles.cameraPreview} ref={cameraRef} facing="back" />
          <TouchableOpacity style={scanStyles.button} onPress={takePicture}>
            <Text style={scanStyles.buttonText}>Capture</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}