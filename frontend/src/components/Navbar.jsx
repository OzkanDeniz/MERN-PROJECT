import {
  Center,
  Container,
  Flex,
  Link,
  HStack,
  Button,
  PlusSquareIcon,
} from "@chakra-ui/react";

const Navbar = () => {
  return (
    <Container maxW={"1140px"} px={2}>
      <Flex
        h={16}
        alignItems={Center}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row",
        }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.400, blue.500)"}
          bgClip={"text"}
        >
          <Link to={"/"}>Product Store 🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={Center}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon />
            </Button>
          </Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;
