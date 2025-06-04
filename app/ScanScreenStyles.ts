import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraPreview: {
    flex: 1,
  },
  previewImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  xButton: {
    position: 'absolute',
    top: 50,
    right: 20,
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 10,
    borderRadius: 20,
  },
  xButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  captureButton: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    backgroundColor: '#1d3954',
    padding: 20,
    borderRadius: 50,
  },
  bottomButtonContainer: {
    position: 'absolute',
    bottom: 40,
    width: '100%',
    alignItems: 'center',
  },
  saveButton: {
    backgroundColor: 'green',
    padding: 20,
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  // 👉 ADD THIS
  button: {
    backgroundColor: '#1d3954',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
});