import { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, useDisclosure, FormControl, FormLabel, Select, Input, InputGroup, InputRightElement, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalOverlay } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import { useNavigate } from "react-router-dom";
import CardContainer from "../../elements/CardContainer";

export const UpgradeAccount = ({backHome}) => {

    const { isOpen: isOpenSample, onOpen: onOpenSample, onClose: onCloseSample } = useDisclosure();

    const [ showUpgrade, setShowUpgrade ] = useState(true);
    const [ showBVN, setShowBVN ] = useState(false);
    const [ showDocumentUpload, setShowDocumentUpload ] = useState(false);
    const [ showSignature, setShowSignature ] = useState(false);
    const [ showAddressProof, setShowAddressProof ] = useState(false);
    const [ showSuccess, setShowSuccess ] = useState(false);

    const [ BVNAndNINFilled, setBVNAndNINFilled ] = useState(false);
    const [ IDCardFilled, setIDCardFilled ] = useState(false);
    const [ signatureFilled, setSignatureFilled ] = useState(false);
    const [ addressFilled, setAddressFilled ] = useState(false);
    const navigate = useNavigate();


    const moveToUpgrade = () => {
        setShowUpgrade(true);
        setShowBVN(false);
        setShowDocumentUpload(false);
        setShowSignature(false);
        setShowAddressProof(false);
        window.scrollTo({ top: 0});
    }

    const moveToBVN = () => {
        setShowUpgrade(false);
        setShowBVN(true);
        setShowDocumentUpload(false);
        setShowSignature(false);
        setShowAddressProof(false);
        setBVNAndNINFilled(true);
        window.scrollTo({ top: 0});
    }

    const moveToDocumentUpload = () => {
        setShowUpgrade(false);
        setShowBVN(false);
        setShowDocumentUpload(true);
        setShowSignature(false);
        setShowAddressProof(false);
        setIDCardFilled(true);
        window.scrollTo({ top: 0});
    }

    const moveToSignature = () => {
        setShowUpgrade(false);
        setShowBVN(false);
        setShowDocumentUpload(false);
        setShowSignature(true);
        setShowAddressProof(false);
        setSignatureFilled(true);
        window.scrollTo({ top: 0});
    }

    const moveToAddressProof = () => {
        setShowUpgrade(false);
        setShowBVN(false);
        setShowDocumentUpload(false);
        setShowSignature(false);
        setShowAddressProof(true);
        setAddressFilled(true);
        window.scrollTo({ top: 0});
    }

    const moveToSuccess = () => {
        setShowUpgrade(false);
        setShowBVN(false);
        setShowDocumentUpload(false);
        setShowSignature(false);
        setShowAddressProof(false);
        setShowSuccess(true);
        window.scrollTo({ top: 0});
    }



    return (
        <div className={styles.whole}>

        {showUpgrade && <HStack mb='40px' spacing='12px' cursor='pointer' onClick={()=>navigate('/overview/accounts')}>
            <img src={getImageUrl('icons/blackLeftArrow.png')} />
            <Text fontSize='24px' fontWeight={700} color='#101828'>Upgrade Your Account</Text>
        </HStack>}

        {!showUpgrade && <Text mb='40px' fontSize='24px' fontWeight={700} color='#101828'>Upgrade Your Account</Text>}


        {showUpgrade && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                {/* <Button onClick={backHome} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button> */}
                <Text w='100%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Account Upgrade Requirements</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <Text  w="50%" fontSize="16px" color="#667085" textAlign="center">
                    You are required to upload these documents below for us to verify and upgrade your account
                </Text>

                <Stack w="75%" bg='#F2F4F7' py='18px' px='16px' borderRadius='8px'>

                    <HStack spacing='12px' onClick={moveToBVN} cursor='pointer' w='fit-content'>
                        <Box p='8px' borderRadius='38px' border={BVNAndNINFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                            <Box p='2px' borderRadius='38px' bg={BVNAndNINFilled ? '#2AD062' : '#667085'}>
                                <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                            </Box>
                        </Box>
                        <Text fontSize='16px' fontWeight={600} color='#0C111D'>BVN and NIN</Text>
                    </HStack>

                    <Box h='14px' w='1px' ml='16px' border='1px dashed #A0A3BD'></Box>

                    <HStack spacing='12px' onClick={moveToDocumentUpload} cursor='pointer' w='fit-content'>
                        <Box p='8px' borderRadius='38px' border={IDCardFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                            <Box p='2px' borderRadius='38px' bg={IDCardFilled ? '#2AD062' : '#667085'}>
                                <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                            </Box>
                        </Box>
                        <Text fontSize='16px' fontWeight={600} color='#0C111D'>Government Issued ID card</Text>
                    </HStack>

                    <Box h='14px' w='1px' ml='16px' border='1px dashed #A0A3BD'></Box>


                    <HStack spacing='12px' onClick={moveToSignature} cursor='pointer' w='fit-content'>
                        <Box p='8px' borderRadius='38px' border={signatureFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                            <Box p='2px' borderRadius='38px' bg={signatureFilled ? '#2AD062' : '#667085'}>
                                <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                            </Box>
                        </Box>
                        <Text fontSize='16px' fontWeight={600} color='#0C111D'>Signature</Text>
                    </HStack>

                    <Box h='14px' w='1px' ml='16px' border='1px dashed #A0A3BD'></Box>


                    <HStack spacing='12px' onClick={moveToAddressProof} cursor='pointer' w='fit-content'>
                        <Box p='8px' borderRadius='38px' border={addressFilled ? '1px solid #2AD062' : '1px solid #EAECF0'}>
                            <Box p='2px' borderRadius='38px' bg={addressFilled ? '#2AD062' : '#667085'}>
                                <img src={getImageUrl('icons/whiteCheck.png')} style={{width: '12px', height:'12px'}} />
                            </Box>
                        </Box>
                        <Text fontSize='16px' fontWeight={600} color='#0C111D'>Proof of Address</Text>
                    </HStack>
                </Stack>

                <Button
                    mt="16px"
                    w="75%"
                    h="48px"
                    bg="#A41856"
                    _hover={{ bg: "#90164D" }}
                    color="#FFFFFF"
                    fontSize="14px"
                    fontWeight={600}
                    // onClick={moveToTwo}
                    >
                    Proceed
                </Button>
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
                    <InputGroup>
                        <Input
                            h={"48px"}
                            type="text"
                            border={"1px solid #EAECF0"}
                            bg={"#F7F7F7"}
                            value={'22225865945'}
                            disabled
                            _disabled={{ bg: "#EAECF0", color: "#8D9DA8" }}
                        />
                        <InputRightElement h='100%' mr='12px'><img src={getImageUrl('icons/greenCheck.png')} style={{}} /></InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>NIN</FormLabel>
                    <Input h='48px' maxLength={11} type="number" pattern="\d" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} onInput={(e)=>e.target.value = e.target.value.slice(0, e.target.maxLength)} />
                </FormControl>

                <Button onClick={moveToUpgrade} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Save and Continue</Button>
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
                    <Input h='48px' type="number" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} autoComplete="false" />
                </FormControl>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Front</FormLabel>
                        <Stack p='18px' h='150px' justifyContent='center' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <label className={styles.uploadButton}>
                                <input id="front-upload" type="file" accept="image/png, image/jpeg, application/pdf, image/x-eps" />
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </label>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Back</FormLabel>
                        <Stack p='18px' h='150px' justifyContent='center' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <label className={styles.uploadButton}>
                                <input id="front-upload" type="file" accept="image/png, image/jpeg, application/pdf, image/x-eps" />
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </label>
                        </Stack>
                    </FormControl>
                </HStack>

                <Button onClick={moveToUpgrade} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={500} color='#FFFFFF' w='80%' h='48px'>Save and Continue</Button>
            </Stack>
        </Box>}


        {showSignature && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToUpgrade} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Upload Signature</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Text fontSize='16px' color='#667085' mb='12px'>Upload a clear picture of your signature on a plain piece of paper</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Signature</FormLabel>
                    <Stack p='18px' h='170px' justifyContent='center' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <label className={styles.uploadButton}>
                            <input id="front-upload" type="file" accept="image/png, image/jpeg, application/pdf, image/x-eps" />
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </label>
                    </Stack>
                </FormControl>

                <HStack border='1px solid #E0E0E0' px='13px' py='7px' borderRadius='6px'>
                    <Text fontSize='16px' fontWeight={900} color='#667085'>Tips:</Text>
                    <Text fontSize='16px' color='#667085'>Take in good lighting and make sure your image takes up 75% of the  surface</Text>
                </HStack>

                <Button onClick={moveToUpgrade} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={500} color='#FFFFFF' w='80%' h='48px'>Save and Continue</Button>
            </Stack>
        </Box>}


        {showAddressProof && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToUpgrade} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Proof of Address</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Text fontSize='16px' color='#667085' mb='12px' w='70%' textAlign='center'>Upload a recent utility bill (electricity, telephone, waste), bank statement, tenancy agreement. Not more than 3 months old</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Utility Bill</FormLabel>
                    <Stack p='18px' h='170px' justifyContent='center' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <label className={styles.uploadButton}>
                            <input id="front-upload" type="file" accept="image/png, image/jpeg, application/pdf, image/x-eps" />
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </label>
                    </Stack>
                </FormControl>

                <HStack border='1px solid #E0E0E0' px='13px' py='7px' borderRadius='6px' w='80%' justifyContent='center'>
                    <Text fontSize='16px' fontWeight={900} color='#667085'>Tips:</Text>
                    <Text fontSize='16px' color='#667085'>Take in good lighting and make sure your image takes up 75% of the  surface</Text>
                </HStack>

                <Button onClick={moveToSuccess} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={500} color='#FFFFFF' w='80%' h='48px'>Save and Continue</Button>
            </Stack>
        </Box>}


        {showSuccess && <CardContainer title={'Account Upgrade Complete'}>
            <Stack spacing={1} w='75%' alignItems='center'>

                <img src={getImageUrl('icons/success.png')}  style={{height: '84px', width: 'auto'}}/>
                <Text fontSize='18px' fontWeight={700} color='#000000'>Success!</Text>
                <Text fontSize='14px' fontWeight={450} color='#667085' w='55%' textAlign='center'>Your documents are being reviewed, a notification will be sent once review is complete.</Text>

                <Button h='48px' my={8} w="80%" color={"white"} bg={"#A41856"} _hover={{bg: '#90164D'}} onClick={()=>navigate('/overview')}>Proceed to dashboard</Button>

            </Stack>
        </CardContainer>}

        <Modal size='xl' isOpen={isOpenSample} onClose={onCloseSample} closeOnOverlayClick={false} >
            <ModalOverlay />
            <ModalContent bg='transparent' shadow='none' >
                <ModalHeader>
                    <Text textAlign='center' fontSize='20px' fontWeight={600} color='#FFFFFF'>Here's a sample document</Text>
                </ModalHeader>
                <ModalCloseButton color='#FFFFFF' />

                <ModalBody>
                    <img src={getImageUrl('samplePassport.png')} style={{width: '100%', height: 'auto'}} alt="" />
                </ModalBody>
            </ModalContent>
        </Modal>
        </div>
    );
};
