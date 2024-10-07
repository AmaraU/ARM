import React, { useState, useEffect } from 'react';
import { HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from './Overview.module.css';
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { TransactionPIN } from "./TransactionPIN";
import { SecurityQuestions } from './SecurityQuestions';
import { EmailAddress } from './EmailAddress';

export const AccountSetup = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const navigate = useNavigate();

    const handleTabsChange = (index) => {
        setTabIndex(index);
        window.scrollTo({ top: 0});
    }
    
    return (
        <div className={styles.whole}>
            <HStack spacing='8px' alignItems='center' mb='16px'>
                <button onClick={()=>navigate('/overview')}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" style={{ width: '24px', height: '24px' }} /></button>
                <Text fontSize='24px' fontWeight={700} color='#101828'>Account Setup</Text>
            </HStack>
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList borderBottom='none' gap='5px' mb='24px'>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Transaction PIN</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Security Questions</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Email Address</Tab>
                </TabList>

                <TabPanels maxWidth='1000px'>
                    <TabPanel ml={-4}>
                        <TransactionPIN moveToSecurity={()=>handleTabsChange(1)} />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <SecurityQuestions moveToPIN={()=>handleTabsChange(0)} moveToEmailAddress={()=>handleTabsChange(2)} />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <EmailAddress moveToSecurity={()=>handleTabsChange(1)} />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}
