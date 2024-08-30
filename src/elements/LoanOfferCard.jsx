/* eslint-disable react/prop-types */
import { Card, Text, Button } from "@chakra-ui/react";
import MoneyBag from "../../assets/icons/money-bag-red.svg";

function LoanOfferCard({ title, amount, description, buttonTitle, moveNext }) {
  return (
    <Card
      px={"6"}
      pt={"4"}
      pb={"10"}
      maxW={"419px"}
      w={"100%"}
      bg={"#EFECE9"}
      borderRadius={"10"}
    >
      <Text
        py={"3"}
        px={"2"}
        fontWeight={"bold"}
        bg={"#DCD6CF"}
        borderRadius={"5"}
      >
        {title}
      </Text>

      <img src={MoneyBag} style={{ width: "60px", height: "90px" }} />

      <Text fontSize={"14"}>LOAN AMOUNT</Text>
      <Text fontSize={"24"} fontWeight={"bold"}>
        {" "}
        ₦ {amount}{" "}
      </Text>

      <Text fontSize={"14"}>{description}</Text>

      <Button mt={"12"} bg={"#A41856"} color={"white"} onClick={moveNext}>
        {buttonTitle}
      </Button>
    </Card>
  );
}

export default LoanOfferCard;
