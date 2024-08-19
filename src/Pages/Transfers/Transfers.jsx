import React, { useState } from "react";
import { Box, Button, Divider, HStack, Input, InputGroup, InputLeftElement, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from './Transfers.module.css';
import { getImageUrl } from "../../../utils";
import { TransferToOthers } from "./TransferToOthers";
import { TransferToSelf } from "./TransferToSelf";
import { Beneficiaries } from "./Beneficiaries";

export const Transfers = () => {
    
    return (
        <div className={styles.whole}>
            <Text fontSize={'24px'} fontWeight={700} color={'#101828'} mb={'16px'}>Transfers</Text>
            <Tabs>
                <TabList borderBottom={'none'} gap={'5px'} mb={'24px'}>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Transfer To Self</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Transfer To Others</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Beneficiaries</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel ml={-4} >
                        <TransferToSelf />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <TransferToOthers />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <Beneficiaries />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}