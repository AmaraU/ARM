import { useState } from 'react';
import { Box, Button, HStack, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from './Overview.module.css';
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { TransactionPIN } from "./TransactionPIN";
import { SecurityQuestions } from './SecurityQuestions';
import { EmailAddress } from './EmailAddress';

export const AccountSetup = () => {

    const [ accountSetup, setAccountSetup ] = useState(true);
    const [ showTransPIN, setShowTransPIN ] = useState(false);
    const [ showSecurityQuestion, setShowSecurityQuestion ] = useState(false);
    const [ showEmailAddress, setShowEmailAddress ] = useState(false);

    const [ transPINFilled, setTransPINFilled ] = useState(false);
    const [ securityQuestionsFilled, setSecurityQuestionsFilled ] = useState(false);
    const [ emailAddressFilled, setEmailAddressFilled ] = useState(false);


    const moveToSeup = () => {
        setAccountSetup(true);
        setShowTransPIN(false);
        setShowSecurityQuestion(false);
        setShowEmailAddress(false);
    }

    const moveToTransPIN = () => {
        setAccountSetup(false);
        setShowTransPIN(true);
        setShowSecurityQuestion(false);
        setShowEmailAddress(false);

        setTransPINFilled(true);
    }
    const moveToSecurityQuestions = () => {
        setAccountSetup(false);
        setShowTransPIN(false);
        setShowSecurityQuestion(true);
        setShowEmailAddress(false);

        setSecurityQuestionsFilled(true);
    }
    const moveToEmailAddress = () => {
        setAccountSetup(false);
        setShowTransPIN(false);
        setShowSecurityQuestion(false);
        setShowEmailAddress(true);

        setEmailAddressFilled(true);
    }
    


    const [tabIndex, setTabIndex] = useState(0);
    const navigate = useNavigate();

    const handleTabsChange = (index) => {
        setTabIndex(index);
        window.scrollTo({ top: 0 });
    }

    return (
        <div className={styles.whole}>

            <HStack mb='40px' spacing='12px'>
                <img src={getImageUrl('icons/blackLeftArrow.png')} />
                <Text fontSize='24px' fontWeight={700} color='#101828'>Complete Account Setup</Text>
            </HStack>
            
            {accountSetup && <Box>
                <HStack
                    bg="#EAECF0"
                    px="14px"
                    py="14px"
                    borderRadius="12px 12px 0 0"
                    justifyContent="space-between"
                >
                    <Text
                        flex="95%"
                        textAlign="center"
                        fontSize="18px"
                        fontWeight={600}
                        color="#101828"
                    >
                        Account Setup
                    </Text>
                </HStack>
                <Stack
                    spacing="24px"
                    alignItems="center"
                    border="1px solid #EFECE9"
                    bg="#FFFFFF"
                    borderRadius="0 0 12px 12px"
                    py="16px"
                    pb="114px"
                >
                    <Text  w="75%" fontSize="16px" color="#667085" textAlign="center">
                        You need to complete your account setup to ensure the security and integrity of your transactions conducted on ARM MFB.
                        Please follow the steps below
                    </Text>

                    <Stack w="75%" bg='#F2F4F7' py='18px' px='16px' borderRadius='8px'>

                        <HStack spacing='12px' onClick={moveToTransPIN} cursor='pointer' w='fit-content'>
                            <Box p='8px' borderRadius='38px' border={transPINFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                                <Box p='2px' borderRadius='38px' bg={transPINFilled ? '#2AD062' : '#667085'}>
                                    <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                                </Box>
                            </Box>
                            <Text fontSize='16px' fontWeight={600} color='#0C111D'>Create transaction PIN</Text>
                        </HStack>

                        <Box h='14px' w='1px' ml='16px' border='1px dashed #A0A3BD'></Box>

                        <HStack spacing='12px' onClick={moveToSecurityQuestions} cursor='pointer' w='fit-content'>
                            <Box p='8px' borderRadius='38px' border={securityQuestionsFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                                <Box p='2px' borderRadius='38px' bg={securityQuestionsFilled ? '#2AD062' : '#667085'}>
                                    <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                                </Box>
                            </Box>
                            <Text fontSize='16px' fontWeight={600} color='#0C111D'>Add security question</Text>
                        </HStack>

                        <Box h='14px' w='1px' ml='16px' border='1px dashed #A0A3BD'></Box>


                        <HStack spacing='12px' onClick={moveToEmailAddress} cursor='pointer' w='fit-content'>
                            <Box p='8px' borderRadius='38px' border={emailAddressFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                                <Box p='2px' borderRadius='38px' bg={emailAddressFilled ? '#2AD062' : '#667085'}>
                                    <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                                </Box>
                            </Box>
                            <Text fontSize='16px' fontWeight={600} color='#0C111D'>Validate email address</Text>
                        </HStack>
                    </Stack>

                    <Button
                        mt="16px"
                        w="75%"
                        h="48px"
                        bg="#A41856"
                        _hover={{ bg: "#90164D" }}
                        color="#FFFFFF"
                        fontSize="14px"
                        fontWeight={600}
                        // onClick={moveToTwo}
                        >
                        Proceed
                    </Button>
                </Stack>
            </Box>}

            {showTransPIN &&  <TransactionPIN proceed={moveToSeup} moveToSecurity={() => handleTabsChange(1)} />}
            {showSecurityQuestion &&  <SecurityQuestions proceed={moveToSeup} moveToPIN={moveToTransPIN} moveToEmailAddress={moveToEmailAddress} />}
            {showEmailAddress &&  <EmailAddress proceed={moveToSeup} moveToSecurity={moveToSecurityQuestions}  />}
            
        </div>
    )
}
