import React, { FC } from "react";
import { Box, Stack, Heading, Text, useColorMode } from "@chakra-ui/core";

const Jumbotron: FC = () => {
  const { colorMode } = useColorMode();
  const sectionBgColor = { light: "white", dark: "rgba(0,0,0,0.7)" };
  const sectionColor = { light: "gray.900", dark: "white" };

  return (
    <Stack
      spacing={2}
      height="calc(100vh - 72px)"
      alignItems="center"
      justifyContent="center"
      textAlign="center"
      p={4}
      bg={sectionBgColor[colorMode]}
      color={sectionColor[colorMode]}
    >
      <Box>
        <Heading
          as="h1"
          fontSize={["3rem", "4rem", "5rem", "6rem"]}
          fontFamily="body"
        >
          Li Ke
        </Heading>
      </Box>
      <Box>
        <Text>
          <Box as="b">FullStack Web Developer</Box>
        </Text>
      </Box>
    </Stack>
  );
};

export default Jumbotron;
