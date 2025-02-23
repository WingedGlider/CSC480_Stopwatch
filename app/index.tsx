import React, { useState, useEffect } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "./styles";

export default function Index() {
  //functions and variables here
  const [isPaused, setIsPaused] = useState(false);

  const togglewatch = () => {
    setIsPaused(!isPaused);
  };

  const stop = () => {};

  const lap = () => {};

  const deleteLap = () => {};

  //screen here
  return (
    <View style={styles.appcontainer}>
      <Text style={styles.time}>00:00:00</Text>
      <View style={styles.buttonbox}>
        <Pressable
          onPress={togglewatch}
          style={isPaused ? styles.pause : styles.start}
        >
          <Text style={styles.buttontext}>{isPaused ? "I I" : "▶"}</Text>
        </Pressable>
        <Pressable onPress={stop} style={styles.stop}>
          <Text style={styles.stoptext}>▪</Text>
        </Pressable>
      </View>
      <Pressable onPress={lap} style={styles.lap}>
        <Text style={styles.buttontext}>Lap</Text>
      </Pressable>
      <View style={styles.lapbox}>
        <View style={styles.laptime}>
          <Text style={styles.laptext}>00:00:00</Text>
          <Pressable onPress={deleteLap} style={styles.lapdelete}>
            <Text style={styles.deletetext}>x</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
