import React, { useState } from "react";
import {
  ChakraProvider,
  theme,
  Container,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import {
  SearchInput,
  Pagination,
  PokeContainer,
  PokeCard,
  CustomSpinner,
  CustomModalContent,
} from "./components";
import { useDebounce, useFetch } from "./hooks";
import { baseAPIUrl, perPage } from "./config";

interface IPokemon {
  name: string;
  url: string;
}

interface Pokemon {
  count: number;
  next: string;
  previous: string;
  results: Array<IPokemon>;
}

export const App = () => {
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [search, setSearch] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [selectedPoke, setSelectedPoke] = useState<IPokemon | undefined>(
    undefined
  );
  let keyCount = 0;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const debouncedValue = useDebounce<string>(search, 500);

  const { data } = useFetch<Pokemon>(
    baseAPIUrl +
      `/pokemon?limit=${perPage}&offset=${offset}&name=${debouncedValue}`,
    {
      method: "GET",
    }
  );

  const handlePageChange = (data: { selected: number }) => {
    setPageNumber(data.selected);
    setOffset(data.selected * perPage);
  };

  const handleSearchChange = (e: React.FormEvent) => {
    const target = e.target as HTMLInputElement;
    setSearch(target.value);
    setOffset(0);
  };

  function getKey() {
    keyCount += 1;
    return keyCount;
  }

  const handlePokeClick = (poke: IPokemon) => {
    setSelectedPoke(poke);
    onOpen();
  };

  return (
    <>
      <ChakraProvider theme={theme}>
        <Container maxW="container.xl">
          <SearchInput inputValue={search} onChange={handleSearchChange} />

          <PokeContainer>
            {!data && <CustomSpinner />}
            {data &&
              data.results.map((pokemon) => (
                <React.Fragment key={getKey()}>
                  <PokeCard
                    alt={pokemon.name}
                    pokeName={pokemon.name}
                    src={pokemon.url}
                    onClick={() => {
                      handlePokeClick(pokemon);
                    }}
                  />
                </React.Fragment>
              ))}
          </PokeContainer>

          <Pagination
            onPageChange={handlePageChange}
            pageCount={data ? Math.ceil(data.count / perPage) : 0}
            pageNumber={pageNumber}
          />
        </Container>
      </ChakraProvider>

      <Modal isOpen={isOpen} size="2xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{selectedPoke && selectedPoke.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <CustomModalContent url={selectedPoke && selectedPoke.url} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
