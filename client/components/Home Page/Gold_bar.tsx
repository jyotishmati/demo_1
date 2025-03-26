import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  TextStyle,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Svg, Path } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

interface Styles {
  container: ViewStyle;
  goldButton: ViewStyle;
  goldButtonInner: ViewStyle;
  goldText: TextStyle;
  iconContainer: ViewStyle;
  iconWrapper: ViewStyle;
}

const baseWidth = 375; // Base width for scaling

export default function VerificationScreen() {
  const { width: screenWidth } = useWindowDimensions();
  const scale = (size: number) => (screenWidth / baseWidth) * size;
  const navigation = useNavigation();

  // Dynamically calculate status bar height
  const statusBarHeight = Platform.OS === "ios" ? 40 : StatusBar.currentHeight || 20;
  const containerHeight = scale(69) + statusBarHeight; // Increased height for better layout

  const styles = useMemo(() => {
    return StyleSheet.create<Styles>({
      container: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#0E2A3A",
        paddingHorizontal: scale(16),
        paddingVertical: scale(10),
        height: containerHeight,
        paddingTop: statusBarHeight, // Adjusting for status bar
        paddingBottom: scale(10),
      },
      goldButton: {
        width: scale(95),
        height: scale(45),
        borderRadius: scale(20),
        justifyContent: "center",
        alignItems: "center",
      },
      goldButtonInner: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: scale(20),
      },
      goldText: {
        fontSize: scale(14),
        fontWeight: "bold",
        color: "#0E2A3A",
      },
      iconContainer: {
        flexDirection: "row",
        alignItems: "center",
        gap: scale(12),
        marginLeft: "auto",
        marginRight: scale(0),
        marginTop: scale(10), // Moving icons down slightly
        flex: 1,
        justifyContent: "flex-end",
      },
      iconWrapper: {
        width: scale(42),
        height: scale(42),
        borderRadius: scale(20),
        backgroundColor: "white",
        alignItems: "center",
        justifyContent: "center",
      },
    });
  }, [screenWidth, scale, containerHeight]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#0E2A3A" }}>
      <View style={styles.container}>
        {/* Gold Button */}
        <LinearGradient
          colors={["#FFD700", "#E6C200"]}
          style={styles.goldButton}
        >
          <TouchableOpacity style={styles.goldButtonInner}>
            <Text style={styles.goldText}>GOLD</Text>
          </TouchableOpacity>
        </LinearGradient>

        {/* Icons Section */}
        <View style={styles.iconContainer}>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate("Chatbot" as never)}
          >
            {chatIcon()}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate("Hash" as never)}
          >
            {hashtagIcon()}
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconWrapper}
            onPress={() => navigation.navigate("Notification" as never)}
          >
            {notificationIcon()}
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

// Icons (Unchanged)
const chatIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <Path
      d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7l-3 3z"
      stroke="#0E2A3A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const hashtagIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <Path d="M7 3L5 21" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M19 3L17 21" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M5 9H19" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    <Path d="M5 15H19" stroke="#0E2A3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
  </Svg>
);

const notificationIcon = () => (
  <Svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <Path
      d="M18 8a6 6 0 0 0-12 0c0 7-3 8-3 8h18s-3-1-3-8z"
      stroke="#0E2A3A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13.73 21a2 2 0 0 1-3.46 0"
      stroke="#0E2A3A"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
