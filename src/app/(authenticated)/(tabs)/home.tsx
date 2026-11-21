import { Ionicons } from "@expo/vector-icons";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const C = {
  bg: "#F5F7F8",
  card: "#FFFFFF",
  ink: "#0F1F24",
  muted: "#5F7279",
  line: "#DDE5E8",
  primary: "#0E7C86",
};

type Post = {
  id: string;
  name: string;
  username: string;
  time: string;
  avatar: string;
  text: string;
  image?: string;
  likes: number;
  comments: number;
};

const POSTS: Post[] = [
  {
    id: "1",
    name: "Maria Santos",
    username: "mariasantos",
    time: "2h",
    avatar: "https://i.pravatar.cc/150?img=47",
    text: "Sunrise hike was worth the 4am alarm. Cebu looks different from up here.",
    image: "https://picsum.photos/id/1018/900/700",
    likes: 128,
    comments: 14,
  },
  {
    id: "2",
    name: "Jun Reyes",
    username: "junreyes",
    time: "4h",
    avatar: "https://i.pravatar.cc/150?img=12",
    text: "Finally finished my first React Native app. Debugging layouts at midnight is a rite of passage.",
    likes: 56,
    comments: 9,
  },
  {
    id: "3",
    name: "Ana Dela Cruz",
    username: "anadc",
    time: "6h",
    avatar: "https://i.pravatar.cc/150?img=32",
    text: "Sunday market haul. The mangoes are ridiculous this season.",
    image: "https://picsum.photos/id/292/900/700",
    likes: 203,
    comments: 27,
  },
  {
    id: "4",
    name: "Carlo Mendoza",
    username: "carlom",
    time: "1d",
    avatar: "https://i.pravatar.cc/150?img=15",
    text: "Coffee, a quiet desk, and one stubborn bug. Good morning.",
    image: "https://picsum.photos/id/225/900/700",
    likes: 74,
    comments: 5,
  },
];

function PostCard({ post }: { post: Post }) {
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <Image source={{ uri: post.avatar }} style={styles.avatar} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>{post.name}</Text>
          <Text style={styles.meta}>
            @{post.username} · {post.time}
          </Text>
        </View>
        <Ionicons name="ellipsis-horizontal" size={20} color={C.muted} />
      </View>

      <Text style={styles.body}>{post.text}</Text>

      {post.image ? (
        <Image source={{ uri: post.image }} style={styles.image} />
      ) : null}

      <View style={styles.actions}>
        <View style={styles.action}>
          <Ionicons name="heart-outline" size={22} color={C.muted} />
          <Text style={styles.count}>{post.likes}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={20} color={C.muted} />
          <Text style={styles.count}>{post.comments}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="paper-plane-outline" size={20} color={C.muted} />
        </View>
      </View>
    </View>
  );
}

export default function Home() {
  return (
    <SafeAreaView style={styles.safe}>
      <FlatList
        data={POSTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        ListHeaderComponent={<Text style={styles.header}>Home</Text>}
        contentContainerStyle={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: C.bg },
  list: { paddingHorizontal: 16, paddingBottom: 24 },
  header: {
    fontSize: 28,
    fontWeight: "800",
    color: C.ink,
    paddingTop: 8,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: C.card,
    borderRadius: 18,
    padding: 14,
    marginBottom: 14,
    borderWidth: 1,
    borderColor: C.line,
  },
  row: { flexDirection: "row", alignItems: "center", gap: 12 },
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: C.line,
  },
  name: { fontSize: 16, fontWeight: "700", color: C.ink },
  meta: { fontSize: 13, color: C.muted, marginTop: 1 },
  body: { fontSize: 15, lineHeight: 22, color: C.ink, marginTop: 12 },
  image: {
    width: "100%",
    aspectRatio: 4 / 3,
    borderRadius: 14,
    marginTop: 12,
    backgroundColor: C.line,
  },
  actions: { flexDirection: "row", gap: 24, marginTop: 14 },
  action: { flexDirection: "row", alignItems: "center", gap: 6 },
  count: { fontSize: 14, color: C.muted, fontWeight: "600" },
});  