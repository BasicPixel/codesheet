import {
  Box,
  Flex,
  Link,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  MenuDivider,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { useEffect, useState } from "react";
import supabase from "../src/client";
import { FaGithub } from "react-icons/fa";

const MenuLink = ({ href, children, target }) => (
  <Link
    rounded={"md"}
    _hover={{
      textDecoration: "none",
    }}
    href={href}
    target={target}
  >
    <MenuItem textTransform="capitalize">{children}</MenuItem>
  </Link>
);

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("categories")
        .select()
        .order("name");
      setCategories(data);
    };
    fetchData();
  }, []);

  return (
    <>
      <Box
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        position="sticky"
        zIndex="sticky"
        top={0}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} />
            <MenuList>
              {categories.map((category) => (
                <MenuLink href={`/#${category.name}`} key={category.name}>
                  {category.name}
                </MenuLink>
              ))}
              <MenuDivider />
              <MenuLink
                href={"https://github.com/BasicPixel/codesheet"}
                target={"_blank"}
              >
                <FaGithub /> <Text ps={2}>GitHub</Text>
              </MenuLink>
            </MenuList>
          </Menu>
          <Link
            href={"/#"}
            _hover={{
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
            _focus={{
              outline: "none",
              textDecoration: "underline",
              textUnderlineOffset: 4,
            }}
            fontFamily="mono"
            fontSize={"lg"}
          >
            codesheet
          </Link>
          <Flex alignItems={"center"}>
            <IconButton
              aria-label="Toggle dark mode"
              icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              onClick={toggleColorMode}
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
}
