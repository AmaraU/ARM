/* eslint-disable react/prop-types */
import { useState } from "react";
import { Stack, Text, Box, Button, HStack } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import OtpInput from "../../elements/PinInput";

export const TransactionPIN2 = ({ moveToOne, moveToSecurity, loading }) => {
  const [pin, setPin] = useState("");

  return (
    <>
      <Box>
        <HStack
          bg={"#EAECF0"}
          justifyContent={"space-between"}
          px={"26px"}
          py={"14px"}
          borderRadius={"12px 12px 0 0"}
        >
          <Button
            h={"24px"}
            bg={"#EAECF0"}
            p={0}
            _hover={{ bg: "#EAECF0" }}
            onClick={moveToOne}
          >
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </Button>
          <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
            Repeat Transaction PIN
          </Text>
          <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
            2/3
          </Text>
        </HStack>

        <Stack
          spacing={"24px"}
          alignItems={"center"}
          border={"1px solid #EFECE9"}
          bg={"#FFFFFF"}
          borderRadius={"0 0 12px 12px"}
          py={"16px"}
          pb={"114px"}
        >
          <Text fontSize={"16px"} color={"#667085"} textAlign={"center"}>
            Enter 4 digits PIN again
          </Text>

          <OtpInput
            size={"lg"}
            length={4}
            width={110}
            height={"75px"}
            setOtp={(e) => setPin(e)}
          />

          <Button
            mt="16px"
            w="75%"
            h="48px"
            bg="#A41856"
            _hover={{ bg: "#90164D" }}
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            onClick={()=>moveToSecurity(pin)}
            isDisabled={pin.length != 4}
            isLoading={loading}
          >
            Proceed
          </Button>
        </Stack>
      </Box>
    </>
  );
};
