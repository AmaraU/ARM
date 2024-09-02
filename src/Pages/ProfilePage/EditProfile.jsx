import React, { useEffect, useRef, useState } from "react";
import { Stack, Text, Box, Button, HStack, Select, Image, FormControl, FormLabel, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";


export const EditProfile = () => {

    const [ showEditProfile, setShowEditProfile ] = useState(true);
    const [ showPersonalDetails, setShowPersonalDetails ] = useState(false);
    const [ showContactDetails, setShowContactDetails ] = useState(false);
    const [ showDocumentUpload, setShowDocumentUpload ] = useState(false);

    const [ BVNLinked, setBVNLinked ] = useState(true);
    const [ hasPersonalDetails, setHasPersonalDetails ] = useState(false);
    const [ hasContactDetails, setHasContactDetails ] = useState(false);
    const [ uploadedDocuments, setUploadedDocuments ] = useState(false);

    const moveToEdit = () => {
        setShowEditProfile(true);
        setShowPersonalDetails(false);
        setShowContactDetails(false);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToBVN = () => {
        setShowEditProfile(false);
        setShowPersonalDetails(false);
        setShowContactDetails(false);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToPersonalDetails = () => {
        setShowEditProfile(false);
        setShowPersonalDetails(true);
        setShowContactDetails(false);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToContactDetails = () => {
        setShowEditProfile(false);
        setShowPersonalDetails(false);
        setShowContactDetails(true);
        setShowDocumentUpload(false);
        window.scrollTo({ top: 0});
    }

    const moveToDocumentUpload = () => {
        setShowEditProfile(false);
        setShowPersonalDetails(false);
        setShowContactDetails(false);
        setShowDocumentUpload(true);
        window.scrollTo({ top: 0});
    }


    return (
        <>
        {showEditProfile && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Edit Profile</Text>
            </HStack>
            
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Stack alignItems='center' spacing='4px'>
                    <Box
                        bgImage={getImageUrl('avatar.png')}
                        bgSize='100% 100%'
                        width="82px"
                        height="82px"
                        borderRadius='50px'
                        display='flex'
                        alignItems='end'
                        justifyContent='center'
                        pb='4px'
                    >
                        <button><img src={getImageUrl('icons/whiteEdit.png')} /></button>
                    </Box>
                    <Text fontSize='18px' fontWeight={600} color='#101828'>Adeola Obasanjo</Text>
                    <Text fontSize='18px' color='#667085'>Adeola.obasanjo@arm.com.ng</Text>
                </Stack>

                <HStack justifyContent='space-between' alignItems='center' w='100%' gap='16px'>
                    <button onClick={moveToBVN} className={BVNLinked ? styles.activeProfileButton : styles.profileButton}>BVN Linked<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                    <button onClick={moveToPersonalDetails} className={hasPersonalDetails ? styles.activeProfileButton : styles.profileButton}>Personal Details<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                    <button onClick={moveToContactDetails} className={hasContactDetails ? styles.activeProfileButton : styles.profileButton}>Contact Details<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                    <button onClick={moveToDocumentUpload} className={uploadedDocuments ? styles.activeProfileButton : styles.profileButton}>Documents Upload<div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div></button>
                </HStack>
            </Stack>
        </Box>}


        {showPersonalDetails && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToEdit} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Personal Details</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <HStack  w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Title</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}}>
                            <option>Miss</option>
                            <option>Mrs</option>
                            <option>Mr</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Marital Status</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}}>
                            <option>Single</option>
                            <option>Married</option>
                            <option>Divorced</option>
                        </Select>
                    </FormControl>
                </HStack>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>First Name</FormLabel>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Last Name</FormLabel>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Other Names</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                </FormControl>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Gender</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Female</option>
                            <option>Male</option>
                            <option>Other</option>
                            <option>Rather not say</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Date of Birth</FormLabel>
                        <Input type="date" bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                    </FormControl>
                </HStack>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Nationality</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Nigerian</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>State of Origin</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Lagos State</option>
                        </Select>
                    </FormControl>
                </HStack>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>LGA</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Eti-Osa</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Place of Birth</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Victoria Island</option>
                        </Select>
                    </FormControl>
                </HStack>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Employment Status</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Employed</option>
                            <option>Unemployed</option>
                            <option>Self-employed</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Employer's Name</FormLabel>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Employer's Address</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                </FormControl>
                
                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Employer's Name</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Employment Phone Number</FormLabel>
                    <HStack spacing={2}>
                        <Select flex={'35%'} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option value="">+234 (NG)</option>
                        </Select>
                        <Input maxLength={10} type='tel' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                    </HStack>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Sector</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                        <option>Finance</option>
                    </Select>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button onClick={moveToEdit} mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='18px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>
            </Stack>
        </Box>}


        {showContactDetails && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToEdit} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Contact Details</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>House Number</FormLabel>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Street Name</FormLabel>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Nearest Bus Stop (Landmark)</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Address</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                </FormControl>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Country</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Nigeria</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Date of Birth</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Lagos State</option>
                        </Select>
                    </FormControl>
                </HStack>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>LGA</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Eti-Osa</option>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>City</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option>Victoria Island</option>
                        </Select>
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Email Address</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Alternate Email Address</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Phone Number</FormLabel>
                    <HStack spacing={2}>
                        <Select flex={'30%'} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                            <option value="">+234 (NG)</option>
                        </Select>
                        <Input maxLength={10} type='tel' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} />
                    </HStack>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button onClick={moveToEdit} mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>
            </Stack>
        </Box>}


        {showDocumentUpload && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToEdit} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Contact Details</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='36px' pb='114px' pt='48px'>

                <Text fontSize='16px' color='#667085' mb='12px'>Provide a valid government issued ID number below</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>I.D. Type</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' _placeholder={{color: '#667085'}} >
                        <option>Voter's ID Card</option>
                        <option>NIN</option>
                    </Select>
                </FormControl>

                <Text w='80%' cursor='pointer' fontSize='16px' fontWeight={500} color='#A41857' textAlign='left'>See sample of document</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>I.D. Card Number</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828'  _placeholder={{color: '#667085'}} />
                </FormControl>

                <HStack w='80%'>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Front</FormLabel>
                        <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <Button fontSize='13px' fontWeight={450} color='#667085' bg='#FFFFFF' _hover={{bg: '#FFFFFF'}} border='1px solid #EAECF0' borderRadius='50px' px='14px' py='10px' display='flex' flexDirection='column' alignItems='center'>
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </Button>
                        </Stack>
                    </FormControl>
                    <FormControl>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Back</FormLabel>
                        <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                            <Button fontSize='13px' fontWeight={450} color='#667085' bg='#FFFFFF' _hover={{bg: '#FFFFFF'}} border='1px solid #EAECF0' borderRadius='50px' px='14px' py='10px' display='flex' flexDirection='column' alignItems='center'>
                                <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                                Tap to Upload
                            </Button>
                        </Stack>
                    </FormControl>
                </HStack>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Passport Photograph</FormLabel>
                    <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <Button fontSize='13px' fontWeight={450} color='#667085' bg='#FFFFFF' _hover={{bg: '#FFFFFF'}} border='1px solid #EAECF0' borderRadius='50px' px='14px' py='10px' display='flex' flexDirection='column' alignItems='center'>
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </Button>
                    </Stack>
                </FormControl>

                <Text fontSize='16px' color='#667085' textAlign='left' w='80%'>Upload a photo of your face in a well lit area, with your ears clearly visible (Max 1MB)</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Upload Signature</FormLabel>
                    <Stack p='18px' alignItems='center' bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' borderRadius='8px' _placeholder={{color: '#667085'}} >
                        <Button fontSize='13px' fontWeight={450} color='#667085' bg='#FFFFFF' _hover={{bg: '#FFFFFF'}} border='1px solid #EAECF0' borderRadius='50px' px='14px' py='10px' display='flex' flexDirection='column' alignItems='center'>
                            <img src={getImageUrl('icons/greyPic.png')} style={{width: '22px', height: '22px'}} />
                            Tap to Upload
                        </Button>
                    </Stack>
                </FormControl>

                <Text fontSize='16px' color='#667085' textAlign='left' w='80%'>Upload a picture of your signature on a plain white background (Max 1MB)</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>PIN</FormLabel>
                    <Input type="password" maxLength={4} bg='#F7F7F7' border='1px solid #EAECF0' fontSize='16px' color='#101828' placeholder="****" />
                </FormControl>

                <Button onClick={moveToEdit} mt='24px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>
            </Stack>
        </Box>}
        </>
    );
};
