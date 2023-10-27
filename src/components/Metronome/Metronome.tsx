import { ChangeEvent, useRef, useState } from "react";
import { Button, Controls, Counter, Footer } from "./components";
import { useAudioContext } from "./hooks/useAudioContext/useAudioContext";
import { getIntervalByBpm } from "./utils/getIntervalByBpm/getIntervalByBpm";

export const Metronome = (): JSX.Element => {
  const audioContext = useAudioContext();
  const intervalId = useRef<number | undefined>();

  const [count, setCount] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);
  const [tempo, setTempo] = useState(60);
  const [timeSignature, setTimeSignature] = useState("4/4");

  const handleTempoChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setTempo(parseInt(event.currentTarget.value))
  };

  const handleTimeSignatureChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setTimeSignature(event.currentTarget.value)
  };

  const handlePress = (): void => {
    if (isPlaying) {
      audioContext.current?.suspend();
      window.clearInterval(intervalId.current);
      intervalId.current = undefined;
      setCount(1)
    } else {
      audioContext.current?.resume();
      intervalId.current = window.setInterval(increaseCount, getIntervalByBpm(tempo));
    };
    setIsPlaying(!isPlaying);
  };

  const increaseCount = (): void => {
    const splitCount = timeSignature.split("/");
    setCount(previousCount => previousCount % parseInt(splitCount[0]) + 1)
  };

  return (
    <>
      <Counter>{count}</Counter>
      <div>
        <Button onPress={handlePress}>{isPlaying ? "Stop" : "Start"}</Button>
        <Controls onTempoChange={handleTempoChange} onTimeSignatureChange={handleTimeSignatureChange} tempo={tempo} timeSignature={timeSignature} />
      </div>
      <Footer />
    </>
  )
};
