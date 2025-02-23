import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18191a",
  },
  time: {
    color: "white",
    fontSize: 64,
    fontWeight: "bold",
  },
  buttonbox: {
    height: 80,
    width: 350,
    gap: 30,
    display: "flex",
    flexDirection: "row",
  },
  buttontext: {
    color: "white",
    fontSize: 40,
    marginBottom: 5,
    fontWeight: "bold",
  },
  start: {
    flex: 2,
    backgroundColor: "#00ab41",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  pause: {
    flex: 2,
    borderColor: "white",
    borderWidth: 6,
    backgroundColor: "#ff7600",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  stop: {
    flex: 1,
    backgroundColor: "red",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  stoptext: {
    color: "white",
    fontSize: 55,
    marginBottom: 5,
    fontWeight: "bold",
  },
  lap: {
    height: 80,
    width: 300,
    borderRadius: 50,
    backgroundColor: "#8948c7",
    alignItems: "center",
    justifyContent: "center",
  },
  lapbox: {
    display: "flex",
    height: 400,
    width: 350,
    gap: 10,
  },
  laptime: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  laptext: {
    color: "#18191a",
    fontSize: 25,
    flex: 1,
    marginLeft: 50,
  },
  lapdelete: {
    height: 35,
    width: 35,
    borderColor: "#18191a",
    borderWidth: 5,
    borderRadius: 10,
    marginRight: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  deletetext: {
    marginBottom: 2,
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default styles;
