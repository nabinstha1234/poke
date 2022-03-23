import React from "react";
import { Box, Image } from "@chakra-ui/react";

import { fallBackImage } from "../../config";

import styles from "./PokeCard.module.scss";

type Props = {
  src: string;
  alt: string;
  pokeName: string;
  onClick: () => void;
};

const PokeCard = (props: Props) => {
  const { src, alt, pokeName, onClick } = props;
  return (
    <Box
      maxW="sm"
      cursor="pointer"
      borderWidth="1px"
      onClick={onClick}
      borderRadius="lg"
      overflow="hidden"
    >
      <Image src={src} alt={alt} fallbackSrc={fallBackImage} />
      <hr className={styles["horizontal-line"]} />
      <Box py={2}>{pokeName}</Box>
    </Box>
  );
};

export default PokeCard;
