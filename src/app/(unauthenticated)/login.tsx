import { Link } from "expo-router";
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  bg: "#F5F7F8",
  card: "#FFFFFF",
  ink: "#0F1F24",
  muted: "#5F7279",
  line: "#DDE5E8",
  primary: "#0E7C86",
};

export default function Login() {
  return (
    <SafeAreaView style={styles.safe}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scroll}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.brand}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>L</Text>
            </View>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>
              Log in to see what your friends are posting.
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="you@example.com"
              placeholderTextColor="#98A8AE"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />

            <Text style={[styles.label, { marginTop: 16 }]}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Enter your password"
              placeholderTextColor="#98A8AE"
              secureTextEntry
              autoCapitalize="none"
            />

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            >
              <Text style={styles.buttonText}>Login</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>New here?</Text>
            <Link href={"/register" as any} style={styles.link}>
              Create an account
            </Link>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  scroll: { flexGrow: 1, justifyContent: "center", padding: 24 },
  brand: { alignItems: "center", marginBottom: 28 },
  logo: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: C.primary,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  logoText: { color: "#fff", fontSize: 30, fontWeight: "800" },
  title: { fontSize: 28, fontWeight: "800", color: C.ink },
  subtitle: {
    fontSize: 15,
    color: C.muted,
    marginTop: 6,
    textAlign: "center",
    maxWidth: 280,
  },
  card: {
    backgroundColor: C.card,
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: C.line,
  },
  label: { fontSize: 14, fontWeight: "600", color: C.ink, marginBottom: 8 },
  input: {
    height: 50,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: C.line,
    backgroundColor: C.bg,
    paddingHorizontal: 14,
    fontSize: 16,
    color: C.ink,
  },
  button: {
    height: 52,
    borderRadius: 14,
    backgroundColor: C.primary,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 24,
  },
  pressed: { opacity: 0.85 },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "700" },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 6,
    marginTop: 24,
  },
  footerText: { color: C.muted, fontSize: 15 },
  link: { color: C.primary, fontSize: 15, fontWeight: "700" },
});
