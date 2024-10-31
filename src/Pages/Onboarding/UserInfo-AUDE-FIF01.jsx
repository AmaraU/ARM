import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Stack,
  HStack,
  Text,
  Select,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Spinner,
  CircularProgress,
  CircularProgressLabel,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDetails } from "../../store/auth/auth.slice";

export const UserInfo = () => {
  const {
    isOpen: isOpenVerifying,
    onOpen: onOpenVerifying,
    onClose: onCloseVerifying,
  } = useDisclosure();
  const {
    isOpen: isOpenAlternate,
    onOpen: onOpenAlternate,
    onClose: onCloseAlternate,
  } = useDisclosure();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [othername, setOthername] = useState("");
  const [surname, setLastname] = useState("");
  const [gender, setGender] = useState("Male");
  const [title, setTitle] = useState("Mr");
  const [address, setAddress] = useState("");
  const dispatch = useDispatch();
  const { phoneNumber } = useSelector((state) => state.auth);

  const openVerifying = async () => {
    await dispatch(
      setDetails({
        title,
        gender,
        firstname,
        othername,
        surname,
        address,
      })
    );
    onOpenVerifying();
    setTimeout(() => onCloseVerifying(), 5000);
    setTimeout(() => navigate("/create-profile"), 1000);
  };

  return (
    <>
      <Stack
        alignItems={"center"}
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
        <Flex justifyContent={"space-between"} w={"100%"}>
          <a href="/confirm-picture">
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </a>

          <CircularProgress value={60} size={"32px"} color={"#A41857"}>
            <CircularProgressLabel fontWeight={700} fontSize={"9px"}>
              60%
            </CircularProgressLabel>
          </CircularProgress>
        </Flex>
        <Text fontSize={"48px"} fontWeight={700} color={"#14142A"}>
          Your basic information
        </Text>
        <Text fontSize={"18px"} fontWeight={400} color={"#667085"}>
          Review and update your details
        </Text>

        <Stack spacing={"16px"} w={"100%"}>
          <FormControl isRequired>
            <FormLabel
              fontSize={"16px"}
              fontWeight={400}
              color={"#101828"}
              mb={"16px"}
            >
              Title
            </FormLabel>
            <Select
              onChange={(e) => setTitle(e.target.value)}
              h={"48px"}
              flex={"35%"}
              border={"1px solid #EAECF0"}
              bg={"#F7F7F7"}
              fontSize={"16px"}
            >
              <option value="">Mr</option>
              <option value="">Dr</option>
              <option value="">Miss</option>
              <option value="">Mrs</option>
            </Select>
          </FormControl>
          <HStack>
            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                First Name
              </FormLabel>
              <Input
                h={"48px"}
                type="text"
                border={"1px solid #EAECF0"}
                bg={"#EAECF0"}
                value={'Adeola'}
                readOnly
                disabled
                _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Last Name
              </FormLabel>
              <Input
                h={"48px"}
                type="text"
                border={"1px solid #EAECF0"}
                bg={"#EAECF0"}
                value={'Oyedipo'}
                readOnly
                disabled
                _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
              />
            </FormControl>
          </HStack>

          <HStack>
            <FormControl>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Email Address
              </FormLabel>
              <Input
                h={"48px"}
                type="text"
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                // value={email ? email : altEmail}
                value={'aoyewole@gmail.com'}
                disabled
                _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
              />
            </FormControl>

            <FormControl>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Phone Number
              </FormLabel>
              <HStack spacing={2}>
                <Select
                  h={"48px"}
                  flex={"35%"}
                  border={"1px solid #EAECF0"}
                  bg={"#F7F7F7"}
                  fontSize={"16px"}
                  disabled
                  _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
                >
                  <option value="">+234 (NG)</option>
                </Select>
                <Input
                  readOnly
                  value={'987654321'}
                  h={"48px"}
                  type="tel"
                  border={"1px solid #EAECF0"}
                  bg={"#F7F7F7"}
                  disabled
                  _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
                />
              </HStack>
            </FormControl>
          </HStack>

          <HStack spacing={1}>
            <img
              src={getImageUrl("icons/warning.png")}
              style={{ width: "20px", height: "20px" }}
            />
            <Text fontSize="11.5px" fontWeight={450} color="#667085">
              Don&apos;t have access to email?
            </Text>
            <Text
              fontSize="11.5px"
              fontWeight={700}
              color="#A41857"
              cursor="pointer"
              onClick={onOpenAlternate}
            >
              Provide Altenate Email
            </Text>
          </HStack>

          <HStack spacing="13px">
            <Text
              w="fit-content"
              fontSize="12px"
              fontWeight={400}
              color="#667085"
              whiteSpace="nowrap"
            >
              PROVIDE ADDITIONAL DETAILS
            </Text>
            <div style={{ width: "100%", border: "0.5px solid #E6E2DD" }}></div>
          </HStack>

          <HStack>
            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Occupation
              </FormLabel>
              <Select
                h={"48px"}
                flex={"35%"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                fontSize={"16px"}
                onChange={(e) => setOccupation(e.target.value)}
              >
                <option value="Banking">Banking</option>
                <option value="Tech.">Tech.</option>
                <option value="Media & Entertainment">
                  Media & Entertainment
                </option>
                <option value="Engineering">Engineering</option>
                <option value="Consultant">Consultant</option>
              </Select>
            </FormControl>
            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Source of fund
              </FormLabel>
              <Select
                h={"48px"}
                flex={"35%"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                fontSize={"16px"}
                onChange={(e) => setSourceOfFund(parseFloat(e.target.value))}
              >
                {/* {sourceOfFunds.map((option, i) => (
                  <option value={option.id} key={i}>
                    {option.name}
                  </option>
                ))} */}
              </Select>
            </FormControl>
          </HStack>

          <FormControl isRequired>
            <FormLabel
              fontSize={"16px"}
              fontWeight={400}
              color={"#101828"}
              mb={"8px"}
            >
              Nationality
            </FormLabel>
            <Select
              h={"48px"}
              flex={"35%"}
              border={"1px solid #EAECF0"}
              bg={"#F7F7F7"}
              fontSize={"16px"}
              onChange={(e) => setCountryOfBirth(parseFloat(e.target.value))}
            >
              <option value={153} defaultValue={"Nigerian"}>
                Nigerian
              </option>
              {/* {nationalities.map((country, i) => (
                <option value={country.id} key={i}>
                  {country.name}
                </option>
              ))} */}
            </Select>
          </FormControl>
        </Stack>

        <Button
          onClick={openVerifying}
          mt={"56px"}
          bg={"#A41857"}
          _hover={{ bg: "#A41857" }}
          fontSize={"18px"}
          fontWeight={600}
          color={"#FFFFFF"}
          w={"100%"}
          h={"48px"}
          // isDisabled={!firstname || !surname || !othername || !address}
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

      <Modal
        isCentered
        size="md"
        closeOnOverlayClick={false}
        isOpen={isOpenAlternate}
        onClose={onCloseAlternate}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#394455"
            >
              Provide Alternate Email
            </Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody py="12px">
            <FormControl>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Email Address
              </FormLabel>
              <Input
                h={"48px"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                fontSize={"16px"}
                onChange={(e) => setAltEmail(e.target.value)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter pt={0}>
            <Button
              bg={"#A41857"}
              _hover={{ bg: "#90164D" }}
              fontSize={"18px"}
              fontWeight={600}
              color={"#FFFFFF"}
              w={"100%"}
              h={"48px"}
              onClick={onCloseAlternate}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
