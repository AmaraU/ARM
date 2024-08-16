// import { Box, Button, Flex, HStack, Input, Stack, Text, useDisclosure } from "@chakra-ui/react";
import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Image,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
    Text,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    Select,
    useDisclosure,
    Modal, ModalOverlay, ModalContent, ModalBody,
    Spinner
} from '@chakra-ui/react';
import React from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";


export const UserInfo = () => {

    const { isOpen: isOpenVerifying, onOpen: onOpenVerifying, onClose: onCloseVerifying } = useDisclosure();
    const navigate = useNavigate();

    const openVerifying = () => {
        onOpenVerifying();
        setTimeout(() => onCloseVerifying(), 10000);
        setTimeout(() => navigate('/create-profile'), 10000);
    }

    
    return (
        <>
        <Stack alignItems={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '30%', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/signin'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                <Box>60%</Box>
            </Flex>
            <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Your basic information</Text>
            <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Review and update your details</Text>

            <Stack spacing={'16px'} w={'100%'}>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Title</FormLabel>
                    <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                        <option value="">Miss</option>
                        <option value="">Mrs</option>
                        <option value="">Mr</option>
                    </Select>
                </FormControl>
                <HStack>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>First Name</FormLabel>
                        <Input type='text' border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Last Name</FormLabel>
                        <Input type='text' border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Phone Number</FormLabel>
                    <HStack spacing={2}>
                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">+234 (NG)</option>
                        </Select>
                        <Input type='tel' placeholder='Enter your phone number' _placeholder={{ fontSize: "sm" }} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </HStack>
                </FormControl>
                <HStack>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Occupation</FormLabel>
                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Banking</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Source of fund</FormLabel>
                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Employeed</option>
                        </Select>
                    </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Country of birth</FormLabel>
                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Nigeria</option>
                        </Select>
                </FormControl>
            </Stack>
            <Button onClick={openVerifying} mt={'56px'} bg={'#A41857'} _hover={{bg: '#A41857'}} fontSize={'18px'} fontWeight={600} color={'#FFFFFF'} py={'12px'} w={'100%'}>Continue</Button>
        </Stack>

        
        <Modal isCentered closeOnOverlayClick={false} isOpen={isOpenVerifying} onClose={onCloseVerifying} >
            <ModalOverlay />
            <ModalContent rounded={15} p={'20px'} justifyContent={'center'} w={'fit-content'}>
                <Spinner w={'30px'} h={'30px'} speed="1s" emptyColor="grey" />
            </ModalContent>
        </Modal>
        </>
    )
}