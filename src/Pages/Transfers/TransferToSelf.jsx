/* eslint-disable react/prop-types */
import { useState } from "react";
import {
  Stack,
  Text,
  Box,
  Button,
  HStack,
  Input,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from "../../Components/CompleteTrans";

export const TransferToSelf = ({ accounts }) => {
  const [showOne, setShowOne] = useState(true);
  const [showTwo, setShowTwo] = useState(false);

  const moveToOne = () => {
    setShowOne(true);
    setShowTwo(false);
    window.scrollTo({ top: 0 });
  };
  const moveToTwo = () => {
    setShowOne(false);
    setShowTwo(true);
    window.scrollTo({ top: 0 });
  };

  return (
    <>
      {showOne && (
        <Box>
          <HStack
            bg={"#EAECF0"}
            justifyContent={"space-between"}
            px={"26px"}
            py={"14px"}
            borderRadius={"12px 12px 0 0"}
          >
            <Button h={"24px"} bg={"#EAECF0"} p={0} _hover={{ bg: "#EAECF0" }}>
              <img src={getImageUrl("icons/blackLeftArrow.png")} alt="back" />
            </Button>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              Transfer to Self
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              1/2
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
            <Text fontSize={"16px"} color={"#667085"} textAlign={"center"}>
              Input the transaction details below
            </Text>

            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Account to Debit
              </FormLabel>
              <Select
                h={"48px"}
                bg={"#F7F7F7"}
                border={"1px solid #EAECF0"}
                placeholder="Select account"
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              >
                {accounts &&
                  accounts.map((account, i) => (
                    <option key={i}>
                      {" "}
                      {account.accountnumber} - {account.acctProduct}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Account to Credit
              </FormLabel>
              <Select
                h={"48px"}
                bg={"#F7F7F7"}
                border={"1px solid #EAECF0"}
                placeholder="Select account"
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              >
                {accounts &&
                  accounts.map((account, i) => (
                    <option key={i}>
                      {" "}
                      {account.accountnumber} - {account.acctProduct}
                    </option>
                  ))}
              </Select>
            </FormControl>

            <FormControl w={"75%"} isRequired>
              <FormLabel fontSize={"16px"} fontWeight={400} color={"#101828"}>
                Amount
              </FormLabel>
              <Input
                h={"48px"}
                bg={"#F7F7F7"}
                border={"1px solid #EAECF0"}
                _placeholder={{ fontSize: "16px", color: "#667085" }}
                placeholder="₦00.00"
                type={"number"}
                inputMode="numberic"
              ></Input>
            </FormControl>

            <HStack w={"75%"} justifyContent={"space-between"}>
              <HStack>
                <img src={getImageUrl("icons/warning.png")} />
                <Text fontSize={"14px"} fontWeight={500} color={"#667085"}>
                  Your daily transfer limit is ₦200,000
                </Text>
              </HStack>
              <Text
                cursor={"pointer"}
                fontSize={"14px"}
                fontWeight={500}
                color={"#A41857"}
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
                _placeholder={{ fontSize: "16px", color: "#667085" }}
              ></Input>
            </FormControl>

            <Button
              onClick={moveToTwo}
              mt={"16px"}
              w={"75%"}
              h={"48px"}
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
              Complete Transaction
            </Text>
            <Text fontSize={"18px"} fontWeight={600} color={"#101828"}>
              2/2
            </Text>
          </HStack>

          <CompleteTransaction type="transaction" />
        </Box>
      )}
    </>
  );
};
