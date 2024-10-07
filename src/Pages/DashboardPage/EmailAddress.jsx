import React, { useState, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel } from "@chakra-ui/react";
import { getImageUrl } from '../../../utils';
import { useNavigate } from 'react-router-dom';

export const EmailAddress = ({ moveToSecurity }) => {
    
    const navigate = useNavigate();


    return (
        <>
        <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToSecurity}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Email Address</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>3/3</Text>
            </HStack>

            <Stack spacing={'24px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Let's have your email address. A link will be sent to your mail to validate it</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Email Address</FormLabel>
                    <Input type='email' h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' />
                </FormControl>

                <Button
                    mt='16px' w='80%' h='48px' bg='#A41856' _hover={{bg: '#A41856'}}
                    color='#FFFFFF' fontSize='14px' fontWeight={600} onClick={()=>navigate('/overview')}
                >
                    Proceed
                </Button>
            </Stack>
        </Box>
        </>
    );
}