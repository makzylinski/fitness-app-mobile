import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text } from "react-native";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);

  if (!permission) return null;

  if (!permission.granted) {
    requestPermission();
    return <Text>Need camera access.</Text>;
  }

  return (
    <CameraView
      style={{ height: 300, width: "100%" }}
      barcodeScannerSettings={{
        barcodeTypes: ["ean13", "ean8", "qr", "upc_a"],
      }}
      onBarcodeScanned={({ data, type }) => {
        if (!scanned) {
          setScanned(true);
          console.log(type, data);
        }
      }}
    />
  );
}
