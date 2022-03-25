import { Box, Container, Heading, Stack } from "@chakra-ui/react";
import About from "../components/About";
import Category from "../components/Category";
import Search from "../components/Search";
import supabase from "../src/client";

export default function Home({ categories, cheatsheets }) {
  return (
    <Container>
      <Stack spacing={6}>
        <About />
        <Search cheatsheets={cheatsheets} />
        <Box>
          <Heading>Latest cheatsheets</Heading>
        </Box>
        <Box>
          <Heading>All cheatsheets</Heading>
          <Stack spacing={4}>
            {categories.map((category) => (
              <Category key={category.name} name={category.name} />
            ))}
          </Stack>
        </Box>
      </Stack>
    </Container>
  );
}

export async function getServerSideProps(context) {
  const { data: categories, error } = await supabase
    .from("categories")
    .select();

  const { data: cheatsheets } = await supabase.from("cheatsheets").select();

  return {
    props: { categories, cheatsheets }, // will be passed to the page component as props
  };
}
