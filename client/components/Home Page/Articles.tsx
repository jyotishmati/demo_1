import React from "react";
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const scale = (size: number) => (width / 375) * size;

const App = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Articles</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>

      {/* Article Card */}
      <ImageBackground
        source={require("../../assets/images/article.jpg")}
        style={styles.articleCard}
        imageStyle={styles.articleImage}
      >
        <View style={styles.overlay}>
          <Text style={styles.articleTitle}>
            Looking for Specialist Doctors?
          </Text>
          <Text style={styles.articleSubtitle}>
            Schedule an appointment with our top doctors.
          </Text>
          <View style={styles.dotsContainer}>
            <View style={[styles.dot, styles.activeDot]} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
        </View>
      </ImageBackground>

      {/* Join Community Section */}
      <Text style={styles.joinTitle}>Join Community</Text>

      {/* Underline */}
      <View style={styles.underline} />

      <Text style={styles.joinSubtitle}>
        Join now to get all the information about the Health Industry! (#)
      </Text>
      <TouchableOpacity style={styles.joinButton} activeOpacity={0.8}>
        <Text style={styles.joinButtonText}>Join Now</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: scale(18),
    paddingVertical: scale(16),
    marginTop: -1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: scale(15),
  },
  headerText: {
    fontSize: scale(18),
    fontWeight: "bold",
    color: "#0F172A",
  },
  seeAll: {
    fontSize: scale(14),
    color: "#007AFF",
  },
  articleCard: {
    width: "100%",
    height: scale(180),
    borderRadius: scale(15),
    overflow: "hidden",
  },
  articleImage: {
    borderRadius: scale(15),
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingHorizontal: scale(15),
    paddingBottom: scale(15),
  },
  articleTitle: {
    color: "#fff",
    fontSize: scale(18),
    fontWeight: "bold",
    maxWidth: "90%", // Ensures text doesn't overflow
  },
  articleSubtitle: {
    color: "#fff",
    fontSize: scale(14),
    marginBottom: scale(35),
    maxWidth: "90%", // Prevents text from touching edges
  },
  dotsContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: scale(5),
  },
  dot: {
    width: scale(8),
    height: scale(8),
    borderRadius: scale(4),
    backgroundColor: "#ddd",
    marginHorizontal: scale(4),
  },
  activeDot: {
    backgroundColor: "#fff",
    width: scale(30),
  },
  joinTitle: {
    fontSize: scale(22),
    fontWeight: "bold",
    textAlign: "center",
    marginTop: scale(22),
    color: "#0F172A",
  },
  underline: {
    width: "90%",
    height: scale(1),
    backgroundColor: "#ccc",
    alignSelf: "center",
    marginVertical: scale(15),
  },
  joinSubtitle: {
    textAlign: "center",
    color: "gray",
    marginTop: scale(5),
    fontSize: scale(16),
    maxWidth: "85%", // Ensures readability
    alignSelf: "center",
  },
  joinButton: {
    backgroundColor: "#0F172A",
    paddingVertical: scale(12),
    paddingHorizontal: scale(20),
    borderRadius: scale(10),
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: scale(16),
    width: "75%", // Ensures button remains proportionate
  },
  joinButtonText: {
    color: "#fff",
    fontSize: scale(18),
    fontWeight: "bold",
  },
});

export default App;
