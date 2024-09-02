import React, { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";

export const ForgotPIN = ({ backHome }) => {

    const [ stepOne, setStepOne ] = useState(true);
    const [ stepTwo, setStepTwo ] = useState(false);
    const [ stepThree, setStepThree ] = useState(false);

    const moveToStepOne = () => {
        setStepOne(true);
        setStepTwo(false);
        setStepThree(false);
        window.scrollTo({ top: 0});
    }

    const moveToStepTwo = () => {
        setStepOne(false);
        setStepTwo(true);
        setStepThree(false);
        window.scrollTo({ top: 0});
    }

    const moveToStepThree = () => {
        setStepOne(false);
        setStepTwo(false);
        setStepThree(true);
        window.scrollTo({ top: 0});
    }

    return (
        <>
        {stepOne && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={backHome} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Forgot PIN</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Provide answer to your security question</Text>

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

                <Button onClick={moveToStepTwo} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Continue</Button>

            </Stack>
        </Box>}


        {stepTwo && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={moveToStepOne} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Forgot PIN</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Kindly enter the 6-digits OTP we sent to <b>+234905776****</b></Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>OTP</FormLabel>
                    <Input maxLength={6} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button onClick={moveToStepThree} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Continue</Button>

            </Stack>
        </Box>}

        {stepThree && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={moveToStepTwo} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Forgot PIN</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Make sure you keep PIN safe and secure</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Confirm PIN</FormLabel>
                    <Input maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button onClick={backHome} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Continue</Button>

            </Stack>
        </Box>}
        </>
    );
};
