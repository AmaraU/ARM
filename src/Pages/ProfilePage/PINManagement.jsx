/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Input,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { ForgotPIN } from "./ForgotPIN";
import OtpInput from "../../elements/PinInput";
import { handleErrors } from "../../utils/handleResponse";
import userService from "../../services/userService";

export const PINManagement = ({
  backHome,
  moveToQuestions,
  securityQuestions,
  accountnumber,
}) => {
  const [managePIN, setManagePIN] = useState(true);
  const [showCreatePIN, setShowCreatePIN] = useState(false);
  const [showForgotPIN, setShowForgotPIN] = useState(false);
  const [showChangePIN, setShowChangePIN] = useState(false);
  const [showPIN1, setShowPIN1] = useState(false);
  const [showPIN2, setShowPIN2] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [pin, setPin] = useState("");
  const [resetpin, setResetPin] = useState("");
  const [loading, setLoading] = useState(false);

  const moveToManagePIN = () => {
    setManagePIN(true);
    setShowCreatePIN(false);
    setShowForgotPIN(false);
    setShowChangePIN(false);
    setShowPIN1(false);
    setShowPIN2(false);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToCreatePIN = () => {
    setManagePIN(false);
    setShowCreatePIN(true);
    setShowForgotPIN(false);
    setShowChangePIN(false);
    setShowPIN1(false);
    setShowPIN2(false);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToForgotPIN = () => {
    setManagePIN(false);
    setShowCreatePIN(false);
    setShowForgotPIN(true);
    setShowChangePIN(false);
    setShowPIN1(false);
    setShowPIN2(false);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToChangePIN = () => {
    setManagePIN(false);
    setShowCreatePIN(false);
    setShowForgotPIN(false);
    setShowChangePIN(true);
    setShowPIN1(false);
    setShowPIN2(false);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToPIN1 = () => {
    setManagePIN(false);
    setShowCreatePIN(false);
    setShowForgotPIN(false);
    setShowChangePIN(false);
    setShowPIN1(true);
    setShowPIN2(false);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToPIN2 = () => {
    setManagePIN(false);
    setShowCreatePIN(false);
    setShowForgotPIN(false);
    setShowChangePIN(false);
    setShowPIN1(false);
    setShowPIN2(true);
    setShowSuccess(false);
    window.scrollTo({ top: 0 });
  };

  const moveToSuccess = async () => {
    try {
      setLoading(true);
      const response = await userService.resetPin({
        accountnumber: accountnumber,
        question: question,
        new_Trans_Pin: pin,
        renter_Transactionpin: resetpin,
        answer_To_Question: answer,
      });

      console.log(response);
      setLoading(false);
      setShowCreatePIN(false);
      setShowForgotPIN(false);
      setShowChangePIN(false);
      setShowPIN1(false);
      setShowPIN2(false);
      setShowSuccess(true);
      window.scrollTo({ top: 0 });
    } catch (error) {
      setLoading(false);
      handleErrors(error);
    }
  };

  const goBackRepeatPin = () => {
    setShowPIN1(true);
    setShowPIN2(false);
  };

  const handleComplete = () => {
    moveToManagePIN();
    backHome();
  };

  return (
    <>
      {managePIN && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              onClick={backHome}
              h="24px"
              bg="#EAECF0"
              p={0}
              _hover={{ bg: "#EAECF0" }}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text
              width="90%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              PIN Management
            </Text>
          </HStack>
          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <Text color="#667085" fontSize="16px">
              Make sure you keep PIN safe and secure
            </Text>

            <HStack>
              <Button
                onClick={moveToCreatePIN}
                bg="#FFFFFF"
                border="1px solid #EAECF0"
                borderRadius="8px"
                _hover={{ bg: "#FFFFFF" }}
                fontSize="18px"
                fontWeight={600}
                color="#A41857"
                alignItems="center"
                px="50px"
                py="38px"
              >
                Create PIN
              </Button>
              <Button
                onClick={moveToForgotPIN}
                bg="#FFFFFF"
                border="1px solid #EAECF0"
                borderRadius="8px"
                _hover={{ bg: "#FFFFFF" }}
                fontSize="18px"
                fontWeight={600}
                color="#A41857"
                alignItems="center"
                px="50px"
                py="38px"
              >
                Forgot PIN
              </Button>
              <Button
                onClick={moveToChangePIN}
                bg="#FFFFFF"
                border="1px solid #EAECF0"
                borderRadius="8px"
                _hover={{ bg: "#FFFFFF" }}
                fontSize="18px"
                fontWeight={600}
                color="#A41857"
                alignItems="center"
                px="50px"
                py="38px"
              >
                Change PIN
              </Button>
            </HStack>
          </Stack>
        </Box>
      )}

      {showCreatePIN && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              onClick={moveToManagePIN}
              h="24px"
              bg="#EAECF0"
              p={0}
              _hover={{ bg: "#EAECF0" }}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text
              width="90%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Create PIN
            </Text>
          </HStack>
          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <Text color="#667085" fontSize="16px">
              Secure your account with 4 digits PIN
            </Text>

            <FormControl w="80%">
              <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                Security Question 1
              </FormLabel>
              <Select
                h="48px"
                bg="#F7F7F7"
                border="1px solid #EAECF0"
                fontSize="16px"
                color="#101828"
                onChange={(e) => setQuestion(e.target.value)}
              >
                {securityQuestions.map((option, i) => (
                  <option key={i} value={option.id}>
                    {option.secret_Question}
                  </option>
                ))}
              </Select>
            </FormControl>

            <FormControl w="80%">
              <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                Answer 1
              </FormLabel>
              <Input
                h="48px"
                bg="#F7F7F7"
                border="1px solid #EAECF0"
                fontSize="16px"
                color="#101828"
                onChange={(e) => setAnswer(e.target.value)}
              />
            </FormControl>

            <HStack spacing={2} textAlign="left" w="80%">
              <img src={getImageUrl("icons/warning.png")} alt="" />
              <Text fontSize="11.5px" fontWeight={450} color="#667085">
                Don&apos;t remember answer
              </Text>
              <Text
                fontSize="11.5px"
                fontWeight={700}
                color="#A41857"
                cursor="pointer"
                onClick={moveToQuestions}
              >
                Change security question
              </Text>
            </HStack>

            <Button
              onClick={moveToPIN1}
              mt="16px"
              bg="#A41857"
              _hover={{ bg: "#90164D" }}
              fontSize="14px"
              fontWeight={600}
              color="#FFFFFF"
              w="80%"
              h="48px"
            >
              Continue
            </Button>
          </Stack>
        </Box>
      )}

      {showForgotPIN && (
        <ForgotPIN
          toPin={moveToPIN1}
          backHome={moveToManagePIN}
          moveToQuestions={moveToQuestions}
        />
      )}

      {showChangePIN && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button h="24px" bg="#EAECF0" p={0} _hover={{ bg: "#EAECF0" }}>
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text
              width="90%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Current Transaction PIN
            </Text>
          </HStack>
          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <Text color="#667085" fontSize="16px">
              Make sure you keep PIN safe and secure
            </Text>

            <OtpInput
              size={"lg"}
              length={4}
              width={110}
              height={"75px"}
              setOtp={(e) => setPin(e)}
            />

            <Button
              onClick={moveToPIN1}
              mt="16px"
              bg="#A41857"
              _hover={{ bg: "#90164D" }}
              fontSize="14px"
              fontWeight={600}
              color="#FFFFFF"
              w="80%"
              h="48px"
            >
              Change PIN
            </Button>
          </Stack>
        </Box>
      )}

      {showPIN1 && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              onClick={moveToManagePIN}
              h="24px"
              bg="#EAECF0"
              p={0}
              _hover={{ bg: "#EAECF0" }}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text
              width="90%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Create Transaction PIN
            </Text>
          </HStack>
          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <Text color="#667085" fontSize="16px">
              Secure your account with 4 digit PIN
            </Text>

            <OtpInput
              size={"lg"}
              length={4}
              width={110}
              height={"75px"}
              setOtp={(e) => setPin(e)}
            />

            <Button
              onClick={moveToPIN2}
              mt="16px"
              bg="#A41857"
              _hover={{ bg: "#90164D" }}
              fontSize="14px"
              fontWeight={600}
              color="#FFFFFF"
              w="80%"
              h="48px"
            >
              Continue
            </Button>
          </Stack>
        </Box>
      )}

      {showPIN2 && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              onClick={goBackRepeatPin}
              h="24px"
              bg="#EAECF0"
              p={0}
              _hover={{ bg: "#EAECF0" }}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text
              width="90%"
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Repeat Transaction PIN
            </Text>
          </HStack>
          <Stack
            spacing="24px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <Text color="#667085" fontSize="16px">
              Enter 4 digit PIN again
            </Text>

            <OtpInput
              size={"lg"}
              length={4}
              width={110}
              height={"75px"}
              setOtp={(e) => setResetPin(e)}
            />

            <Button
              onClick={moveToSuccess}
              mt="16px"
              bg="#A41857"
              _hover={{ bg: "#90164D" }}
              fontSize="14px"
              fontWeight={600}
              color="#FFFFFF"
              w="80%"
              h="48px"
              isLoading={loading}
            >
              Proceed
            </Button>
          </Stack>
        </Box>
      )}

      {showSuccess && (
        <Box>
          <HStack
            bg="#EAECF0"
            px={"26px"}
            py={"30px"}
            borderRadius={"12px 12px 0 0"}
          ></HStack>
          <Stack
            spacing="8px"
            alignItems="center"
            border="1px solid #EFECE9"
            bg="#FFFFFF"
            borderRadius="0 0 12px 12px"
            px="16px"
            pb="114px"
            pt="48px"
          >
            <img
              style={{ width: "200px", height: "auto" }}
              src={getImageUrl("icons/success.png")}
            />
            <Text
              mt={"12px"}
              fontSize={"18px"}
              fontWeight={700}
              color={"#000000"}
              textAlign={"center"}
            >
              Success!
            </Text>
            <Text
              fontSize="14px"
              fontWeight={500}
              color="#667085"
              textAlign="center"
            >
              Your PIN has been created successfully
            </Text>

            <Button
              onClick={handleComplete}
              mt="16px"
              bg="#A41857"
              _hover={{ bg: "#90164D" }}
              fontSize="14px"
              fontWeight={600}
              color="#FFFFFF"
              w="80%"
              h="48px"
            >
              Okay, Thank You
            </Button>
          </Stack>
        </Box>
      )}
    </>
  );
};
