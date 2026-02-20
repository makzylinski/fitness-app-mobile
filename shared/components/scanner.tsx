import { CameraView } from "expo-camera";
import { useState } from "react";

export default function Scanner() {
  const [scanned, setScanned] = useState(false);

  return (
    <CameraView
      style={{ flex: 1 }}
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
