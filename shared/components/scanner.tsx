import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text } from "react-native";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [type, setType] = useState<any>();
  const [data, setData] = useState<any>();

  if (!permission) return null;

  if (!permission.granted) {
    requestPermission();
    return <Text>Need camera access.</Text>;
  }

  return (
    <>
      <CameraView
        style={{ height: 300, width: "100%" }}
        barcodeScannerSettings={{
          barcodeTypes: ["ean13", "ean8", "qr", "upc_a"],
        }}
        onBarcodeScanned={({ data, type }) => {
          console.log(type, data);
          setType(type);
          setData(data);
        }}
      />
      Type: {type}
      Data: {data}
    </>
  );
}
