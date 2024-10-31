import { Button, Stack, Text } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";

export const Success = () => {
  const navigate = useNavigate();

  return (
    <Stack
      h={"100%"}
      minH={"100vh"}
      alignItems={"center"}
      textAlign={"center"}
      spacing={5}
      py={"6%"}
      px={"25%"}
      bgImage={getImageUrl("onboardingBackground.png")}
      bgSize={"100% 100%"}
    >
      <img
        style={{ width: "140px", height: "auto" }}
        src={getImageUrl("logos/arm_logo.png")}
        alt="ARM"
      />
      <img
        style={{ marginTop: "", width: "100%", height: "auto" }}
        src={getImageUrl("welcome.png")}
        alt=""
      />
      <Text mt={"-140px"} fontSize={"48px"} fontWeight={700} color={"#14142A"}>
        Success!
      </Text>
      <Text fontSize={"18px"} fontWeight={400} color={"#667085"}>
        Your password has been successfully changed
      </Text>

      <Button
        onClick={() => navigate("/signin")}
        id="continue"
        bg={"#A41857"}
        _hover={{ bg: "#90164D" }}
        fontSize={"18px"}
        fontWeight={600}
        color={"#FFFFFF"}
        py={"12px"}
        w={"100%"}
        h={"fit-content"}
      >
        Login
      </Button>
    </Stack>
  );
};
