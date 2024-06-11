import { Box, Button, Image, Input, InputGroup, InputLeftAddon, Text } from "@chakra-ui/react";
import Fruits from "../../utils/th.jpg"
import Vegitables from "../../utils/vegetables.webp"
import other from "../../utils/other.jpg"
import "../../App.css";

const Home = () => {
  return (
    <>
      <div className="App">
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            display="flex"
            color="white"
            flexDirection="column"
            alignItems="center"
            p="10px"
          >
            <Text
              fontWeight="bold"
              fontSize={{ md: "70px", base: "40px" }}
              fontFamily="Kanit"
            >
              happy orders
            </Text>
            <Text fontSize={{ md: "30px" }} textAlign="center">
              Discover the frest Fruits, Vegitables and much more in Jammu{" "}
            </Text>

            <InputGroup w="90%" color="black" m="10px">
              <InputLeftAddon>Jammu</InputLeftAddon>
              <Input
                autoFocus={true}
                type="text"
                placeholder="Enter your address"
                _focus={{ borderColor: "white", outlineColor: "white" }}
                _placeholder={{ color: "white" }}
                color="white"
              />
            </InputGroup>
          </Box>
        </div>
      </div>

      <Box
        h={{ md: "300px", sm: "200px", base: "250px" }}
        marginTop="5px"
        bg="#4A5D23"
      >
        <Box
          w="100%"
          h={{ md: "300px", sm: "200px", base: "250px" }}
          bgGradient="radial(#00000011, #00000090)"
          display="flex"
          alignItems="center"
          color="white"
        >
          <Box h="100%" w="40%" m="2%" display="flex" alignItems="center">
            <Image h="80%" border="4px solid white" src={Fruits} alt="sfd" />
          </Box>
          <Box
            w="55%"
            display="flex"
            alignItems="center"
            flexDir="column"
            justifyContent="center"
          >
            <Text
              w="100%"
              p="10px"
              fontFamily="Kanit"
              fontSize={{ md: "30px", base: "20px" }}
              textAlign="center"
            >
              Fresh Fruits
            </Text>
            <Text
              w="100%"
              p="2px 10px"
              fontSize={{ md: "25px", base: "16px" }}
              textAlign="center"
            >
              Health is Wealth and here we are with best quality fresh fruits
              for you.
            </Text>
            <Button color="#4A5D23" m="5px">
              ORDER NOW
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        h={{ md: "300px", sm: "200px", base: "250px" }}
        marginTop="5px"
        bg="#4A5D23"
      >
        <Box
          w="100%"
          h={{ md: "300px", sm: "200px", base: "250px" }}
          bgGradient="radial(#00000011, #00000090)"
          display="flex"
          alignItems="center"
          color="white"
        >
          <Box h="100%" w="40%" m="2%" display="flex" alignItems="center">
            <Image
              h="80%"
              border="4px solid white"
              src={Vegitables}
              alt="sfd"
            />
          </Box>
          <Box
            w="55%"
            display="flex"
            alignItems="center"
            flexDir="column"
            justifyContent="center"
          >
            <Text
              w="100%"
              p="10px"
              fontFamily="Kanit"
              fontSize={{ md: "30px", base: "20px" }}
              textAlign="center"
            >
              Fresh vegetables
            </Text>
            <Text
              w="100%"
              p="2px 10px"
              fontSize={{ md: "25px", base: "16px" }}
              textAlign="center"
            >
              Top quality fresh vegetables for you, in your door. It is you who
              has to take care of your family.
            </Text>
            <Button color="#4A5D23" m="5px">
              ORDER NOW
            </Button>
          </Box>
        </Box>
      </Box>
      <Box
        h={{ md: "300px", sm: "200px", base: "250px" }}
        marginTop="5px"
        bg="#4A5D23"
      >
        <Box
          w="100%"
          h={{ md: "300px", sm: "200px", base: "250px" }}
          bgGradient="radial(#00000011, #00000090)"
          display="flex"
          alignItems="center"
          color="white"
        >
          <Box h="100%" w="40%" m="2%" display="flex" alignItems="center">
            <Image h="80%" border="4px solid white" src={other} alt="sfd" />
          </Box>
          <Box
            w="55%"
            display="flex"
            alignItems="center"
            flexDir="column"
            justifyContent="center"
          >
            <Text
              w="100%"
              p="10px"
              fontFamily="Kanit"
              fontSize={{ md: "30px", base: "20px" }}
              textAlign="center"
            >
              Other Grocery Items
            </Text>
            <Text
              w="100%"
              p="2px 10px"
              fontSize={{ md: "25px", base: "16px" }}
              textAlign="center"
            >
              Now you can purchase any/every grocery item here. You have no need
              to step out of your home.
            </Text>
            <Button color="#4A5D23" m="5px">
              ORDER NOW
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Home;
