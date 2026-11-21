import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  bg: "#F5F7F8",
  card: "#FFFFFF",
  ink: "#0F1F24",
  muted: "#5F7279",
  line: "#DDE5E8",
  primary: "#0E7C86",
  banner: "#BFE3E6",
};

const DETAILS: { icon: keyof typeof Ionicons.glyphMap; label: string; value: string }[] = [
  { icon: "mail-outline", label: "Email", value: "jenjen@gmail.com" },
  { icon: "call-outline", label: "Phone", value: "+63 912 345 6789" },
  { icon: "location-outline", label: "Location", value: "Cagayan de Oro City, Philippines" },
  { icon: "calendar-outline", label: "Birthday", value: "March 14, 2000" },
  { icon: "time-outline", label: "Joined", value: "January 2026" },
];

const STATS = [
  { label: "Posts", value: "24" },
  { label: "Followers", value: "318" },
  { label: "Following", value: "190" },
];

export default function Profile() {
  return (
    <SafeAreaView style={styles.safe} edges={["top"]}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 32 }}>
        <View style={styles.banner} />

        <View style={styles.top}>
          <Image
            source={require("../../../../assets/images/jenjen1.jpg")}
            style={styles.avatar}
          />
          <Text style={styles.name}>Jenecil Abratiguin</Text>
          <Text style={styles.username}>@jenjen</Text>
          <Text style={styles.bio}>
            Mobile developer. Coffee, hiking, and building small apps that
            people actually use.
          </Text>

          <Pressable
            style={({ pressed }) => [styles.button, pressed && { opacity: 0.85 }]}
          >
            <Ionicons name="create-outline" size={18} color="#fff" />
            <Text style={styles.buttonText}>Edit Profile</Text>
          </Pressable>
        </View>

        <View style={styles.stats}>
          {STATS.map((s, i) => (
            <View
              key={s.label}
              style={[styles.stat, i > 0 && styles.statDivider]}
            >
              <Text style={styles.statValue}>{s.value}</Text>
              <Text style={styles.statLabel}>{s.label}</Text>
            </View>
          ))}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Personal details</Text>
          {DETAILS.map((d, i) => (
            <View
              key={d.label}
              style={[styles.detail, i > 0 && styles.detailBorder]}
            >
              <View style={styles.iconWrap}>
                <Ionicons name={d.icon} size={18} color={C.primary} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.detailLabel}>{d.label}</Text>
                <Text style={styles.detailValue}>{d.value}</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  banner: { height: 120, backgroundColor: C.banner },
  top: { alignItems: "center", paddingHorizontal: 24, marginTop: -52 },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 4,
    borderColor: C.bg,
    backgroundColor: C.line,
  },
  name: { fontSize: 24, fontWeight: "800", color: C.ink, marginTop: 12 },
  username: { fontSize: 15, color: C.muted, marginTop: 2 },
  bio: {
    fontSize: 15,
    lineHeight: 22,
    color: C.ink,
    textAlign: "center",
    marginTop: 12,
    maxWidth: 320,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    height: 46,
    paddingHorizontal: 24,
    borderRadius: 14,
    backgroundColor: C.primary,
    marginTop: 18,
  },
  buttonText: { color: "#fff", fontSize: 15, fontWeight: "700" },
  stats: {
    flexDirection: "row",
    backgroundColor: C.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.line,
    marginHorizontal: 16,
    marginTop: 22,
    paddingVertical: 14,
  },
  stat: { flex: 1, alignItems: "center" },
  statDivider: { borderLeftWidth: 1, borderLeftColor: C.line },
  statValue: { fontSize: 20, fontWeight: "800", color: C.ink },
  statLabel: { fontSize: 13, color: C.muted, marginTop: 2 },
  card: {
    backgroundColor: C.card,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: C.line,
    marginHorizontal: 16,
    marginTop: 14,
    padding: 16,
  },
  cardTitle: { fontSize: 17, fontWeight: "700", color: C.ink, marginBottom: 4 },
  detail: { flexDirection: "row", alignItems: "center", gap: 12, paddingVertical: 12 },
  detailBorder: { borderTopWidth: 1, borderTopColor: C.line },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: "#E4F3F4",
    alignItems: "center",
    justifyContent: "center",
  },
  detailLabel: { fontSize: 12, color: C.muted },
  detailValue: { fontSize: 15, color: C.ink, fontWeight: "600", marginTop: 1 },
});    