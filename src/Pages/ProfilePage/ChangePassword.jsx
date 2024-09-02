import React, { useState } from "react";
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styles from "./ProfilePage.module.css";



export const ChangePassword = () => {

    const [ showCurrentPassword, setShowCurrentPassword ] = useState(false);
    const [ showNewPassword, setShowNewPassword ] = useState(false);
    const [ showConfirmNewPassword, setShowConfirmNewPassword ] = useState(false);



    return (
        <>
        <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Change Password</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='24px'>

                <Text w='80%' color='#667085' fontSize='18px' textAlign='center'>Make sure you use at least 8 characters. One lowercase, one uppercase and a special symbol</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Current Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showCurrentPassword ? 'text' : 'password'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                _hover={'transparent'}
                                onClick={() =>
                                    setShowCurrentPassword((showCurrentPassword) => !showCurrentPassword)
                                }>
                                {showCurrentPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>New Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showNewPassword ? 'text' : 'password'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                _hover={'transparent'}
                                onClick={() =>
                                    setShowNewPassword((showNewPassword) => !showNewPassword)
                                }>
                                {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showConfirmNewPassword ? 'text' : 'password'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                _hover={'transparent'}
                                onClick={() =>
                                    setShowConfirmNewPassword((showConfirmNewPassword) => !showConfirmNewPassword)
                                }>
                                {showConfirmNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>

            </Stack>
        </Box>
        </>
    );
};
