import { Colors } from "@/constants/theme";

export function useThemeColor(colorName: keyof typeof Colors.dark) {
  return Colors.dark[colorName];
}
