import { decode } from 'base64-arraybuffer';
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

const uploadPhoto = async () => {
  if (!capturedPhoto) return;

  try {
    const photoName = `scan-${Date.now()}.jpg`;

    // Step 1: Read file as base64
    const base64 = await FileSystem.readAsStringAsync(capturedPhoto, {
      encoding: FileSystem.EncodingType.Base64,
    });

    // Step 2: Convert base64 → ArrayBuffer
    const arrayBuffer = decode(base64);

    // Step 3: Upload raw binary to Supabase
    const { error } = await supabase.storage
      .from('documents')
      .upload(photoName, arrayBuffer, {
        contentType: 'image/jpeg',
        upsert: true,
      });

    if (error) throw error;

    Alert.alert('Success', 'Image uploaded successfully!');
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