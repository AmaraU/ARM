import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from './AirtimeBills.module.css';
import { BuyAirtime } from "./BuyAirtime";
import { BuyData } from "./BuyData";
import { BillsPayment } from "./BillsPayment";

export const AirtimeBills = () => {
    
    return (
        <div className={styles.whole}>
            <Text fontSize={'24px'} fontWeight={700} color={'#101828'} mb={'16px'}>Airtime and Bills</Text>
            <Tabs>
                <TabList borderBottom={'none'} gap={'5px'} mb={'24px'}>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Buy Airtime</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Buy Data</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Bills Payment</Tab>
                </TabList>

                <TabPanels maxWidth={'1000px'}>
                    <TabPanel ml={-4}>
                        <BuyAirtime />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <BuyData />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <BillsPayment />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

;

// box-shadow: 0px 6px 6px -6px #00000029;
