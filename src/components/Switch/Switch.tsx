import { SwitchProps } from "./Switch.types";

export const Switch = ({ label, onClick }: SwitchProps): JSX.Element => <button onClick={onClick}>{label}</button>;
