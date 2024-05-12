import { useCallback, useEffect, useRef } from "react";

export const useTimeoutHook = (
  timeout: number | undefined,
  callback: () => void
): void => {
  const timer = useRef<number>(0);

  const clearTimer = useCallback(() => {
    if (timer.current) clearTimeout(timer.current);
  }, [timer]);

  useEffect(() => {
    if (!timeout) return;

    if (timer.current) clearTimer();

    if (timeout < 3000) {
      throw new Error(
        "ModalNotification: timeout parameter can`t be less than 2000ms"
      );
    }

    if (timeout > 60000) {
      throw new Error(
        "ModalNotification: timeout parameter can`t be more that 60000ms"
      );
    }

    if (timeout) {
      setTimeout(callback, timeout);
    }

    return () => {
      clearTimer();
    };
  }, []);
};
