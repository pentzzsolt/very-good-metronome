import { useLink } from "@react-aria/link";
import { useRef } from "react";

export const Footer = (): JSX.Element => {
  const homepageRef = useRef(null);
  const issuesRef = useRef(null);
  const discussionsRef = useRef(null);
  const supportRef = useRef(null);

  const { linkProps: homepageLinkProps } = useLink({}, homepageRef);
  const { linkProps: issuesLinkProps } = useLink({}, issuesRef);
  const { linkProps: discussionsLinkProps } = useLink({}, discussionsRef);
  const { linkProps: supportLinkProps } = useLink({}, supportRef);

  return (
    <footer>
      Made by <a {...homepageLinkProps} href="https://pentzzsolt.github.io">Zsolt Pentz</a>
      <nav>
        <a {...issuesLinkProps} href="https://github.com/pentzzsolt/very-good-metronome/issues">Report an issue</a>
        <a {...discussionsLinkProps} href="https://github.com/pentzzsolt/very-good-metronome/discussions">Start a discussion</a>
        <a {...supportLinkProps} href="https://www.buymeacoffee.com/pentzzsolt">Support this project</a>
      </nav>
    </footer>
  );
};
