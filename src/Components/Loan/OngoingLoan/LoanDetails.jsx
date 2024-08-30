/* eslint-disable react/prop-types */
import CardContainer from "../../../elements/CardContainer";
import { Button, Stack, Text } from "@chakra-ui/react";
import LoanCard from "../../../elements/LoanCard";
import RepaymentAmount from "../../../elements/RepaymentAmount";

function LoanDetails({ moveToOne, title, moveNext }) {
  return (
    <CardContainer moveToOne={moveToOne} title={title}>
      <Text maxW={"630"} textAlign={"center"}>
        Congratulations your loan has been granted, see details below See
        details below and accept the terms to continue
      </Text>
      <Stack maxW={632} w={"100%"}>
        <LoanCard />

        <RepaymentAmount amount={"₦230,000"} />

        <Stack mt={"10"}>
          <Button bg={"#A41856"} color={"white"} onClick={moveNext}>
            {" "}
            Accept{" "}
          </Button>
          <Button bg={"#EFECE9"} color={"#667085"}>
            {" "}
            Reject{" "}
          </Button>
        </Stack>
      </Stack>
    </CardContainer>
  );
}

export default LoanDetails;
