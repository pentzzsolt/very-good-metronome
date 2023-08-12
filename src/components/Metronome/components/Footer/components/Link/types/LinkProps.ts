import { PropsWithChildren } from "react";

export type LinkProps = PropsWithChildren<{
  href: HTMLAnchorElement["href"]
}>;
