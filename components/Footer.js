import { Box, Container, Text } from "@chakra-ui/react";
import React from "react";
import CustomLink from "./CustomLink";

const Footer = () => {
  return (
    <Container borderTop={"1px"} borderTopColor={"gray.500"} my="4" pt={"4"}>
      <Text fontFamily={"mono"} textAlign={"center"} fontSize="sm">
        <CustomLink
          href={"https://github.com/BasicPixel/codesheet"}
          target={"_blank"}
        >
          Source Code
        </CustomLink>
      </Text>
    </Container>
  );
};

export default Footer;
