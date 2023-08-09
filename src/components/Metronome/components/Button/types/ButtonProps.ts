import { AriaButtonProps } from '@react-aria/button';
import { PropsWithChildren } from 'react';

export type ButtonProps = PropsWithChildren<Pick<AriaButtonProps, 'onPress'>>;
