import { useState } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  useDisclosure,
  FormControl,
  FormLabel,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalOverlay,
  ModalFooter,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../elements/CardContainer";

export const UpgradeAccount = () => {
  const {
    isOpen: isOpenSample,
    onOpen: onOpenSample,
    onClose: onCloseSample,
  } = useDisclosure();

  const [step, setStep] = useState(1);

  const [BVNAndNINFilled, setBVNAndNINFilled] = useState(false);
  const [IDCardFilled, setIDCardFilled] = useState(false);
  const [signatureFilled, setSignatureFilled] = useState(false);
  const [addressFilled, setAddressFilled] = useState(false);
  const navigate = useNavigate();

  const moveToUpgrade = () => {
    setStep(1);
    window.scrollTo({ top: 0 });
  };

  const moveToBVN = () => {
    setStep(2);
    setBVNAndNINFilled(true);
    window.scrollTo({ top: 0 });
  };

  const moveToDocumentUpload = () => {
    setStep(3);
    setIDCardFilled(true);
    window.scrollTo({ top: 0 });
  };

  const moveToSignature = () => {
    setStep(4);
    setSignatureFilled(true);
    window.scrollTo({ top: 0 });
  };

  const moveToAddressProof = () => {
    setStep(5);
    setAddressFilled(true);
    window.scrollTo({ top: 0 });
  };

  const moveToSuccess = () => {
    setStep(6);
    window.scrollTo({ top: 0 });
  };

  return (
    // <>
    <div className={styles.whole}>
      <Box maxW="1000px">
        {step === 1 && (
          <HStack
            mb="40px"
            spacing="12px"
            cursor="pointer"
            onClick={() => navigate("/overview/accounts")}
          >
            <img src={getImageUrl("icons/blackLeftArrow.png")} />
            <Text fontSize="24px" fontWeight={700} color="#101828">
              Upgrade Your Account
            </Text>
          </HStack>
        )}

        {step != 1 && (
          <Text mb="40px" fontSize="24px" fontWeight={700} color="#101828">
            Upgrade Your Account
          </Text>
        )}

        {step == 1 && (
          <Box>
            <HStack
              bg="#EAECF0"
              px={"26px"}
              py={"14px"}
              borderRadius={"12px 12px 0 0"}
            >
              <Text
                w="100%"
                textAlign="center"
                fontSize="18px"
                fontWeight={600}
                color="#101828"
              >
                Account Upgrade Requirements
              </Text>
            </HStack>
            <Stack
              spacing="16px"
              alignItems="center"
              border="1px solid #EFECE9"
              bg="#FFFFFF"
              borderRadius="0 0 12px 12px"
              px="16px"
              pb="114px"
              pt="48px"
            >
              <Text w="50%" fontSize="16px" color="#667085" textAlign="center">
                You are required to upload these documents below for us to
                verify and upgrade your account
              </Text>

              <Stack
                w="75%"
                bg="#F2F4F7"
                py="18px"
                px="16px"
                borderRadius="8px"
              >
                <HStack spacing="12px" w="fit-content">
                  <Box
                    p="8px"
                    borderRadius="38px"
                    border={
                      BVNAndNINFilled
                        ? "1px solid #2AD062"
                        : "1px solid #EAECF0"
                    }
                  >
                    <Box
                      p="2px"
                      borderRadius="38px"
                      bg={BVNAndNINFilled ? "#2AD062" : "#667085"}
                    >
                      <img
                        src={getImageUrl("icons/whiteCheck.png")}
                        style={{ width: "12px", height: "12px" }}
                      />
                    </Box>
                  </Box>
                  <Text fontSize="16px" fontWeight={600} color="#0C111D">
                    BVN and NIN
                  </Text>
                </HStack>

                <Box
                  h="14px"
                  w="1px"
                  ml="16px"
                  border="1px dashed #A0A3BD"
                ></Box>

                <HStack spacing="12px" w="fit-content">
                  <Box
                    p="8px"
                    borderRadius="38px"
                    border={
                      IDCardFilled ? "1px solid #2AD062" : "1px solid #EAECF0"
                    }
                  >
                    <Box
                      p="2px"
                      borderRadius="38px"
                      bg={IDCardFilled ? "#2AD062" : "#667085"}
                    >
                      <img
                        src={getImageUrl("icons/whiteCheck.png")}
                        style={{ width: "12px", height: "12px" }}
                      />
                    </Box>
                  </Box>
                  <Text fontSize="16px" fontWeight={600} color="#0C111D">
                    Government Issued ID card
                  </Text>
                </HStack>

                <Box
                  h="14px"
                  w="1px"
                  ml="16px"
                  border="1px dashed #A0A3BD"
                ></Box>

                <HStack spacing="12px" w="fit-content">
                  <Box
                    p="8px"
                    borderRadius="38px"
                    border={
                      signatureFilled
                        ? "1px solid #2AD062"
                        : "1px solid #EAECF0"
                    }
                  >
                    <Box
                      p="2px"
                      borderRadius="38px"
                      bg={signatureFilled ? "#2AD062" : "#667085"}
                    >
                      <img
                        src={getImageUrl("icons/whiteCheck.png")}
                        style={{ width: "12px", height: "12px" }}
                      />
                    </Box>
                  </Box>
                  <Text fontSize="16px" fontWeight={600} color="#0C111D">
                    Signature
                  </Text>
                </HStack>

                <Box
                  h="14px"
                  w="1px"
                  ml="16px"
                  border="1px dashed #A0A3BD"
                ></Box>

                <HStack spacing="12px" w="fit-content">
                  <Box
                    p="8px"
                    borderRadius="38px"
                    border={
                      addressFilled ? "1px solid #2AD062" : "1px solid #EAECF0"
                    }
                  >
                    <Box
                      p="2px"
                      borderRadius="38px"
                      bg={addressFilled ? "#2AD062" : "#667085"}
                    >
                      <img
                        src={getImageUrl("icons/whiteCheck.png")}
                        style={{ width: "12px", height: "12px" }}
                      />
                    </Box>
                  </Box>
                  <Text fontSize="16px" fontWeight={600} color="#0C111D">
                    Proof of Address
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
                onClick={moveToBVN}
              >
                Proceed
              </Button>
            </Stack>
          </Box>
        )}

        {step === 2 && (
          <Box>
            <HStack
              bg="#EAECF0"
              px="26px"
              py="14px"
              borderRadius="12px 12px 0 0"
            >
              <Button
                onClick={moveToUpgrade}
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
                BVN and NIN
              </Text>
            </HStack>
            <Stack
              spacing="16px"
              alignItems="center"
              border="1px solid #EFECE9"
              bg="#FFFFFF"
              borderRadius="0 0 12px 12px"
              px="36px"
              pb="114px"
              pt="48px"
            >
              <Text fontSize="16px" color="#667085" mb="12px">
                Please provide your BVN and NIN
              </Text>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  BVN
                </FormLabel>
                <InputGroup>
                  <Input
                    h={"48px"}
                    type="text"
                    border={"1px solid #EAECF0"}
                    bg={"#F7F7F7"}
                    value={"22225865945"}
                    disabled
                    _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
                  />
                  <InputRightElement h="100%" mr="12px">
                    <img src={getImageUrl("icons/greenCheck.png")} style={{}} />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  NIN
                </FormLabel>
                <Input
                  h="48px"
                  type="number"
                  pattern="\d"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  fontSize="16px"
                  color="#101828"
                  _placeholder={{ color: "#667085" }}
                  onInput={(e) =>
                    (e.target.value = e.target.value.slice(0, 11))
                  }
                />
              </FormControl>

              <Button
                onClick={moveToDocumentUpload}
                mt="24px"
                bg="#A41857"
                _hover={{ bg: "#90164D" }}
                fontSize="14px"
                fontWeight={600}
                color="#FFFFFF"
                w="80%"
                h="48px"
              >
                Save and Continue
              </Button>
            </Stack>
          </Box>
        )}

        {step === 3 && (
          <Box>
            <HStack
              bg="#EAECF0"
              px="26px"
              py="14px"
              borderRadius="12px 12px 0 0"
            >
              <Button
                onClick={moveToUpgrade}
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
                Government Issued ID Card
              </Text>
            </HStack>

            <Stack
              spacing="16px"
              alignItems="center"
              border="1px solid #EFECE9"
              bg="#FFFFFF"
              borderRadius="0 0 12px 12px"
              px="36px"
              pb="114px"
              pt="48px"
            >
              <Text
                w="75%"
                textAlign="center"
                fontSize="16px"
                color="#667085"
                mb="12px"
              >
                Upload a clear picture of your government issued ID card (
                driver’s license, International Passport, Voter’s ID, National
                ID)
              </Text>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  I.D. Type
                </FormLabel>
                <Select
                  h="48px"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  fontSize="16px"
                  color="#101828"
                  _placeholder={{ color: "#667085" }}
                >
                  <option>Voter&apos;s ID Card</option>
                  <option>NIN</option>
                </Select>
              </FormControl>

              <Text
                w="80%"
                cursor="pointer"
                onClick={onOpenSample}
                fontSize="16px"
                fontWeight={500}
                color="#A41857"
                textAlign="left"
              >
                See sample of document
              </Text>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  I.D. Card Number
                </FormLabel>
                <Input
                  h="48px"
                  type="number"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  fontSize="16px"
                  color="#101828"
                  _placeholder={{ color: "#667085" }}
                  autoComplete="false"
                />
              </FormControl>

              <HStack w="80%">
                <FormControl>
                  <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                    Upload Front
                  </FormLabel>
                  <Stack
                    p="30px"
                    h="150px"
                    justifyContent="center"
                    alignItems="center"
                    bg="#F7F7F7"
                    border="1px solid #EAECF0"
                    fontSize="16px"
                    color="#101828"
                    borderRadius="8px"
                    _placeholder={{ color: "#667085" }}
                  >
                    <label className={styles.uploadButton}>
                      <input
                        id="front-upload"
                        type="file"
                        accept="image/png, image/jpeg, application/pdf, image/x-eps"
                      />
                      <img
                        src={getImageUrl("icons/greyPic.png")}
                        style={{ width: "22px", height: "22px" }}
                      />
                      Tap to Upload
                    </label>
                    <Text fontSize="14px" fontWeight={500} color="#101828">
                      Choose a file or drag & drop it here.
                    </Text>
                    <Text
                      fontSize="12px"
                      fontWeight={400}
                      color="#667085"
                      mt="-8px"
                    >
                      PDF, PNG and JPG formats, up to 5 MB.
                    </Text>
                  </Stack>
                </FormControl>
                <FormControl>
                  <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                    Upload Back
                  </FormLabel>
                  <Stack
                    p="30px"
                    h="150px"
                    justifyContent="center"
                    alignItems="center"
                    bg="#F7F7F7"
                    border="1px solid #EAECF0"
                    fontSize="16px"
                    color="#101828"
                    borderRadius="8px"
                    _placeholder={{ color: "#667085" }}
                  >
                    <label className={styles.uploadButton}>
                      <input
                        id="front-upload"
                        type="file"
                        accept="image/png, image/jpeg, application/pdf, image/x-eps"
                      />
                      <img
                        src={getImageUrl("icons/greyPic.png")}
                        style={{ width: "22px", height: "22px" }}
                      />
                      Tap to Upload
                    </label>
                    <Text fontSize="14px" fontWeight={500} color="#101828">
                      Choose a file or drag & drop it here.
                    </Text>
                    <Text
                      fontSize="12px"
                      fontWeight={400}
                      color="#667085"
                      mt="-8px"
                    >
                      PDF, PNG and JPG formats, up to 5 MB.
                    </Text>
                  </Stack>
                </FormControl>
              </HStack>

              <Button
                onClick={moveToSignature}
                mt="24px"
                bg="#A41857"
                _hover={{ bg: "#90164D" }}
                fontSize="14px"
                fontWeight={500}
                color="#FFFFFF"
                w="80%"
                h="48px"
              >
                Save and Continue
              </Button>
            </Stack>
          </Box>
        )}

        {step === 4 && (
          <Box>
            <HStack
              bg="#EAECF0"
              px="26px"
              py="14px"
              borderRadius="12px 12px 0 0"
            >
              <Button
                onClick={moveToUpgrade}
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
                Upload Signature
              </Text>
            </HStack>

            <Stack
              spacing="16px"
              alignItems="center"
              border="1px solid #EFECE9"
              bg="#FFFFFF"
              borderRadius="0 0 12px 12px"
              px="36px"
              pb="114px"
              pt="48px"
            >
              <Text fontSize="16px" color="#667085" mb="12px">
                Upload a clear picture of your signature on a plain piece of
                paper
              </Text>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  Upload Signature
                </FormLabel>
                <Stack
                  p="18px"
                  h="170px"
                  justifyContent="center"
                  alignItems="center"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  fontSize="16px"
                  color="#101828"
                  borderRadius="8px"
                  _placeholder={{ color: "#667085" }}
                >
                  <label className={styles.uploadButton}>
                    <input
                      id="front-upload"
                      type="file"
                      accept="image/png, image/jpeg, application/pdf, image/x-eps"
                    />
                    <img
                      src={getImageUrl("icons/greyPic.png")}
                      style={{ width: "22px", height: "22px" }}
                    />
                    Tap to Upload
                  </label>
                  <Text fontSize="14px" fontWeight={500} color="#101828">
                    Choose a file or drag & drop it here.
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight={400}
                    color="#667085"
                    mt="-8px"
                  >
                    PDF, PNG and JPG formats, up to 5 MB.
                  </Text>
                </Stack>
              </FormControl>

              <HStack
                border="1px solid #E0E0E0"
                px="22px"
                py="12px"
                borderRadius="6px"
                w="80%"
                justifyContent="start"
              >
                <Text fontSize="16px" fontWeight={900} color="#667085">
                  Tips:
                </Text>
                <Text fontSize="16px" color="#667085">
                  Take in good lighting and make sure your image takes up 75% of
                  the surface
                </Text>
              </HStack>

              <Button
                onClick={moveToAddressProof}
                mt="24px"
                bg="#A41857"
                _hover={{ bg: "#90164D" }}
                fontSize="14px"
                fontWeight={500}
                color="#FFFFFF"
                w="80%"
                h="48px"
              >
                Save and Continue
              </Button>
            </Stack>
          </Box>
        )}

        {step === 5 && (
          <Box>
            <HStack
              bg="#EAECF0"
              px="26px"
              py="14px"
              borderRadius="12px 12px 0 0"
            >
              <Button
                onClick={moveToUpgrade}
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
                Proof of Address
              </Text>
            </HStack>

            <Stack
              spacing="16px"
              alignItems="center"
              border="1px solid #EFECE9"
              bg="#FFFFFF"
              borderRadius="0 0 12px 12px"
              px="36px"
              pb="114px"
              pt="48px"
            >
              <Text
                fontSize="16px"
                color="#667085"
                mb="12px"
                w="70%"
                textAlign="center"
              >
                Upload a recent utility bill (electricity, telephone, waste),
                bank statement, tenancy agreement. Not more than 3 months old
              </Text>

              <FormControl w="80%">
                <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                  Upload Utility Bill
                </FormLabel>
                <Stack
                  p="18px"
                  h="170px"
                  justifyContent="center"
                  alignItems="center"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  fontSize="16px"
                  color="#101828"
                  borderRadius="8px"
                  _placeholder={{ color: "#667085" }}
                >
                  <label className={styles.uploadButton}>
                    <input
                      id="front-upload"
                      type="file"
                      accept="image/png, image/jpeg, application/pdf, image/x-eps"
                    />
                    <img
                      src={getImageUrl("icons/greyPic.png")}
                      style={{ width: "22px", height: "22px" }}
                    />
                    Tap to Upload
                  </label>
                  <Text fontSize="14px" fontWeight={500} color="#101828">
                    Choose a file or drag & drop it here.
                  </Text>
                  <Text
                    fontSize="12px"
                    fontWeight={400}
                    color="#667085"
                    mt="-8px"
                  >
                    PDF, PNG and JPG formats, up to 5 MB.
                  </Text>
                </Stack>
              </FormControl>

              <HStack
                border="1px solid #E0E0E0"
                px="22px"
                py="12px"
                borderRadius="6px"
                w="80%"
                justifyContent="start"
              >
                <Text fontSize="16px" fontWeight={900} color="#667085">
                  Tips:
                </Text>
                <Text fontSize="16px" color="#667085">
                  Take in good lighting and make sure your image takes up 75% of
                  the surface
                </Text>
              </HStack>

              <Button
                onClick={moveToSuccess}
                mt="24px"
                bg="#A41857"
                _hover={{ bg: "#90164D" }}
                fontSize="14px"
                fontWeight={500}
                color="#FFFFFF"
                w="80%"
                h="48px"
              >
                Save and Continue
              </Button>
            </Stack>
          </Box>
        )}

        {step === 6 && (
          <CardContainer
            title={"Account Upgrade Complete"}
            moveToOne={moveToUpgrade}
          >
            <Stack spacing={1} w="75%" alignItems="center">
              <img
                src={getImageUrl("icons/success.png")}
                style={{ height: "84px", width: "auto" }}
              />
              <Text fontSize="18px" fontWeight={700} color="#000000">
                Success!
              </Text>
              <Text
                fontSize="14px"
                fontWeight={450}
                color="#667085"
                w="55%"
                textAlign="center"
              >
                Your documents are being reviewed, a notification will be sent
                once review is complete.
              </Text>

              <Button
                h="48px"
                my={8}
                w="80%"
                color={"white"}
                bg={"#A41856"}
                _hover={{ bg: "#90164D" }}
                onClick={() => navigate("/overview")}
              >
                Proceed to dashboard
              </Button>
            </Stack>
          </CardContainer>
        )}

        <Modal
          isCentered
          size={"lg"}
          closeOnOverlayClick={false}
          isOpen={isOpenSample}
          onClose={onCloseSample}
        >
          <ModalOverlay />
          <ModalContent bg="transparent" boxShadow="none">
            <ModalHeader>
              <Text
                textAlign="center"
                fontSize="14px"
                fontWeight={600}
                color="#FFFFFF"
              >
                Here&apos;s a sample document
              </Text>
            </ModalHeader>
            <ModalCloseButton color="#FFFFFF" />

            <ModalBody alignItems="center">
              <img
                src={getImageUrl("samplePassport.png")}
                style={{ width: "100%", height: "auto" }}
              />
            </ModalBody>
            <ModalFooter justifyContent="center">
              <Text fontSize="14px" fontWeight={600} color="#FFFFFF">
                We won&apos;t share your information with anyone
              </Text>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </div>
  );
};
