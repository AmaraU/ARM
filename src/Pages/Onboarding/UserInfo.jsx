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
                onChange={(e) => setFirstname(e.target.value)}
                h={"48px"}
                type="text"
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Other Name
              </FormLabel>
              <Input
                onChange={(e) => setOthername(e.target.value)}
                h={"48px"}
                type="text"
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
              />
            </FormControl>
          </HStack>

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
              onChange={(e) => setLastname(e.target.value)}
              h={"48px"}
              type="text"
              border={"1px solid #EAECF0"}
              bg={"#F7F7F7"}
            />
          </FormControl>

          <FormControl isRequired>
            <FormLabel
              fontSize={"16px"}
              fontWeight={400}
              color={"#101828"}
              mb={"8px"}
            >
              Address
            </FormLabel>
            <Input
              onChange={(e) => setAddress(e.target.value)}
              h={"48px"}
              type="text"
              border={"1px solid #EAECF0"}
              bg={"#F7F7F7"}
            />
          </FormControl>

          <FormControl isRequired>
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
              >
                <option value="">+234 (NG)</option>
              </Select>
              <Input
                readOnly
                value={phoneNumber}
                h={"48px"}
                type="tel"
                placeholder="Enter your phone number"
                _placeholder={{ fontSize: "sm" }}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
              />
            </HStack>
          </FormControl>
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
              >
                <option value="">Banking</option>
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
              >
                <option value="">Employeed</option>
              </Select>
            </FormControl>
          </HStack>
          <HStack>
            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Gender
              </FormLabel>
              <Select
                onChange={(e) => setGender(e.target.value)}
                h={"48px"}
                flex={"35%"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                fontSize={"16px"}
              >
                <option value="">Male</option>
                <option value="">Female</option>
              </Select>
            </FormControl>

            <FormControl isRequired>
              <FormLabel
                fontSize={"16px"}
                fontWeight={400}
                color={"#101828"}
                mb={"8px"}
              >
                Country of birth
              </FormLabel>
              <Select
                h={"48px"}
                flex={"35%"}
                border={"1px solid #EAECF0"}
                bg={"#F7F7F7"}
                fontSize={"16px"}
              >
                <option value="">Nigeria</option>
              </Select>
            </FormControl>
          </HStack>
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
          isDisabled={!firstname || !surname || !othername || !address}
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
