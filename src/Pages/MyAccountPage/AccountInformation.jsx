/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  Divider,
  Flex,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { BiShow, BiHide, BiCopy } from "react-icons/bi";
import { formatNumberDecimals, hideBalance } from "../../utils/utils";
import { handleSuccess } from "../../utils/handleResponse";
import { useNavigate } from "react-router-dom";

export const AccountInformation = ({ accounts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);
  const [showUpgrade, setShowUpgrade] = useState(true);
  const [infoPopup, setInfoPopup] = useState(false);
  const navigate = useNavigate();


  const currentItem = accounts ? accounts[currentIndex] : [];

  function infoPop() {
    setInfoPopup(false);
  }

  const handleToggleVisibility = () => {
    setTotalBalanceVisible(!totalBalanceVisible);
  };

  function copyToClipboard() {
    navigator.clipboard.writeText(currentItem?.accountnumber);
    handleSuccess("Account number copied to clipboard");
  }

  return (
    <>
      <Box>
        <HStack
          bg="#EAECF0"
          px={"26px"}
          py={"14px"}
          borderRadius={"12px 12px 0 0"}
        >
          <Button h="24px" bg="#EAECF0" p={0} _hover={{ bg: "#EAECF0" }}>
            <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
          </Button>
          <Text
            width="90%"
            textAlign="center"
            fontSize="18px"
            fontWeight={600}
            color="#101828"
          >
            My Account Information
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
          {showUpgrade && (
            <HStack
              id="complete"
              w="75%"
              backgroundColor="#EFDAE3"
              borderRadius="12px"
              display="flex"
              justifyContent="space-between"
              backgroundImage={getImageUrl("whiteRoof.png")}
              bgSize="20% auto"
              bgRepeat="no-repeat"
              backgroundPosition="bottom right 80px"
              px="23px"
              py="11px"
            >
              <Box>
                <Text fontSize="18px" fontWeight={700} color="#A41857">
                  Upgrade Your Account
                </Text>
                <Text fontSize="12px" fontWeight={400} color="#A41857">
                  You need to upgrade your account setup to enjoy more
                  services
                </Text>
                <Button
                  // onClick={moveToUpgradeAcc}
                  onClick={()=>navigate('upgrade')}
                  fontSize="12px"
                  fontWeight={700}
                  color="#A41857"
                  padding={0}
                  gap="4px"
                  bg="transparent"
                  _hover={{ bg: "transparent" }}
                >
                  Upgrade Now{" "}
                  <img src={getImageUrl("icons/redRightArrow.png")} />
                </Button>
              </Box>
              <Button
                alignSelf="start"
                bg="transparent"
                _hover={{ bg: "transparent" }}
                p={0}
                onClick={() => setShowUpgrade(false)}
              >
                <img src={getImageUrl("icons/redClose.png")} alt="X" />
              </Button>
            </HStack>
          )}

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

          <Flex justifyContent={"center"}>
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
              </Flex>

          <HStack
            justifyContent="space-between"
            alignItems="center"
            spacing="16px"
            w="75%"
          >
            <Stack
              borderRadius="8px"
              border="1px solid #EAECF0"
              w="100%"
              p="20px"
              spacing="8px"
            >
              <Text fontSize="12px" fontWeight={450} color="#667085">
                AVAILABLE BALANCE
              </Text>
              <Text fontSize="18px" fontWeight={600} color="#101828">
                ₦ {formatNumberDecimals(currentItem?.bookBalance)}
              </Text>
            </Stack>
            <Stack
              borderRadius="8px"
              border="1px solid #EAECF0"
              w="100%"
              p="20px"
              spacing="8px"
            >
              <Text fontSize="12px" fontWeight={450} color="#667085">
                LEDGER BALANCE
              </Text>
              <Text fontSize="18px" fontWeight={600} color="#101828">
                ₦ {formatNumberDecimals(currentItem?.bookBalance)}
              </Text>
            </Stack>
            <Stack
              borderRadius="8px"
              border="1px solid #EAECF0"
              w="100%"
              p="20px"
              spacing="8px"
            >
              <Text fontSize="12px" fontWeight={450} color="#667085">
                LIENED BALANCE
              </Text>
              <Text fontSize="18px" fontWeight={600} color="#101828">
                ₦00.00
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Box>
    </>
  );
};
