import {
    Button,
    Stack,
    Text,
    HStack,
} from '@chakra-ui/react';
import React from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";


export const Welcome = () => {

    const navigate = useNavigate();

    function copyToClipboard() {
        navigator.clipboard.writeText('0900509005');
    };
    
    return (
        <Stack h={'100vh'} alignItems={'center'} textAlign={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '140px', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <img style={{marginTop: '', width: '100%', height: 'auto'}}  src={getImageUrl('welcome.png')} alt="" />
            <Text mt={'-140px'} fontSize={'48px'} fontWeight={700} color={'#14142A'}>Welcome Adeola</Text>
            <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Your ARM MFB profile has been successfully created. You can now proceed to login and complete your setup</Text>

            <Stack w={'100%'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} px={'20px'} py={'12px'} borderRadius={'6px'} spacing={0}>
                <Text textAlign={'left'} fontSize={'16px'} fontWeight={400} color={'#101828'}>Here is your account number</Text>
                <HStack justifyContent={'space-between'} alignItems={'center'}>
                    <Text fontSize={'24px'} fontWeight={700} color={'#0C111D'}>A/NO: 0900509005</Text>
                    <button onClick={copyToClipboard}><img src={getImageUrl('icons/blackCopy.png')} alt="" /></button>
                </HStack>
            </Stack>

            <Button onClick={()=>navigate('/signin')} id="continue" bg={'#A41857'} _hover={{bg: '#A41857'}} fontSize={'18px'} fontWeight={600} color={'#FFFFFF'} py={'12px'} w={'100%'} h={'fit-content'}>Login</Button>
        </Stack>
    )
}