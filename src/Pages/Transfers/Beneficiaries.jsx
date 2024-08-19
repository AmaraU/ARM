import React, { useState, useRef, useEffect } from 'react';
import { Stack, Grid, GridItem, Text, Box, Button, HStack, Circle, Flex, Divider, Input, Select, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { BiShow, BiHide, BiCopy } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from "./Transfers.module.css";
import { getImageUrl } from "../../../utils";

export const Beneficiaries = () => {

    return (
        <>            
        <Box>

            <HStack bg={'#EAECF0'} justifyContent={'center'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button alignSelf={'start'} justifySelf={'left'} h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Beneficiary List</Text>
            </HStack>
            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Input the transaction details below</Text>

                <Stack w={'75%'}>
                    <Text>Account to Debit</Text>
                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select account" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                </Stack>

                <Stack w={'75%'}>
                    <Text>Account to Credit</Text>
                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select account" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                </Stack>

                <Stack w={'75%'}>
                    <Text>Amount</Text>
                    <Input bg={'#F7F7F7'} border={'1px solid #EAECF0'} _placeholder={{fontSize: '16px', color: '#667085'}} placeholder="₦ 00.00"></Input>
                </Stack>

                <HStack w={'75%'} justifyContent={'space-between'}>
                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Your daily transfer limit is N200,000</Text>
                    </HStack>
                    <Text cursor={'pointer'} fontSize={'14px'} fontWeight={500} color={'#A41857'}>Increase your transfer limit</Text>
                </HStack>

                <Stack w={'75%'}>
                    <Text>Note (Optional)</Text>
                    <Input bg={'#F7F7F7'} border={'1px solid #EAECF0'} _placeholder={{fontSize: '16px', color: '#667085'}}></Input>
                </Stack>

                <Button mt={'16px'} w={'75%'} py={'20px'} px={'12px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
            </Stack>
        </Box>
        </>
    );
}