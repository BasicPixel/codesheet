import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Input,
  InputGroup,
  InputLeftElement,
  ListItem,
  Stack,
  UnorderedList,
} from "@chakra-ui/react";
import { useState } from "react";
import CustomLink from "./CustomLink";

const Search = ({ cheatsheets }) => {
  const [results, setResults] = useState([]);
  const [isQueryEmpty, setIsQueryEmpty] = useState(true);

  const updateResults = (query) => {
    setResults([]);
    let arr = [];
    for (let i in cheatsheets) {
      if (cheatsheets[i].name.toLowerCase().includes(query.toLowerCase())) {
        arr.push(cheatsheets[i]);
      }
    }
    setResults(arr);
  };

  return (
    <Stack spacing={2}>
      <InputGroup size={"lg"}>
        <InputLeftElement>
          <SearchIcon />
        </InputLeftElement>
        <Input
          placeholder="Search..."
          variant={"filled"}
          autoFocus
          onChange={(e) => {
            const query = e.target.value;

            if (query === "") setIsQueryEmpty(true);
            else {
              setIsQueryEmpty(false);
              updateResults(query);
            }
          }}
        />
      </InputGroup>

      {!isQueryEmpty && (
        <Box bgColor={""}>
          {results.length !== 0 ? (
            <UnorderedList>
              {results.map((result) => (
                <ListItem key={result.name}>
                  <CustomLink href={result.name}>{result.name}</CustomLink>
                </ListItem>
              ))}
            </UnorderedList>
          ) : (
            <>No results.</>
          )}
        </Box>
      )}
    </Stack>
  );
};

export default Search;
