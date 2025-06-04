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

  bottomButtonContainer: {
  position: 'absolute',
  bottom: 40,
  width: '100%',
  flexDirection: 'row',       // 🔹 Make buttons appear side by side
  justifyContent: 'center',   // 🔹 Center them horizontally
  alignItems: 'center',       // 🔹 Align them vertically
  gap: 20,                    // 🔹 Adds spacing between buttons (if supported)
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

captureButton: {
  position: 'absolute',
  bottom: 150,
  alignSelf: 'center',
  backgroundColor: '#1d3954',
  padding: 18,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
},

captureIcon: {
  fontSize: 36,
  color: 'white',
},

saveButton: {
  backgroundColor: '#1d3954',
  padding: 18,
  bottom: 130,
  borderRadius: 50,
  justifyContent: 'center',
  alignItems: 'center',
  elevation: 5,
  shadowColor: '#000',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.3,
  shadowRadius: 3,
  marginHorizontal: 40, // 🔹 Add spacing between buttons]
},

actionIcon: {
  fontSize: 36,
  color: 'white',
},
});