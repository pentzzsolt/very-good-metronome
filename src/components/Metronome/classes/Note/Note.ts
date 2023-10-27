export class Note {
  public audioContext: AudioContext;
  public oscillator: OscillatorNode;

  constructor(audioContext: AudioContext, { frequency = 440 }: Pick<OscillatorOptions, "frequency">) {
    this.audioContext = audioContext;
    this.oscillator = new OscillatorNode(audioContext, {
      frequency: frequency,
      type: "triangle"
    });
  }
};
