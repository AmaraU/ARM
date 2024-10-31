import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import styles from "./Transfers.module.css";
import { TransferToOthers } from "./TransferToOthers";
import { TransferToSelf } from "./TransferToSelf";
import { Beneficiaries } from "./Beneficiaries";
import { TransferToARMAcct } from "./TransferToARMAcct";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountBalance } from "../../store/auth/user.slice";

export const Transfers = () => {
  const dispatch = useDispatch();
  const accounts = useSelector((state) => state.user.accountBalance) || [];
  const { fullname, casaAccountBalances } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch(getAccountBalance());
  }, [dispatch]);

  return (
    <div className={styles.whole}>
      <Text fontSize={"24px"} fontWeight={700} color={"#101828"} mb={"16px"}>
        Transfers
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
            Transfer To Self
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
            Transfer To ARM Account
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
            Transfer To Others
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
            Beneficiaries
          </Tab>
        </TabList>

        <TabPanels maxWidth={"1000px"}>
          <TabPanel ml={-4}>
            <TransferToSelf
              accounts={accounts}
              fullname={fullname}
              casaAccountBalances={casaAccountBalances}
            />
          </TabPanel>

          <TabPanel ml={-4}>
            <TransferToARMAcct
              accounts={accounts}
              fullname={fullname}
              casaAccountBalances={casaAccountBalances}
            />
          </TabPanel>

          <TabPanel ml={-4}>
            <TransferToOthers
              accounts={accounts}
              fullname={fullname}
              casaAccountBalances={casaAccountBalances}
            />
          </TabPanel>

          <TabPanel ml={-4}>
            <Beneficiaries />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};
