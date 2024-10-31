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
} from "@chakra-ui/react";
import { useState } from "react";
import { getImageUrl } from "../../../utils";
import {  useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import styles from "./Onboarding.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/auth/auth.slice";
import { handleErrors } from "../../utils/handleResponse";
import authService from "../../services/authService";

export const CreateProfile = () => {

  const { isOpen: isOpenVerifying, onOpen: onOpenVerifying, onClose: onCloseVerifying } = useDisclosure();
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ passwordConfirm, setPasswordConfirm ] = useState("");
  const [ emailIsError, setEmailIsError ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);
  const [ showPasswordConfirm, setShowPasswordConfirm ] = useState(false);
  const [ strength, setStrength ] = useState(0);
  const [ strengthText, setstrengthText ] = useState("");
  const [ hasEightChars, setHasEightChars ] = useState(false);
  const [ hasLowerCase, setHasLowerCase ] = useState(false);
  const [ hasUpperCase, setHasUpperCase ] = useState(false);
  const [ hasSpecialSymbol, setHasSpecialSymbol ] = useState(false);
  const navigate = useNavigate();


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

        if (strengthScore <= 1) setstrengthText('Weak');
        if (strengthScore > 1) setstrengthText('Average');
        if (strengthScore > 3) setstrengthText('Strong');
    
        return strengthScore;
    };

  const handlePasswordChange = (e) => {
    const enteredPassword = e.target.value;
    setPassword(enteredPassword);
    setStrength(checkPasswordStrength(enteredPassword));
  };

  const openVerifying = async () => {
    try {
      await dispatch(
        setDetails({
          password,
          confirmPassword: passwordConfirm,
        })
      );
      onOpenVerifying();
      const response = await authService.signup(auth);
      console.log(response);
      onCloseVerifying();
      navigate("/complete-registration");
    } catch (error) {
      onCloseVerifying()
      handleErrors(error)
      
    }
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
          <a href="/user-info">
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </a>

          <CircularProgress value={70} size="32px" color="#A41857">
            <CircularProgressLabel fontWeight={700} fontSize="9px">
              70%
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Text fontSize="48px" fontWeight={700} color="#14142A">
          Create your profile
        </Text>
        <Text fontSize="18px" fontWeight={400} color="#667085">
          Enter your details to setup your profile
        </Text>

            <Stack w='100%' spacing='16px'>
                <FormControl isInvalid={emailIsError} isRequired>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828' mb='8px'>Email Address</FormLabel>
                    <Input h='48px' type='text' placeholder='Enter your email' _placeholder={{ fontSize: "sm" }} value={email} onChange={(e) => setEmail(e.target.value)} border='1px solid #EAECF0' bg='#F7F7F7' autoComplete='off' />
                    {emailIsError && <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>}
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828' mb='8px'>Create Password</FormLabel>
                    <InputGroup>
                        <Input h='48px' placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showPassword ? 'text' : 'password'} value={password} onChange={handlePasswordChange} border='1px solid #EAECF0' bg='#F7F7F7' autoComplete='off' />
                        <InputRightElement h='full'>
                            <Button variant='ghost' onClick={() => setShowPassword((showPassword) => !showPassword)}>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <Stack w='100%'>
                    <Box display='flex' gap='4px' alignItems='center'>
                        {[...Array(4)].map((_, index) => (
                            // <Text color='black'>One Bar</Text>
                            <Box key={index} className={`${styles.strengthBar} ${index < strength ? styles.filled : ''}`}></Box>
                        ))}
                        <Text fontSize='12px' color='#DB9308' ml='24px'>{strengthText}</Text>
                    </Box>
                    <Box display='flex' gap='16px' alignItems='center' justifyContent='space-between'>
                        <div className={hasEightChars ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>At least 8 characters strong</div>
                        <div className={hasLowerCase ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One lower case character</div>
                        <div className={hasUpperCase ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One upper case</div>
                        <div className={hasSpecialSymbol ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One special symbol {'(@!><|.?*&%$)'}</div>
                    </Box>
                </Stack>
                <FormControl isRequired>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828' mb='8px'>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input h='48px' placeholder='Confirm your password' _placeholder={{ fontSize: "sm" }} type={showPasswordConfirm ? 'text' : 'password'} value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} border='1px solid #EAECF0' bg='#F7F7F7' />
                        <InputRightElement h='full'>
                            <Button variant='ghost' onClick={() => setShowPasswordConfirm((showPasswordConfirm) => !showPasswordConfirm)}>
                                {showPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
            </Stack>
            <Button onClick={openVerifying} mt='56px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='18px' fontWeight={600} color='#FFFFFF' w='100%' h='48px'>Continue</Button>
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
