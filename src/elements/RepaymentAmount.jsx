/* eslint-disable react/prop-types */
import { Button, Card, Text } from "@chakra-ui/react";

function RepaymentAmount({ amount }) {
  return (
    <Card py={"5"} bg={"#667085"} alignItems='center' gap='8px'>
      <Text textAlign={"center"} color={"white"}>
        TOTAL REPAYMENT AMOUNT
      </Text>
      <Text
        textAlign={"center"}
        color={"white"}
        fontWeight={"600"}
        fontSize={"large"}
      >
        {" "}
        {amount}{" "}
      </Text>
      <Button bg='#EFECE9' color='#667085' _hover={{bg: '#EFECE9'}} w='fit-content' fontSize='16px' fontWeight={500}>See Loan Repayment Schedule</Button>
    </Card>
  );
}

export default RepaymentAmount;
