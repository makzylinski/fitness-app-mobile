import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text } from "react-native";

export default function Scanner() {
  const [permission, requestPermission] = useCameraPermissions();
  const [scanned, setScanned] = useState(false);
  const [scanType, setType] = useState<any>();
  const [data, setData] = useState<any>();

  if (!permission) return null;

  if (!permission.granted) {
    requestPermission();
    return <Text>Need camera access.</Text>;
  }

  return (
    <>
      <CameraView
        style={{ height: 300, width: "100%", transform: [{ scaleX: -1 }] }}
        onBarcodeScanned={({ data, type }) => {
          console.log(type, data);
          setType(type);
          setData(data);
        }}
      />
      Type: {scanType}
      Data: {data}
    </>
  );
}
