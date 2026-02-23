import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Text } from "react-native";

type ScannerProps = {
  onScan?: (type: any, data: any) => void;
};

export default function Scanner({ onScan }: ScannerProps) {
  const [permission, requestPermission] = useCameraPermissions();
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
        style={{ height: 300, width: "100%" }}
        onBarcodeScanned={({ data, type }) => {
          console.log(type, data);
          setType(type);
          setData(data);
          if (onScan) {
            onScan(type, data);
          }
        }}
      />
      Type: {scanType}
      Data: {data}
    </>
  );
}
