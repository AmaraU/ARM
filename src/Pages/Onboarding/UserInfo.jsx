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
  const {
    firstname: userFirstName,
    othername: userOtherName,
    surname: userLastName,
    phoneNumber,
  } = useSelector((state) => state.auth);
  const [firstname, setFirstname] = useState(userFirstName);
  const [othername, setOthername] = useState(userOtherName);
  const [surname, setLastname] = useState(userLastName)
  const [title, setTitle] = useState("Mr");
  const dispatch = useDispatch();

  const openVerifying = async () => {
    await dispatch(
      setDetails({
        title,
        firstname,
        othername,
        surname,
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
          Review and confirm your details
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
              <option value="">Miss</option>
              <option value="">Mrs</option>
              <option value="">Mr</option>
              <option value="">Dr</option>
            </Select>
          </FormControl>
          <HStack>
            <FormControl>
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
                bg={"#EAECF0"}
                value={firstname}
                readOnly
                disabled
                _disabled={{bg: '#EAECF0', color: '#8D9DA8'}}
              />
            </FormControl>

            <FormControl>
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
                bg={"#EAECF0"}
                value={surname}
                readOnly
                disabled
                _disabled={{bg: '#EAECF0', color: '#8D9DA8'}}
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
                placeholder="Adeola.obasanjo@gmail.com"
                disabled
                _disabled={{bg: '#EAECF0', color: '#8D9DA8'}}
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
                  _disabled={{bg: '#EAECF0', color: '#8D9DA8'}}
                >
                  <option value="">+234 (NG)</option>
                </Select>
                <Input
                  readOnly
                  value={phoneNumber}
                  h={"48px"}
                  type="tel"
                  border={"1px solid #EAECF0"}
                  bg={"#F7F7F7"}
                  disabled
                  _disabled={{bg: '#EAECF0', color: '#8D9DA8'}}
                />
              </HStack>
            </FormControl>
          </HStack>

          <HStack spacing={1}>
            <img src={getImageUrl('icons/warning.png')} style={{width: '20px', height: '20px'}} />
            <Text fontSize='11.5px' fontWeight={450} color='#667085'>Don't have access to email?</Text>
            <Text fontSize='11.5px' fontWeight={700} color='#A41857' cursor='pointer' onClick={onOpenAlternate}>Provide Altenate Email</Text>
          </HStack>


          <HStack spacing='13px'>
            <Text w='fit-content' fontSize='12px' fontWeight={400} color='#667085' whiteSpace='nowrap'>PROVIDE ADDITIONAL DETAILS</Text>
            <div style={{ width: '100%', border: '0.5px solid #E6E2DD'}}></div>
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
              >
                <option value="">Banking</option>
                <option value="">Tech.</option>
                <option value="">Media & Entertainment</option>
                <option value="">Engineering</option>
                <option value="">Consultant</option>
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
                <option value="">Employed</option>
                <option value="">Self-Employed</option>
                <option value="">Entrepreneur</option>
                <option value="">Business Owner</option>
                <option value="">Freelancer</option>
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
        </Stack>

        <Button
          onClick={openVerifying}
          mt={"56px"}
          bg={"#A41857"}
          _hover={{ bg: "#90164D" }}
          fontSize={"18px"}
          fontWeight={600}
          color={"#FFFFFF"}
          w={"100%"}
          h={"48px"}
          isDisabled={!firstname || !surname || !othername}
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
        size='md'
        closeOnOverlayClick={false}
        isOpen={isOpenAlternate}
        onClose={onCloseAlternate}
      >
        <ModalOverlay />

        <ModalContent>
          <ModalHeader>
            <Text textAlign='center' fontSize='18px' fontWeight={600} color='#394455'>Provide Alternate Email</Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody py='12px'>
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
