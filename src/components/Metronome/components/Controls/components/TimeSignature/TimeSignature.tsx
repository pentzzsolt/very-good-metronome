import { TimeSignatureProps } from "./types/TimeSignatureProps";

export const TimeSignature = ({ onChange, value }: TimeSignatureProps) => (
  <>
    <label htmlFor="timeSignature">Time signature</label>
    <select id="timeSignature" onChange={onChange} value={value}>
      <option value="2/4">2/4</option>
      <option value="3/4">3/4</option>
      <option value="4/4">4/4</option>
    </select>
  </>
);
