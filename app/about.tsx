import React, { useState } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "./styles";

export default function about() {
  const [paused, setpaused] = useState(false);
  const togglewatch = () => {
    setpaused(!paused);
  };

  return (
    <View style={styles.aboutcontainer}>
      <Text style={styles.abouttext}>
        This app is a basic stopwatch with pretty simple controls.
      </Text>
      <Pressable
        onPress={togglewatch}
        style={paused ? styles.aboutpause : styles.aboutstart}
      >
        <Text style={styles.buttontext}>{paused ? "I I" : "▶"}</Text>
      </Pressable>
      <Text style={styles.abouttext}>
        The pause/play button pauses and resumes the stopwatch. The style
        changes to inform you of the current action of the button.
      </Text>
      <Pressable style={styles.aboutstop}>
        <Text style={styles.stoptext}>▪</Text>
      </Pressable>
      <Text style={styles.abouttext}>
        The stop button resets the stopwatch if it's active.{" "}
      </Text>
      <Pressable style={styles.lap}>
        <Text style={styles.buttontext}>Lap</Text>
      </Pressable>
      <Text style={styles.abouttext}>
        The lap button takes the current time and puts it at the top of the lap
        list. It does not pause or stop the timer.
      </Text>
      <ScrollView style={styles.lapbox}>
        <View style={styles.laptime}>
          <Text style={styles.laptext}>00:10:00</Text>
          <Pressable style={styles.lapdelete}>
            <Text style={styles.deletetext}>x</Text>
          </Pressable>
        </View>
        <View style={styles.laptime}>
          <Text style={styles.laptext}>00:20:00</Text>
          <Pressable style={styles.lapdelete}>
            <Text style={styles.deletetext}>x</Text>
          </Pressable>
        </View>
        <View style={styles.laptime}>
          <Text style={styles.laptext}>00:40:00</Text>
          <Pressable style={styles.lapdelete}>
            <Text style={styles.deletetext}>x</Text>
          </Pressable>
        </View>
        <View style={styles.laptime}>
          <Text style={styles.laptext}>01:20:00</Text>
          <Pressable style={styles.lapdelete}>
            <Text style={styles.deletetext}>x</Text>
          </Pressable>
        </View>
      </ScrollView>
      <Text style={styles.abouttext}>
        Each lap shows the reading of the stopwatch at the time the lap was
        taken, and can be deleted individually.
      </Text>
    </View>
  );
}
