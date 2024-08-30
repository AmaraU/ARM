/* eslint-disable react/prop-types */
import { Card, Text } from "@chakra-ui/react";

function RepaymentAmount({ amount }) {
  return (
    <Card py={"5"} bg={"#667085"}>
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
    </Card>
  );
}

export default RepaymentAmount;
