import { Box, Heading, Text, useColorModeValue } from "@chakra-ui/react";

const Category = ({ name }) => {
  return (
    <Box id={name}>
      <Heading
        fontWeight={400}
        fontSize={"xl"}
        textColor={useColorModeValue("blue.700", "blue.300")}
      >
        {name}
      </Heading>
      <Text></Text>
    </Box>
  );
};

export default Category;
