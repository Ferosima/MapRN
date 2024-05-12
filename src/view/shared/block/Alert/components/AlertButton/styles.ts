import { StyleSheet } from "react-native";

export default StyleSheet.create({
  text: {
    flexGrow: 1,
    flexShrink: 1,
    minHeight: 20,
    paddingHorizontal: 16,
    textAlign: "center",
  },
  wrapper: {
    alignItems: "center",
    flexGrow: 1,
    flexShrink: 1,
    justifyContent: "center",
    paddingVertical: 11,
  },
});

export const textProps = {
  destructive: {},
};
