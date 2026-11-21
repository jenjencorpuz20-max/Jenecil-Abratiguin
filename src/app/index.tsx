import { View, Text, Image, ScrollView, StyleSheet, ImageSourcePropType } from "react-native";

type Place = {
  id: string;
  name: string;
  location: string;
  caption: string;
  img: ImageSourcePropType;
  likes: number;
  comments: number;
  time: string;
};

const PLACES: Place[] = [
  { id: "1", name: "Boracay", location: "Aklan, Philippines", caption: "White sand at sunset 🌅", img: require("../../assets/images/Bora.jpg"), likes: 128, comments: 14, time: "2 HOURS AGO" },
  { id: "2", name: "Palawan", location: "El Nido, Palawan", caption: "El Nido lagoon 🏝️", img: require("../../assets/images/palawan.jpg"), likes: 245, comments: 32, time: "5 HOURS AGO" },
  { id: "3", name: "Baguio", location: "Baguio City", caption: "Malamig at sariwa 🌲", img: require("../../assets/images/Baguio.jpg"), likes: 96, comments: 8, time: "1 DAY AGO" },
  { id: "4", name: "Cebu", location: "Moalboal, Cebu", caption: "Kawasan Falls adventure 💦", img: require("../../assets/images/cebu.jpg"), likes: 173, comments: 21, time: "2 DAYS AGO" },
  { id: "5", name: "Siargao", location: "General Luna, Siargao", caption: "Surf at island hopping 🏄", img: require("../../assets/images/Siargao.jpg"), likes: 211, comments: 27, time: "3 DAYS AGO" },
];

export default function Home() {
  return (
    <View style={s.container}>
      <View style={s.topBar}>
        <Text style={s.logo}>Travelgram</Text>
        <Text style={s.topIcons}>🤍  ✈️</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={s.scroll}>
        {PLACES.map((item) => (
          <View key={item.id} style={s.post}>
            <View style={s.header}>
              <View style={s.avatarRing}>
                <Image source={item.img} style={s.avatar} />
              </View>
              <View style={s.headerText}>
                <Text style={s.username}>{item.name.toLowerCase()}</Text>
                <Text style={s.location}>{item.location}</Text>
              </View>
              <Text style={s.more}>•••</Text>
            </View>

            <Image source={item.img} style={s.img} resizeMode="cover" />

            <View style={s.actions}>
              <View style={s.actionsLeft}>
                <Text style={s.icon}>🤍</Text>
                <Text style={s.icon}>💬</Text>
                <Text style={s.icon}>📤</Text>
              </View>
              <Text style={s.icon}>🔖</Text>
            </View>

            <Text style={s.likes}>{item.likes} likes</Text>
            <Text style={s.caption}>
              <Text style={s.bold}>{item.name.toLowerCase()} </Text>
              {item.caption}
            </Text>
            <Text style={s.comments}>View all {item.comments} comments</Text>
            <Text style={s.time}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Bottom nav */}
      <View style={s.bottomNav}>
        <Text style={s.navIcon}>🏠</Text>
        <Text style={s.navIcon}>🔍</Text>
        <Text style={s.navIcon}>➕</Text>
        <Text style={s.navIcon}>🎬</Text>
        <Text style={s.navIcon}>👤</Text>
      </View>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", alignItems: "center" },
  topBar: {
    width: "100%", maxWidth: 470, flexDirection: "row", justifyContent: "space-between",
    alignItems: "center", paddingHorizontal: 12, paddingTop: 40, paddingBottom: 8,
  },
  logo: { fontSize: 28, fontWeight: "bold", fontStyle: "italic" },
  topIcons: { fontSize: 22 },
  scroll: { width: "100%", maxWidth: 470 },

  post: { width: "100%", marginBottom: 18 },
  header: { flexDirection: "row", alignItems: "center", paddingHorizontal: 10, paddingVertical: 8 },
  avatarRing: {
    width: 36, height: 36, borderRadius: 18, borderWidth: 2, borderColor: "#e1306c",
    alignItems: "center", justifyContent: "center",
  },
  avatar: { width: 29, height: 29, borderRadius: 15 },
  headerText: { flex: 1, marginLeft: 10 },
  username: { fontSize: 14, fontWeight: "bold" },
  location: { fontSize: 11, color: "#444" },
  more: { fontSize: 16, fontWeight: "bold" },

  img: { width: "100%", aspectRatio: 1 },

  actions: { flexDirection: "row", justifyContent: "space-between", paddingHorizontal: 10, paddingTop: 8 },
  actionsLeft: { flexDirection: "row" },
  icon: { fontSize: 24, marginRight: 14 },

  likes: { fontWeight: "bold", fontSize: 14, paddingHorizontal: 10, marginTop: 6 },
  caption: { fontSize: 14, paddingHorizontal: 10, marginTop: 3 },
  bold: { fontWeight: "bold" },
  comments: { fontSize: 14, color: "#8e8e8e", paddingHorizontal: 10, marginTop: 4 },
  time: { fontSize: 10, color: "#8e8e8e", paddingHorizontal: 10, marginTop: 4 },

  bottomNav: {
    width: "100%", maxWidth: 470, flexDirection: "row", justifyContent: "space-around",
    paddingVertical: 10, borderTopWidth: 1, borderTopColor: "#efefef", backgroundColor: "#fff",
  },
  navIcon: { fontSize: 24 },
});