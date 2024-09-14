import { useState, useRef, useEffect } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Select,
  Divider,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./AirtimeBills.module.css";
import { CompleteTransaction } from "../../Components/CompleteTrans";
import { TbCurrencyNaira } from "react-icons/tb";
import { BiShow, BiHide } from "react-icons/bi";

export const BillsPayment = () => {
  const [actionsOpen, setActionsOpen] = useState({});
  const [showOptions, setShowOptions] = useState(true);
  const [showOne, setShowOne] = useState(false);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);
  const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();
  const popupRef = useRef(null);

  const savedBills = [
    // {
    //     name: "DSTv Compact",
    //     number: "00236781932",
    //     amount: "19,000"
    // },
    // {
    //     name: "Ikeja Electric",
    //     number: "00236781932",
    //     amount: "3,000"
    // },
    // {
    //     name: "Ikeja Electric",
    //     number: "00236781932",
    //     amount: "5,000"
    // },
    // {
    //     name: "DSTv Compact",
    //     number: "00236781932",
    //     amount: "19,000"
    // }
  ];

  const toggleAction = (index) => {
    setActionsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setActionsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const hideBalance = () => {
    return "****************";
  };

  const handleToggleVisibility = () => {
    setTotalBalanceVisible(!totalBalanceVisible);
  };

  const moveToOptions = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(false);
    setShowOptions(true);
    window.scrollTo({ top: 0 });
  };
  const moveToOne = () => {
    setShowOne(true);
    setShowTwo(false);
    setShowThree(false);
    setShowOptions(false);
    window.scrollTo({ top: 0 });
  };
  const moveToTwo = () => {
    setShowOne(false);
    setShowTwo(true);
    setShowThree(false);
    setShowOptions(false);
    window.scrollTo({ top: 0 });
  };
  const moveToThree = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(true);
    setShowOptions(false);
    onCloseConfirm();
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {showOptions && (
        <Box>
          {savedBills.length === 0 ? (
            <Box>
              <HStack
                bg={"#EAECF0"}
                px={"26px"}
                py={"14px"}
                borderRadius={"12px 12px 0 0"}
              >
                <Button
                  h={"24px"}
                  bg={"#EAECF0"}
                  p={0}
                  _hover={{ bg: "#EAECF0" }}
                >
                  <img
                    src={getImageUrl("icons/blackLeftArrow.png")}
                    alt="back"
                  />
                </Button>
                <Text
                  width={"90%"}
                  textAlign={"center"}
                  fontSize={"18px"}
                  fontWeight={600}
                  color={"#101828"}
                >
                  Pay Bills
                </Text>
              </HStack>
              <Stack
                spacing={"16px"}
                alignItems={"center"}
                border={"1px solid #EFECE9"}
                bg={"#FFFFFF"}
                borderRadius={"0 0 12px 12px"}
                py={"16px"}
                pb={"114px"}
                pt={"48px"}
              >
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={getImageUrl("icons/bills.png")}
                />
                <Text
                  w={"50%"}
                  textAlign={"center"}
                  fontSize={"16px"}
                  color={"#667085"}
                >
                  You do not have any saved bills purchase
                </Text>
                <Button
                  mt={"16px"}
                  w={"50%"}
                  h={'48px'}
                  bg={"#A41856"}
                  _hover={{ bg: "#A41856" }}
                  color={"#FFFFFF"}
                  fontSize={"14px"}
                  fontWeight={600}
                  onClick={moveToOne}
                >
                  Pay Bills
                </Button>
              </Stack>
            </Box>
          ) : (
            <Box>
              <HStack
                bg={"#EAECF0"}
                px={"26px"}
                py={"14px"}
                borderRadius={"12px 12px 0 0"}
              >
                <Button
                  h={"24px"}
                  bg={"#EAECF0"}
                  p={0}
                  _hover={{ bg: "#EAECF0" }}
                >
                  <img
                    src={getImageUrl("icons/blackLeftArrow.png")}
                    alt="back"
                  />
                </Button>
                <Text
                  width={"90%"}
                  textAlign={"center"}
                  fontSize={"18px"}
                  fontWeight={600}
                  color={"#101828"}
                >
                  Pay Bills
                </Text>
              </HStack>
              <Stack
                spacing={"16px"}
                alignItems={"center"}
                border={"1px solid #EFECE9"}
                bg={"#FFFFFF"}
                borderRadius={"0 0 12px 12px"}
                py={"16px"}
                pb={"114px"}
                pt={"48px"}
              >
                <Stack
                  w={"60%"}
                  display={"grid"}
                  gridTemplateColumns={"repeat(2, auto)"}
                >
                  {savedBills.map((bil, index) => (
                    <HStack
                      border={"1px solid #EAECF0"}
                      borderRadius={"8px"}
                      w={"100%"}
                      py={"20px"}
                      px={"10px"}
                      spacing={"16px"}
                      key={index}
                    >
                      <Box>
                        <img
                          style={{ width: "32px", height: "32px" }}
                          src={getImageUrl("icons/bills.png")}
                        />
                      </Box>
                      <Box w={"90%"}>
                        <HStack
                          w={"100%"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Text
                            fontSize={"16px"}
                            fontWeight={"450"}
                            color={"#101828"}
                          >
                            {bil.name}
                          </Text>
                          <Text
                            fontSize={"16px"}
                            fontWeight={"450"}
                            color={"#101828"}
                          >
                            N{bil.amount}
                          </Text>
                        </HStack>
                        <HStack
                          w={"100%"}
                          justifyContent={"space-between"}
                          alignItems={"center"}
                        >
                          <Text
                            fontSize={"16px"}
                            fontWeight={"450"}
                            color={"#101828"}
                          >
                            {bil.number}
                          </Text>
                          <div>
                            <button onClick={() => toggleAction(index)}>
                              <img
                                style={{ height: "24px", width: "24px" }}
                                src={getImageUrl("icons/actions.png")}
                              />
                            </button>
                            <Box
                              className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions
                                }`}
                              ref={popupRef}
                            >
                              <button style={{ alignSelf: "end" }}>
                                <img
                                  style={{ width: "14px", height: "14px" }}
                                  src={getImageUrl("icons/blackX.png")}
                                />
                              </button>
                              <HStack
                                cursor={"pointer"}
                                _hover={{ bg: "#EAECF0" }}
                                p={"8px"}
                              >
                                <img
                                  src={getImageUrl("icons/bills.png")}
                                />
                                <Text
                                  fontSize={"14px"}
                                  fontWeight={500}
                                  color={"#667085"}
                                >
                                  Pay Bill
                                </Text>
                              </HStack>
                              <HStack
                                cursor={"pointer"}
                                _hover={{ bg: "#EAECF0" }}
                                p={"8px"}
                              >
                                <img src={getImageUrl("icons/redDelete.png")} />
                                <Text
                                  fontSize={"14px"}
                                  fontWeight={500}
                                  color={"#667085"}
                                >
                                  Delete
                                </Text>
                              </HStack>
                            </Box>
                          </div>
                        </HStack>
                      </Box>
                    </HStack>
                  ))}
                </Stack>
              </Stack>
            </Box>
          )}
        </Box>
      )}

      {showOne && (
        <Box>
          <HStack
            bg={"#EAECF0"}
            justifyContent={"space-between"}
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              h={"24px"}
              bg={"#EAECF0"}
              p={0}
              _hover={{ bg: "#EAECF0" }}
              onClick={moveToOptions}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              Pay Bills
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              1/3
            </Text>
          </HStack>
          <Stack
            spacing={"20px"}
            alignItems={"center"}
            border={"1px solid #EFECE9"}
            bg={"#FFFFFF"}
            borderRadius={"0 0 12px 12px"}
            py={"16px"}
            pb={"114px"}
          >
            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Bill Type
              </FormLabel>
              <Select
                h={'48px'}
                bg={"#F7F7F7"}
                border={"1px solid #EAECF0"}
                placeholder="Select bill type"
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              ></Select>
            </FormControl>

            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Bill Provider
              </FormLabel>
              <Select
                bg={"#F7F7F7"}
                h={'48px'}
                border={"1px solid #EAECF0"}
                placeholder="Select bill provider"
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              ></Select>
            </FormControl>

            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Package
              </FormLabel>
              <Select
                bg={"#F7F7F7"}
                h={'48px'}
                border={"1px solid #EAECF0"}
                placeholder="Select package"
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              ></Select>
            </FormControl>

            <Button
              onClick={moveToTwo}
              mt={"16px"}
              w={"75%"}
              h={'48px'}
              bg={"#A41856"}
              color={"#FFFFFF"}
              fontSize={"14px"}
              fontWeight={600}
              _hover={{ bg: "#A41856" }}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      )}

      {showTwo && (
        <Box>
          <HStack
            bg={"#EAECF0"}
            justifyContent={"space-between"}
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              h={"24px"}
              bg={"#EAECF0"}
              p={0}
              _hover={{ bg: "#EAECF0" }}
              onClick={moveToOne}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              Review Payment
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              2/3
            </Text>
          </HStack>
          <Stack
            gap={"16px"}
            alignItems={"center"}
            border={"1px solid #EFECE9"}
            bg={"#FFFFFF"}
            borderRadius={"0 0 12px 12px"}
            py={"16px"}
            pb={"114px"}
          >
            <HStack
              w={"75%"}
              backgroundColor={"#000000"}
              backgroundImage={getImageUrl("backgroundGrey.png")}
              bgSize={"100% 100%"}
              borderRadius={"12px"}
              p={"14px"}
              pt={"24px"}
              justifyContent={"space-between"}
            >
              <Box>
                <Text fontSize={"14px"} fontWeight={400} color={"#FFFFFF"}>
                  Total Available Balance
                </Text>
                <HStack ml={"-1px"} spacing={0}>
                  <Box fontSize={"20px"} color={"#FFFFFF"}>
                    <TbCurrencyNaira />
                  </Box>
                  <Text fontSize={"18px"} fontWeight={600} color={"#FFFFFF"}>
                    {totalBalanceVisible ? `${1234568}` : hideBalance()}
                  </Text>
                  <Box pl={3} cursor={"pointer"}>
                    {totalBalanceVisible && (
                      <BiShow
                        fontSize={"lg"}
                        color={"#FFFFFF"}
                        onClick={handleToggleVisibility}
                      />
                    )}
                    {!totalBalanceVisible && (
                      <BiHide
                        fontSize={"lg"}
                        color={"#FFFFFF"}
                        onClick={handleToggleVisibility}
                      />
                    )}
                  </Box>
                </HStack>
              </Box>

              <Box
                alignSelf={"start"}
                borderRadius={"36px"}
                px={"12px"}
                py={"8px"}
                bg={"#2C323A"}
                color={"#FFFFFF"}
                fontSize={"10px"}
                fontWeight={500}
              >
                Tier 1 Savings Account
              </Box>
            </HStack>

            <Box
              w={"75%"}
              p={"12px"}
              bg={"#F7F7F7"}
              border={"1px solid #EAECF0"}
              borderRadius={"8px"}
            >
              <HStack>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={getImageUrl("icons/bills.png")}
                />
                <Stack gap={0} w="100%">
                  <Text fontSize="10px" fontWeight={500} color="#667085">
                    Bill Package
                  </Text>
                  <HStack display='flex' justifyContent="space-between">
                    <Text fontSize="14px" fontWeight={450} color="#101828">
                      DSTv Compact - 03458856544
                    </Text>
                    <Text fontSize="14px" fontWeight={600} color="#101828">
                      ₦19,000
                    </Text>
                  </HStack>
                </Stack>
              </HStack>

              <Divider h={"2px"} mt={"12px"} mb={"12px"} />

              <HStack>
                <img src={getImageUrl("icons/nav/profileGrey.png")} />
                <Stack gap={0}>
                  <Text fontSize={"10px"} fontWeight={500} color={"#667085"}>
                    CUSTOMER NAME
                  </Text>
                  <Text fontSize={"14px"} fontWeight={450} color={"#101828"}>
                    Adeola Obasanjo
                  </Text>
                </Stack>
              </HStack>
            </Box>

            <Button
              mt={"16px"}
              w={"75%"}
              h={'48px'}
              bg={"#A41856"}
              _hover={{ bg: "#A41856" }}
              color={"#FFFFFF"}
              fontSize={"14px"}
              fontWeight={600}
              onClick={onOpenConfirm}
            >
              Continue
            </Button>
          </Stack>
        </Box>
      )}

      {showThree && (
        <Box>
          <HStack
            bg={"#EAECF0"}
            justifyContent={"space-between"}
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button
              h={"24px"}
              bg={"#EAECF0"}
              p={0}
              _hover={{ bg: "#EAECF0" }}
              onClick={moveToTwo}
            >
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              Complete Purchase
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              3/3
            </Text>
          </HStack>

          <CompleteTransaction type='bills' />
        </Box>
      )}



      <Modal isCentered size='lg' closeOnOverlayClick={true} isOpen={isOpenConfirm} onClose={onCloseConfirm} >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Confirm Transaction Details</Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <div style={{ overflow: 'auto', maxHeight: '60vh' }}>

              <Stack w='100%' spacing='16px'>

                <HStack spacing='8px' alignItems='center'>
                  <img src={getImageUrl('icons/greyBank.png')} />
                  <Stack spacing={0}>
                    <Text fontSize='14px' fontWeight={450} color='#667085'>BILL PACKAGE</Text>
                    <Text fontSize='18px' fontWeight={500} color='#A41856'>DSTv Compact - 03458856544</Text>
                  </Stack>
                </HStack>

                <HStack spacing='8px' alignItems='center'>
                  <img src={getImageUrl('icons/nav/profileGrey.png')} />
                  <Stack spacing={0}>
                    <Text fontSize='14px' fontWeight={450} color='#667085'>CUSTOMER NAME</Text>
                    <Text fontSize='18px' fontWeight={500} color='#A41856'>Adeola Obasanjo</Text>
                  </Stack>
                </HStack>

                <HStack spacing='8px' alignItems='center'>
                  <img src={getImageUrl('icons/greyCash.png')} />
                  <Stack spacing={0}>
                    <Text fontSize='14px' fontWeight={450} color='#667085'>AMOUNT</Text>
                    <Text fontSize='18px' fontWeight={500} color='#A41856'>₦19,000</Text>
                  </Stack>
                </HStack>

                <HStack spacing='8px' alignItems='center'>
                  <img src={getImageUrl('icons/greyFees.png')} />
                  <Stack spacing={0}>
                    <Text fontSize='14px' fontWeight={450} color='#667085'>FEES</Text>
                    <Text fontSize='18px' fontWeight={500} color='#A41856'>₦10.25</Text>
                  </Stack>
                </HStack>
              </Stack>
            </div>
          </ModalBody>

          <ModalFooter pt={0}>
            <Button mt='16px' w='100%' h='48px' bg='#A41856' _hover={{ bg: '#A41856' }} color='#FFFFFF' fontSize='14px' fontWeight={600} onClick={moveToThree}>Continue</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
