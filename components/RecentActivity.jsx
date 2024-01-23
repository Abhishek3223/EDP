import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import { images, FONT, SIZES, COLORS, icons } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { StyleSheet } from "react-native";
const jobTypes = ["Rice", "Wheat Field", "fibre", "lamda"];
import { Entypo } from "@expo/vector-icons";

const Welcome = () => {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.userName}>Recent Crop</Text>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => router.push(`/Report/${item}`)}
              style={styles.cards}
            >
              <Image
                style={styles.image}
                source={images.crops}
                contentFit="contain"
                transition={1000}
              />
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: 10,
                }}
              >
                <Text style={styles.CardText}>{item}</Text>

                <Entypo name="dots-three-vertical" size={18} color="black" />
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    // borderWidth: 1,
    // borderColor: "thistle",
    marginTop: 15,
  },
  userName: {
    fontFamily: FONT.small,
    fontWeight: "800",
    fontSize: SIZES.small,
    color: COLORS.secondary,
    marginTop: 3,
  },
  cards: {
    width: "100%",
    borderRadius: 4,
    borderWidth: 0.5,
    overflow: "hidden",
    shadowColor: "black",
    marginBottom: 10,
    borderRadius: 10,
    height: 300,
  },
  image: {
    width: "100%",
    height: "85%",
  },
  CardText: {
    paddingX: 10,
    fontWeight: "bold",
  },

  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
  tab: (activeJobType, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.small,
    borderRadius: SIZES.medium,
    borderWidth: 1,
    borderColor: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
  tabText: (activeJobType, item) => ({
    fontFamily: FONT.medium,
    color: activeJobType === item ? COLORS.secondary : COLORS.gray2,
  }),
});
