import React, { FC } from "react";
import {
  Box,
  Stack,
  Link as _Link,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorMode, Text,
} from "@chakra-ui/core";
import Link from "next/link";
import {IoLogoGithub, IoLogoLinkedin} from "react-icons/io";

interface NavLink {
  url: string;
  title: string;
}

const LINKS = [
  {
    url: "/projects",
    title: "Projects",
  },
  // {
  //   url: "/articles",
  //   title: "Articles",
  // },
  // {
  //   url: "/publications",
  //   title: "Publications",
  // },
  {
    url: "/docs",
    title: "Documents",
  },
  // {
  //   url: "/about",
  //   title: "About",
  // },
  {
    url: "/newsletter",
    title: "Newsletter",
  },
];

const Navbar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const navbarSectionBgColor = { light: "white", dark: "rgba(0,0,0,0.7)" };
  const navbarSectionColor = { light: "dark.900", dark: "white" };
  const linkedinSectionColor = { light: "#0e76a8", dark: "white" };

  const themeSwitcherButtonNode = () => {
    if (colorMode === "light") {
      return (
        <IconButton
          aria-label="Switch to dark theme"
          icon="moon"
          size="sm"
          onClick={toggleColorMode}
        />
      );
    }

    return (
      <IconButton
        aria-label="Switch to light theme"
        icon="sun"
        size="sm"
        onClick={toggleColorMode}
      />
    );
  };

  const mobileMenuNode = () => {
    return (
      <Menu>
        <MenuButton as={Button}>Menu</MenuButton>
        <MenuList placement="bottom-end">
          {[
            LINKS.map((link: NavLink) => {
              return (
                <Box key={link.url}>
                  <Link href={link.url}>
                    <MenuItem>
                      <_Link href={link.url} rounded="md">
                        {link.title}
                      </_Link>
                    </MenuItem>
                  </Link>
                </Box>
              );
            }),
          ]}
          <MenuItem onClick={toggleColorMode} px={4}>
            Switch color mode
          </MenuItem>
        </MenuList>
      </Menu>
    );
  };

  const desktopMenuNode = () => {
    return (
      <Stack isInline spacing={4} alignItems="center">
        {[
          LINKS.map((link: NavLink) => {
            return (
              <Box key={link.url}>
                <Link href={link.url}>
                  <_Link p={4} href={link.url} rounded="md">
                    {link.title}
                  </_Link>
                </Link>
              </Box>
            );
          }),
        ]}
        <Box key={"resume"}>
          <_Link p={4} rounded="md" href={"/data/li-ke-resume.pdf"} download>
            Resume
          </_Link>
        </Box>
        <Box>
          <_Link
              py={4}
              px={2}
              href="https://github.com/frontend210"
              rounded="md"
              fontWeight="bold"
              isExternal
          >
            <Box as={IoLogoGithub} fontSize={24}/>
          </_Link>
        </Box>
        <Box>
          <_Link
              py={4}
              px={2}
              href="https://www.linkedin.com/in/ke-li-466256190"
              rounded="md"
              isExternal
          >
            <Box as={IoLogoLinkedin} fontSize={24}/>
          </_Link>
        </Box>
        <Box px={2}>{themeSwitcherButtonNode()}</Box>
      </Stack>
    );
  };

  return (
    <Box
      as="header"
      id="header"
      className="nav-menu"
      position="sticky"
      top={0}
      zIndex={1}
      bg={navbarSectionBgColor[colorMode]}
      color={navbarSectionColor[colorMode]}
      shadow="md"
      fontWeight="bold"
    >
      <Box maxW="6xl" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          py={4}
        >
          <Box>
            <Link href="/">
              <_Link p={4} href="/" rounded="md" fontSize={24}>Li Ke</_Link>
            </Link>
          </Box>
          <Box display={["none", "none", "none", "block"]}>
            {desktopMenuNode()}
          </Box>
          <Box display={["block", "block", "block", "none"]} px={4}>
            {mobileMenuNode()}
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
