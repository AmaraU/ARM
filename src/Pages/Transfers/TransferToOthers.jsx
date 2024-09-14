import React, { useState } from 'react';
import { Stack, Text, Box, Button, HStack, Divider, Input, Select, FormControl, FormLabel, InputGroup, InputLeftElement, InputRightElement, Spinner } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from '../../Components/CompleteTrans';
import Switch from "react-switch";



export const TransferToOthers = () => {

    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showOne, setShowOne ] = useState(true);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ showThree, setShowThree ] = useState(false);
    const [ checkingAccount, setCheckingAccount ] = useState(false);
    const [ showName, setShowName ] = useState(false);
    const noOfAccounts = 2;

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
        window.scrollTo({ top: 0});
    }
    const moveToTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowThree(false);
        window.scrollTo({ top: 0});
    }
    const moveToThree = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowThree(true);
        setEnterPin(true);
        setIsSuccess(false);
        setIsFailed(false);
        window.scrollTo({ top: 0});
    }

    const checkAccount = () => {
        setCheckingAccount(true);
        setTimeout(() => setCheckingAccount(false), 5000);
        setTimeout(() => setShowName(true), 5000);
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
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Account to Debit</FormLabel>
                        <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select account" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                    </FormControl>

                    <FormControl w='75%' isRequired>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Account Number</FormLabel>
                        <InputGroup>
                            <Input onChange={checkAccount} type='number' h='48px' bg='#F7F7F7' border='1px solid #EAECF0' placeholder="Input acount number" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                            {checkingAccount && <InputRightElement><Spinner color='#A41857' w='24px' thickness='4px' /></InputRightElement>}
                        </InputGroup>
                    </FormControl>

                    {!showName && <HStack w='75%'>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Text cursor='pointer' fontSize='14px' fontWeight={500} color='#A41857'>Select from Beneficiary</Text>
                    </HStack>}

                    <FormControl w={'75%'} isRequired>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Bank Name</FormLabel>
                        <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select bank" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                    </FormControl>

                    {showName && <HStack w='75%' p='12px' bg='#EFECE9' border='1px solid #EAECF0' borderRadius='8px'>
                        <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Stack gap={0}>
                            <Text fontSize='10px' fontWeight={500} color='#667085'>BENEFICIARY NAME</Text>
                            <Text fontSize='14px' fontWeight={500} color='#101828'>Adeola Obasanjo</Text>
                        </Stack>
                    </HStack>}

                    {showName && <HStack w='75%' justifyContent='space-between'>
                        <Text fontSize='14px' fontWeight={500} color='#667085'>Save as Beneficiary</Text>
                        <Switch onColor='#A41857' checkedIcon={false} uncheckedIcon={false} height={24} width={40} handleDiameter={16} />
                    </HStack>}
                </>
                :
                <>
                    <HStack w='75%' backgroundColor='#000000' backgroundImage={getImageUrl('backgroundGrey.png')} bgSize='100% 100%' borderRadius='12px' p='14px' pt='24px' justifyContent='space-between'>
                        <Box>
                            <Text fontSize='14px' fontWeight={400} color='#FFFFFF'>Total Available Balance</Text>
                            <HStack ml="-1px" spacing={0}>
                                <Box fontSize="22px" color="#FFFFFF"><TbCurrencyNaira /></Box>
                                <Text fontSize="18px" fontWeight={600} color="#FFFFFF">{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                                <Box pl={3} cursor="pointer">
                                    { totalBalanceVisible && <BiShow fontSize="lg" color="#FFFFFF" onClick={handleToggleVisibility} /> }
                                    { !totalBalanceVisible && <BiHide fontSize="lg" color="#FFFFFF" onClick={handleToggleVisibility} /> }
                                </Box>
                            </HStack>
                        </Box>

                        <Box alignSelf='start' borderRadius='36px' px='12px' py='8px' bg='#2C323A' color='#FFFFFF' fontSize='10px' fontWeight={500}>Tier 1 Savings Account</Box>
                    </HStack>

                    <FormControl w='75%' isRequired>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Account Number</FormLabel>
                        <InputGroup>
                            <Input onChange={checkAccount} type='number' h='48px' bg='#F7F7F7' border='1px solid #EAECF0' placeholder="Input acount number" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                            {checkingAccount && <InputRightElement><Spinner color='#A41857' w='24px' thickness='4px' /></InputRightElement>}
                        </InputGroup>
                    </FormControl>

                    {showName && <HStack w='75%' p='12px' bg='#EFECE9' border='1px solid #EAECF0' borderRadius='8px'>
                        <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Stack gap={0}>
                            <Text fontSize='10px' fontWeight={500} color='#667085'>BENEFICIARY NAME</Text>
                            <Text fontSize='14px' fontWeight={500} color='#101828'>Adeola Obasanjo</Text>
                        </Stack>
                    </HStack>}

                    {!showName && <HStack w='75%'>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Text cursor='pointer' fontSize='14px' fontWeight={500} color='#A41857'>Select from Beneficiary</Text>
                    </HStack>}

                    {showName && <HStack w='75%' justifyContent='space-between'>
                        <Text fontSize='14px' fontWeight={500} color='#667085'>Save as Beneficiary</Text>
                        <Switch onColor='#A41857' checkedIcon={false} uncheckedIcon={false} height={24} width={40} handleDiameter={16} />
                    </HStack>}
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
                            <Box fontSize="20px" color="#FFFFFF"><TbCurrencyNaira /></Box>
                            <Text fontSize="18px" fontWeight={600} color="#FFFFFF">{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                            <Box pl={3} cursor="pointer">
                                { totalBalanceVisible && <BiShow fontSize="lg" color="#FFFFFF" onClick={handleToggleVisibility} /> }
                                { !totalBalanceVisible && <BiHide fontSize="lg" color="#FFFFFF" onClick={handleToggleVisibility} /> }
                            </Box>
                        </HStack>
                    </Box>

                    <Box alignSelf='start' borderRadius='36px' px='12px' py='8px' bg='#2C323A' color='#FFFFFF' fontSize='10px' fontWeight={500}>Tier 1 Savings Account</Box>
                </HStack>

                <Box w='75%' p='12px' bg='#F7F7F7' border='1px solid #EAECF0' borderRadius='8px'>
                    <HStack>
                        <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/greyBank.png')} />
                        <Stack gap={0}>
                            <Text fontSize='10px' fontWeight={500} color='#667085'>BENEFICIARY ACCOUNT NUMBER</Text>
                            <Text fontSize='14px' fontWeight={500} color='#101828'>Guaranty Trust Bank - 0122458754</Text>
                        </Stack>
                    </HStack>

                    <Divider h='2px' mt='12px' mb='12px'/>

                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Stack gap={0}>
                            <Text fontSize='10px' fontWeight={500} color='#667085'>BENEFICIARY NAME</Text>
                            <Text fontSize='14px' fontWeight={500} color='#101828'>Adeola Obasanjo</Text>
                        </Stack>
                    </HStack>

                </Box>

                <FormControl w='75%' isRequired>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Amount</FormLabel>
                    <InputGroup>
                        <InputLeftElement h='48px' color='#667085'>₦</InputLeftElement>
                        <Input type='number' h='48px' bg='#F7F7F7' border='1px solid #EAECF0' placeholder="Enter amount" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                    </InputGroup>
                </FormControl>

                <HStack w='75%' justifyContent='space-between'>
                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                        <Text fontSize='14px' fontWeight={500} color='#667085'>Your daily transfer limit is N200,000</Text>
                    </HStack>
                    <Text cursor='pointer' fontSize='14px' fontWeight={500} color='#A41857'>Increase your transfer limit</Text>
                </HStack>

                <FormControl w='75%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Note (Optional)</FormLabel>
                    <Input h='48px' bg='#F7F7F7' border='1px solid #EAECF0' autoComplete='off' />
                </FormControl>

                <Button
                    mt='16px' w='75%' h='48px'
                    bg='#A41856' _hover={{bg: '#A41856'}}
                    color='#FFFFFF' fontSize='14px' fontWeight={600}
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
            
            <CompleteTransaction type='transaction' />

        </Box>}
        </>
    );
}