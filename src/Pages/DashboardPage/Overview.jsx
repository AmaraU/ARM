import { useEffect, useState } from "react";
import {
  Stack,
  Grid,
  GridItem,
  Text,
  Box,
  Button,
  HStack,
  Flex,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useDisclosure,
  ModalFooter,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from "./Overview.module.css";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getAccountBalance,
  getDashboardSummary,
  getSetupStatus,
} from "../../store/auth/user.slice";
import { handleSuccess } from "../../utils/handleResponse";
import { getTransactionHistory } from "../../store/transactions.slice";
import NoTransaction from "../../elements/NoTransaction";

export const Overview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(false);
  const [infoPopup, setInfoPopup] = useState(false);
  const navigate = useNavigate();
  const { fullname } = useSelector((state) => state.user);
  const transactions = useSelector((state) => state.transactions.value);
  const accounts = useSelector((state) => state.user.accountBalance) || [];
  const { emailAddressVerification, secretQuestion, transactionPIN } =
    useSelector((state) => state.user.setupStatus) || {
      emailAddressVerification: true,
      secretQuestion: true,
      transactionPIN: true,
    };

  const dispatch = useDispatch();
  const {
    isOpen: isOpenSetup,
    onOpen: onOpenSetup,
    onClose: onCloseSetup
  } = useDisclosure();

  // useEffect(() => {
  //   if (!(transactionPIN && emailAddressVerification && secretQuestion)) {
  //     onOpenSetup();
  //   }
  // }, []);


  useEffect(() => {
    dispatch(getDashboardSummary());
    dispatch(getTransactionHistory());
    dispatch(getAccountBalance());
    dispatch(getSetupStatus());
  }, [dispatch]);

  const currentItem = accounts ? accounts[currentIndex] : [];

  function infoPop() {
    setInfoPopup(false);
  }

  const hideBalance = () => {
    return "****************";
  };

  const formatNumber = (number) => {
    return new Intl.NumberFormat("en-US").format(number);
  };
  const formatNumberDecimals = (number) => {
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(number);
  };

  const handleToggleVisibility = () => {
    setTotalBalanceVisible(!totalBalanceVisible);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
  };

  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + accounts.length) % accounts.length
    );
  };

  function copyToClipboard() {
    navigator.clipboard.writeText(accounts[0]?.accountnumber);
    handleSuccess("Account number copied to clipboard");
  }

  function handleToSetup() {
    // window.location.href = "/overview/account-setup";
    navigate("/overview/account-setup")
    window.scrollTo({ top: 0 });
  }

  return (
    <div className={styles.whole}>
      <Stack gap="20px" maxW="1500px">
        <Text fontSize="24px" fontWeight={700} color="#101828" mb="4px">
          Good Morning, {fullname && fullname}
        </Text>

        <Flex
          flexDirection="column"
          alignItems="center"
          justifyItems="center"
          backgroundColor="#000000"
          backgroundImage={getImageUrl("backgroundGrey.png")}
          bgSize="100% 100%"
          borderRadius="12px"
          px="11px"
          py="40px"
        >
          <HStack w="100%" justifyContent="space-between">
            {accounts.length > 1 && <Button
              onClick={handlePrevious}
              pointerEvents={currentIndex === 0 ? "none" : ""}
              p={0}
              borderRadius="75px"
              bg="#2C323A"
              _hover={{ bg: "#2C323A" }}
            >
              <img
                className={styles.arrow}
                src={getImageUrl("icons/whiteLeftAngle.png")}
              />
            </Button>}

            <HStack justifyContent="space-between" w="100%" px={accounts.length > 0 ? "8px" : "60px"}>
              <Box>
                <Text fontSize="18px" fontWeight={400} color="#FFFFFF">
                  Total Available Balance
                </Text>
                <HStack ml="-5px" spacing={1} alignItems="center" mb="12px">
                  <Box fontSize="36px" fontWeight={500} color="#FFFFFF">
                    ₦
                  </Box>
                  <Text fontSize="32px" fontWeight={700} color="#FFFFFF">
                    {totalBalanceVisible
                      ? formatNumberDecimals(
                          currentItem && currentItem.bookBalance
                        )
                      : hideBalance()}
                  </Text>
                  <Box
                    borderRadius="500px"
                    bg="#2F2F30"
                    ml="8px"
                    p="4px"
                    cursor="pointer"
                  >
                    {!totalBalanceVisible && (
                      <BiShow
                        fontSize="lg"
                        color="#667085"
                        onClick={handleToggleVisibility}
                      />
                    )}
                    {totalBalanceVisible && (
                      <BiHide
                        fontSize="lg"
                        color="#667085"
                        onClick={handleToggleVisibility}
                      />
                    )}
                  </Box>
                </HStack>

                <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
                  Account Number
                </Text>
                <HStack spacing={0} alignItems="center" mb="12px">
                  <Text fontSize="20px" fontWeight={700} color="#FFFFFF">
                    {currentItem && currentItem.accountnumber}
                  </Text>
                  <Box
                    borderRadius="500px"
                    bg="#2F2F30"
                    ml="8px"
                    p="5px"
                    cursor="pointer"
                    onClick={copyToClipboard}
                  >
                    <img
                      className={styles.copy}
                      src={getImageUrl("icons/copy.png")}
                    />
                  </Box>
                </HStack>
              </Box>

              <Box alignSelf="start">
                <Box
                  w="fit-content"
                  borderRadius="36px"
                  px="12px"
                  py="8px"
                  bg="#2C323A"
                  color="#FFFFFF"
                  fontSize="10px"
                  fontWeight={500}
                  cursor="pointer"
                  onClick={() => setInfoPopup(true)}
                >
                  Tier {currentItem && parseInt(currentItem.accountTier)} -{" "}
                  {currentItem && currentItem.acctProduct}
                </Box>
                {infoPopup && (
                  <Box className={styles.theBox}>
                    <div className={styles.header}>
                      <h3>{currentItem && currentItem.type}</h3>
                      <img
                        onClick={infoPop}
                        src={getImageUrl("icons/greyClose.png")}
                      />
                    </div>
                    <Divider />
                    <Box py="18px" px="24px">
                      <Box
                        className={styles.limitInfo}
                        bg="#F7F7F7"
                        borderRadius="4px"
                        border="1px solid #EAECF0"
                        p="9px"
                      >
                        <h4>TRANSACTION LIMIT</h4>
                        <div className={styles.info}>
                          <img src={getImageUrl("icons/orangeTick.png")} />
                          Maximum amount for to spend per transaction -{" "}
                          <span>N100,000</span>
                        </div>
                        <div className={styles.info}>
                          <img src={getImageUrl("icons/orangeTick.png")} />
                          Maximum amount for to receive per transaction -{" "}
                          <span>N50,000</span>
                        </div>
                        <div className={styles.info}>
                          <img src={getImageUrl("icons/orangeTick.png")} />
                          Total amount to spend per day - <span>N300,000</span>
                        </div>
                        <div className={styles.info}>
                          <img src={getImageUrl("icons/orangeTick.png")} />
                          Total amount to receive per day -{" "}
                          <span>N300,000</span>
                        </div>
                        <div className={styles.info}>
                          <img src={getImageUrl("icons/orangeTick.png")} />
                          Balance limit - <span>N300,000</span>
                        </div>
                      </Box>
                    </Box>
                  </Box>
                )}
              </Box>
            </HStack>

            {accounts.length > 1 && <Button
              onClick={handleNext}
              pointerEvents={currentIndex === accounts.length - 1 ? "none" : ""}
              p={0}
              borderRadius="75px"
              bg="#2C323A"
              _hover={{ bg: "#2C323A" }}
            >
              <img
                className={styles.arrow}
                src={getImageUrl("icons/whiteRightAngle.png")}
              />
            </Button>}
          </HStack>

          {accounts.length > 1 &&<Box
            w="fit-content"
            bg="#2C323A"
            borderRadius="12px"
            p="8px"
            mb="-12px"
            display="flex"
            gap="4px"
          >
            {accounts.map((_, idx) => (
              <Box
                key={idx}
                bg={idx === currentIndex ? "#A41857" : "#FFFFFF"}
                cursor="pointer"
                onClick={() => setCurrentIndex(idx)}
                borderRadius="500px"
                w="8px"
                h="8px"
              ></Box>
            ))}
          </Box>}
        </Flex>

        <Grid gridTemplateColumns={{ lg: "1fr 1fr", md: "auto" }} gap="24px">
          <GridItem colSpan={1} gap="24px">
            <Box>
              <Text fontSize="18px" fontWeight={600} color="#101828" mb="12px">
                Quick Services
              </Text>
              <Box
                borderRadius="12px"
                border="1px solid #EAECF0"
                display="flex"
                justifyContent="space-between"
                p="20px"
              >
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  textAlign="center"
                  fontSize="10px"
                  fontWeight={500}
                  color="#101828"
                >
                  <Button
                    w="48px"
                    h="48px"
                    p={0}
                    bg="#A41857"
                    borderRadius="1000px"
                    mb="8px"
                    _hover={{ bg: "#90164D" }}
                    onClick={() => navigate("/overview/transfers")}
                  >
                    <img src={getImageUrl("icons/whiteSend.png")} />
                  </Button>
                  Send Money
                </Box>
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  textAlign="center"
                  fontSize="10px"
                  fontWeight={500}
                  color="#101828"
                >
                  <Button
                    w="48px"
                    h="48px"
                    p={0}
                    bg="#A41857"
                    borderRadius="1000px"
                    mb="8px"
                    _hover={{ bg: "#90164D" }}
                    onClick={() => navigate("/overview/airtime")}
                  >
                    <img src={getImageUrl("icons/whiteBuy.png")} />
                  </Button>
                  Buy Airtime
                </Box>
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  textAlign="center"
                  fontSize="10px"
                  fontWeight={500}
                  color="#101828"
                >
                  <Button
                    w="48px"
                    h="48px"
                    p={0}
                    bg="#A41857"
                    borderRadius="1000px"
                    mb="8px"
                    _hover={{ bg: "#90164D" }}
                    onClick={() => navigate("/overview/airtime")}
                  >
                    <img src={getImageUrl("icons/whiteBuy.png")} />
                  </Button>
                  Buy Data
                </Box>
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  textAlign="center"
                  fontSize="10px"
                  fontWeight={500}
                  color="#101828"
                >
                  <Button
                    w="48px"
                    h="48px"
                    p={0}
                    bg="#A41857"
                    borderRadius="1000px"
                    mb="8px"
                    _hover={{ bg: "#90164D" }}
                    onClick={() => navigate("/overview/airtime")}
                  >
                    <img src={getImageUrl("icons/whiteBills.png")} />
                  </Button>
                  Pay Bills
                </Box>
                <Box
                  display="flex"
                  flexDir="column"
                  alignItems="center"
                  textAlign="center"
                  fontSize="10px"
                  fontWeight={500}
                  color="#101828"
                >
                  <Button
                    w="48px"
                    h="48px"
                    p={0}
                    bg="#A41857"
                    borderRadius="1000px"
                    mb="8px"
                    _hover={{ bg: "#90164D" }}
                    onClick={() => navigate("/overview/loans")}
                  >
                    <img src={getImageUrl("icons/whiteLoans.png")} />
                  </Button>
                  Staff Loan
                </Box>
              </Box>
            </Box>

            <Box
              p="30px"
              mt="24px"
              bgImage={getImageUrl("advertImage.png")}
              backgroundSize="100% 100%"
              borderRadius="16px"
            >
              <Box
                bg="#2C323A"
                fontSize="6px"
                fontWeight={600}
                color="#FFFFFF"
                w="fit-content"
                py="4px"
                px="6px"
                borderRadius="19px"
                mb="5px"
              >
                Investments
              </Box>
              <Text
                lineHeight="33px"
                w="60%"
                fontSize="32px"
                fontWeight={700}
                color="#FFFFFF"
                mb="5px"
              >
                Best in Market Investments!
              </Text>
              <Text
                w="60%"
                fontSize="12px"
                fontWeight={400}
                color="#FFFFFF"
                mb="24px"
              >
                We have the best investments for everyone
              </Text>
              <img className={styles.dotss} src={getImageUrl("dotss.png")} />
            </Box>
          </GridItem>

          <GridItem colSpan={1}>
            <Box>
              <HStack mb="12px" justifyContent="space-between">
                <Text fontSize="18px" fontWeight={600} color="#101828">
                  Recent Transfers
                </Text>
                <Text
                  onClick={() => navigate("/overview/dashboard/history")}
                  fontSize="16px"
                  fontWeight={600}
                  color="#A41857"
                  cursor="pointer"
                  _hover={{ textDecoration: "underline" }}
                >
                  See all
                </Text>
              </HStack>
              <Stack
                borderRadius="12px"
                border="1px solid #EAECF0"
                display="flex"
                justifyContent="space-between"
                gap="4px"
              >
                <HStack
                  bg="#D391AF0D"
                  justify="space-between"
                  margin={0}
                  px="20px"
                  py="12px"
                >
                  <Text fontSize="14px" color="#667085" fontWeight={600}>
                    Description
                  </Text>
                  <Text fontSize="14px" color="#667085" fontWeight={600}>
                    Amount
                  </Text>
                  <Text fontSize="14px" color="#667085" fontWeight={600}>
                    Date
                  </Text>
                </HStack>

                {transactions && transactions.length == 0 && (
                  <Stack>
                    <NoTransaction />
                  </Stack>
                )}
                <Stack px="18px" pt="10px">
                  {transactions &&
                    transactions.map((t, k) => (
                      <HStack
                        key={k}
                        justify="space-between"
                        borderBottom="1px solid #F3F4F6"
                        pt="10px"
                        pb="4px"
                        px={0}
                        alignItems="start"
                      >
                        <HStack alignItems="start">
                          {t.type === "credit" ? (
                            <img
                              className={styles.credDeb}
                              src={getImageUrl("icons/credit.png")}
                            />
                          ) : t.type === "debit" ? (
                            <img
                              className={styles.credDeb}
                              src={getImageUrl("icons/debit.png")}
                            />
                          ) : (
                            ""
                          )}
                          <Stack gap={0}>
                            <Text
                              fontSize="14px"
                              color="#394455"
                              fontWeight={450}
                            >
                              {t.name}
                            </Text>
                            <Text
                              fontSize="12px"
                              color="#667085"
                              fontWeight={450}
                            >
                              {t.account}
                            </Text>
                          </Stack>
                        </HStack>
                        <HStack gap={0} alignItems="center">
                          <TbCurrencyNaira color="#394455" />
                          <Text
                            fontSize="14px"
                            color="#394455"
                            fontWeight={450}
                          >
                            {formatNumber(t.amount)}
                          </Text>
                        </HStack>
                        <Text fontSize="14px" color="#394455" fontWeight={450}>
                          {t.date}
                        </Text>
                      </HStack>
                    ))}
                </Stack>
              </Stack>
            </Box>
          </GridItem>
        </Grid>
      </Stack>



      <Modal
        isCentered
        closeOnOverlayClick={false}
        isOpen={isOpenSetup}
        onClose={onCloseSetup}
        // size='xl'
        maxHeight={"70%"}
      >
        <ModalOverlay />
        <ModalContent maxW={'600px'}>
          <ModalHeader pb={0}>
            <Text
              fontSize='26px'
              color='#101828'
            >
              Complete your account setup
            </Text>
          </ModalHeader>
          <ModalBody>

            <div style={{ overflow: "auto", maxHeight: "60vh" }}>
              <Text
                fontSize='16px'
                color='#667085'
                mb='20px'
              >
                You need to complete your account setup to ensure the security and integrity of your transactions conducted on ARM MFB
              </Text>

              <HStack
                bg='#F2F4F7'
                px='16px'
                py='18px'
                borderRadius='8px'
                justifyContent='space-between'
                gap='20px'
              >
                <div style={{width: '100%'}}>
                  <Text fontSize='16px' mb='16px'>
                    You'll need to setup the following
                  </Text>

                  <HStack
                    spacing="12px"
                    w="fit-content"
                    py='4px'
                  >
                    <Box
                      p="8px"
                      borderRadius="38px"
                      border={
                        false
                          ? "1px solid #2AD062"
                          : "1px solid #EAECF0"
                      }
                    >
                      <Box
                        p="2px"
                        borderRadius="38px"
                        bg={
                          false
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
                      Create transaction PIN
                    </Text>
                  </HStack>

                  <Box h="14px" w="1px" ml="16px" border="1px dashed #A0A3BD"></Box>

                  <HStack
                    spacing="12px"
                    w="fit-content"
                    py='4px'
                  >
                    <Box
                      p="8px"
                      borderRadius="38px"
                      border={
                        false
                          ? "1px solid #2AD062"
                          : "1px solid #EAECF0"
                      }
                    >
                      <Box
                        p="2px"
                        borderRadius="38px"
                        bg={
                          false
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
                      Add security questions
                    </Text>
                  </HStack>

                  <Box h="14px" w="1px" ml="16px" border="1px dashed #A0A3BD"></Box>

                  <HStack
                    spacing="12px"
                    w="fit-content"
                    py='4px'
                  >
                    <Box
                      p="8px"
                      borderRadius="38px"
                      border={
                        false
                          ? "1px solid #2AD062"
                          : "1px solid #EAECF0"
                      }
                    >
                      <Box
                        p="2px"
                        borderRadius="38px"
                        bg={
                          false
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
                </div>

                <img src={getImageUrl('modalImg.svg')} style={{width: '100%', height: 'auto'}} />

              </HStack>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              w="100%"
              // h="48px"
              bg="#A41856"
              _hover={{ bg: "#90164D" }}
              color="#FFFFFF"
              fontSize="14px"
              fontWeight={600}
              onClick={handleToSetup}
            >
              Proceed
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>


    </div>
  );
};
