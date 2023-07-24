import { StyleSheet } from "react-native";

const mainApp = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#7CFADE",
    padding: 8,
  },
  paragraph: {
    margin: 10,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#AD5334",
  },
  subheader: {
    margin: 10,
    fontSize: 14,
    padding: 10,
    fontWeight: "bold",
    textAlign: "center",
    color: "#AD5334",
  },
  legend: {
    flexDirection: "row",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#241239",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#45AD97",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  h2: {
    margin: 10,
    fontSize: 16,
    padding: 5,
    fontWeight: "bold",
    textAlign: "center",
    color: "#99FFE9",
  },
  purpleButton: {
    backgroundColor: "#241239",
    padding: 5,
    borderRadius: 5,
  },
  whiteButtonText: {
    margin: 10,
    fontSize: 12,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
});

const spaceStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  space: {
    width: 80,
    height: 80,
    marginVertical: 5,
    marginHorizontal: 5,
    backgroundColor: "#7CFADE",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  spaceValue: {
    fontSize: 40,
    color: "#AD5334",
  },
});

const boardStyle = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  board: {
    backgroundColor: "#AD5334",
  },
  row: {
    justifyContent: "space-around",
    flexDirection: "row",
  },
});

export { mainApp, spaceStyle, boardStyle };
