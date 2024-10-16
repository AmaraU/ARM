import { useEffect, useState } from 'react';
import { Stack, Grid, GridItem, Text, Box, Button, HStack, Flex, Divider } from "@chakra-ui/react";
import { BiShow, BiHide} from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from "./Overview.module.css";
import { getImageUrl } from "../../../utils";
import { useNavigate } from 'react-router-dom';

export const Overview = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showComplete, setShowComplete ] = useState(true);
    const [ infoPopup, setInfoPopup ] = useState(false);
    const [ firstLogin, setFirstLogin ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (firstLogin) {
            setFirstLogin(false);
            navigate('/overview/dashboard/account-setup');
        }
    }, [])


    const transactions = [
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            name: 'Michael Adebanwo',
            account: '0214547897',
            amount: '100500',
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

    const currentItem = accounts[currentIndex];


    function infoPop() {
        setInfoPopup(false);
    }

    const hideBalance = () => {
        return "****************";
    }

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };
    const formatNumberDecimals = (number) => {
        return new Intl.NumberFormat('en-US', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        }).format(number);
    };

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % accounts.length);
    };

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + accounts.length) % accounts.length);
    };

    function copyToClipboard() {
        navigator.clipboard.writeText(currentItem.number);
    };




    return (
        <div className={styles.whole}>
            
            <Stack gap="20px" maxW='1500px'>

                <Text fontSize='24px' fontWeight={700} color='#101828' mb='4px'>Good Morning, Adeola Obasanjo</Text>

                {showComplete && <Box id='complete' backgroundColor='#EFDAE3' borderRadius='12px' backgroundImage={getImageUrl('whiteRoof.png')} bgSize='25% auto' bgRepeat='no-repeat' backgroundPosition='bottom right 200px'>
                    <HStack display='flex' justifyContent='space-between' backgroundImage={getImageUrl('arrowSquiggle.png')} bgSize='20% auto' bgRepeat='no-repeat' backgroundPosition='bottom right 80px' px='23px' py='11px'>
                        <Box>
                            <Text fontSize='18px' fontWeight={700} color='#A41857'>Complete Your Account Setup</Text>
                            <Text fontSize='12px' fontWeight={400} color='#A41857'>You need to complete your account setup to enjoy more services</Text>
                            <Button fontSize='12px' fontWeight={700} color='#A41857' padding={0} gap='4px' bg='transparent' _hover={{bg: 'transparent'}}>Complete Now <img src={getImageUrl("icons/redRightArrow.png")} /></Button>
                        </Box>
                        <Button alignSelf='start' bg='transparent' _hover={{bg: 'transparent'}} p={0} onClick={() => setShowComplete(false)}><img src={getImageUrl('icons/redClose.png')} alt="X" /></Button>
                    </HStack>
                </Box>}
                            
                <Flex flexDirection='column' alignItems='center' justifyItems='center' backgroundColor='#000000' backgroundImage={getImageUrl('backgroundGrey.png')} bgSize='100% 100%' borderRadius='12px' px='11px' py='40px'>
                    <HStack w='100%' justifyContent='space-between'>
                
                        <Button onClick={handlePrevious} pointerEvents={currentIndex === 0 ? 'none' : ''} p={0} borderRadius='75px' bg='#2C323A' _hover={{bg: '#2C323A'}}><img className={styles.arrow} src={getImageUrl('icons/whiteLeftAngle.png')} /></Button>

                        <HStack justifyContent='space-between' w='100%' px='8px'>
                            <Box>
                                <Text fontSize='18px' fontWeight={400} color='#FFFFFF'>Total Available Balance</Text>
                                <HStack ml="-5px" spacing={1} alignItems='center' mb='12px'>
                                    <Box fontSize="36px" fontWeight={500} color="#FFFFFF">₦</Box>
                                    <Text fontSize="32px" fontWeight={700} color="#FFFFFF">{totalBalanceVisible ? formatNumberDecimals(currentItem.balance) : hideBalance()}</Text>
                                    <Box borderRadius='500px' bg='#2F2F30' ml='8px' p='4px' cursor="pointer">
                                        { !totalBalanceVisible && <BiShow fontSize="lg" color="#667085" onClick={handleToggleVisibility} /> }
                                        { totalBalanceVisible && <BiHide fontSize="lg" color="#667085" onClick={handleToggleVisibility} /> }
                                    </Box>
                                </HStack>

                                <Text fontSize='14px' fontWeight={400} color='#FFFFFF'>Account Number</Text>
                                <HStack spacing={0} alignItems='center' mb='12px'>
                                    <Text fontSize='20px' fontWeight={700} color='#FFFFFF'>{currentItem.number}</Text>
                                    <Box borderRadius='500px' bg='#2F2F30' ml='8px' p='5px' cursor="pointer" onClick={copyToClipboard}><img className={styles.copy} src={getImageUrl('icons/copy.png')} /></Box>
                                </HStack>
                            </Box>

                            <Box alignSelf='start'>
                                <Box w='fit-content' borderRadius='36px' px='12px' py='8px' bg='#2C323A' color='#FFFFFF' fontSize='12px' fontWeight={500} cursor='pointer' onClick={() => setInfoPopup(true)}>{currentItem.type}</Box>
                                {infoPopup && <Box className={styles.theBox}>
                                    <div className={styles.header}>
                                        <h3>{currentItem.type}</h3>
                                        <img onClick={infoPop} src={getImageUrl('icons/greyClose.png')} />
                                    </div>
                                    <Divider />
                                    <Box py='18px' px='24px'>
                                        <Box className={styles.limitInfo} bg='#F7F7F7' borderRadius='4px' border='1px solid #EAECF0' p='9px'>
                                            <h4>TRANSACTION LIMIT</h4>
                                            <div className={styles.info}><img src={getImageUrl('icons/orangeTick.png')} />Maximum amount for to spend per transaction - <span>N100,000</span></div>
                                            <div className={styles.info}><img src={getImageUrl('icons/orangeTick.png')} />Maximum amount for to receive per transaction - <span>N50,000</span></div>
                                            <div className={styles.info}><img src={getImageUrl('icons/orangeTick.png')} />Total amount to spend per day - <span>N300,000</span></div>
                                            <div className={styles.info}><img src={getImageUrl('icons/orangeTick.png')} />Total amount to receive per day - <span>N300,000</span></div>
                                            <div className={styles.info}><img src={getImageUrl('icons/orangeTick.png')} />Balance limit - <span>N300,000</span></div>
                                        </Box>
                                    </Box>
                                </Box>}
                            </Box>
                        </HStack>
                        
                        <Button onClick={handleNext} pointerEvents={currentIndex === accounts.length - 1 ? 'none' : ''} p={0} borderRadius='75px' bg='#2C323A' _hover={{bg: '#2C323A'}}><img className={styles.arrow} src={getImageUrl('icons/whiteRightAngle.png')} /></Button>
                    </HStack>

                    <Box w='fit-content' bg='#2C323A' borderRadius='12px' p='8px' mb='-12px' display='flex' gap='4px'>
                        {accounts.map((_, idx) => (
                            <Box key={idx} bg={idx === currentIndex ? '#A41857' : '#FFFFFF'} cursor='pointer' onClick={() => setCurrentIndex(idx)} borderRadius='500px' w='8px' h='8px'></Box>
                        ))}
                    </Box>
                </Flex>


                <Grid gridTemplateColumns={{ lg: "1fr 1fr", md: "auto" }} gap="24px">
                    <GridItem colSpan={1} gap='24px'>
                        <Box>
                            <Text fontSize='18px' fontWeight={600} color='#101828' mb='12px'>Quick Services</Text>
                            <Box borderRadius='12px' border='1px solid #EAECF0' display='flex' justifyContent='space-between' p='20px'>
                                <Box display='flex' flexDir='column' alignItems='center' textAlign='center' fontSize='10px' fontWeight={500} color='#101828'>
                                    <Button w='48px' h='48px' p={0} bg='#A41857' borderRadius='1000px' mb='8px' _hover={{bg: '#A41857' }} onClick={() => navigate("/overview/transfers")}>
                                        <img src={getImageUrl("icons/whiteSend.png")} />
                                    </Button>
                                    Send Money
                                </Box>
                                <Box display='flex' flexDir='column' alignItems='center' textAlign='center' fontSize='10px' fontWeight={500} color='#101828'>
                                    <Button w='48px' h='48px' p={0} bg='#A41857' borderRadius='1000px' mb='8px' _hover={{bg: '#A41857' }} onClick={() => navigate("/overview/airtime")}>
                                        <img src={getImageUrl("icons/whiteBuy.png")} />
                                    </Button>
                                    Buy Airtime
                                </Box>
                                <Box display='flex' flexDir='column' alignItems='center' textAlign='center' fontSize='10px' fontWeight={500} color='#101828'>
                                    <Button w='48px' h='48px' p={0} bg='#A41857' borderRadius='1000px' mb='8px' _hover={{bg: '#A41857' }} onClick={() => navigate("/overview/airtime")}>
                                        <img src={getImageUrl("icons/whiteBuy.png")} />
                                    </Button>
                                    Buy Data
                                </Box>
                                <Box display='flex' flexDir='column' alignItems='center' textAlign='center' fontSize='10px' fontWeight={500} color='#101828'>
                                    <Button w='48px' h='48px' p={0} bg='#A41857' borderRadius='1000px' mb='8px' _hover={{bg: '#A41857' }} onClick={() => navigate("/overview/airtime")}>
                                        <img src={getImageUrl("icons/whiteBills.png")} />
                                    </Button>
                                    Pay Bills
                                </Box>
                                <Box display='flex' flexDir='column' alignItems='center' textAlign='center' fontSize='10px' fontWeight={500} color='#101828'>
                                    <Button w='48px' h='48px' p={0} bg='#A41857' borderRadius='1000px' mb='8px' _hover={{bg: '#A41857' }} onClick={() => navigate("/overview/loans")}>
                                        <img src={getImageUrl("icons/whiteLoans.png")} />
                                    </Button>
                                    Staff Loan
                                </Box>
                            </Box>
                        </Box>

                        <Box p='30px' mt='24px' bgImage={getImageUrl('advertImage.png')} backgroundSize='100% 100%' borderRadius='16px'>
                            <Box bg='#2C323A' fontSize='6px' fontWeight={600} color='#FFFFFF' w='fit-content' py='4px' px='6px' borderRadius='19px' mb='5px'>Investments</Box>
                            <Text lineHeight='33px' w='60%' fontSize='32px' fontWeight={700} color='#FFFFFF' mb='5px'>Best in Market Investments!</Text>
                            <Text w='60%' fontSize='12px' fontWeight={400} color='#FFFFFF' mb='24px'>We have the best investments for everyone</Text>
                            <img className={styles.dotss} src={getImageUrl('dotss.png')} />
                        </Box>
                    </GridItem>
                    
                    <GridItem colSpan={1}>
                        <Box>
                            <HStack mb='12px' justifyContent='space-between'>
                                <Text fontSize='18px' fontWeight={600} color='#101828'>Recent Transactions</Text>
                                <Text onClick={()=>navigate('/overview/dashboard/history')} fontSize='16px' fontWeight={600} color='#A41857' cursor='pointer' _hover={{textDecoration: 'underline'}}>See all</Text>
                            </HStack>
                            <Stack borderRadius='12px' border='1px solid #EAECF0' display='flex' justifyContent='space-between' gap='4px' >
                                <HStack bg='#D391AF0D' justify="space-between" margin={0} px='20px' py='12px'>
                                    <Text fontSize="14px" color="#667085" fontWeight={600}>Beneficiary Account</Text>
                                    <Text fontSize="14px" color="#667085" fontWeight={600}>Amount</Text>
                                    <Text fontSize="14px" color="#667085" fontWeight={600}>Date</Text>
                                </HStack>
                                <Stack px='18px' pt='10px'>
                                {
                                    transactions.map((t, k) =>
                                        <HStack key={k} justify="space-between" borderBottom="1px solid #F3F4F6" pt="10px" pb='4px' px={0} alignItems='start'>
                                            <HStack alignItems='start'>
                                                {t.type === 'credit' ? <img className={styles.credDeb} src={getImageUrl('icons/credit.png')} /> : ''}
                                                {t.type === 'debit' ? <img className={styles.credDeb} src={getImageUrl('icons/debit.png')} /> : ''}
                                                <Stack gap={0}>
                                                    <Text fontSize="14px" color="#394455" fontWeight={450}>{t.name}</Text>
                                                    <Text fontSize="12px" color="#667085" fontWeight={450}>{t.account}</Text>
                                                </Stack>
                                            </HStack>
                                            <HStack gap={0} alignItems='center'>
                                                <TbCurrencyNaira color="#394455"/>
                                                <Text fontSize="14px" color="#394455" fontWeight={450}>{formatNumber(t.amount)}</Text>
                                            </HStack>
                                            <Text fontSize="14px" color="#394455" fontWeight={450}>{t.date}</Text>
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