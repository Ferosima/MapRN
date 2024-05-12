import { Keyboard } from "react-native";
import { useEffect } from "react";

/** The hook uses the useEffect hook from React to initiate an effect, which is to dismiss the keyboard on component mount. */
const useHideKeyboardHook = (): void => {
  useEffect(() => Keyboard.dismiss(), []);
};

export default useHideKeyboardHook;
