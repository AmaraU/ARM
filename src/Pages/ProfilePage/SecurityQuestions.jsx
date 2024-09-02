import React, { useState } from "react";
import { Stack, Text, Box, Button, HStack, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";

export const SecurityQuestions = () => {

    const [ stepOne, setStepOne ] = useState(true);
    const [ stepTwo, setStepTwo ] = useState(true);
    const [ complete, setComplete ] = useState(true);

    const moveToStepOne = () => {
        setStepOne(true);
        setStepTwo(false);
        setComplete(false);
    }

    const moveToStepTwo = () => {
        setStepOne(false);
        setStepTwo(true);
        setComplete(false);
    }

    const moveToComplete = () => {
        setStepOne(false);
        setStepTwo(false);
        setComplete(true);
    }


    return (
        <>
        {stepOne && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Security Questions</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>
                <Text>Input your 4 digit PIN</Text>
                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>
                <Button onClick={moveToStepTwo} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Continue</Button>
            </Stack>
        </Box>}

        {stepTwo && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={moveToStepOne} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account Information</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>
                
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
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 2</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favourite city?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 2</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Security Question 2</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' >
                        <option>What is your favourite city?</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Answer 2</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button onClick={moveToComplete} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Change Security Questions</Button>

            </Stack>
        </Box>}

        {complete && <Box>
            <HStack bg='#EAECF0' h='51px' w='100%' borderRadius={'12px 12px 0 0'}></HStack>

            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>
                
                <img src={getImageUrl('icons/success.png')} style={{width: '220px', height: 'auto'}} />
                <Text mt={'12px'} fontSize={'18px'} fontWeight={700} color={'#000000'} textAlign={'center'}>Success!</Text>
                <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>Security Question ChangePassword successfully</Text>

                <Button onClick={moveToStepTwo} mt='16px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Okay, Thank You</Button>
            </Stack>
        </Box>}
        </>
    );
};