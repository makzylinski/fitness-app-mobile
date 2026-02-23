import apiClient from "./apiClient";

export const fetchProductByBarcode = async (code: string) => {
  await apiClient.post("/products/lookup", { barcode: code });
};
