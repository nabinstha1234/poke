import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";

type Props = {
  children: React.ReactNode;
};

const PokeContainer = (props: Props) => {
  const { children } = props;
  return (
    <Box textAlign="center" fontSize="xl">
      <SimpleGrid minChildWidth="200px" spacing="40px">
        {/* <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box>
        <Box bg="tomato" height="80px"></Box> */}
        {children}
      </SimpleGrid>
    </Box>
  );
};

export default PokeContainer;
