import { Link } from "./components";

export const Footer = (): JSX.Element => (
  <footer>
    Made by <Link href="https://pentzzsolt.github.io">Zsolt Pentz</Link>
    <nav>
      <Link href="https://github.com/pentzzsolt/very-good-metronome/issues">Report an issue</Link>
      <Link href="https://github.com/pentzzsolt/very-good-metronome/discussions">Start a discussion</Link>
      <Link href="https://www.buymeacoffee.com/pentzzsolt">Support this project</Link>
    </nav>
  </footer>
);
