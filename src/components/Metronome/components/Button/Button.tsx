import { useButton } from '@react-aria/button';
import { ButtonProps } from './types/ButtonProps';
import { useRef } from 'react';

export const Button = ({ children, onPress }: ButtonProps): JSX.Element => {
  let ref = useRef(null);
  let { buttonProps } = useButton({
    onPress
  }, ref);

  return <button {...buttonProps} ref={ref}>{ children }</button>;
};
