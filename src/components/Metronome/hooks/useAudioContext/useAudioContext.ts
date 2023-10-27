import { useEffect, useRef } from "react";

export const useAudioContext = () => {
  const audioContext = useRef<AudioContext>();

  useEffect(() => {
    audioContext.current = new AudioContext();
    return (): void => {
      audioContext.current?.close();
    }
  }, []);

  return audioContext;
};
