import {
    Button,
    Flex,
    FormControl, FormLabel,
    Input,
    Stack, HStack,
    Text,
    Select,
    useDisclosure,
    Modal, ModalOverlay, ModalContent,
    Spinner,
    CircularProgress, CircularProgressLabel
} from '@chakra-ui/react';
import React from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import styles from './Onboarding.module.css';



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
            <img style={{width: '140px', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/confirm-picture'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                
                <CircularProgress value={60} size={'32px'} color={'#A41857'}>
                    <CircularProgressLabel fontWeight={700} fontSize={'9px'}>60%</CircularProgressLabel>
                </CircularProgress>

            </Flex>
            <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Your basic information</Text>
            <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Review and update your details</Text>

            <Stack spacing={'16px'} w={'100%'}>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Title</FormLabel>
                    <Select h={'48px'} flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                        <option value="">Miss</option>
                        <option value="">Mrs</option>
                        <option value="">Mr</option>
                    </Select>
                </FormControl>
                <HStack>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>First Name</FormLabel>
                        <Input h={'48px'} type='text' border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Last Name</FormLabel>
                        <Input h={'48px'} type='text' border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Phone Number</FormLabel>
                    <HStack spacing={2}>
                        <Select h={'48px'} flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">+234 (NG)</option>
                        </Select>
                        <Input h={'48px'} type='tel' placeholder='Enter your phone number' _placeholder={{ fontSize: "sm" }} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </HStack>
                </FormControl>
                <HStack>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Occupation</FormLabel>
                        <Select h={'48px'} flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Banking</option>
                        </Select>
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Source of fund</FormLabel>
                        <Select h={'48px'} flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Employeed</option>
                        </Select>
                    </FormControl>
                </HStack>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Country of birth</FormLabel>
                        <Select h={'48px'} flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                            <option value="">Nigeria</option>
                        </Select>
                </FormControl>
            </Stack>
            <Button onClick={openVerifying} mt={'56px'} bg={'#A41857'} _hover={{bg: '#A41857'}} fontSize={'18px'} fontWeight={600} color={'#FFFFFF'} w={'100%'} h={'48px'}>Continue</Button>
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