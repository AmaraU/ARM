import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  FormErrorMessage,
  Text,
  Box,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  HStack,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EmailValidator from "email-validator";
import { getImageUrl } from "../../../utils";
import styles from "./Onboarding.module.css";
import authService from "../../services/authService";
import { getDeviceDetails } from "../../utils/deviceDetails";
import { useDispatch } from "react-redux";
import { setUserDetails } from "../../store/auth/user.slice";
import { setDocumentDetails } from "../../store/auth/document.slice";

export default function ForgotPassword() {
  const [isLoading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [emailIsError, setEmailIsError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (email.length > 0 && !EmailValidator.validate(email)) {
      setEmailIsError(true);
    } else {
      setEmailIsError(false);
    }
  }, [email]);

  const processForm = async () => {
    window.location.href = "/verify-reset";

    // try {
    //   setLoading(true);
    //   const response = await authService.login({
    //     clientId: email,
    //     clientSecret: password,
    //     deviceID: getDeviceDetails().deviceID,
    //     deviceModel: getDeviceDetails().deviceModel,
    //     deviceOS: getDeviceDetails().deviceOS,
    //     deviceName: getDeviceDetails().deviceName,
    //     deviceType: getDeviceDetails().deviceType,
    //   });

    //   dispatch(setUserDetails(response.result));
    //   dispatch(setDocumentDetails(response.result));
    //   setLoading(false);
    //   window.location.href = "/verify-reset";
    // } catch (error) {
    //   console.log(error);
    //   setLoading(false);
    // }
  };

  const changingText = [
    {
      image: "signin1.png",
      header: "Bank smarter, live better with ARM MFB",
      subheading:
        "Managing your money is what we do and we are really good at it.",
    },
    {
      image: "signin2.png",
      header: "Manage your money anywhere, anytime",
      subheading: "Gain access to your account with a tap",
    },
    {
      image: "signin3.png",
      header: "Stay on top of your money",
      subheading:
        "ARM MFB provides you the ability to maintain control over your finances",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changingText.length);
        setVisible(true);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  });

  return (
    <>
      <Box display="flex" height="100vh">
        <Box
          display={{ base: "none", md: "block" }}
          flex={{ base: "40%", md: "45%" }}
          position="relative"
          borderRadius="0 56px 56px 0"
          maxW="670px"
        >
          <Box
            position="fixed"
            width="45%"
            maxW="670px"
            height="100vh"
            bgGradient="linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)"
            zIndex="1"
            borderRadius="0 56px 56px 0"
            p="2.5%"
          >
            <Stack spacing={10} zIndex={2} h="100%">
              <Box p={8} as="button" onClick={() => navigate("/")}>
                <Image
                  src={getImageUrl("logos/arm_logo.png")}
                  w="140px"
                  h="auto"
                />
              </Box>

              <Flex
                flexDirection="column"
                gap="12px"
                h="100%"
                justifyContent="end"
                mb="24px"
              >
                <Text
                  className={`${styles.changing} ${visible ? styles.visible : ""
                    }`}
                  fontSize="4.5vh"
                  fontWeight={700}
                  color="white"
                  w="90%"
                >
                  {changingText[currentIndex].header}
                </Text>
                <Text
                  className={`${styles.changing} ${visible ? styles.visible : ""
                    }`}
                  fontSize="16px"
                  color="white"
                  w="90%"
                >
                  {changingText[currentIndex].subheading}
                </Text>

                <Flex gap="4px">
                  {changingText.map((_, idx) => (
                    <Box
                      cursor="pointer"
                      onClick={() => setCurrentIndex(idx)}
                      key={idx}
                      bg={idx === currentIndex ? "#A41857" : "#FFFFFF"}
                      className="circle"
                      borderRadius="500px"
                      w={idx === currentIndex ? "28px" : "8px"}
                      h="8px"
                      transition="width 1s ease-in-out"
                    />
                  ))}
                </Flex>

                <Flex
                  mt="7vh"
                  bottom={0}
                  alignItems="center"
                  justifyContent="space-between"
                >
                  <Text fontSize="14px" color="#EFECE9">
                    © 2024 ARM MFB by ARM Group. All rights reserved.
                  </Text>
                  <Text
                    fontSize="14px"
                    color="#EFECE9"
                    cursor="pointer"
                    _hover={{ textDecoration: "underline" }}
                  >
                    Help Center
                  </Text>
                </Flex>
              </Flex>
            </Stack>
          </Box>

          <Image
            src={getImageUrl(`${changingText[currentIndex].image}`)}
            alt="Fixed"
            position="fixed"
            width="45%"
            maxW="670px"
            height="100vh"
            objectFit="cover"
            borderRadius="0 56px 56px 0"
            transition="src 1s ease-in-out"
          />
        </Box>

        <Box
          flex={"55%"}
          overflowY="scroll"
          bg="white"
          display={"flex"}
          flexDirection={"column"}
          p={{ base: "24px", md: "50px" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Text
            fontSize={{ base: "40px", md: "48px" }}
            fontWeight={700}
            color={"#14142A"}
          >
            Forgot Password
          </Text>
          <Text
            fontSize={{ base: "16px", md: "18px" }}
            fontWeight={400}
            color={"#667085"}
          >
            Reset your password by providing the details below, an OTP would be sent
          </Text>

          <Tabs>
            <TabList
              borderBottom={"none"}
              gap={"5px"}
              mb={"24px"}
              mt={"48px"}
              pl={2}
            >
              <Tab
                rounded={"50px"}
                fontSize={"13px"}
                color={"#667085"}
                fontWeight={500}
                border={"1px solid #EAECF0"}
                py={"12px"}
                px={"14px"}
                _selected={{
                  color: "#FFFFFF",
                  bg: "#667085",
                  border: "1px solid transparent",
                  boxShadow: "0px 0px 1px 0px #00000066",
                }}
              >
                Email address
              </Tab>
              <Tab
                rounded={"50px"}
                fontSize={"13px"}
                color={"#667085"}
                fontWeight={500}
                border={"1px solid #EAECF0"}
                py={"12px"}
                px={"14px"}
                _selected={{
                  color: "#FFFFFF",
                  bg: "#667085",
                  border: "1px solid transparent",
                  boxShadow: "0px 0px 1px 0px #00000066",
                }}
              >
                Phone number
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel w={{ base: "sm", md: "md", lg: "lg" }} maxW={"630px"}>
                <Stack spacing={"16px"} as="form" onSubmit={processForm}>
                  <FormControl isInvalid={emailIsError} isRequired>
                    <FormLabel
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#101828"}
                      mb={"16px"}
                    >
                      Email Address
                    </FormLabel>
                    <Input
                      type="text"
                      placeholder="Enter your email"
                      _placeholder={{ fontSize: "sm" }}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      border={"1px solid #EAECF0"}
                      bg={"#F7F7F7"}
                    />
                    {emailIsError && (
                      <FormErrorMessage>
                        Please enter a valid email address.
                      </FormErrorMessage>
                    )}
                  </FormControl>

                  <Stack pt={4}>
                    <Button
                      onClick={processForm}
                      disabled={isLoading}
                      isLoading={isLoading}
                      rounded={"8px"}
                      py={"26px"}
                      px={"16px"}
                      // type="submit"
                      size="md"
                      bg={"#A41857"}
                      color={"white"}
                      type={"button"}
                      _hover={{
                        bg: "#90164D",
                      }}
                    >
                      Continue
                    </Button>

                    <Text mt='12px' textAlign='center' fontSize='18px'><a href="/signin">Go back</a></Text>
                  </Stack>
                </Stack>
              </TabPanel>

              <TabPanel w={{ base: "sm", md: "sm", lg: "lg" }} maxW={"630px"}>
                <Stack spacing={"16px"} as="form" onSubmit={processForm}>
                  <FormControl>
                    <FormLabel
                      fontSize={"16px"}
                      fontWeight={400}
                      color={"#101828"}
                      mb={"16px"}
                    >
                      Phone Number
                    </FormLabel>
                    <HStack spacing={2}>
                      <Select
                        flex={"35%"}
                        border={"1px solid #EAECF0"}
                        bg={"#F7F7F7"}
                        fontSize={"16px"}
                      >
                        <option value="">+234 (NG)</option>
                      </Select>
                      <Input
                        isRequired
                        type="tel"
                        placeholder="Enter your phone number"
                        _placeholder={{ fontSize: "sm" }}
                        border={"1px solid #EAECF0"}
                        bg={"#F7F7F7"}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </HStack>
                  </FormControl>

                  <Stack pt={4}>
                    <Button
                      onClick={processForm}
                      disabled={isLoading}
                      isLoading={isLoading}
                      rounded={"8px"}
                      py={"26px"}
                      px={"16px"}
                      // type="submit"
                      size="md"
                      bg={"#A41857"}
                      color={"white"}
                      type={"button"}
                      _hover={{
                        bg: "#90164D",
                      }}
                    >
                      Continue
                    </Button>

                    <Text mt='12px' textAlign='center' fontSize='18px'><a href="/signin">Go back</a></Text>

                  </Stack>
                </Stack>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
}
