/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  Divider,
  Input,
  Flex,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { BiShow, BiHide, BiCopy } from "react-icons/bi";
import { formatNumberDecimals, hideBalance } from "../../utils/utils";
import { handleSuccess } from "../../utils/handleResponse";
import { CompleteTransaction } from "../../Components/CompleteTrans";

export const AccountLimit = ({ backHome, accounts }) => {
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);
  const [infoPopup, setInfoPopup] = useState(false);
  const [ amount, setAmount ] = useState('');
  const [ inputAmount, setInputAmount ] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [ step, setStep ] = useState(1);


  const currentItem = accounts ? accounts[currentIndex] : [];

  function infoPop() {
    setInfoPopup(false);
  }

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
  };
  const handlePrevious = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + accounts.length) % accounts.length
    );
  };

  const handleToggleVisibility = () => {
    setTotalBalanceVisible(!totalBalanceVisible);
  };

  function copyToClipboard() {
    navigator.clipboard.writeText(currentItem?.accountnumber);
    handleSuccess("Account number copied to clipboard");
  }

  const handleAmount = (value) => {
    setInputAmount(value);
    if (value === '' || (Number(value) >= 0 && Number(value) <= 300000)) {
      setAmount(value);
    }
  }

  const moveToLimit = () => {
    setStep(1);
    window.scrollTo({top: 0});
  }
  const moveToComplete = () => {
    setStep(2);
    window.scrollTo({top: 0});
  }



  return (
    <>
      {step === 1 && <Box>
        <HStack
          bg="#EAECF0"
          px={"26px"}
          py={"14px"}
          borderRadius={"12px 12px 0 0"}
        >
          <Button
            onClick={backHome}
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
            My Account Limit
          </Text>
        </HStack>
        <Stack
          spacing="24px"
          alignItems="center"
          border="1px solid #EFECE9"
          bg="#FFFFFF"
          borderRadius="0 0 12px 12px"
          px="16px"
          pb="114px"
          pt="48px"
        >
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyItems="center"
            backgroundColor="#000000"
            backgroundImage={getImageUrl("backgroundGrey.png")}
            bgSize="100% 100%"
            borderRadius="12px"
            px="16px"
            py="24px"
            w='75%'
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

              <HStack justifyContent="space-between" w="100%" px= "8px">
                <Box>
                  <Text fontSize="12px" fontWeight={400} color="#FFFFFF">
                    Total Available Balance
                  </Text>
                  <HStack spacing={1} alignItems="center" mb="10px">
                    <Text fontSize="18px" fontWeight={700} color="#FFFFFF">
                      ₦{totalBalanceVisible
                        ? formatNumberDecimals(
                            currentItem && currentItem.bookBalance
                          )
                        : hideBalance()
                      }
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

                  <Text fontSize="12px" fontWeight={400} color="#FFFFFF">
                    Account Number
                  </Text>
                  <HStack spacing={0} alignItems="center">
                    <Text fontSize="18px" fontWeight={700} color="#FFFFFF">
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
                      <BiCopy
                        fontSize="lg"
                        color="#667085"
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
                    fontSize="12px"
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

          <Text w="75%" fontSize="16px" color="#101828">
            Set your transaction limit, maximum limit is <b>₦300,000</b>
          </Text>

          <Stack w="75%" justifyContent="space-between" spacing="24px">
            <Stack w="100%">
              <Text fontSize="16px" color="#101828">
                Transaction Limit
              </Text>
              <InputGroup>
                <Input
                  value={amount}
                  onChange={(e)=>handleAmount(e.target.value)}
                  h="48px"
                  autoComplete="off"
                  type="number"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  placeholder="₦200,000"
                  _placeholder={{ fontSize: "16px", color: "#667085" }}
                />
                {inputAmount >= 200000 && <InputRightElement h='100%' mr={4}><Text fontSize='16px' fontWeight={600} color='#A41857'>MAX</Text></InputRightElement>}
              </InputGroup>
            </Stack>
          </Stack>

          <Button
            w="75%"
            h="48px"
            mt="24px"
            bg="#A41856"
            color="#FFFFFF"
            fontSize="14px"
            fontWeight={600}
            _hover={{ bg: "#90164D" }}
            onClick={moveToComplete}
          >
            Continue
          </Button>
        </Stack>
      </Box>}

      {step === 2 && <Box>
        <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
          <Button onClick={moveToLimit} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
          <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Complete Process</Text>
        </HStack>

        <CompleteTransaction type='limit' backToSaving={moveToLimit} />

      </Box>}
    </>
  );
};
