import React, { useMemo } from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { ViewStyle, TextStyle, ImageStyle } from 'react-native';


interface Styles {
  outerContainer: ViewStyle;
  innerContainer: ViewStyle;
  searchIcon: ViewStyle;
  input: TextStyle;
}

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const SearchBar = () => {
  const styles = useMemo(() => {
    return StyleSheet.create<Styles>({
      outerContainer: {
        width: '100%',
        height: screenHeight * 0.11, // Dynamically set height (11% of screen height)
        backgroundColor: '#FAFAFA',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: screenWidth * 0.05, // 5% padding on both sides
      },
      innerContainer: {
        width: '95.5%', // 90% of the screen width
        height: screenHeight * 0.06, // 6% of screen height
        borderRadius: screenHeight * 0.015, // Responsive border radius
        borderWidth: 1.8,
        borderColor: '#F1F1F1',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: screenWidth * 0.04, // 4% padding
      },
      searchIcon: {
        marginRight: screenWidth * 0.03, // 3% margin
      },
      input: {
        flex: 1,
        fontSize: screenWidth * 0.045, // Scales with screen width
        color: '#002D3D',
      },
    });
  }, [screenWidth, screenHeight]);

  return (
    <View style={styles.outerContainer}>
      <View style={styles.innerContainer}>
        <Svg
          width={screenWidth * 0.06} // 6% of screen width
          height={screenWidth * 0.06}
          viewBox="0 0 24 24"
          fill="none"
          style={styles.searchIcon}
        >
          <Path
            d="M11 20C15.9706 20 20 15.9706 20 11C20 6.02944 15.9706 2 11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20Z"
            stroke="#D9D9D9"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <Path
            d="M18.9304 20.6898C19.4604 22.2898 20.6704 22.4498 21.6004 21.0498C22.4504 19.7698 21.8904 18.7198 20.3504 18.7198C19.2104 18.7098 18.5704 19.5998 18.9304 20.6898Z"
            stroke="#D9D9D9"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
        <TextInput
          style={styles.input}
          placeholder="Search Doctors"
          placeholderTextColor="#9CA3AF"
        />
      </View>
    </View>
  );
};

export default SearchBar;
