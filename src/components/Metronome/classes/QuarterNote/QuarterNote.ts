import { NoteValue } from "../../enums/NoteValue/NoteValue";
import { NoteOptions } from "../../types/NoteOptions/NoteOptions";
import { Note } from "../Note/Note";

export class QuarterNote extends Note {
  public value: NoteValue;

  constructor(audioContext: AudioContext, { isAccented = false }: NoteOptions) {
    super(audioContext, {
      frequency: isAccented ? 587.33 : 440
    });
    this.value = NoteValue.QUARTER;
  }
};
