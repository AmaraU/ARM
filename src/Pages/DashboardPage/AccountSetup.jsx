import { useState, useEffect } from "react";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import styles from "./Overview.module.css";
import { getImageUrl } from "../../../utils";
import { TransactionPIN } from "./TransactionPIN";
import { SecurityQuestions } from "./SecurityQuestions";
import { EmailAddress } from "./EmailAddress";
import { useDispatch, useSelector } from "react-redux";
import { getSetupStatus } from "../../store/auth/user.slice";
import { useNavigate } from "react-router-dom";

export const  AccountSetup = () => {

  const [ step, setStep ] = useState(2);
  const { email, phoneNumber } = useSelector((state) => state.user);

  const [transPINFilled, setTransPINFilled] = useState(false);
  const [securityQuestionsFilled, setSecurityQuestionsFilled] = useState(false);
  const [emailAddressFilled, setEmailAddressFilled] = useState(false);
  const navigate = useNavigate();

  const { emailAddressVerification, secretQuestion, transactionPIN } =
    useSelector((state) => state.user.setupStatus) || {
      emailAddressVerification: false,
      secretQuestion: false,
      transactionPIN: false,
    };

  const moveToSetup = () => {
    setStep(1);
    window.scrollTo({ top: 0 });
    // setAccountSetup(true);
    // setShowTransPIN(false);
    // setShowSecurityQuestion(false);
    // setShowEmailAddress(false);
  };

  const moveToTransPIN = () => {
    if (!transactionPIN) {
      setStep(2);
      setTransPINFilled(true);
      window.scrollTo({ top: 0 });
    }
  };
  const moveToSecurityQuestions = () => {
    if (!secretQuestion) {
      setStep(3);
      setSecurityQuestionsFilled(true);
      window.scrollTo({ top: 0 });
    }
  };
  const moveToEmailAddress = () => {
    if (!emailAddressVerification) {
      setStep(4);
      setEmailAddressFilled(true);
      window.scrollTo({ top: 0 });
    }
  };

  const handleProceed = () => {
    if (
      (emailAddressVerification || emailAddressFilled) &&
      (secretQuestion || securityQuestionsFilled) &&
      (transactionPIN || transPINFilled)
    ) {
      window.location.href = "/overview/dashboard";
      return;
    }

    if (
      (transactionPIN || transPINFilled) &&
      (secretQuestion || securityQuestionsFilled)
    ) {
      moveToEmailAddress();
      window.scrollTo({ top: 0 });
      return;
    }

    if (transactionPIN || transPINFilled) {
      moveToSecurityQuestions();
      window.scrollTo({ top: 0 });
      return;
    }

    moveToTransPIN();
    window.scrollTo({ top: 0 });
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSetupStatus());
  }, [dispatch]);

  return (
    <div className={styles.whole}>
      
      {step === 1 && <HStack mb="40px" spacing="12px" cursor='pointer' onClick={()=>navigate('/overview/')}>
        <img src={getImageUrl("icons/blackLeftArrow.png")} />
        <Text fontSize="24px" fontWeight={700} color="#101828">
          Complete Account Setup
        </Text>
      </HStack>}

      {step != 1 && <Text mb="40px" fontSize="24px" fontWeight={700} color="#101828">
        Complete Account Setup
      </Text>}

      {step == 1 && (
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
              Account Setup
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
            <Text w="75%" fontSize="16px" color="#667085" textAlign="center">
              You're almost there! Please follow the steps below
            </Text>

            <Stack w="75%" bg="#F2F4F7" py="18px" px="16px" borderRadius="8px">
              <HStack
                spacing="12px"
                w="fit-content"
              >
                <Box
                  p="8px"
                  borderRadius="38px"
                  border={
                    transactionPIN || transPINFilled
                      ? "1px solid #2AD062"
                      : "1px solid #EAECF0"
                  }
                >
                  <Box
                    p="2px"
                    borderRadius="38px"
                    bg={
                      transactionPIN || transPINFilled ? "#2AD062" : "#667085"
                    }
                  >
                    <img
                      src={getImageUrl("icons/whiteCheck.png")}
                      style={{ width: "12px", height: "12px" }}
                    />
                  </Box>
                </Box>
                <Text fontSize="16px" fontWeight={600} color="#0C111D">
                  Create transaction PIN
                </Text>
              </HStack>

              <Box h="14px" w="1px" ml="16px" border="1px dashed #A0A3BD"></Box>

              <HStack
                spacing="12px"
                w="fit-content"
              >
                <Box
                  p="8px"
                  borderRadius="38px"
                  border={
                    securityQuestionsFilled || secretQuestion
                      ? "1px solid #2AD062"
                      : "1px solid #EAECF0"
                  }
                >
                  <Box
                    p="2px"
                    borderRadius="38px"
                    bg={
                      securityQuestionsFilled || secretQuestion
                        ? "#2AD062"
                        : "#667085"
                    }
                  >
                    <img
                      src={getImageUrl("icons/whiteCheck.png")}
                      style={{ width: "12px", height: "12px" }}
                    />
                  </Box>
                </Box>
                <Text fontSize="16px" fontWeight={600} color="#0C111D">
                  Add security question
                </Text>
              </HStack>

              <Box h="14px" w="1px" ml="16px" border="1px dashed #A0A3BD"></Box>

              <HStack
                spacing="12px"
                w="fit-content"
              >
                <Box
                  p="8px"
                  borderRadius="38px"
                  border={
                    emailAddressFilled || emailAddressVerification
                      ? "1px solid #2AD062"
                      : "1px solid #EAECF0"
                  }
                >
                  <Box
                    p="2px"
                    borderRadius="38px"
                    bg={
                      emailAddressFilled || emailAddressVerification
                        ? "#2AD062"
                        : "#667085"
                    }
                  >
                    <img
                      src={getImageUrl("icons/whiteCheck.png")}
                      style={{ width: "12px", height: "12px" }}
                    />
                  </Box>
                </Box>
                <Text fontSize="16px" fontWeight={600} color="#0C111D">
                  Validate email address
                </Text>
              </HStack>
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
              onClick={handleProceed}
            >
              Proceed
            </Button>
          </Stack>
        </Box>
      )}

      {step === 2 && (
        <TransactionPIN
          moveToSetup={moveToSetup}
          proceed={moveToSetup}
          moveToSecurity={moveToSecurityQuestions}
        />
      )}
      {step === 3 && (
        <SecurityQuestions
          proceed={moveToSetup}
          moveToSetup={moveToSetup}
          moveToEmailAddress={moveToEmailAddress}
        />
      )}
      {step === 4 && (
        <EmailAddress
          moveToSetup={moveToSetup}
          email={email}
          phoneNumber={phoneNumber}
        />
      )}
    </div>
  );
};
