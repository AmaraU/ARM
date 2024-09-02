import React, { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";

export const PINManagement = () => {

    // const [ managePIN, setManagePIN ] = useState(true);
    // const [ showPersonalDetails, setShowPersonalDetails ] = useState(false);
    // const [ showContactDetails, setShowContactDetails ] = useState(false);
    // const [ showDocumentUpload, setShowDocumentUpload ] = useState(false);

    // const moveToManagePIN = () => {
    //     setShowEditProfile(true);
    //     setShowPersonalDetails(false);
    //     setShowContactDetails(false);
    //     setShowDocumentUpload(false);
    // }

    return (
        <>
        <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>PIN Management</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Make sure you keep PIN safe and secure</Text>

                <HStack>
                    <Button bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Create PIN</Button>
                    <Button bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Forget PIN</Button>
                    <Button bg='#FFFFFF' border='1px solid #EAECF0' borderRadius='8px' _hover={{bg: '#FFFFFF'}} fontSize='18px' fontWeight={600} color='#A41857' alignItems='center' px='50px' py='38px'>Change PIN</Button>
                </HStack>

            </Stack>
        </Box>
        </>
    );
};
