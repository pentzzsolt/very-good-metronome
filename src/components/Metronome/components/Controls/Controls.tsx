import { Tempo, TimeSignature } from "./components";
import { ControlsProps } from "./types/ControlsProps";

export const Controls = ({ onTempoChange, onTimeSignatureChange, tempo, timeSignature }: ControlsProps): JSX.Element => (
  <div>
    <div>
      <TimeSignature onChange={onTimeSignatureChange} value={timeSignature} />
    </div>
    <div>
      <Tempo onChange={onTempoChange} value={tempo} />
    </div>
  </div>
);
