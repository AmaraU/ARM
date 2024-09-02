import { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, Divider, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { BiShow, BiHide } from "react-icons/bi";

export const AccountLimit = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
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
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account Limit</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

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

                    <Text w='75%' fontSize='16px' color='#101828'>Set your transaction limit, maximum limit is <b>₦200,000</b></Text>

                    <Stack w='75%' justifyContent='space-between' spacing='24px'>
                        <Stack w='100%'>
                            <Text fontSize='16px' color='#101828'>Transaction Limit</Text>
                            <Input autoComplete="off" type="number" bg='#F7F7F7' border='1px solid #EAECF0' placeholder="₦200,000" _placeholder={{fontSize: '16px', color: '#667085'}} />
                        </Stack>
                        <Stack w='100%'>
                            <Text fontSize='16px' color='#101828'>PIN</Text>
                            <Input autoComplete="off" maxLength={4} type="password" bg='#F7F7F7' border='1px solid #EAECF0' placeholder="****" _placeholder={{fontSize: '16px', color: '#667085'}} />
                        </Stack>
                    </Stack>

                    <Button w='75%' h='48px' mt='24px' bg='#A41856' color='#FFFFFF' fontSize='14px' fontWeight={600} _hover={{bg: '#A41856'}}>Increase Limit</Button>
            </Stack>
        </Box>
        </>
    );
};
