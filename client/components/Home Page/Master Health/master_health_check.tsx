// import React from "react";
// import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
// import { useNavigation } from "@react-navigation/native";

// const { width } = Dimensions.get("window");
// const scale = (size: number) => (width / 375) * size;

// const MasterHealthVault = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={styles.container}>
//       <View style={styles.card}>
//         <Text style={styles.text}>Master Health Vault</Text>
//         <TouchableOpacity
//           style={styles.button}
//           onPress={() => navigation.navigate("MasterHealthVault" as never)}
//         >
//           <Text style={styles.buttonText}>Check</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     alignItems: "center",
//     backgroundColor: "#023047", // Match background with card
//   },
//   card: {
//     flexDirection: "row",
//     alignItems: "center", // Center items vertically
//     justifyContent: "space-between",
//     backgroundColor: "#023047",
//     paddingHorizontal: scale(16),
//     minHeight: scale(80), // Reduced height
//     width: "100%",
//   },
//   text: {
//     color: "white",
//     fontSize: scale(18), // Reduced text size
//     fontWeight: "bold",
//     textAlign: "center",
//   },
//   button: {
//     backgroundColor: "white",
//     paddingHorizontal: scale(28),
//     paddingVertical: scale(5),
//     borderRadius: scale(20),
//     alignContent: "center",
//   },
//   buttonText: {
//     color: "#000",
//     fontSize: scale(14),
//     fontWeight: "600",
//     textAlign: "center",
//   },
// });

// export default MasterHealthVault;

import React, { useMemo } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

interface Styles {
  container: ViewStyle;
  text: TextStyle;
  button: ViewStyle;
  buttonText: TextStyle;
}

const baseWidth = 375; // Base width for scaling

const MasterHealthVault = () => {
  const { width: screenWidth } = useWindowDimensions();
  const scale = (size: number) => (screenWidth / baseWidth) * size;
  const navigation = useNavigation();

  const styles = useMemo(() => {
    return StyleSheet.create<Styles>({
      container: {
        flexDirection: "row", // Align text and button in a row
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "#023047",
        paddingHorizontal: "5%", // Better scaling
        minHeight: scale(80),
        width: "100%", // Adaptable width
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 3,
      },
      text: {
        color: "white",
        fontSize: Math.max(scale(18), 14), // Ensure readable font size
        fontWeight: "bold",
        textAlign: "left",
        flex: 1, // Allow text to take up available space
      },
      button: {
        backgroundColor: "white",
        paddingHorizontal: scale(24),
        paddingVertical: scale(7),
        borderRadius: scale(20),
        minHeight: scale(32), // Ensure touchable area is large enough
        justifyContent: "center",
        alignItems: "center",
      },
      buttonText: {
        color: "#000",
        fontSize: Math.max(scale(14), 12), // Ensure minimum font size
        fontWeight: "600",
      },
    });
  }, [screenWidth]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Master Health Vault</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("MasterHealthVault" as never)}
      >
        <Text style={styles.buttonText}>Check</Text>
      </TouchableOpacity>
    </View>
  );
};

export default MasterHealthVault;

