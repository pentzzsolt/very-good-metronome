import { useLink } from "@react-aria/link";
import { useRef } from "react";
import { LinkProps } from "./types/LinkProps";

export const Link = ({ children, href }: LinkProps): JSX.Element => {
  const ref = useRef<HTMLAnchorElement>(null);

  const { linkProps } = useLink({}, ref);

  return (
    <a {...linkProps} href={ href }>{ children }</a>
  );
};
