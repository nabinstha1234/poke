import React from "react";
import { Stack, Spinner } from "@chakra-ui/react";

type Props = {};

const CustomSpinner = (props: Props) => {
  return (
    <Stack direction="row" w={100} align="center" spacing={4}>
      <Spinner size="xl" />
    </Stack>
  );
};

export default CustomSpinner;
