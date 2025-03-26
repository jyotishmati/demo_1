// import { loginSignup } from "@/api/loginAPI";
// import React, { useState } from "react";
// import {
//   View,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   Image,
//   StyleSheet,
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";

// interface LoginTemplateProps {
//   title: string;
//   subtitle: string;
//   buttonText: string;
//   // onButtonPress: () => void;
//   // onLoginPress: () => void;
//   onProfilePage: () => void;
//   onVerifyPage: () => void;
//   onHomePage: () => void;
//   imageSource: any;
// }

// export default function LoginTemplate({
//   title,
//   subtitle,
//   buttonText,
//   // onButtonPress,
//   // onLoginPress,
//   onVerifyPage,
//   onProfilePage,
//   onHomePage,
//   imageSource,
// }: LoginTemplateProps) {
//   const [email, setEmail] = useState<string>("");
//   const [password, setPassword] = useState<string>("");
//   const [confirmPassword, setConfirmPassword] = useState<string>("");
//   const handleLogin = async () => {
//     try {
//       if (!email || !password) {
//         return alert("Fields are Empty");
//       }
//       const result = await loginSignup({ email, password, confirmPassword });
//       if (!result) {
//         alert("Problem in the Login!!");
//         return;
//       }
//       if (!result.verifyEmail) {
//         onVerifyPage();
//         return;
//       }
//       if (!result.isCompleteUserDetails) {
//         onProfilePage();
//         return;
//       }
//       if (result.isValid) {
//         onHomePage();
//         return;
//       }
//     } catch (err) {
//       alert("Problem in the Login!!");
//       console.error(err);
//     }
//   };
//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior={Platform.OS === "ios" ? "padding" : "height"}
//     >
//       {/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
//       <View style={{ flex: 1 }}>
//         {/* Scrollable Content */}
//         <ScrollView
//           contentContainerStyle={styles.scrollContainer}
//           keyboardShouldPersistTaps="handled"
//         >
//           {/* Back button area */}
//           <View style={styles.backButton}>
//             <TouchableOpacity>
//               {/* Back button icon can be added here */}
//             </TouchableOpacity>
//           </View>

//           {/* Main content */}
//           <View style={styles.contentContainer}>
//             <Text style={styles.title}>{title}</Text>
//             <Text style={styles.subtitle}>{subtitle}</Text>

//             {/* Input fields */}
//             <TextInput
//               placeholder="Enter Email ID"
//               style={styles.input}
//               keyboardType="email-address"
//               onChangeText={(text) => setEmail(text)}
//               autoCapitalize="none"
//               autoCorrect={false}
//               placeholderTextColor="#9CA3AF"
//             />

//             <TextInput
//               placeholder="Enter Password"
//               onChangeText={(text) => setPassword(text)}
//               style={[styles.input, { marginTop: 24 }]}
//               secureTextEntry
//               placeholderTextColor="#9CA3AF"
//             />

//             <TextInput
//               placeholder="Confirm Password"
//               onChangeText={(text) => setConfirmPassword(text)}
//               style={[styles.input, { marginTop: 24 }]}
//               secureTextEntry
//               placeholderTextColor="#9CA3AF"
//             />

//             {/* Send OTP Button */}
//             <TouchableOpacity style={styles.button} onPress={handleLogin}>
//               <Text style={styles.buttonText}>{buttonText}</Text>
//             </TouchableOpacity>

//             {/* Login link */}
//             <View style={styles.loginContainer}>
//               <Text style={styles.loginText}>
//                 Login to your corporate account.
//               </Text>
//               <TouchableOpacity>
//                 <Text style={styles.loginLink}>Login here</Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           {/* Bottom Image */}
//           <View style={styles.imageContainer}>
//             <Image
//               source={require("../../assets/images/login.png")}
//               style={styles.image}
//               resizeMode="contain"
//             />
//           </View>
//         </ScrollView>

//         {/* Fixed Bottom Bar */}
//         <View style={styles.bottomBar}>
//           <View style={styles.bottomIndicator} />
//         </View>
//       </View>
//       {/* </TouchableWithoutFeedback> */}
//     </KeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//   },
//   scrollContainer: {
//     flexGrow: 1,
//     paddingHorizontal: 20,
//     justifyContent: "center",
//   },
//   backButton: {
//     height: 24,
//     justifyContent: "center",
//   },
//   contentContainer: {
//     alignItems: "center",
//   },
//   title: {
//     fontSize: 28,
//     fontWeight: "bold",
//     color: "#002D3D",
//     textAlign: "center",
//     marginBottom: 0,
//   },
//   subtitle: {
//     fontSize: 15,
//     color: "#9CA3AF",
//     textAlign: "center",
//     marginBottom: 24,
//   },
//   input: {
//     width: "100%",
//     borderBottomWidth: 1,
//     borderBottomColor: "#E5E7EB",
//     paddingBottom: 6,
//     fontSize: 16,
//     textAlign: "center",
//     color: "#9CA3AF",
//   },
//   button: {
//     backgroundColor: "#002D3D",
//     borderRadius: 25,
//     paddingVertical: 14,
//     width: "100%",
//     marginTop: 24,
//   },
//   buttonText: {
//     color: "white",
//     textAlign: "center",
//     fontSize: 16,
//   },
//   loginContainer: {
//     flexDirection: "row",
//     justifyContent: "center",
//     alignItems: "center",
//     marginTop: 12,
//     gap: 4,
//   },
//   loginText: {
//     color: "#9CA3AF",
//     fontSize: 14,
//   },
//   loginLink: {
//     color: "#002D3D",
//     fontSize: 14,
//     fontWeight: "500",
//   },
//   imageContainer: {
//     alignItems: "center",
//     marginBottom: 12,
//   },
//   image: {
//     width: 250,
//     height: 346,
//   },
//   bottomBar: {
//     position: "absolute",
//     bottom: 0,
//     width: "100%",
//     height: 60,
//     backgroundColor: "white",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   bottomIndicator: {
//     width: 200,
//     height: 5,
//     backgroundColor: "#9CA3AF",
//     borderRadius: 10,
//   },
// });


import { loginSignup } from "@/api/loginAPI";
import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  useWindowDimensions,
} from "react-native";

interface LoginTemplateProps {
  title: string;
  subtitle: string;
  buttonText: string;
  onProfilePage: () => void;
  onVerifyPage: () => void;
  onHomePage: () => void;
  imageSource: any;
}

const baseWidth = 375; // Base screen width for scaling

export default function LoginTemplate({
  title,
  subtitle,
  buttonText,
  onVerifyPage,
  onProfilePage,
  onHomePage,
  imageSource,
}: LoginTemplateProps) {
  const { width: screenWidth, height: screenHeight } = useWindowDimensions();
  const isSmallScreen = screenWidth < 380;
  const scale = (size: number) => (screenWidth / baseWidth) * size;

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Fields are Empty");
      return;
    }

    try {
      const result = await loginSignup({ email, password, confirmPassword });

      if (!result) {
        alert("Problem in the Login!!");
        return;
      }

      if (!result.verifyEmail) {
        onVerifyPage();
        return;
      }

      if (!result.isCompleteUserDetails) {
        onProfilePage();
        return;
      }

      if (result.isValid) {
        onHomePage();
      }
    } catch (err) {
      alert("Problem in the Login!!");
      console.error(err);
    }
  };

  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "white",
        },
        scrollContainer: {
          flexGrow: 1,
          paddingHorizontal: screenWidth * 0.05,
          justifyContent: "center",
        },
        contentContainer: {
          alignItems: "center",
          flexGrow: 1,
          paddingBottom: scale(40), // Extra space for keyboard
        },
        title: {
          fontSize: scale(28),
          fontWeight: "bold",
          color: "#002D3D",
          textAlign: "center",
        },
        subtitle: {
          fontSize: scale(15),
          color: "#9CA3AF",
          textAlign: "center",
          marginBottom: scale(20),
        },
        input: {
          width: screenWidth * 0.85,
          borderBottomWidth: 1,
          borderBottomColor: "#E5E7EB",
          paddingVertical: scale(10),
          fontSize: scale(16),
          textAlign: "left",
          color: "#333",
          marginBottom: scale(16),
        },
        button: {
          backgroundColor: "#002D3D",
          borderRadius: scale(25),
          paddingVertical: scale(14),
          width: screenWidth * 0.85,
          marginTop: scale(20),
          alignItems: "center",
          justifyContent: "center",
        },
        buttonText: {
          color: "white",
          textAlign: "center",
          fontSize: scale(16),
        },
        loginContainer: {
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: scale(12),
        },
        loginText: {
          color: "#9CA3AF",
          fontSize: scale(14),
        },
        loginLink: {
          color: "#002D3D",
          fontSize: scale(14),
          fontWeight: "500",
          marginLeft: scale(5),
        },
        imageContainer: {
          alignItems: "center",
          marginVertical: scale(20),
        },
        image: {
          width: screenWidth * 0.6,
          height: screenHeight * 0.3,
          resizeMode: "contain",
        },
        bottomBar: {
          width: "100%",
          paddingVertical: scale(10),
          backgroundColor: "white",
          alignItems: "center",
          justifyContent: "center",
        },
        bottomIndicator: {
          width: scale(200),
          height: scale(5),
          backgroundColor: "#9CA3AF",
          borderRadius: scale(10),
        },
      }),
    [screenWidth, screenHeight, scale]
  );

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.contentContainer}>
          <Text style={[styles.title, isSmallScreen && { fontSize: scale(24) }]}>
            {title}
          </Text>
          <Text style={[styles.subtitle, isSmallScreen && { fontSize: scale(14) }]}>
            {subtitle}
          </Text>

          <TextInput
            placeholder="Enter Email ID"
            style={styles.input}
            keyboardType="email-address"
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#9CA3AF"
          />

          <TextInput
            placeholder="Enter Password"
            onChangeText={setPassword}
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />

          <TextInput
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            style={styles.input}
            secureTextEntry
            placeholderTextColor="#9CA3AF"
          />

          <TouchableOpacity
            style={[styles.button, isSmallScreen && { paddingVertical: scale(12) }]}
            onPress={handleLogin}
          >
            <Text style={[styles.buttonText, isSmallScreen && { fontSize: scale(14) }]}>
              {buttonText}
            </Text>
          </TouchableOpacity>

          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>Already have an account?</Text>
            <TouchableOpacity>
              <Text style={styles.loginLink}>Login here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image} />
          </View>
        </View>

        <View style={styles.bottomBar}>
          <View style={styles.bottomIndicator} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
