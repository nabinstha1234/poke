import React from "react";
import { Stack, InputGroup, Input, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

type Props = {
  onChange: (data: any) => void;
  inputValue: string;
};

const SearchInput = (props: Props) => {
  const { onChange, inputValue } = props;
  return (
    <Stack spacing={4} mt={4} mb={4}>
      <InputGroup>
        <InputRightElement
          pointerEvents="none"
          children={<SearchIcon color="gray.300" />}
        />
        <Input
          value={inputValue}
          type="tel"
          onChange={onChange}
          placeholder="Search Pokemon Name"
        />
      </InputGroup>
    </Stack>
  );
};

export default SearchInput;
