import { Stack, Text } from "@chakra-ui/react";

function NoTransaction() {
  return (
    <Stack align={"center"} py={9}>
      <Text fontSize={30} fontWeight={"bold"}>
        {" "}
        No transactions
      </Text>

      <p>Your most recent transactions will appear here</p>
    </Stack>
  );
}

export default NoTransaction;
