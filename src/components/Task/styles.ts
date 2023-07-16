import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    gap: 8,
    backgroundColor: "#333",
    borderRadius: 8,
    borderColor: "#333",
    borderWidth: 1,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    height: 64,
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 12,
  },

  containerCompleted: {
    borderColor: "#262626",
  },

  text: {
    flex: 1,
    color: "#F2F2F2",
    fontSize: 14,
    fontWeight: "400",
    lineHeight: 19.6,
  },

  isCompleted: {
    textDecorationLine: "line-through",
    color: "#808080",
  },

  removeTaks: {
    width: 32,
    height: 32,
  },

  check: {
    width: 24,
    height: 24,
  },
});
