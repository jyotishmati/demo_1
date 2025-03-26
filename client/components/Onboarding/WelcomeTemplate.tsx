import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, useWindowDimensions } from 'react-native';

interface WelcomeTemplateProps {
  imageSource: any;
  title: string;
  subtitle: string;
  backgroundColor: string;
  buttonColor: string;
  titleColor: string;
  skipColor: string;
  onNext: () => void;
}

export default function WelcomeTemplate({
  imageSource,
  title,
  subtitle,
  backgroundColor,
  buttonColor,
  titleColor,
  skipColor,
  onNext,
}: WelcomeTemplateProps) {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;

  // Calculate responsive sizes
  const imageHeight = isLandscape ? '70%' : '65%';  
  const marginTopImage = isLandscape ? -50 : -75;
  const imageBorderRadius = width * 0.22;
  const titleFontSize = width * 0.07;
  const subtitleFontSize = width * 0.04;
  const buttonWidth = width * 0.48;  
  const buttonPaddingHorizontal = width * 0.08;
  const progressBarWidth = width * 0.5;

  return (
    <SafeAreaView style={[styles.safeArea, { backgroundColor }]}>
      <View style={styles.container}>
        <View style={[styles.imageContainer, { height: imageHeight, marginTop: marginTopImage }]}>
          <Image
            source={imageSource}
            style={[styles.image, { borderBottomRightRadius: imageBorderRadius }]}
            resizeMode="cover"
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={[styles.title, { fontSize: titleFontSize, color: titleColor }]}>{title}</Text>
          <Text style={[styles.subtitle, { fontSize: subtitleFontSize, color: titleColor }]}>{subtitle}</Text>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: buttonColor, width: buttonWidth }]}
            onPress={onNext}
          >
            <Text style={[styles.buttonText, { color: backgroundColor }]}>Next</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skipButton}>
            <Text style={[styles.skipText, { color: skipColor }]}>Skip</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Increased spacing between Skip & Progress Bar */}
      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: progressBarWidth }]} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    width: '90%', // Adjusted width to move image left
    alignSelf: 'flex-start', // Moves image towards the left
    paddingRight: 0, // Removed right padding
    marginLeft: -20, // Fine-tune left margin if needed
  },
  image: {
    width: '108%',
    height: '102%',
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 40,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    textAlign: 'center',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  button: {
    borderRadius: 9999,
    marginTop: 24,
    paddingHorizontal: 32,
    paddingVertical: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    textAlign: 'center',
  },
  skipButton: {
    marginTop: 16,
    marginBottom: 40, // Increased spacing before progress bar
  },
  skipText: {
    textAlign: 'center',
    fontSize: 16,
  },
  progressBarContainer: {
    position: 'absolute',
    bottom: 5, // Reduced bottom position for better alignment
    width: '100%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressBar: {
    height: 5,
    backgroundColor: '#9CA3AF',
    borderRadius: 10,
  },
});
