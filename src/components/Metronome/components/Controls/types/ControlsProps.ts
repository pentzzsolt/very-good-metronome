import { TempoProps } from "../components/Tempo/types/TempoProps";
import { TimeSignatureProps } from "../components/TimeSignature/types/TimeSignatureProps";

export type ControlsProps = {
  onTempoChange: TempoProps["onChange"],
  onTimeSignatureChange: TimeSignatureProps["onChange"],
  tempo: TempoProps["value"],
  timeSignature: TimeSignatureProps["value"]
};
