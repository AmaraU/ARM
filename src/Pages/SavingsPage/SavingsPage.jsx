import { useState } from "react";
import SavingsPlan from "../../Components/Savings/SavingsPlan";
import styles from "./Savings.module.css";
import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import PersonalSavings from "../../Components/Savings/PersonalSavings";
import CardContainer from "../../elements/CardContainer";
import SuccessScreen from "../../elements/SuccessScreen";
import TargetSavings from "../../Components/Savings/TargetSavings";
import FixedSavings from "../../Components/Savings/FixedSavings";
function SavingsPage() {
  const [step, setStep] = useState(1);
  return (
    <div className={styles.whole}>
      <Text fontSize={"24px"} fontWeight={700} color={"#101828"} mb={"16px"}>
        Savings
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
            Target Savings
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
            Fixed Savings
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel ml={-4}>
            <CardContainer title={"Savings Plans"}>
              {step === 1 && <SavingsPlan moveToOptions={(e) => setStep(e)} />}
              {step === 2 && (
                <PersonalSavings moveToOptions={(e) => setStep(e)} />
              )}
              {step === 3 && (
                <SuccessScreen
                  title={"Success!"}
                  description={
                    "Your target savings has been created successfully"
                  }
                  buttonTitle={"Okay, Thank you"}
                />
              )}

              {step === 4 && (
                <TargetSavings moveToOptions={(e) => setStep(e)} />
              )}

              {step === 5 && <FixedSavings moveToOptions={(e) => setStep(e)} />}
            </CardContainer>
          </TabPanel>

          <TabPanel ml={-4}></TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default SavingsPage;
