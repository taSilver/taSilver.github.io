import React from "react";
import Container from "gatsby-theme-portfolio/src/components/common/Container";
import TalkIllustration from "gatsby-theme-portfolio/src/components/illustrations/TalkIllustration";
import ContactForm from "./ContactForm";
import { Wrapper, Details, Thumbnail } from "./styles";

export default () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h3>Want to get in touch?</h3>
      <a href="https://www.linkedin.com/in/tim-silvester/">Reach me faster via LinkedIn!</a><br/>
      <span>Or send me an email through the form below...</span>
      <ContactForm />
    </Details>
    <Thumbnail>
      <TalkIllustration />
    </Thumbnail>
  </Wrapper>
);
