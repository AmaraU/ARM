/* eslint-disable react/prop-types */
import { useState } from "react";
import { Stack, Text, Box, Button, HStack } from "@chakra-ui/react";
import { TransactionPIN2 } from "./TransactionPIN2";
import OtpInput from "../../elements/PinInput";
import userService from "../../services/userService";
import { useSelector } from "react-redux";

export const TransactionPIN = ({ moveToSecurity, proceed }) => {
  const [stepOne, setStepOne] = useState(true);
  const [stepTwo, setStepTwo] = useState(false);
  const [pin, setPin] = useState("");
  // const { casaAccountBalances } = useSelector((state) => state.user);
  const [loading, setLoading] = useState(false);

  const moveToOne = () => {
    setStepOne(true);
    setStepTwo(false);
    window.scrollTo({ top: 0 });
  };

  const moveToTwo = () => {
    setStepOne(false);
    setStepTwo(true);
    window.scrollTo({ top: 0 });
  };

  const createPin = async (e) => {
    setLoading(true);
    try {
      const response = await userService.setTransactionPin({
        accountnumber: casaAccountBalances[0].accountnumber,
        transactionpin: pin,
        renter_Transactionpin: e,
      });
      console.log(response);
      setLoading(false);
      moveToSecurity();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {stepOne && (
        <Box>
          <HStack
            bg="#EAECF0"
            px="14px"
            py="14px"
            borderRadius="12px 12px 0 0"
            justifyContent="space-between"
          >
            <Text
              flex="95%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Create Transaction PIN
            </Text>
            <Text
              flex="5%"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
              textAlign="right"
            >
              1/3
            </Text>
          </HStack>

          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            py="16px"
            pb="114px"
          >
            <Text fontSize="16px" color="#667085" textAlign="center">
              Secure your account with 4 digits PIN
            </Text>

            <Stack w="50%" spacing="12px" alignItems="center">
              <Text
                alignSelf="start"
                fontSize="14px"
                fontWeight={500}
                color="#394455"
              >
                PIN
              </Text>

              <OtpInput
                size={"lg"}
                length={4}
                width={110}
                height={"75px"}
                setOtp={(e) => setPin(e)}
              />
            </Stack>

            <Button
              mt="16px"
              w="75%"
              h="48px"
              bg="#A41856"
              _hover={{ bg: "#90164D" }}
              color="#FFFFFF"
              fontSize="14px"
              fontWeight={600}
              onClick={moveToTwo}
              isDisabled={pin.length !== 4}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      )}

      {stepTwo && (
        <TransactionPIN2
          moveToOne={moveToOne}
          moveToSecurity={createPin}
          loading={loading}
          proceed={proceed}
        />
      )}
    </>
  );
};
