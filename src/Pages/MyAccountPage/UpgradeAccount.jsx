import { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, Divider, useDisclosure, FormControl, FormLabel, Select, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { BiShow, BiHide } from "react-icons/bi";

export const UpgradeAccount = ({backHome}) => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ infoPopup, setInfoPopup ] = useState(false);

    const { isOpen: isOpenSample, onOpen: onOpenSample, onClose: onCloseSample } = useDisclosure();

    const [ showUpgrade, setShowUpgrade ] = useState(true);
    const [ showBVN, setShowBVN ] = useState(false);
    const [ showDocumentUpload, setShowDocumentUpload ] = useState(false);
    const [ BVNLinked, setBVNLinked ] = useState(true);
    const [ uploadedDocuments, setUploadedDocuments ] = useState(false);
    const popupRef = useRef(null);

    const accounts = [
        {
            number: 12345678,
            balance: 1234556,
            tier: 1,
            type: 'Savings',
            docsNeeded: [ 'BVN or NIN', 'Government issued ID cards', 'Signature', 'Residence Permit (for foreign nationals)' ]
        },
        {
            number: 87654321,
            balance: 76543.21,
            tier: 2,
            type: 'Current',
            docsNeeded: [ 'BVN or NIN', 'Government issued ID cards', 'Signature', 'Residence Permit (for foreign nationals)', 'Utility Bill' ]
        }
    ]
    const currentItem = accounts[currentIndex];

    const moveToUpgrade = () => {
        setShowUpgrade(true);
        setShowBVN(false);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToBVN = () => {
        setShowUpgrade(false);
        setShowBVN(true);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToDocumentUpload = () => {
        setShowUpgrade(false);
        setShowBVN(false);
        setShowDocumentUpload(true);
        window.scrollTo({ top: 0});
    }


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
        {showUpgrade && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={backHome} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Upgrade Account</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

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
                        <Box w='fit-content' borderRadius='36px' px='12px' py='8px' bg='#2C323A' color='#FFFFFF' fontSize='12px' fontWeight={500} cursor='pointer' onClick={() => setInfoPopup(!infoPopup)}>Tier {currentItem.tier} {currentItem.type} Account</Box>
                        {infoPopup && <Box className={styles.theBox2}>
                            <Box bg='#DCD6CF' borderRadius='4px'px='9px' py='6px' mb='18px'>
                                <Text fontSize='14px' fontWeight={600} color='#101828'>TIER {currentItem.tier+1} UPGRADE</Text>
                            </Box>
                            {/* <Box className={styles.limitInfo} bg='#F7F7F7' borderRadius='4px' border='1px solid #EAECF0' p='9px' > */}
                                {currentItem.docsNeeded.map((doc, index) => (
                                    <div className={styles.info}><div />{doc}</div>
                                ))}
                            {/* </Box> */}
                        </Box>}
                    </Box>
                </HStack>

                <HStack justifyContent='space-between' alignItems='center' gap='16px'>
                    <button onClick={moveToBVN} className={BVNLinked ? styles.activeProfileButton : styles.profileButton}>BVN Linked<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                    <button onClick={moveToDocumentUpload} className={uploadedDocuments ? styles.activeProfileButton : styles.profileButton}>Documents Upload<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                </HStack>
            </Stack>
        </Box>}


        {showBVN && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToUpgrade} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>BVN and NIN</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Text fontSize='16px' color='#667085' mb='12px'>Kindly input your BVN and NIN</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>BVN</FormLabel>
                    <Input h='48px' maxLength={11} type="number" pattern="\d" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} onInput={(e)=>e.target.value = e.target.value.slice(0, e.target.maxLength)} />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>NIN</FormLabel>
                    <Input h='48px' maxLength={11} type="number" pattern="\d" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} onInput={(e)=>e.target.value = e.target.value.slice(0, e.target.maxLength)} />
                </FormControl>

                <Button onClick={moveToUpgrade} mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>
            </Stack>
        </Box>}


        {showDocumentUpload && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToUpgrade} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Documents Upload</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Text fontSize='16px' color='#667085' mb='12px'>Provide a valid government issued ID number below</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>I.D. Type</FormLabel>
                    <Select h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                        <option>Voter's ID Card</option>
                        <option>NIN</option>
                    </Select>
                </FormControl>

                <Text w='80%' cursor='pointer' onClick={onOpenSample} fontSize='16px' fontWeight={500} color='#A41857' textAlign='left'>See sample of document</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>I.D. Card Number</FormLabel>
                    <Input h='48px' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                </FormControl>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Front</FormLabel>
                        <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <button className={styles.uploadButton}>
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </button>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Back</FormLabel>
                        <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <button className={styles.uploadButton}>
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </button>
                        </Stack>
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Passport Photograph</FormLabel>
                    <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <button className={styles.uploadButton}>
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </button>
                    </Stack>
                </FormControl>

                <Text fontSize='16px' color='#667085' textAlign='left' w='80%'>Upload a photo of your face in a well lit area, with your ears clearly visible (Max 1MB)</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Signature</FormLabel>
                    <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <button className={styles.uploadButton}>
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </button>
                    </Stack>
                </FormControl>

                <Text fontSize='16px' color='#667085' textAlign='left' w='80%'>Upload a picture of your signature on a plain white background (Max 1MB)</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input h='48px' type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button onClick={moveToUpgrade} mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>
            </Stack>
        </Box>}
        </>
    );
};
