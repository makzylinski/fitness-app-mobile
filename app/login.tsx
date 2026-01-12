import ThemedButton from "../components/ui/themed-button";
import { ThemedInput } from "../components/ui/themed-input";
import { ThemedText } from "../components/ui/themed-text";
import { ThemedView } from "../components/ui/themed-view";

export default function Login() {
  return (
    <ThemedView>
      <ThemedView>
        <ThemedText>icon</ThemedText>
        <ThemedText>name</ThemedText>
        <ThemedText>subheader</ThemedText>
      </ThemedView>
      <ThemedView>
        <ThemedInput></ThemedInput>
        <ThemedInput></ThemedInput>
      </ThemedView>
      <ThemedButton title="Log in" onPress={() => null}></ThemedButton>
      <ThemedView>
        <ThemedText>Don&apos;t have an acoount?</ThemedText>
        <ThemedText>Sing Up</ThemedText>
      </ThemedView>
    </ThemedView>
  );
}
