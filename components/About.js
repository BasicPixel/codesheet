import { Link, Text } from "@chakra-ui/react";
import CustomLink from "./CustomLink";

const About = () => {
  return (
    <Text id="about">
      codesheet is a collection of cheatsheets for programming languages,
      libraries, dev tools and more. Made by{" "}
      <CustomLink href={"https://github.com/BasicPixel"} target="_blank">
        BasicPixel
      </CustomLink>
      .
    </Text>
  );
};

export default About;
