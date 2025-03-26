import React, { useState, useEffect, useRef, useCallback, useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
  ViewStyle,
  TextStyle,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { format, startOfMonth, endOfMonth, eachDayOfInterval } from "date-fns";
import { FontAwesome } from "@expo/vector-icons";

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  monthText: TextStyle;
  expandButton: ViewStyle;
  scrollContainer: ViewStyle;
  dayContainer: ViewStyle;
  today: ViewStyle;
  dayText: TextStyle;
  weekdayText: TextStyle;
  todayText: TextStyle;
}

const baseWidth = 375;

const HorizontalCalendar = () => {
  const { width: screenWidth } = useWindowDimensions();
  const scale = (size: number) => (screenWidth / baseWidth) * size;
  const navigation = useNavigation();

  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState<Date[]>([]);
  const scrollViewRef = useRef<ScrollView>(null);

  useEffect(() => {
    const firstDay = startOfMonth(currentDate);
    const lastDay = endOfMonth(currentDate);
    setDaysInMonth(eachDayOfInterval({ start: firstDay, end: lastDay }));
  }, [currentDate]);

  const scrollToToday = useCallback(() => {
    if (daysInMonth.length > 0 && scrollViewRef.current) {
      const todayIndex = daysInMonth.findIndex(
        (day) => format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd")
      );
  
      if (todayIndex !== -1) {
        // Width of each day container including margins
        const dayWidth = scale(50);
        const screenCenter = screenWidth / 2;
        const offset = todayIndex * dayWidth - screenCenter + dayWidth / 2;
  
        scrollViewRef.current.scrollTo({ x: offset, animated: true });
      }
    }
  }, [daysInMonth, screenWidth, scale]);
  

  useEffect(() => {
    if (daysInMonth.length > 0) {
      setTimeout(scrollToToday, 500); // Delay ensures component has rendered before scrolling
    }
  }, [daysInMonth, scrollToToday]);
  

  const styles = React.useMemo(() => {  //Explicitly accessing from React
    return StyleSheet.create<Styles>({
      container: {
        paddingTop: scale(20),
        paddingBottom: scale(20),
        paddingLeft: scale(10),
        paddingRight: scale(10),
        backgroundColor: "#FAFAFA",
        marginTop: -1,
      },
      header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: scale(10),
      },
      monthText: {
        fontSize: scale(22),
        fontWeight: "bold",
        color: "#0F172A",
      },
      expandButton: {
        padding: scale(8),
        backgroundColor: "#0F172A",
        borderRadius: scale(20),
        width: scale(32),
        height: scale(32),
        alignItems: "center",
        justifyContent: "center",
      },
      scrollContainer: {
        flexDirection: "row",
      },
      dayContainer: {
        alignItems: "center",
        justifyContent: 'center',
        paddingVertical: scale(8),
        marginHorizontal: scale(5),
        borderRadius: scale(50),
        backgroundColor: "#E2E8F0",
        width: scale(39),
        height: scale(55),
      },
      today: {
        backgroundColor: "#0F172A",
      },
      dayText: {
        fontSize: scale(16),
        fontWeight: "bold",
        color: "#1E293B",
      },
      weekdayText: {
        fontSize: scale(12),
        color: "#64748B",
      },
      todayText: {
        color: "#F1F5F9",
      },
    });
  }, [screenWidth, scale]);

  return (
    <View style={styles.container}>
      {/* Header: Month, Year & Expand Button */}
      <View style={styles.header}>
        <Text style={styles.monthText}>{format(currentDate, "MMMM yyyy")}</Text>
        <TouchableOpacity onPress={() => navigation.navigate("CalendarExpand" as never)} style={styles.expandButton}>
          <FontAwesome name="expand" size={scale(16)} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      {/* Horizontal Scrollable Week Calendar */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer} ref={scrollViewRef}>
        {daysInMonth.map((day, index) => {
          const isToday = format(day, "yyyy-MM-dd") === format(new Date(), "yyyy-MM-dd");
          return (
            <TouchableOpacity key={index} style={[styles.dayContainer, isToday && styles.today]}>
              <Text style={[styles.dayText, isToday && styles.todayText]}>{format(day, "d")}</Text>
              <Text style={[styles.weekdayText, isToday && styles.todayText]}>{format(day, "E")}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default HorizontalCalendar;

