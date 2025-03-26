import { loadUserData } from "@/api/IndexDB";
import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  TextStyle,
  SafeAreaView,
  ActivityIndicator,
  Platform,
} from "react-native";
import { Svg, Circle, Text as SvgText } from "react-native-svg";

interface Styles {
  container: ViewStyle;
  leftSection: ViewStyle;
  greetingText: TextStyle;
  greetingContainer: ViewStyle;
  waveEmoji: TextStyle;
  subtitle: TextStyle;
  sectionTitle: TextStyle;
  boldText: TextStyle;
  infoText: TextStyle;
  rightSection: ViewStyle;
  healthScoreLabel: TextStyle;
  noteText: TextStyle;
}

const baseWidth = 375;

// Scale function for responsiveness
const scale = (size: number, screenWidth: number) => (screenWidth / baseWidth) * size;

const HealthCard = () => {
  const { width: screenWidth } = useWindowDimensions();
  const scaledSize = useCallback((size: number) => scale(size, screenWidth), [screenWidth]);

  const healthScore = 63;
  const radius = scaledSize(40);
  const strokeWidth = scaledSize(6);
  const circumference = 2 * Math.PI * radius;
  const progress = (healthScore / 100) * circumference;

  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userDetails = await loadUserData();
        if (!userDetails) {
          navigation.navigate("Profile" as never);
        }
        setUserData(userDetails);
      } catch (error) {
        console.error("Failed to load user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [navigation]);

  const styles = useMemo(() => {
    return StyleSheet.create<Styles>({
      container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#F3F4F6",
        paddingVertical: scaledSize(10),
        paddingHorizontal: scaledSize(15),
        minWidth: "95%",
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: scaledSize(2) },
        shadowRadius: scaledSize(4),
        elevation: Platform.OS === "android" ? 4 : 3,
      },
      leftSection: {
        flex: 1,
        minHeight: scaledSize(120),
      },
      greetingText: {
        fontSize: scaledSize(22),
        fontWeight: "bold",
        color: "#063247",
        fontFamily: "Poppins-SemiBold",
      },
      greetingContainer: {
        flexDirection: "row",
        alignItems: "center",
      },
      waveEmoji: {
        fontSize: scaledSize(18),
        marginLeft: scaledSize(5),
      },
      subtitle: {
        fontSize: scaledSize(14),
        color: "#7D8A95",
        marginTop: scaledSize(2),
      },
      sectionTitle: {
        fontSize: scaledSize(18),
        fontWeight: "bold",
        color: "#063247",
        marginTop: scaledSize(6),
      },
      boldText: {
        fontWeight: "bold",
        color: "#1F2937",
        fontFamily: "Poppins-Bold",
      },
      infoText: {
        fontSize: scaledSize(13),
        color: "#6B7280",
        marginTop: scaledSize(2),
      },
      rightSection: {
        alignItems: "center",
        marginTop: scaledSize(10),
        paddingTop: scaledSize(15),
      },
      healthScoreLabel: {
        fontSize: scaledSize(14),
        fontWeight: "bold",
        color: "#063247",
        marginBottom: scaledSize(5),
      },
      noteText: {
        fontSize: scaledSize(9),
        color: "#9CA3AF",
        fontStyle: "italic",
        marginTop: scaledSize(2),
      },
    });
  }, [screenWidth, scaledSize]);

  if (loading) {
    return (
      <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color="#0F3D59" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView>
      <View style={styles.container}>
        {/* Left Section */}
        <View style={styles.leftSection}>
          <View style={styles.greetingContainer}>
            <Text style={styles.greetingText} accessibilityLabel="Greeting text">
              Hello {userData?.name || "Guest"}!
            </Text>
            <Text style={styles.waveEmoji}>👋</Text>
          </View>

          <Text style={styles.subtitle}>You have 0 appointments today!</Text>

          <Text style={styles.sectionTitle}>Health Score</Text>
          <Text style={styles.infoText}>
            Blood Type: <Text style={styles.boldText}>{userData?.bloodType || "N/A"}</Text>
          </Text>
          <Text style={styles.infoText}>
            Age: <Text style={styles.boldText}>{userData?.age || "N/A"}</Text>
          </Text>
        </View>

        {/* Right Section - Circular Progress */}
        <View style={styles.rightSection}>
          <Text style={styles.healthScoreLabel}>Your Health Score</Text>
          <Svg width={scaledSize(125)} height={scaledSize(125)} viewBox="0 0 100 100">
            {/* Background Circle */}
            <Circle cx="50" cy="50" r={radius} stroke="#E5E7EB" strokeWidth={strokeWidth} fill="none" />
            {/* Progress Circle */}
            <Circle
              cx="50"
              cy="50"
              r={radius}
              stroke="#0F3D59"
              strokeWidth={strokeWidth}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - progress}
              strokeLinecap="round"
              fill="none"
            />
            {/* Score Number */}
            <SvgText x="50" y="48" textAnchor="middle" fontSize="18" fontWeight="bold" fill="#0F3D59">
              {healthScore}
            </SvgText>
            {/* "Out of 100" Text Below */}
            <SvgText x="50" y="65" textAnchor="middle" fontSize="10" fill="#6B7280">
              Out of 100
            </SvgText>
          </Svg>
          <Text style={styles.noteText}>*Calculated from test report</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HealthCard;
