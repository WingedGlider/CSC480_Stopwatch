import React, { useState } from "react";
import { Text, View, Pressable, ScrollView } from "react-native";
import styles from "./styles";

let IntervalID = setInterval(() => 1000);
clearInterval(IntervalID);

export default function Index() {
  const [paused, setpaused] = useState(false);
  const [time, settime] = useState([0, 0, 0]);
  const [laptimes, setlaptimes] = useState([]);
  const formattedtime = `${String(time[2]).padStart(2, "0")}:${String(
    time[1]
  ).padStart(2, "0")}:${String(time[0]).padStart(2, "0")}`;

  const togglewatch = () => {
    setpaused(!paused);
    if (!paused) {
      IntervalID = setInterval(() => {
        settime((prev) => {
          let [hundredths, seconds, minutes] = prev;
          hundredths++;
          if (hundredths === 60) {
            hundredths = 0;
            seconds++;
          }
          if (seconds === 60) {
            seconds = 0;
            minutes++;
          }
          return [hundredths, seconds, minutes];
        });
      }, 10);
    } else {
      clearInterval(IntervalID);
    }
  };

  const stop = () => {
    setpaused(false);
    clearInterval(IntervalID);
    settime([0, 0, 0]);
  };

  const lap = () => {
    setlaptimes([time, ...laptimes]);
  };

  const deleteLap = (index: number) => {
    const newlaptimes = [...laptimes];
    newlaptimes.splice(index, 1);
    setlaptimes(newlaptimes);
  };

  return (
    <View style={styles.appcontainer}>
      <View style={{ flexDirection: "row", width: 390 }}>
        <Pressable style={styles.about}>
          <Text style={styles.abouttext}>About</Text>
        </Pressable>
      </View>
      <Text style={styles.time}>{formattedtime}</Text>
      <View style={styles.buttonbox}>
        <Pressable
          onPress={togglewatch}
          style={paused ? styles.pause : styles.start}
        >
          <Text style={styles.buttontext}>{paused ? "I I" : "▶"}</Text>
        </Pressable>
        <Pressable onPress={stop} style={styles.stop}>
          <Text style={styles.stoptext}>▪</Text>
        </Pressable>
      </View>
      <Pressable onPress={lap} style={styles.lap}>
        <Text style={styles.buttontext}>Lap</Text>
      </Pressable>
      <ScrollView style={styles.lapbox}>
        {laptimes.map((laptime, index) => (
          <View key={index} style={styles.laptime}>
            <Text style={styles.laptext}>
              {String(laptime[2]).padStart(2, "0")}:
              {String(laptime[1]).padStart(2, "0")}:
              {String(laptime[0]).padStart(2, "0")}
            </Text>
            <Pressable
              onPress={() => deleteLap(index)}
              style={styles.lapdelete}
            >
              <Text style={styles.deletetext}>x</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
