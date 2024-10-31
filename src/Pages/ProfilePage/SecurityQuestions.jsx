import React, { useState } from "react";
import { Stack, Text, Box, Button, HStack, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from "../../Components/CompleteTrans";

export const SecurityQuestions = ({ backHome }) => {

    const [ stepOne, setStepOne ] = useState(true);
    const [ showPIN, setShowPIN ] = useState(false);
    const [ complete, setComplete ] = useState(false);

    const moveToStepOne = () => {
        setStepOne(true);
        setShowPIN(false);
        setComplete(false);
        window.scrollTo({ top: 0});
    }

    const moveToPIN = () => {
        setStepOne(false);
        setShowPIN(true);
        setComplete(false);
        window.scrollTo({ top: 0});
    }

    const moveToComplete = () => {
        setStepOne(false);
        setShowPIN(false);
        setComplete(true);
        window.scrollTo({ top: 0});
    }


    return (
        <>
        {stepOne && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={moveToStepOne} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account Information</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>
                
                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 1</FormLabel>
                    <Select h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favorite color?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 1</FormLabel>
                    <Input h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 2</FormLabel>
                    <Select h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favourite city?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 2</FormLabel>
                    <Input h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 2</FormLabel>
                    <Select h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favourite city?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 2</FormLabel>
                    <Input h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button onClick={moveToPIN} mt='16px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Change Security Questions</Button>

            </Stack>
        </Box>}

        {showPIN && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToStepOne} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Complete Process</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text color='#667085' fontSize='16px'>Enter your PIN</Text>

                <OtpInput
                    size={"lg"}
                    length={4}
                    width={110}
                    height={"75px"}
                    setOtp={(e) => setPin(e)}
                />

                <Button onClick={moveToComplete} mt='16px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Continue</Button>

            </Stack>
        </Box>}


        {complete && <Box>
            <HStack bg='#EAECF0' h='51px' w='100%' borderRadius={'12px 12px 0 0'}></HStack>

            <Stack spacing={0} alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>
                
                <img src={getImageUrl('icons/success.png')} style={{width: '220px', height: 'auto'}} />
                <Text mt={'12px'} fontSize={'18px'} fontWeight={700} color={'#000000'} textAlign={'center'}>Success!</Text>
                <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>Security Questions changed successfully</Text>

                <Button onClick={moveToStepOne} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Okay, Thank You</Button>
            </Stack>
        </Box>}
        </>
    );
};
