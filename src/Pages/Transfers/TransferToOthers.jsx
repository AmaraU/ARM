import React, { useState } from 'react';
import { Stack, Text, Box, Button, HStack, Divider, Input, Select, FormControl, FormLabel } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import { getImageUrl } from "../../../utils";
import { CompleteTransaction } from '../../Components/CompleteTrans';
import { CompleteTransaction2 } from '../../Components/CompleteTrans2';
import { useNavigate } from 'react-router-dom';
import html2canvas from 'html2canvas';



export const TransferToOthers = () => {

    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showOne, setShowOne ] = useState(true);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ showThree, setShowThree ] = useState(false);
    const [ showReceipt, setShowReceipt ] = useState(false);
    const [ isFilled, setIsFilled ] = useState(false);
    const [ enterPin, setEnterPin ] = useState(true);
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ isFailed, setIsFailed ] = useState(false);
    const navigate = useNavigate();
    const noOfAccounts = 1;

    const hideBalance = () => {
        return "****************";
    }

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }

    const generatePDF = () => {
        const input = document.getElementById('receipt');
        console.log(input);
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF();
                const imgProps = pdf.getImageProperties(imgData);
                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

                pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
                pdf.save('transaction_receipt.pdf');
            });
        
    };

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
    const moveToSuccess = () => {
        setEnterPin(false);
        setIsFailed(false);
        setIsSuccess(true);
        window.scrollTo({ top: 0});
    }
    const moveToFailed = () => {
        setEnterPin(false);
        setIsFailed(true);
        setIsSuccess(false);
        window.scrollTo({ top: 0});
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
            
            <CompleteTransaction type='transaction' />

        </Box>}

        {showReceipt && <Box id='receipt' width='600px' ml='auto' mr='auto' bg='#FFFFFF' p='40px' bgImage={getImageUrl('onboardingBackground.png')} bgSize='100% 100%'>
            <HStack justifyContent='space-between' alignItems='center'>
                <img style={{width: '95px', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} />
                <Text fontSize='20px' fontWeight={600} color='#101828'>Transaction Receipt</Text>
            </HStack>
            <Stack textAlign='center' alignItems='center' mt='24px'>
                <Text fontSize='16px' fontWeight={400} color='#101828'>Transaction Amount</Text>
                <Text fontSize='32px' fontWeight={700} color='#101828'>₦40,618.00</Text>
                <Text fontSize='14px' fontWeight={400} color='#101828'>21 Aug 2024 // 10:48 AM</Text>
                <Text fontSize='14px' fontWeight={400} color='#2AD062'>SUCCESSFUL</Text>
            </Stack>
            <Stack spacing='16px' mb='24px' mt='12px'>
                <Text fontSize='12px' fontWeight={600} color={'#A41857'} pb='16px' borderBottom='1px solid #EFECE9'>BENEFICIARY DETAILS</Text>
                
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Name:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>Adeola Jennifer Obasanjo</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Bank:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>Kuda Microfinance Bank</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Account Number:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>0256252414</Text>
                </HStack>
            </Stack>

            <Stack spacing='16px'>
                <Text fontSize='12px' fontWeight={600} color={'#A41857'} pb='16px' borderBottom='1px solid #EFECE9'>SENDER DETAILS</Text>

                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Name:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>Adebola Samson Adegbite</Text>
                </HStack>
                <HStack justifyContent='space-between' pb='16px' borderBottom='1px solid #EFECE9'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Bank:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>ARM Microfinance Bank</Text>
                </HStack>

                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Fees:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>₦10.50</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Remarks:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>Payment for Dress</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Transaction Reference:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>2338828377438299399X93ARM{'<'}MFB</Text>
                </HStack>
                <HStack justifyContent='space-between'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>Payment Type:</Text>
                    <Text fontSize='14px' fontWeight={500} color='#101828'>Bank Transfer</Text>
                </HStack>
            </Stack>

            <Stack textAlign='center' mt='50px'>
                <Text fontSize='12px' fontWeight={400} color={'#667085'}>© 2024 ARM MFB by ARM Group. All rights reserved.</Text>
                <Text fontSize='12px' fontWeight={400} color={'#667085'}>ARM MFB is licensed by the Central Bank of Nigeria. Deposits are insured by the Nigerian Deposit Insurance Corporation (NDIC)</Text>
            </Stack>

        </Box>}
        </>
    );
}