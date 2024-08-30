import { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, Divider } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";
import { BiShow, BiHide } from "react-icons/bi";

export const AccountInformation = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showUpgrade, setShowUpgrade ] = useState(true);
    const [ infoPopup, setInfoPopup ] = useState(false);
    const popupRef = useRef(null);

    

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
    };

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    };

    function copyToClipboard() {
        navigator.clipboard.writeText(currentItem.number);
    };



    return (
        <>
        <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account Information</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                    {showUpgrade && <HStack id='complete' w='75%' backgroundColor='#EFDAE3' borderRadius='12px' display='flex' justifyContent='space-between' backgroundImage={getImageUrl('whiteRoof.png')} bgSize='20% auto' bgRepeat='no-repeat' backgroundPosition='bottom right 80px' px='23px' py='11px'>
                        <Box>
                            <Text fontSize='18px' fontWeight={700} color='#A41857'>Upgrade Your Account</Text>
                            <Text fontSize='12px' fontWeight={400} color='#A41857'>You need to upgrade your account setup to enjoy more services</Text>
                            <Button fontSize='12px' fontWeight={700} color='#A41857' padding={0} gap='4px' bg='transparent' _hover={{ bg: 'transparent' }}>Upgrade Now <img src={getImageUrl("icons/redRightArrow.png")} /></Button>
                        </Box>
                        <Button alignSelf='start' bg='transparent' _hover={{ bg: 'transparent' }} p={0} onClick={() => setShowUpgrade(false)}><img src={getImageUrl('icons/redClose.png')} alt="X" /></Button>
                    </HStack>}


                    <HStack justifyContent='space-between' w='75%' backgroundColor='#000000' backgroundImage={getImageUrl('backgroundGrey.png')} bgSize='100% 100%' borderRadius='8px' p='16px'>
                        <Box>
                            <Text fontSize='12px' fontWeight={400} color='#FFFFFF'>Total Available Balance</Text>
                            <HStack ml="0" spacing='4px' alignItems='center' mb='12px'>
                                <Box fontSize="18px" fontWeight={500} color="#FFFFFF">₦</Box>
                                <Text fontSize="18px" fontWeight={700} color="#FFFFFF">{totalBalanceVisible ? currentItem.balance : hideBalance()}</Text>
                                <Box borderRadius='500px' bg='#2F2F30' ml='8px' p='4px' cursor="pointer">
                                    {!totalBalanceVisible && <BiShow fontSize="md" color="#667085" onClick={handleToggleVisibility} />}
                                    {totalBalanceVisible && <BiHide fontSize="md" color="#667085" onClick={handleToggleVisibility} />}
                                </Box>
                            </HStack>

                            <Text fontSize='12px' fontWeight={400} color='#FFFFFF'>Account Number</Text>
                            <HStack spacing={0} alignItems='center' mb='12px'>
                                <Text fontSize='18px' fontWeight={700} color='#FFFFFF'>{currentItem.number}</Text>
                                <Box borderRadius='500px' bg='#2F2F30' ml='8px' p='5px' cursor="pointer" onClick={copyToClipboard}><img style={{width: '13px', height: '13px'}} src={getImageUrl('icons/copy.png')} /></Box>
                            </HStack>
                        </Box>

                        <Box alignSelf='start' >
                            <Box w='fit-content' borderRadius='36px' px='12px' py='8px' bg='#2C323A' color='#FFFFFF' fontSize='12px' fontWeight={500} cursor='pointer' onClick={() => setInfoPopup(true)}>{currentItem.type}</Box>
                            {infoPopup && <Box className={styles.theBox}>
                                <div className={styles.header}>
                                    <h3>{currentItem.type}</h3>
                                    <img onClick={infoPop} src={getImageUrl('icons/greyClose.png')} />
                                </div>
                                <Divider />
                                <Box py='18px' px='24px'>
                                    <Box className={styles.limitInfo} bg='#F7F7F7' borderRadius='4px' border='1px solid #EAECF0' p='9px' >
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

                    <HStack justifyContent='space-between' alignItems='center' spacing='16px' w='75%'>
                        <Stack borderRadius='8px' border='1px solid #EAECF0' w='100%' p='20px' spacing='8px'>
                            <Text fontSize='12px' fontWeight={450} color='#667085'>AVAILABLE BALANCE</Text>
                            <Text fontSize='18px' fontWeight={600} color='#101828'>₦40,618,080,000.00</Text>
                        </Stack>
                        <Stack borderRadius='8px' border='1px solid #EAECF0' w='100%' p='20px' spacing='8px'>
                            <Text fontSize='12px' fontWeight={450} color='#667085'>LEDGER BALANCE</Text>
                            <Text fontSize='18px' fontWeight={600} color='#101828'>₦45,618,080,000.00</Text>
                        </Stack>
                        <Stack borderRadius='8px' border='1px solid #EAECF0' w='100%' p='20px' spacing='8px'>
                            <Text fontSize='12px' fontWeight={450} color='#667085'>LIENED BALANCE</Text>
                            <Text fontSize='18px' fontWeight={600} color='#101828'>₦00.00</Text>
                        </Stack>
                    </HStack>
            </Stack>
        </Box>
        </>
    );
};
