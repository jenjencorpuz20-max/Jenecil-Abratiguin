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

function Field({
  label,
  ...props
}: { label: string } & React.ComponentProps<typeof TextInput>) {
  return (
    <View style={{ marginBottom: 16 }}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor="#98A8AE"
        {...props}
      />
    </View>
  );
}

export default function Register() {
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
          <View style={styles.header}>
            <Text style={styles.title}>Create your account</Text>
            <Text style={styles.subtitle}>
              It takes less than a minute to get started.
            </Text>
          </View>

          <View style={styles.card}>
            <Field
              label="Name"
              placeholder="Your full name"
              autoComplete="name"
            />
            <Field
              label="Email"
              placeholder="you@example.com"
              keyboardType="email-address"
              autoCapitalize="none"
              autoComplete="email"
            />
            <Field
              label="Password"
              placeholder="At least 8 characters"
              secureTextEntry
              autoCapitalize="none"
            />
            <Field
              label="Confirm password"
              placeholder="Type your password again"
              secureTextEntry
              autoCapitalize="none"
            />

            <Pressable
              style={({ pressed }) => [styles.button, pressed && styles.pressed]}
            >
              <Text style={styles.buttonText}>Register</Text>
            </Pressable>
          </View>

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account?</Text>
            <Link href="/login" style={styles.link}>
              Login
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
  header: { marginBottom: 24 },
  title: { fontSize: 28, fontWeight: "800", color: C.ink },
  subtitle: { fontSize: 15, color: C.muted, marginTop: 6 },
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
    marginTop: 8,
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