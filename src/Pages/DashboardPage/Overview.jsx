import React, { useState, useRef, useEffect } from 'react';
import { Stack, Grid, GridItem, Text, Box, Button, HStack, Circle, Divider } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from "./Overview.module.css";
import { getImageUrl } from "../../../utils";

export const Overview = () => {

    const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);
    const [ display, setDisplay ] = useState('flex')

    function closeComplete() {
        setDisplay('none');
    }

    const hideBalance = () => {
        return "****************";
    }

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }

    const transactions = [
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        }
    ]

    const accounts = [
        {
            number: 12345678,
            balance: 1234556,
            type: 'Tier 1 Savings Account'
        },
        {
            number: 87654321,
            balance: 76543.21,
            type: 'Tier 2 Current Account'
        }
    ]

    const delay = 2500;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex(prevIndex =>
                    prevIndex === accounts.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);


    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + accounts.length) % accounts.length);
    };

    const currentItem = accounts[currentIndex];



    return (
        <div className={styles.whole}>
            
            <Stack gap={"20px"}>

                <Text fontSize={'24px'} fontWeight={700} color={'#101828'} mb={'4px'} >Good Morning, Adeola Obasanjo</Text>

                <HStack className={styles.complete} id='complete' display={display} justifyContent={'space-between'} backgroundColor={'#EFDAE3'} borderRadius={'12px'} px={'23px'} py={'11px'}>
                    <Box>
                        <Text fontSize={'18px'} fontWeight={700} color={'#A41857'}>Complete Your Account Setup</Text>
                        <Text fontSize={'12px'} fontWeight={400} color={'#A41857'}>You need to complete your account setup to enjoy more services</Text>
                        <Button fontSize={'12px'} fontWeight={700} color={'#A41857'} padding={0} gap={'4px'} bg={'transparent'} _hover={{bg: 'transparent'}}>Complete Now <img src={getImageUrl("icons/redRightArrow.png")} /></Button>
                    </Box>
                    <Button alignSelf={'start'} bg={'transparent'} _hover={{bg: 'transparent'}} p={0}><img src={getImageUrl('icons/redClose.png')} alt="X" onClick={closeComplete} /></Button>
                </HStack>
                            
                            
                <HStack backgroundColor={'#000000'} backgroundImage={getImageUrl('backgroundGrey.png')} bgSize={'100% 100%'} borderRadius={'12px'} px={'11px'} py={'40px'} justifyContent={'space-between'}>
            
                    <Button onClick={handlePrevious} isDisabled={currentIndex === 0} borderRadius={'75px'} bg={'#2C323A'} _hover={{bg: '#2C323A'}}><img src={getImageUrl('icons/whiteLeftAngle.png')} /></Button>

                    <HStack justifyContent={'space-between'} w={'100%'} px={'8px'}>
                        <Box>
                            <Text fontSize={'18px'} fontWeight={400} color={'#FFFFFF'}>Total Available Balance</Text>
                            <HStack ml={"-1px"} spacing={0}>
                                <Box fontSize={"36px"} color={"#FFFFFF"}><TbCurrencyNaira /></Box>
                                <Text fontSize={"32px"} fontWeight={600} color={"#FFFFFF"}>{totalBalanceVisible ? currentItem.balance : hideBalance()}</Text>
                                <Box pl={3} cursor={"pointer"}>
                                    { totalBalanceVisible && <BiShow fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                    { !totalBalanceVisible && <BiHide fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                </Box>
                            </HStack>

                            <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>Account Number</Text>
                            <Text fontSize={'20px'} fontWeight={700} color={'#FFFFFF'}>{currentItem.number}</Text>
                        </Box>

                        <Box bg={'#2C323A'} borderRadius={'12px'} p={'8px'} alignSelf={'end'} mb={'-12px'} display={'flex'} gap={'4px'}>
                            {accounts.map((_, idx) => (
                                <Box key={idx} borderRadius={'500px'} bg={idx === currentIndex ? '#A41857' : '#FFFFFF'} w={'8px'} h={'8px'}></Box>
                                // <Box key={idx} className={`${styles.slideDot} ${index === idx ? styles.active : ""}`} onClick={() => setIndex(idx)}></Box>
                            ))}
                        </Box>

                        <Box alignSelf={'start'} borderRadius={'36px'} px={'12px'} py={'8px'} bg={'#2C323A'} color={'#FFFFFF'} fontSize={'12px'} fontWeight={500}>{currentItem.type}</Box>
                    </HStack>
                    
                    <Button onClick={handleNext} isDisabled={currentIndex === accounts.length - 1} borderRadius={'75px'} bg={'#2C323A'} _hover={{bg: '#2C323A'}}><img src={getImageUrl('icons/whiteRightAngle.png')} /></Button>
                </HStack>


                <Grid gridTemplateColumns={{ lg: "1fr 1fr", md: "auto" }} gap={"24px"}>
                    <GridItem colSpan={1} gap={'24px'}>
                        <Box>
                            <Text fontSize={'18px'} fontWeight={600} color={'#101828'} mb={'12px'}>Quick Services</Text>
                            <Box borderRadius={'12px'} border={'1px solid #EAECF0'} display={'flex'} justifyContent={'space-between'} gap={'4px'} px={'34px'} py={'20px'}>
                                <Box display={'flex'} flexDir={'column'} alignItems={'center'} textAlign={'center'} fontSize={'12px'} fontWeight={600} color={'#101828'}><Button w={'48px'} h={'48px'} p={0} bg={'#A41857'} borderRadius={'1000px'} mb={'8px'} _hover={{bg: '#A41857' }}><img src={getImageUrl("icons/whiteSend.png")} /></Button>Send Money</Box>
                                <Box display={'flex'} flexDir={'column'} alignItems={'center'} textAlign={'center'} fontSize={'12px'} fontWeight={600} color={'#101828'}><Button w={'48px'} h={'48px'} p={0} bg={'#A41857'} borderRadius={'1000px'} mb={'8px'} _hover={{bg: '#A41857' }}><img src={getImageUrl("icons/whiteBuy.png")} /></Button>Buy Airtime</Box>
                                <Box display={'flex'} flexDir={'column'} alignItems={'center'} textAlign={'center'} fontSize={'12px'} fontWeight={600} color={'#101828'}><Button w={'48px'} h={'48px'} p={0} bg={'#A41857'} borderRadius={'1000px'} mb={'8px'} _hover={{bg: '#A41857' }}><img src={getImageUrl("icons/whiteBuy.png")} /></Button>Buy Data</Box>
                                <Box display={'flex'} flexDir={'column'} alignItems={'center'} textAlign={'center'} fontSize={'12px'} fontWeight={600} color={'#101828'}><Button w={'48px'} h={'48px'} p={0} bg={'#A41857'} borderRadius={'1000px'} mb={'8px'} _hover={{bg: '#A41857' }}><img src={getImageUrl("icons/whiteLoans.png")} /></Button>Quick Loan</Box>
                                <Box display={'flex'} flexDir={'column'} alignItems={'center'} textAlign={'center'} fontSize={'12px'} fontWeight={600} color={'#101828'}><Button w={'48px'} h={'48px'} p={0} bg={'#A41857'} borderRadius={'1000px'} mb={'8px'} _hover={{bg: '#A41857' }}><img src={getImageUrl("icons/whiteSavings.png")} /></Button>Target Savings</Box>

                            </Box>
                        </Box>

                        <Box className={styles.advert} mt={'24px'} p={'30px'}>
                            <Box bg={'#2C323A'} fontSize={'6px'} fontWeight={600} color={'#FFFFFF'} w={'fit-content'} py={'4px'} px={'6px'} borderRadius={'19px'} >Investments</Box>
                            <Text lineHeight={'33px'} w={'60%'} fontSize={'32px'} fontWeight={700} color={'#FFFFFF'}>Best in Market Investments!</Text>
                            <Text w={'60%'} fontSize={'12px'} fontWeight={400} color={'#FFFFFF'}>We have the best investments for everyone</Text>
                            <img className={styles.dotss} src={getImageUrl('dotss.png')} alt="" />
                        </Box>
                    </GridItem>
                    <GridItem colSpan={1}>
                        <Box>
                            <HStack mb={'12px'} justifyContent={'space-between'}>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Recent Transactions</Text>
                                <Text fontSize={'16px'} fontWeight={600} color={'#A41857'} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>See all</Text>
                            </HStack>
                            <Stack borderRadius={'12px'} border={'1px solid #EAECF0'} display={'flex'} justifyContent={'space-between'} gap={'4px'} >
                                <HStack bg={'#D391AF0D'} justify={"space-between"} margin={0} p={0} px={'20px'} py={'12px'}>
                                    <Text fontSize={"14px"} color={"#667085"} fontWeight={600}>Beneficiary Account</Text>
                                    <Text fontSize={"14px"} color={"#667085"} fontWeight={600}>Amount</Text>
                                    <Text fontSize={"14px"} color={"#667085"} fontWeight={600}>Date</Text>
                                </HStack>
                                <Stack px={'18px'} pt={'10px'}>
                                {
                                    transactions.map((t, k) =>
                                        <HStack key={k} justify={"space-between"} borderBottom={"1px solid #F3F4F6"} pt={"10px"} pb={'4px'} px={0} alignItems={'start'}>
                                            <HStack alignItems={'start'}>
                                                {t.type === 'credit' ? <img className={styles.credDeb} src={getImageUrl('icons/credit.png')} /> : ''}
                                                {t.type === 'debit' ? <img className={styles.credDeb} src={getImageUrl('icons/debit.png')} /> : ''}
                                                <Stack gap={0}>
                                                    <Text fontSize={"14px"} color={"#394455"} fontWeight={500}>{t.name}</Text>
                                                    <Text fontSize={"12px"} color={"#667085"} fontWeight={500}>{t.account}</Text>
                                                </Stack>
                                            </HStack>
                                            <HStack gap={0} alignItems={'center'}>
                                                <TbCurrencyNaira color={"#394455"}/>
                                                <Text fontSize={"14px"} color={"#394455"} fontWeight={500}>{t.amount}</Text>
                                            </HStack>
                                            <Text fontSize={"14px"} color={"#394455"} fontWeight={500}>{t.date}</Text>
                                        </HStack>
                                    )
                                }
                                </Stack>
                            </Stack>
                        </Box>
                    </GridItem>
                </Grid>

            </Stack>
        </div>
    );
}