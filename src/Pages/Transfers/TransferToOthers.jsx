import React, { useState } from 'react';
import { Stack, Text, Box, Button, HStack, Divider, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from '../../Components/CompleteTrans';


export const TransferToOthers = () => {

    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showOne, setShowOne ] = useState(true);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ showThree, setShowThree ] = useState(false);
    const noOfAccounts = 1;

    const hideBalance = () => {
        return "****************";
    }

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }

    const moveToOne = () => {
        setShowOne(true);
        setShowTwo(false);
        setShowThree(false);
    }
    const moveToTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowThree(false);
    }
    const moveToThree = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowThree(true);
    }

    return (
        <>            
        {showOne && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Transfer to Others</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>1/3</Text>
            </HStack>
            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Input the transaction details below</Text>
            
                {noOfAccounts > 1 ? <>
                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Account to Debit</FormLabel>
                        <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select account" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                    </FormControl>

                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Account Number</FormLabel>
                        <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Input account number" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                    </FormControl>

                    <HStack w={'75%'}>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                        <Text cursor={'pointer'} fontSize={'14px'} fontWeight={500} color={'#A41857'}>Select from Beneficiary</Text>
                    </HStack>

                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Bank Name</FormLabel>
                        <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select bank" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                    </FormControl>
                </>
                :
                <>
                    <HStack w={'75%'} backgroundColor={'#000000'} backgroundImage={getImageUrl('backgroundGrey.png')} bgSize={'100% 100%'} borderRadius={'12px'} p={'14px'} pt={'24px'} justifyContent={'space-between'}>
                        <Box>
                            <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>Total Available Balance</Text>
                            <HStack ml={"-1px"} spacing={0}>
                                <Box fontSize={"22px"} color={"#FFFFFF"}><TbCurrencyNaira /></Box>
                                <Text fontSize={"18px"} fontWeight={600} color={"#FFFFFF"}>{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                                <Box pl={3} cursor={"pointer"}>
                                    { totalBalanceVisible && <BiShow fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                    { !totalBalanceVisible && <BiHide fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                </Box>
                            </HStack>
                        </Box>

                        <Box alignSelf={'start'} borderRadius={'36px'} px={'12px'} py={'8px'} bg={'#2C323A'} color={'#FFFFFF'} fontSize={'10px'} fontWeight={500}>Tier 1 Savings Account</Box>
                    </HStack>

                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Account Number</FormLabel>
                        <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Input acount number" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                    </FormControl>

                    <HStack w={'75%'}>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                        <Text cursor={'pointer'} fontSize={'14px'} fontWeight={500} color={'#A41857'}>Select from Beneficiary</Text>
                    </HStack>

                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Bank Name</FormLabel>
                        <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select bank" _placeholder={{fontSize: '16px', color: '#667085'}} >
                            <option value="">Bank 1</option>
                        </Select>
                    </FormControl>
                </>}
                
                <Button
                    mt={'16px'}
                    w={'75%'} h={'48px'}
                    bg={'#A41856'} _hover={{bg: '#A41856'}}
                    color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                    onClick={moveToTwo}
                >Continue</Button>
            </Stack>
        </Box>}


        {showTwo && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToOne}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Transfer to Others</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>2/3</Text>
            </HStack>
            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Input the transaction details below</Text>
                <HStack w={'75%'} backgroundColor={'#000000'} backgroundImage={getImageUrl('backgroundGrey.png')} bgSize={'100% 100%'} borderRadius={'12px'} p={'14px'} pt={'24px'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>Total Available Balance</Text>
                        <HStack ml={"-1px"} spacing={0}>
                            <Box fontSize={"20px"} color={"#FFFFFF"}><TbCurrencyNaira /></Box>
                            <Text fontSize={"18px"} fontWeight={600} color={"#FFFFFF"}>{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                            <Box pl={3} cursor={"pointer"}>
                                { totalBalanceVisible && <BiShow fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                { !totalBalanceVisible && <BiHide fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                            </Box>
                        </HStack>
                    </Box>

                    <Box alignSelf={'start'} borderRadius={'36px'} px={'12px'} py={'8px'} bg={'#2C323A'} color={'#FFFFFF'} fontSize={'10px'} fontWeight={500}>Tier 1 Savings Account</Box>
                </HStack>

                <Box w={'75%'} p={'12px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} borderRadius={'8px'}>
                    <HStack>
                        <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/greyBank.png')} />
                        <Stack gap={0}>
                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>BENEFICIARY ACCOUNT NUMBER</Text>
                            <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Guaranty Trust Bank - 0122458754</Text>
                        </Stack>
                    </HStack>

                    <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Stack gap={0}>
                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>BENEFICIARY NAME</Text>
                            <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Adeola Obasanjo</Text>
                        </Stack>
                    </HStack>

                </Box>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Amount</FormLabel>
                    <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Enter amount" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                </FormControl>

                <HStack w={'75%'} justifyContent={'space-between'}>
                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Your daily transfer limit is N200,000</Text>
                    </HStack>
                    <Text cursor={'pointer'} fontSize={'14px'} fontWeight={500} color={'#A41857'}>Increase your transfer limit</Text>
                </HStack>

                <FormControl w={'75%'}>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Note (Optional)</FormLabel>
                    <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} autoComplete='off' />
                </FormControl>

                <Button
                    mt={'16px'}
                    w={'75%'} h={'48px'}
                    bg={'#A41856'} _hover={{bg: '#A41856'}}
                    color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                    onClick={moveToThree}
                >Continue</Button>
            </Stack>
        </Box>}


        {showThree && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToTwo}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Complete Transaction</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>3/3</Text>
            </HStack>

            <CompleteTransaction />

        </Box>}
        </>
    );
}