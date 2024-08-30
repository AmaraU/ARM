import { OngoingLoan } from "../../Components/Loan/OngoingLoan/OngoingLoan";
import styles from "./Loan.module.css";
import { Tabs, TabList, Tab, TabPanels, TabPanel, Text } from "@chakra-ui/react";
function LoanPage() {
  return (
    <div className={styles.whole}>
      <Text fontSize={"24px"} fontWeight={700} color={"#101828"} mb={"16px"}>
        Loans
      </Text>
      <Tabs>
        <TabList borderBottom={"none"} gap={"5px"} mb={"24px"}>
          <Tab
            rounded={"50px"}
            fontSize={"13px"}
            color={"#667085"}
            fontWeight={500}
            border={"1px solid #EAECF0"}
            py={"12px"}
            px={"14px"}
            _selected={{
              color: "#FFFFFF",
              bg: "#667085",
              border: "1px solid transparent",
              boxShadow: "0px 0px 1px 0px #00000066",
            }}
          >
            Ongoing Loans
          </Tab>
          <Tab
            rounded={"50px"}
            fontSize={"13px"}
            color={"#667085"}
            fontWeight={500}
            border={"1px solid #EAECF0"}
            py={"12px"}
            px={"14px"}
            _selected={{
              color: "#FFFFFF",
              bg: "#667085",
              border: "1px solid transparent",
              boxShadow: "0px 0px 1px 0px #00000066",
            }}
          >
            Loan History
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel ml={-4}>
            <OngoingLoan />
          </TabPanel>

          <TabPanel ml={-4}></TabPanel>

          <TabPanel ml={-4}></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default LoanPage;
