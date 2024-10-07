import {
  Button,
  Flex,
  Stack,
  Text,
  Spinner,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
  CircularProgress,
  CircularProgressLabel,
  Box,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styles from "./Onboarding.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/auth/auth.slice";
import { handleErrors } from "../../utils/handleResponse";
import authService from "../../services/authService";
import { MdBorderColor } from "react-icons/md";

export const ResetPassword = () => {
  const {
    isOpen: isOpenVerifying,
    onOpen: onOpenVerifying,
    onClose: onCloseVerifying,
  } = useDisclosure();
  const auth = useSelector((state) => state.auth);
  const [email, setEmail] = useState(auth?.email);
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);
  const [ passwordMatch, setPasswordMatch ] = useState(true);
  const [strength, setStrength] = useState(0);
  const [strengthText, setstrengthText] = useState("     ");
  const [hasEightChars, setHasEightChars] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasSpecialSymbol, setHasSpecialSymbol] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const checkPasswordStrength = (password) => {
    let strengthScore = 0;

    if (password.length >= 8) {
      strengthScore += 1;
      setHasEightChars(true);
    } else if (password.length < 8) {
      setHasEightChars(false);
    }

    if (/[a-z]/.test(password)) {
      strengthScore += 1;
      setHasLowerCase(/[a-z]/.test(password));
    } else {
      setHasLowerCase(false);
    }

    if (/[A-Z]/.test(password)) {
      strengthScore += 1;
      setHasUpperCase(true);
    } else {
      setHasUpperCase(false);
    }

    if (/[\W_]/.test(password)) {
      strengthScore += 1;
      setHasSpecialSymbol(true);
    } else {
      setHasSpecialSymbol(false);
    }

    if (strengthScore <= 1) setstrengthText("Weak");
    if (strengthScore > 1) setstrengthText("Average");
    if (strengthScore > 3) setstrengthText("Strong");

    return strengthScore;
  };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setStrength(checkPasswordStrength(enteredPassword));
    dispatch(
      setDetails({
        password: enteredPassword,
      })
    );
  };

  const handleConfirmPasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPasswordConfirm(enteredPassword);
    dispatch(
      setDetails({
        confirmPassword: enteredPassword,
      })
    );
    if (password === e.target.value) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const setEmailValue = (e) => {
    setEmail(e.target.value);
    setEmailIsError(
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e.target.value)
    );
  };

  

  const openVerifying = async () => {
    navigate("/success");

    // try {
    //   onOpenVerifying();
    //   const payload = { ...auth };
    //   delete payload["photo"];
    //   const response = await authService.signup(payload);
    //   console.log(response);
    //   onCloseVerifying();
    //   if (response) {
    //     await dispatch(
    //       setDetails({
    //         accountNo: response.data.result.data.accountNumber,
    //       })
    //     );
    //     navigate("/welcome");
    //   }
    // } catch (error) {
    //   onCloseVerifying();
    //   handleErrors(error);
    // }
  };

  return (
    <>
      <Stack
        alignItems="center"
        spacing={5}
        py="6%"
        px="25%"
        bgImage={getImageUrl("onboardingBackground.png")}
        bgSize="100% 100%"
      >
        <img
          style={{ width: "140px", height: "auto" }}
          src={getImageUrl("logos/arm_logo.png")}
          alt="ARM"
        />
        <Flex justifyContent="space-between" w="100%">
          <a href="/verify-reset">
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </a>
        </Flex>
        <Text fontSize="48px" fontWeight={700} color="#14142A">
          Reset Password
        </Text>
        <Text fontSize="18px" fontWeight={400} color="#667085">
          Set up a new password
        </Text>

        <Stack w="100%" spacing="16px">
          <FormControl isRequired>
            <FormLabel
              fontSize="16px"
              fontWeight={400}
              color="#101828"
              mb="8px"
            >
              New Password
            </FormLabel>
            <InputGroup>
              <Input
                h="48px"
                placeholder="Enter your password"
                _placeholder={{ fontSize: "sm" }}
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePasswordChange}
                border="1px solid #EAECF0"
                bg="#F7F7F7"
                autoComplete="off"
              />
              <InputRightElement h="full">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setShowPassword((showPassword) => !showPassword)
                  }
                >
                  {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <Stack w="100%">
            <Box display="flex" gap="4px" alignItems="center">
              {[...Array(4)].map((_, index) => (
                <Box
                  key={index}
                  className={`${styles.strengthBar} ${
                    index < strength ? styles.filled : ""
                  }`}
                ></Box>
              ))}
              <Text fontSize="12px" color="#DB9308" ml="24px">
                {strengthText}
              </Text>
            </Box>
            <Box
              display="flex"
              gap="16px"
              alignItems="center"
              justifyContent="space-between"
            >
              <div
                className={
                  hasEightChars ? styles.passwordCheck : styles.passwordUncheck
                }
              >
                <div className={styles.checkbox}>
                  <img src={getImageUrl("icons/whiteCheck.png")} />
                </div>
                At least 8 characters strong
              </div>
              <div
                className={
                  hasLowerCase ? styles.passwordCheck : styles.passwordUncheck
                }
              >
                <div className={styles.checkbox}>
                  <img src={getImageUrl("icons/whiteCheck.png")} />
                </div>
                One lower case character
              </div>
              <div
                className={
                  hasUpperCase ? styles.passwordCheck : styles.passwordUncheck
                }
              >
                <div className={styles.checkbox}>
                  <img src={getImageUrl("icons/whiteCheck.png")} />
                </div>
                One upper case
              </div>
              <div
                className={
                  hasSpecialSymbol
                    ? styles.passwordCheck
                    : styles.passwordUncheck
                }
              >
                <div className={styles.checkbox}>
                  <img src={getImageUrl("icons/whiteCheck.png")} />
                </div>
                One special symbol {"(@!><|.?*&%$)"}
              </div>
            </Box>
          </Stack>
          <FormControl isRequired>
            <FormLabel
              fontSize="16px"
              fontWeight={400}
              color="#101828"
              mb="8px"
            >
              Confirm New Password
            </FormLabel>
            <InputGroup>
              <Input
                h="48px"
                placeholder="Confirm your password"
                _placeholder={{ fontSize: "sm" }}
                type={showPasswordConfirm ? "text" : "password"}
                value={passwordConfirm}
                onChange={handleConfirmPasswordChange}
                border={passwordMatch ? '1px solid #EAECF0' : '1px solid #ED405C'}
                bg="#F7F7F7"
                sx={{
                  _focus: {
                    borderColor: passwordMatch ? '#EAECF0' : '#ED405C',
                    boxShadow: "none",
                  },
                }}
              />
              <InputRightElement h="full">
                <Button
                  variant="ghost"
                  onClick={() =>
                    setShowPasswordConfirm(
                      (showPasswordConfirm) => !showPasswordConfirm
                    )
                  }
                >
                  {showPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                </Button>
              </InputRightElement>
            </InputGroup>
            {!passwordMatch && <Text mt='8px' fontSize='12px' color='#ED405C'>Passwords do not match</Text>}
          </FormControl>
        </Stack>
        <Button
          onClick={openVerifying}
          mt="56px"
          bg="#A41857"
          _hover={{ bg: "#A41857" }}
          fontSize="18px"
          fontWeight={600}
          color="#FFFFFF"
          w="100%"
          h="48px"
        >
          Continue
        </Button>
      </Stack>

      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpenVerifying}
        onClose={onCloseVerifying}
      >
        <ModalOverlay />
        <ModalContent
          rounded={15}
          p={"20px"}
          justifyContent={"center"}
          w={"fit-content"}
        >
          <Spinner w={"30px"} h={"30px"} speed="1s" emptyColor="grey" />
        </ModalContent>
      </Modal>
    </>
  );
};
