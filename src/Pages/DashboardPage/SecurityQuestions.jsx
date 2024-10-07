import React, { useState } from "react";
import { Stack, Text, Box, Button, HStack, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";


export const SecurityQuestions = ({ moveToPIN, moveToEmailAddress, proceed }) => {

    return (
        <>
        <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToPIN}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Security Questions</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>2/3</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='54px' pt='24px'>

                <Text fontSize='16px' fontWeight={400} color='#667085'>Select security question and answer that you will remember</Text>
                
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

                <Button onClick={proceed} mt='16px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>

            </Stack>
        </Box>
        </>
    );
};
