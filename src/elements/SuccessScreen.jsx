/* eslint-disable react/prop-types */
import { Button, Flex, Stack, Text } from "@chakra-ui/react";

function SuccessScreen({ title, description, buttonTitle }) {
  return (
    <Flex justifyContent={"center"}>
      <Stack>
        <iframe src="https://lottie.host/embed/6fe9e2c1-4688-42af-b80b-a507e2640986/MWcJAQajBM.json"></iframe>
        <Text textAlign={"center"} fontWeight={"600"} fontSize={"19px"}>
          {title}
        </Text>
        <Text mb={"5"} textAlign={"center"}>
          {description}
        </Text>

        <Button size={"lg"} bg={"#A41856"} w={"100%"} color={"white"}>
          {" "}
          {buttonTitle}{" "}
        </Button>
      </Stack>
    </Flex>
  );
}

export default SuccessScreen;
