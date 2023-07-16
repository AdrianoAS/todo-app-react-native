import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#191919",
  },

  header: {
    backgroundColor: "#0D0D0D",
    height: 173,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  search: {
    flexDirection: "row",
    position: "absolute",
    bottom: -30,
    paddingLeft: 24,
    paddingRight: 24,
    gap: 4,
  },

  input: {
    flex: 1,
    padding: 16,
    borderRadius: 6,
    borderColor: "#0D0D0D",
    borderWidth: 1,
    backgroundColor: "#1A1A1A",
    color: "#808080",
    fontSize: 16,
    fontWeight: "400",
    fontStyle: "normal",
    height: 54,
  },

  button: {
    width: 52,
    height: 52,
    borderRadius: 6,
    backgroundColor: "#1E6F9F",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    marginTop: 80,
    width: "100%",
    paddingLeft: 24,
    paddingRight: 24,
  },

  status: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },

  statusTitle: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 8,
    width: 100,
    height: 50,
  },

  statusQuantity: {
    backgroundColor: "#333",
    width: 25,
    height: 19,
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    textAlign: "center",
  },

  statusQuantityText: {
    alignItems: "center",
    justifyContent: "center",
    color: "#4EA8DE",
    fontSize: 14,
    fontWeight: "700",
  },

  list: {
    paddingLeft: 24,
    paddingRight: 24,
    width: "100%",
  },
});
