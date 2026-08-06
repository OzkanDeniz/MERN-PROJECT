import {
  Container,
  Flex,
  Text,
  Link,
  HStack,
  Button,
} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { LuSquarePlus } from "react-icons/lu";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";
import { useColorMode } from "@/components/ui/color-mode";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
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
          bgGradient={"to-r"}
          gradientFrom={"cyan.400"}
          gradientTo={"blue.500"}
          bgClip={"text"}
        >
          <Link as={RouterLink} to={"/"}>
            Product Store 🛒
          </Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link as={RouterLink} to={"/create"}>
            <Button>
              <LuSquarePlus fontSize={20} />
            </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <LuSun size="20" />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar;