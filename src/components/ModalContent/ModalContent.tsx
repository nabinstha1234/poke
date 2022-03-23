import React from "react";
import {
  Text,
  Image,
  Box,
  Table,
  Td,
  Th,
  Tbody,
  Thead,
  Tr,
  List,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";

import { useFetch } from "../../hooks";
import Spinner from "../Spinner/Spinner";

type Props = {
  url?: string | undefined;
  name?: string | undefined;
};

interface IAbilities {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface IStat {
  base_stat: Number;
  effort: Number;
  stat: {
    name: string;
    url: string;
  };
}

interface IPokemonDetails {
  sprites: {
    back_default?: string | undefined;
    front_shiny?: string | undefined;
    front_default?: string | undefined;
  };
  species: {
    name: string;
    url: string;
  };
  weight: number;
  height: number;
  stats: IStat[];
  abilities: IAbilities[];
}

const CustomModalContent = (props: Props) => {
  const { url } = props;
  let keyCount = 0;

  function getKey() {
    keyCount += 1;
    return keyCount;
  }

  const { data } = useFetch<IPokemonDetails>(url, {
    method: "GET",
  });

  if (!data) return <Spinner />;

  return (
    <div>
      <Box alignContent="center" justifyContent="center" display="flex">
        <Image
          minH={200}
          border="1px"
          borderRadius="lg"
          src={data.sprites.front_default}
        />
      </Box>
      <Text align="center" fontSize="2xl">
        {data.species.name}
      </Text>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>STATE TYPE</Th>
            <Th isNumeric>BASE STAT</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.stats.map((stat: IStat) => (
            <Tr>
              <Td>{stat.stat.name}</Td>
              <Td isNumeric>{stat.base_stat}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <List>
        <hr />
        <ListItem my={2} textAlign="center">
          Height: {data.height}
        </ListItem>
        <hr />
        <ListItem my={2} textAlign="center">
          Weight: {data.weight}
        </ListItem>
        <hr />
        <ListItem
          textAlign="center"
          display="flex"
          justifyContent="center"
          flexDirection="column"
        >
          Abilities:
          <UnorderedList alignSelf="center" width="fit-content">
            {data.abilities.map((ability: IAbilities) => (
              <ListItem textAlign="center" key={getKey()}>
                {ability.ability.name}
              </ListItem>
            ))}
          </UnorderedList>
        </ListItem>
      </List>
    </div>
  );
};

export default CustomModalContent;
