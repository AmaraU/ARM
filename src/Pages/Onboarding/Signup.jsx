import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Image,
  Text,
  Box,
  HStack,
  Checkbox,
  Divider,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getImageUrl } from "../../../utils";
import styles from "./Onboarding.module.css";
import { ConfirmNumber } from "./ConfirmPhone";
import { useDispatch } from "react-redux";
import { setDetails } from "../../store/auth/auth.slice";
import authService from "../../services/authService";

export default function Signup() {
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const [isLoading, setLoading] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [questOne, setQuestOne] = useState(false);
  const [questTwo, setQuestTwo] = useState(false);
  const [visible, setVisible] = useState(true);
  const [isBVN, setIsBVN] = useState(true);
  const [text, setText] = useState("BVN");
  const [bvn, setBVN] = useState("");
  const [nin, setNIN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const verifyKyc = async () => {
    try {
      setLoading(true);
      await authService.checkBVNorNIN(bvn ? bvn : nin);
      let response;
      if (isBVN) {
        response = await authService.verifyBVN({
          number: bvn,
          firstName: "",
          lastName: "",
        });
        setPhoneNumber(response.data.data.bvn.phone);
        setEmail(response.data.data.bvn.email);

        dispatch(
          setDetails({
            bvn,
            phoneNumber: response.data.data.bvn.phone,
            email: response.data.data.bvn.email,
            firstname: response.data.data.bvn.firstname,
            surname: response.data.data.bvn.lastname,
            othername: response.data.data.bvn.middlename,
            photo: response.data.data.bvn.photo,
            gender: response.data.data.bvn.gender,
            address: response.data.data.bvn.residential_address,
          })
        );
      } else {
        response = await authService.verifyNIN({
          number: nin,
          firstName: "",
          lastName: "",
        });
        setPhoneNumber(response.data.data.nin.phone);
        setEmail(response.data.data.nin.email);
        dispatch(
          setDetails({
            bvn,
            phoneNumber: response.data.data.nin.phone,
            email: response.data.data.nin.email,
            firstname: response.data.data.nin.firstname,
            surname: response.data.data.nin.lastname,
            othername: response.data.data.nin.middlename,
            photo: response.data.data.nin.photo,
            gender: response.data.data.nin.gender,
            address: response.data.data.nin.residential_address,
          })
        );
      }
      setLoading(false);
      onOpenConfirm();
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
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

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % changingText.length);
        setVisible(true);
      }, 1000);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  // const handleConfirmNumber = async () => {
  //   try {
  //     dispatch(
  //       setDetails({
  //         bvn,
  //         nin,
  //       })
  //     );
  //     await verifyKyc();
  //   } catch (error) {
  //     console.log(error);
  //     setLoading(false);
  //   }
  // };

  const handleConfirmNumber = () => {
    onOpenConfirm();
  };

  const changeOverN = () => {
    setIsBVN(false);
    setText("NIN");
  };
  const changeOverB = () => {
    setIsBVN(true);
    setText("BVN");
  };

  return (
    <>
      <Box display="flex" height={["auto", "100vh"]}>
        <Box
          display={{ base: "none", md: "block" }}
          flex="45%"
          position="relative"
          borderRadius="0 56px 56px 0"
          maxW="670px"
        >
          <Box
            position="fixed"
            width="45%"
            maxW="670px"
            height="100vh"
            bgGradient={
              "linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)"
            }
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
                  className={`${styles.changing} ${
                    visible ? styles.visible : ""
                  }`}
                  fontSize="6vh"
                  fontWeight={700}
                  color="white"
                  w="90%"
                >
                  {changingText[currentIndex].header}
                </Text>
                <Text
                  className={`${styles.changing} ${
                    visible ? styles.visible : ""
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
                      transition={"width 1s ease-in-out"}
                    />
                  ))}
                </Flex>

                <Flex
                  mt="6vh"
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
          />
        </Box>

        <Box
          flex="55%"
          overflowY={{base: "auto", sm: "scroll"}}
          bg="white"
          display={"flex"}
          flexDirection={"column"}
          p={{ base: "12px", md: "50px" }}
          alignItems={{ base: "center", md: "start" }}
        >
          <Stack
            spacing={"16px"}
            w={{ base: "100%", sm: "sm", lg: "lg" }}
            h="100%"
            maxW={"630px"}
            as="form"
            mt={"48px"}
          >
            <Text
              fontSize={{ base: "32px", md: "44px" }}
              fontWeight={700}
              color={"#14142A"}
            >
              Let&apos;s have your {text}
            </Text>
            <Text
              fontSize={{ base: "14px", md: "18px" }}
              fontWeight={400}
              color={"#667085"}
            >
              Kindly provide your 11-digit {text} to validate your identity
            </Text>

            {isBVN && (
              <FormControl isRequired>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={400}
                  color={"#101828"}
                  mb={"16px"}
                >
                  Enter BVN
                </FormLabel>
                <Input
                  onChange={(e) => setBVN(e.target.value)}
                  type="number"
                  border="1px solid #EAECF0"
                  bg="#F7F7F7"
                  color="#101828"
                  placeholder="Enter your BVN"
                  _placeholder={{ fontSize: "sm" }}
                  autoComplete="off"
                  onInput={(e)=>e.target.value = e.target.value.slice(0,11)}
                  maxLength={11}
                  onWheel={ event => event.currentTarget.blur() }
                />
              </FormControl>
            )}
            {!isBVN && (
              <FormControl isRequired>
                <FormLabel
                  fontSize={"16px"}
                  fontWeight={400}
                  color={"#101828"}
                  mb={"16px"}
                >
                  Enter NIN
                </FormLabel>
                <Input
                  maxLength={11}
                  type="number"
                  border="1px solid #EAECF0"
                  bg="#F7F7F7"
                  color="#101828"
                  placeholder="Enter your NIN"
                  _placeholder={{ fontSize: "sm" }}
                  autoComplete="off"
                  onChange={(e) => setNIN(e.target.value)}
                  onInput={(e) => e.target.value = e.target.value.slice(0,11)}
                  onWheel={(e) => e.currentTarget.blur() }
                />
              </FormControl>
            )}
            <Box
              p="12px"
              bg="#F7F7F7"
              border="1px solid #EAECF0"
              borderRadius="8px"
            >
              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => setQuestOne(!questOne)}
                >
                  <HStack>
                    <img src={getImageUrl("icons/blackInfo.png")} />
                    <Text fontSize="14px" fontWeight={500} color="#667085">
                      Why do we need your {text}?
                    </Text>
                  </HStack>
                  <button type="button">
                    <img src={getImageUrl("icons/greyRightAngle.png")} />
                  </button>
                </Flex>
                {questOne && (
                  <Stack p="12px" spacing="12px">
                    <Text fontSize="12px" fontWeight={400} color="#667085">
                      This is how we verify that transactions are carried out by
                      the real account owner (that’s you!) It helps us keep you
                      safe.
                    </Text>
                    <Text fontSize="12px" fontWeight={400} color="#667085">
                      Before continuing you can review our Privacy Policy and
                      Terms of Service
                    </Text>
                    <Box>
                      <Flex fontSize="12px" fontWeight={500} color="#0C111D">
                        <img src={getImageUrl("icons/greenTick.png")} alt="" />
                        Full Name
                      </Flex>
                      <Flex fontSize="12px" fontWeight={500} color="#0C111D">
                        <img src={getImageUrl("icons/greenTick.png")} alt="" />
                        Phone number
                      </Flex>
                      <Flex fontSize="12px" fontWeight={500} color="#0C111D">
                        <img src={getImageUrl("icons/greenTick.png")} alt="" />
                        Date of birth
                      </Flex>
                    </Box>
                    <Text fontSize="12px" fontWeight={500} color="#0C111D">
                      Your {text} does not give us access to your bank account,
                      transactions or any other information.
                    </Text>
                    <Text fontSize="12px" fontWeight={500} color="#0C111D">
                      Your data is safe with us and we will not share your data
                      with anyone
                    </Text>
                  </Stack>
                )}
              </Box>

              <Divider h="2px" mt="12px" mb="12px" />

              <Box>
                <Flex
                  alignItems="center"
                  justifyContent="space-between"
                  onClick={() => setQuestTwo(!questTwo)}
                >
                  <HStack>
                    <img src={getImageUrl("icons/blackQuestion.png")} />
                    <Text fontSize="14px" fontWeight={500} color="#667085">
                      Don&apos;t know your {text}?
                    </Text>
                  </HStack>
                  <button type="button">
                    <img src={getImageUrl("icons/greyRightAngle.png")} />
                  </button>
                </Flex>
                {questTwo && (
                  <Stack p="12px" spacing="12px">
                    <Text fontSize="12px" fontWeight={400} color={"#667085"}>
                      This will work only if you are making the request from the
                      same phone number currently linked to your bank account.
                    </Text>
                    <Box
                      bg={"#F2F4F7"}
                      border={"1px solid #EAECF0"}
                      borderRadius={"8px"}
                      p={"12px"}
                    >
                      <Text
                        fontSize={"16px"}
                        fontWeight={700}
                        color={"#0C111D"}
                      >
                        Just dial the USSD code below
                      </Text>
                      <Divider mt={"12px"} mb={"12px"} />
                      <Flex justifyContent={"space-between"}>
                        <Text
                          fontSize={"16px"}
                          fontWeight={700}
                          color={"#0C111D"}
                        >
                          *565*0#
                        </Text>
                        <img src={getImageUrl("icons/blackCall.png")} />
                      </Flex>
                    </Box>
                    <Text fontSize={"12px"} fontWeight={400} color={"#F79009"}>
                      <b>Note:</b> A service fee of ₦20 is charged by your
                      network provider.
                    </Text>
                  </Stack>
                )}
              </Box>

              <Divider h={"2px"} mt={"12px"} mb={"12px"} />

              {isBVN && (
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#A41857"}
                  cursor={"pointer"}
                  onClick={() => changeOverN()}
                  _hover={{ textDecoration: "underline" }}
                >
                  Don&apos;t have a BVN?
                </Text>
              )}
              {!isBVN && (
                <Text
                  w={"fit-content"}
                  fontSize={"14px"}
                  fontWeight={500}
                  color={"#A41857"}
                  cursor={"pointer"}
                  onClick={() => changeOverB()}
                  _hover={{ textDecoration: "underline" }}
                >
                  Don&apos;t have a NIN?
                </Text>
              )}
            </Box>

            <FormControl isRequired>
              <Checkbox
                alignItems={"flex-start"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                borderRadius={"8px"}
                p={"12px"}
                colorScheme="red"
                _checked={{
                  "& .chakra-checkbox__control": { background: "#A41857" },
                }}
                value={checked}
                onChange={(e) => setChecked(e.target.checked)}
              >
                <Stack>
                  <Text fontSize={"14px"} fontWeight={700} color={"#344054"}>
                    I accept the terms and conditions
                  </Text>
                  <Text fontSize={"14px"} fontWeight={400} color={"#475467"}>
                    You acknowledge that you have read this Terms & Conditions
                    and agree to all its term.
                  </Text>
                </Stack>
              </Checkbox>
            </FormControl>
            <Stack pt={4}>
              <Button
                // isDisabled={!checked || (!bvn && !nin)}
                isLoading={isLoading}
                rounded={"8px"}
                py={"26px"}
                px={"16px"}
                type={"button"}
                size="md"
                bg={"#A41857"}
                color={"white"}
                _hover={{
                  bg: "#90164D",
                }}
                onClick={handleConfirmNumber}
              >
                Continue
              </Button>
            </Stack>
            <div className={styles.signUp}>
              <div className={styles.line} />
              Already have an account? <a href="/signin">Sign in</a>
              <div className={styles.line} />
            </div>
          </Stack>
        </Box>
      </Box>

      <ConfirmNumber
        phoneNumber={phoneNumber}
        email={email}
        isOpen={isOpenConfirm}
        onClose={onCloseConfirm}
      />
    </>
  );
}
