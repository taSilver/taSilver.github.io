import React from "react";
import colors from "tokens/colors";
import { socialLinks } from "data";
import { Links } from "./styles";
import { Telegram, Github, Twitter, StackOverflow, LinkedIn, Resume} from "components/social";
import downloadFile from "../../../../../downloads/Tim Silvester - Resume.pdf";

export default () => (
  <Links>
    {(
      <a
        href={downloadFile}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="View my Resume!"
      >
        <Resume color={colors.primary} />
      </a>
    )}
    {socialLinks.telegram && (
      <a
        href={socialLinks.telegram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get in touch with me Telegram"
      >
        <Telegram color={colors.primary} />
      </a>
    )}
    {socialLinks.github && (
      <a
        href={socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Folow me on GitHub"
      >
        <Github color={colors.primary} />
      </a>
    )}
    {socialLinks.twitter && (
      <a
        href={socialLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on Twitter"
      >
        <Twitter color={colors.primary} />
      </a>
    )}
    {socialLinks.stackOverflow && (
      <a
        href={socialLinks.stackOverflow}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on StackOverflow"
      >
        <StackOverflow color={colors.primary} />
      </a>
    )}
    {socialLinks.linkedin && (
      <a
        href={socialLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow me on LinkedIn"
      >
        <LinkedIn color={colors.primary} />
      </a>
    )}
  </Links>
);
