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
  Select,
  FormControl,
  FormLabel,
  InputGroup,
  InputRightElement,
  InputLeftElement,
  Spinner,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from "../../Components/CompleteTrans";
import Switch from "react-switch";
import transferService from "../../services/transferService";
import { ARM_BANK_CODE } from "../../constants";
import { formatNumberDecimals, hideBalance } from "../../utils/utils";
import { useSelector } from "react-redux";
import { encrypt } from "../../utils/encrypt";

export const TransferToARMAcct = ({ accounts }) => {
  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);
  const [showThree, setShowThree] = useState(false);
  const [checkingAccount, setCheckingAccount] = useState(false);
  const [showName, setShowName] = useState(false);
  const [accountNumber, setAccountNumber] = useState("");
  const [accountName, setAccountName] = useState("");
  const [userAccountNumber, setUserAccountNumber] = useState("");
  const [amount, setAmount] = useState(0);
  const [notes, setNotes] = useState("");
  const [loading, setLoading] = useState(false);
  const { username } = useSelector((state) => state.user);
  const noOfAccounts = 2;

  const handleToggleVisibility = () => {
    setTotalBalanceVisible(!totalBalanceVisible);
  };

  const moveToOne = () => {
    setShowOne(true);
    setShowTwo(false);
    setShowThree(false);
    window.scrollTo({ top: 0 });
  };
  const moveToTwo = () => {
    setShowOne(false);
    setShowTwo(true);
    setShowThree(false);
    window.scrollTo({ top: 0 });
  };
  const moveToThree = () => {
    setShowOne(false);
    setShowTwo(false);
    setShowThree(true);
    onCloseConfirm();
    window.scrollTo({ top: 0 });
  };

  const checkAccount = async (e) => {
    setAccountNumber(e.target.value);
    if (e.target.value.length !== 10) {
      return;
    }
    setCheckingAccount(true);
    try {
      const response = await transferService.accountInquiry({
        AccountNumber: e.target.value,
        BankCode: ARM_BANK_CODE,
      });
      setAccountName(response.result.data);
      setCheckingAccount(false);
      setShowName(true);
    } catch (error) {
      setCheckingAccount(false);
      setShowName(false);
      console.log(error);
    }
  };

  const completeTransaction = async (e) => {
    console.log(e);
    const { pin } = e;
    console.log(username);

    // const transfer_funds_params = {
    //   d_At: userAccountNumber,
    //   c_At: accountNumber,
    //   c_AN: accountName.acctName,
    //   b_B: "ARM",
    //   b_C: ARM_BANK_CODE,
    //   p_A: amount,
    //   n_R: notes,
    //   t_T: "2",
    //   t_P: pin,
    //   s_ID: "",
    // };

    const payload = await encrypt({
      amount,
      acct_number: userAccountNumber,
      recipient_account: accountNumber,
      recipient_name: accountName.acctName,
      bank_name: "ARM",
      pin,
      username,
    });

    console.log(payload.encRequest);

    try {
      setLoading(true);
      const response = await transferService.transferFunds({
        encRequest: payload.encRequest,
        detailsRequest: payload.detailsRequest,
      });
      console.log(response);
      setLoading(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      {showOne && (
        <Box>
          <HStack
            bg="#EAECF0"
            justifyContent="space-between"
            px="26px"
            py="14px"
            borderRadius="12px 12px 0 0"
          >
            <Button h="24px" bg="#EAECF0" p={0} _hover={{ bg: "#EAECF0" }}>
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text fontSize="18px" fontWeight={600} color="#101828">
              Transfer to ARM Account
            </Text>
            <Text fontSize="18px" fontWeight={600} color="#101828">
              1/3
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
            <Text fontSize={"16px"} color={"#667085"} textAlign={"center"}>
              Input the transaction details below
            </Text>

            {noOfAccounts > 1 ? (
              <>
                <FormControl w={"75%"} isRequired>
                  <FormLabel
                    fontSize={"16px"}
                    fontWeight={400}
                    color={"#101828"}
                  >
                    Account to Debit
                  </FormLabel>
                  <Select
                    h={"48px"}
                    bg={"#F7F7F7"}
                    border={"1px solid #EAECF0"}
                    placeholder="Select account"
                    _placeholder={{ fontSize: "16px", color: "#667085" }}
                    onChange={(e) => setUserAccountNumber(e.target.value)}
                  >
                    {accounts &&
                      accounts.map((account, i) => (
                        <option value={account.accountnumber} key={i}>
                          {" "}
                          {account.accountnumber} - {account.acctProduct}
                        </option>
                      ))}
                  </Select>
                </FormControl>

                <FormControl w="75%" isRequired>
                  <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                    Account Number
                  </FormLabel>
                  <InputGroup>
                    <Input
                      onChange={checkAccount}
                      type="number"
                      h="48px"
                      bg="#F7F7F7"
                      border="1px solid #EAECF0"
                      placeholder="Input acount number"
                      _placeholder={{ fontSize: "16px", color: "#667085" }}
                      autoComplete="off"
                    />
                    {checkingAccount && (
                      <InputRightElement>
                        <Spinner color="#A41857" w="24px" thickness="4px" />
                      </InputRightElement>
                    )}
                  </InputGroup>
                </FormControl>

                {!showName && (
                  <HStack w="75%">
                    <img src={getImageUrl("icons/nav/profileGrey.png")} />
                    <Text
                      cursor="pointer"
                      fontSize="14px"
                      fontWeight={500}
                      color="#A41857"
                    >
                      Select from Beneficiary
                    </Text>
                  </HStack>
                )}

                {showName && (
                  <HStack
                    w="75%"
                    p="12px"
                    bg="#EFECE9"
                    border="1px solid #EAECF0"
                    borderRadius="8px"
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={getImageUrl("icons/nav/profileGrey.png")}
                    />
                    <Stack gap={0}>
                      <Text fontSize="10px" fontWeight={500} color="#667085">
                        BENEFICIARY NAME
                      </Text>
                      <Text fontSize="14px" fontWeight={500} color="#101828">
                        {accountName.acctName}
                      </Text>
                    </Stack>
                  </HStack>
                )}

                {showName && (
                  <HStack w="75%" justifyContent="space-between">
                    <Text fontSize="14px" fontWeight={500} color="#667085">
                      Save as Beneficiary
                    </Text>
                    <Switch
                      onColor="#A41857"
                      checkedIcon={false}
                      uncheckedIcon={false}
                      height={24}
                      width={40}
                      handleDiameter={16}
                    />
                  </HStack>
                )}
              </>
            ) : (
              <>
                <HStack
                  w="75%"
                  backgroundColor="#000000"
                  backgroundImage={getImageUrl("backgroundGrey.png")}
                  bgSize="100% 100%"
                  borderRadius="12px"
                  p="14px"
                  pt="24px"
                  justifyContent="space-between"
                >
                  <Box>
                    <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
                      Total Available Balance
                    </Text>
                    <HStack ml="-1px" spacing={0}>
                      <Box fontSize="22px" color="#FFFFFF">
                        <TbCurrencyNaira />
                      </Box>
                      <Text fontSize="18px" fontWeight={600} color="#FFFFFF">
                        {totalBalanceVisible
                          ? `${formatNumberDecimals(
                              accounts[0] && accounts[0].bookBalance
                            )}`
                          : hideBalance()}
                      </Text>
                      <Box pl={3} cursor="pointer">
                        {totalBalanceVisible && (
                          <BiShow
                            fontSize="lg"
                            color="#FFFFFF"
                            onClick={handleToggleVisibility}
                          />
                        )}
                        {!totalBalanceVisible && (
                          <BiHide
                            fontSize="lg"
                            color="#FFFFFF"
                            onClick={handleToggleVisibility}
                          />
                        )}
                      </Box>
                    </HStack>
                  </Box>

                  <Box
                    alignSelf="start"
                    borderRadius="36px"
                    px="12px"
                    py="8px"
                    bg="#2C323A"
                    color="#FFFFFF"
                    fontSize="10px"
                    fontWeight={500}
                  >
                    Tier 1 Savings Account
                  </Box>
                </HStack>

                <FormControl w="75%" isRequired>
                  <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                    Account Number
                  </FormLabel>
                  <InputGroup>
                    <Input
                      onChange={checkAccount}
                      type="number"
                      h="48px"
                      bg="#F7F7F7"
                      border="1px solid #EAECF0"
                      placeholder="Input acount number"
                      _placeholder={{ fontSize: "16px", color: "#667085" }}
                      autoComplete="off"
                    />
                    {checkingAccount && (
                      <InputRightElement>
                        <Spinner color="#A41857" w="24px" thickness="4px" />
                      </InputRightElement>
                    )}
                  </InputGroup>
                </FormControl>

                {showName && (
                  <HStack
                    w="75%"
                    p="12px"
                    bg="#EFECE9"
                    border="1px solid #EAECF0"
                    borderRadius="8px"
                  >
                    <img
                      style={{ width: "20px", height: "20px" }}
                      src={getImageUrl("icons/nav/profileGrey.png")}
                    />
                    <Stack gap={0}>
                      <Text fontSize="10px" fontWeight={500} color="#667085">
                        BENEFICIARY NAME
                      </Text>
                      <Text fontSize="14px" fontWeight={500} color="#101828">
                        {accountName.acctName}
                      </Text>
                    </Stack>
                  </HStack>
                )}

                {!showName && (
                  <HStack w="75%">
                    <img src={getImageUrl("icons/nav/profileGrey.png")} />
                    <Text
                      cursor="pointer"
                      fontSize="14px"
                      fontWeight={500}
                      color="#A41857"
                    >
                      Select from Beneficiary
                    </Text>
                  </HStack>
                )}

                {showName && (
                  <HStack w="75%" justifyContent="space-between">
                    <Text fontSize="14px" fontWeight={500} color="#667085">
                      Save as Beneficiary
                    </Text>
                    <Switch
                      onColor="#A41857"
                      checkedIcon={false}
                      uncheckedIcon={false}
                      height={24}
                      width={40}
                      handleDiameter={16}
                    />
                  </HStack>
                )}
              </>
            )}

            <Button
              mt="16px"
              w="75%"
              h="48px"
              bg="#A41856"
              _hover={{ bg: "#90164D" }}
              color="#FFFFFF"
              fontSize="14px"
              fontWeight={600}
              onClick={moveToTwo}
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
              Transfer to ARM Account
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
            <Text fontSize={"16px"} color={"#667085"} textAlign={"center"}>
              Input the transaction details below
            </Text>

            <HStack
              w="75%"
              backgroundColor="#000000"
              backgroundImage={getImageUrl("backgroundGrey.png")}
              bgSize="100% 100%"
              borderRadius="12px"
              p="14px"
              pt="24px"
              justifyContent="space-between"
            >
              <Box>
                <Text fontSize="14px" fontWeight={400} color="#FFFFFF">
                  Total Available Balance
                </Text>
                <HStack ml="-1px" spacing={0}>
                  <Box fontSize="22px" color="#FFFFFF">
                    <TbCurrencyNaira />
                  </Box>
                  <Text fontSize="18px" fontWeight={600} color="#FFFFFF">
                    {totalBalanceVisible
                      ? `${formatNumberDecimals(
                          accounts[0] && accounts[0].bookBalance
                        )}`
                      : hideBalance()}
                  </Text>
                  <Box pl={3} cursor="pointer">
                    {totalBalanceVisible && (
                      <BiShow
                        fontSize="lg"
                        color="#FFFFFF"
                        onClick={handleToggleVisibility}
                      />
                    )}
                    {!totalBalanceVisible && (
                      <BiHide
                        fontSize="lg"
                        color="#FFFFFF"
                        onClick={handleToggleVisibility}
                      />
                    )}
                  </Box>
                </HStack>
              </Box>

              <Box
                alignSelf="start"
                borderRadius="36px"
                px="12px"
                py="8px"
                bg="#2C323A"
                color="#FFFFFF"
                fontSize="10px"
                fontWeight={500}
              >
                Tier {accounts[0] && accounts[0].accountTier} -{" "}
                {accounts[0] && accounts[0].acctProduct}
              </Box>
            </HStack>

            <Box
              w="75%"
              p="12px"
              bg="#F7F7F7"
              border="1px solid #EAECF0"
              borderRadius="8px"
            >
              <HStack>
                <img
                  style={{ width: "20px", height: "20px" }}
                  src={getImageUrl("icons/greyBank.png")}
                />
                <Stack gap={0}>
                  <Text fontSize="10px" fontWeight={500} color="#667085">
                    BENEFICIARY ACCOUNT NUMBER
                  </Text>
                  <Text fontSize="14px" fontWeight={500} color="#101828">
                    ARM Microfinance Bank - {accountNumber}
                  </Text>
                </Stack>
              </HStack>

              <Divider h="2px" mt="12px" mb="12px" />

              <HStack>
                <img src={getImageUrl("icons/nav/profileGrey.png")} />
                <Stack gap={0}>
                  <Text fontSize="10px" fontWeight={500} color="#667085">
                    BENEFICIARY NAME
                  </Text>
                  <Text fontSize="14px" fontWeight={500} color="#101828">
                    {accountName.acctName}
                  </Text>
                </Stack>
              </HStack>
            </Box>

            <FormControl w="75%" isRequired>
              <FormLabel fontSize="16px" fontWeight={400} color="#101828">
                Amount
              </FormLabel>
              <InputGroup>
                <InputLeftElement h="48px" color="#667085">
                  ₦
                </InputLeftElement>
                <Input
                  type="number"
                  h="48px"
                  bg="#F7F7F7"
                  border="1px solid #EAECF0"
                  placeholder="Enter amount"
                  _placeholder={{ fontSize: "16px", color: "#667085" }}
                  autoComplete="off"
                  onChange={(e) => setAmount(e.target.value)}
                />
              </InputGroup>
            </FormControl>

            <HStack w="75%" justifyContent="space-between">
              <HStack>
                <img
                  src={getImageUrl("icons/warning.png")}
                  style={{ width: "20px", height: "20px" }}
                />
                <Text fontSize="14px" fontWeight={500} color="#667085">
                  Your daily transfer limit is ₦200,000
                </Text>
              </HStack>
              <Text
                cursor="pointer"
                fontSize="14px"
                fontWeight={450}
                color="#A41857"
              >
                Increase your transfer limit
              </Text>
            </HStack>

            <FormControl w={"75%"}>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Note (Optional)
              </FormLabel>
              <Input
                h={"48px"}
                bg={"#F7F7F7"}
                border={"1px solid #EAECF0"}
                autoComplete="off"
                onChange={(e) => setNotes(e.target.value)}
              />
            </FormControl>

            <Button
              mt={"16px"}
              w={"75%"}
              h={"48px"}
              bg={"#A41856"}
              _hover={{ bg: "#90164D" }}
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
              Complete Transaction
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              3/3
            </Text>
          </HStack>

          <CompleteTransaction
            type="transaction"
            handleSubmit={completeTransaction}
            loading={loading}
          />
        </Box>
      )}

      <Modal
        isCentered
        size="lg"
        closeOnOverlayClick={true}
        isOpen={isOpenConfirm}
        onClose={onCloseConfirm}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Text
              textAlign="center"
              fontSize="18px"
              fontWeight={600}
              color="#101828"
            >
              Confirm Transaction Details
            </Text>
          </ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <div style={{ overflow: "auto", maxHeight: "60vh" }}>
              <Stack w="100%" spacing="16px">
                <HStack spacing="8px" alignItems="center">
                  <img src={getImageUrl("icons/greyBank.png")} />
                  <Stack spacing={0}>
                    <Text fontSize="14px" fontWeight={450} color="#667085">
                      BENEFICIARY ACCOUNT NUMBER
                    </Text>
                    <Text fontSize="18px" fontWeight={500} color="#A41856">
                      ARM Microfinance Bank - {accountNumber}
                    </Text>
                  </Stack>
                </HStack>

                <HStack spacing="8px" alignItems="center">
                  <img src={getImageUrl("icons/nav/profileGrey.png")} />
                  <Stack spacing={0}>
                    <Text fontSize="14px" fontWeight={450} color="#667085">
                      BENEFICIARY NAME
                    </Text>
                    <Text fontSize="18px" fontWeight={500} color="#A41856">
                      {accountName.acctName}
                    </Text>
                  </Stack>
                </HStack>

                <HStack spacing="8px" alignItems="center">
                  <img src={getImageUrl("icons/greyCash.png")} />
                  <Stack spacing={0}>
                    <Text fontSize="14px" fontWeight={450} color="#667085">
                      AMOUNT
                    </Text>
                    <Text fontSize="18px" fontWeight={500} color="#A41856">
                      ₦{amount}
                    </Text>
                  </Stack>
                </HStack>

                <HStack spacing="8px" alignItems="center">
                  <img src={getImageUrl("icons/greyFees.png")} />
                  <Stack spacing={0}>
                    <Text fontSize="14px" fontWeight={450} color="#667085">
                      FEES
                    </Text>
                    <Text fontSize="18px" fontWeight={500} color="#A41856">
                      ₦10.25
                    </Text>
                  </Stack>
                </HStack>

                <HStack spacing="8px" alignItems="center">
                  <img src={getImageUrl("icons/greyNotes.png")} />
                  <Stack spacing={0}>
                    <Text fontSize="14px" fontWeight={450} color="#667085">
                      NOTES
                    </Text>
                    <Text fontSize="18px" fontWeight={500} color="#A41856">
                      {notes}
                    </Text>
                  </Stack>
                </HStack>
              </Stack>
            </div>
          </ModalBody>

          <ModalFooter pt={0}>
            <Button
              mt="16px"
              w="100%"
              h="48px"
              bg="#A41856"
              _hover={{ bg: "#90164D" }}
              color="#FFFFFF"
              fontSize="14px"
              fontWeight={600}
              onClick={moveToThree}
            >
              Continue
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
