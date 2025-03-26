import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Gold_bar from "../Home Page/Gold_bar";

const LifestyleScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <view>
      <Gold_bar />
      </view>
      
    <ScrollView style={styles.container}>
      
      {/* Back Button */}
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back" size={22} color="#000" />
        <Text style={styles.headerTitle}>Life Style</Text>
      </TouchableOpacity>

      {/* Physical Activity */}
      <Text style={styles.sectionTitle}>Physical Activity</Text>
      <View style={styles.boxContainer}>
        <View style={styles.listItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="walk-outline" size={20} color="#000" />
          </View>
          <Text style={styles.itemText}>Activity</Text>
          <Text style={styles.valueText}>Medium</Text>
        </View>
      </View>

      {/* Lifestyle Habits */}
      <Text style={styles.sectionTitle}>Lifestyle Habits</Text>
      <View style={styles.boxContainer}>
        <View style={styles.listItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="cafe-outline" size={20} color="#000" />
          </View>
          <Text style={styles.itemText}>Smoking</Text>
          <Text style={styles.valueText}>3 d/wk</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="beer-outline" size={20} color="#000" />
          </View>
          <Text style={styles.itemText}>Alcohol</Text>
          <Text style={styles.valueText}>2 d/wk</Text>
        </View>
      </View>

      {/* Diet Preference */}
      <Text style={styles.sectionTitle}>Diet Preference</Text>
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.listItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="leaf-outline" size={20} color="#000" />
          </View>
          <Text style={styles.itemText}>Vegan</Text>
          <Ionicons name="chevron-forward" size={20} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Sleep Pattern */}
      <Text style={styles.sectionTitle}>Sleep Pattern</Text>
      <View style={styles.boxContainer}>
        <View style={styles.listItem}>
          <View style={styles.iconWrapper}>
            <Ionicons name="bed-outline" size={20} color="#000" />
          </View>
          <Text style={styles.itemText}>Sleep</Text>
          <Text style={styles.valueText}>7.5 hr/day</Text>
        </View>
      </View>
    </ScrollView>
  </SafeAreaView>
  );
}

export default LifestyleScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingHorizontal: 24,
    paddingTop: 25,
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  headerTitle: {
    fontSize: 22, // Increased font size for better visibility
    fontWeight: "bold",
    marginLeft: 8,
    color: "#063247",
  },
  sectionTitle: {
    fontSize: 18, // Increased font size for headlines
    fontWeight: "bold",
    color: "#063247",
    marginBottom: 10,
    marginTop: 10,
  },
  boxContainer: {
    marginBottom: 14, // Adjusted spacing to fit compact design
  },
  listItem: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#B3E5FC",
    paddingVertical: 14, // Slightly reduced height of elements
    paddingHorizontal: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  iconWrapper: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 14,
  },
  itemText: {
    fontSize: 16,
    color: "#063247",
    flex: 1,
  },
  valueText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#063247",
  },
});
