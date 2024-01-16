import {
  PermissionStatus,
  launchCameraAsync,
  useCameraPermissions,
} from "expo-image-picker";
import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, View } from "react-native";
import OutlineButton from "../ui/OutlineButton";
import { Colors } from "../../constants/colors";

const ImagePicker = () => {
  const [pickedImage, setPickedImage] = useState(null);

  const [cameraPermissionStatus, requestPermission] = useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermissionStatus.status === PermissionStatus.UNDETERMINED) {
      const permissionResponse = await requestPermission();
      return permissionResponse.granted;
    }
    if (cameraPermissionStatus.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant camera permissions to use this app!"
      );
      return false;
    }

    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) return;

    const image = await launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5,
    });
    console.log("image.uri", image.uri);
    setPickedImage(image.uri);
  };

  return (
    <View>
      <View>
        {pickedImage && (
          <Image style={styles.imagePreview} source={{ uri: pickedImage }} />
        )}
      </View>
      <OutlineButton onPress={takeImageHandler} icon="camera">
        Take Image
      </OutlineButton>
    </View>
  );
};

export default ImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
});
