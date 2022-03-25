import { Link } from "@chakra-ui/react";
import NextLink from "next/link";

const CustomLink = ({ href, children, target = "_self" }) => {
  return (
    <NextLink href={href} passHref>
      <Link target={target} textDecoration="underline" rounded={"base"}>
        {children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
