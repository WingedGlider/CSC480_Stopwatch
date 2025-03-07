import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  appcontainer: {
    flex: 1,
    gap: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#18191a",
  },
  aboutcontainer: {
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
    gap: 30,
    flex: 1,
    backgroundColor: "#18191a",
    alignItems: "center",
  },
  about: {
    backgroundColor: "#ff69b4",
    height: 50,
    width: 100,
    marginTop: 30,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  abouttext: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  time: {
    color: "white",
    fontSize: 72,
    fontWeight: "bold",
    marginTop: 70,
    marginBottom: 60,
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
  aboutpause: {
    width: 300,
    height: 80,
    borderColor: "white",
    borderWidth: 6,
    backgroundColor: "#ff7600",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutstart: {
    width: 300,
    height: 80,
    backgroundColor: "#00ab41",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  aboutstop: {
    width: 300,
    height: 80,
    backgroundColor: "red",
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
    width: 350,
  },
  laptime: {
    display: "flex",
    flexDirection: "row",
    height: 80,
    borderRadius: 20,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
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
