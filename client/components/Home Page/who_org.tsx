import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

const NewsCard = () => {
  return (
    <View style={styles.container}>
      {/* Top Horizontal Bar */}
      <View style={styles.horizontalBar} />

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>World Health Organization</Text>
        <TouchableOpacity>
          <Text style={styles.seeAllText}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* News Card */}
      <View style={styles.card}>
        {/* Image */}
        <Image
          source={require('../../assets/images/WHO.jpg')} // Replace with your image
          style={styles.image}
        />

        {/* News Content */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            WHO urges rapid access to mpox diagnostic tests, invites manufacturers to emergency review
          </Text>
          <Text style={styles.date}>29 August 2024</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scale(-1),
    backgroundColor: "#fff",
    paddingHorizontal: scale(16),
    paddingVertical: scale(10),
    marginBottom: scale(-20),
  },
  horizontalBar: {
    height: scale(2),
    backgroundColor: "#E5E7EB",
    width: "100%",
    marginBottom: scale(10),
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(10),
  },
  headerText: {
    fontSize: scale(20),
    fontWeight: "bold",
    color: "#111827",
  },
  seeAllText: {
    fontSize: scale(14),
    color: "#6B7280",
  },
  card: {
    marginTop: scale(11),
    height: scale(280),
    backgroundColor: "#fff",
    borderRadius: scale(12),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: scale(2) },
    shadowOpacity: 0.1,
    shadowRadius: scale(4),
    elevation: scale(4),
  },
  image: {
    width: "100%",
    height: scale(180),
    borderTopLeftRadius: scale(12),
    borderTopRightRadius: scale(12),
  },
  textContainer: {
    padding: scale(15),
  },
  title: {
    fontSize: scale(14),
    fontWeight: "bold",
    color: "#1F2937",
    marginBottom: scale(6),
  },
  date: {
    fontSize: scale(12),
    color: "#6B7280",
  },
});

export default NewsCard;
