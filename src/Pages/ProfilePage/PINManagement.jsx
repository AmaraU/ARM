import React, { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";
import { ForgotPIN } from "./ForgotPIN";

export const PINManagement = () => {

    const [ managePIN, setManagePIN ] = useState(true);
    const [ showCreatePIN, setShowCreatePIN ] = useState(false);
    const [ showForgotPIN, setShowForgotPIN ] = useState(false);
    const [ showChangePIN, setShowChangePIN ] = useState(false);

    const moveToManagePIN = () => {
        setManagePIN(true);
        setShowCreatePIN(false);
        setShowForgotPIN(false);
        setShowChangePIN(false);
        window.scrollTo({ top: 0});
    }

    const moveToCreatePIN = () => {
        setManagePIN(false);
        setShowCreatePIN(true);
        setShowForgotPIN(false);
        setShowChangePIN(false);
        window.scrollTo({ top: 0});
    }

    const moveToForgotPIN = () => {
        setManagePIN(false);
        setShowCreatePIN(false);
        setShowForgotPIN(true);
        setShowChangePIN(false);
        window.scrollTo({ top: 0});
    }

    const moveToChangePIN = () => {
        setManagePIN(false);
        setShowCreatePIN(false);
        setShowForgotPIN(false);
        setShowChangePIN(true);
        window.scrollTo({ top: 0});
    }

    return (
        <>
        {managePIN && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>PIN Management</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Make sure you keep PIN safe and secure</Text>

                <HStack>
                    <Button onClick={moveToCreatePIN} bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Create PIN</Button>
                    <Button onClick={moveToForgotPIN} bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Forgot PIN</Button>
                    <Button onClick={moveToChangePIN} bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Change PIN</Button>
                </HStack>

            </Stack>
        </Box>}

        {showCreatePIN && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={moveToManagePIN} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Create PIN</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Secure your account with 4 digits PIN</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 1</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favorite color?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 1</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Confirm PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button onClick={moveToManagePIN} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Create PIN</Button>

            </Stack>
        </Box>}


        {showForgotPIN && <ForgotPIN backHome={moveToManagePIN} /> }


        {showChangePIN && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Change PIN</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Make sure you keep PIN safe and secure</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Current PIN</FormLabel>
                    <Input maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>New PIN</FormLabel>
                    <Input maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Confirm PIN</FormLabel>
                    <Input maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button onClick={moveToManagePIN} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Change PIN</Button>

            </Stack>
        </Box>}
        </>
    );
};
