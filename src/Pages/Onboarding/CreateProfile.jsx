import {
    Button,
    Flex,
    Stack,
    Text,
    Spinner,
    FormControl, FormLabel, FormErrorMessage,
    Input, InputGroup, InputRightElement,
    Modal, ModalOverlay, ModalContent,
    useDisclosure,
    CircularProgress, CircularProgressLabel
} from '@chakra-ui/react';
import React, {useState} from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import EmailValidator from "email-validator";
import styles from './Onboarding.module.css';


export const CreateProfile = () => {

    const { isOpen: isOpenVerifying, onOpen: onOpenVerifying, onClose: onCloseVerifying } = useDisclosure();
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ passwordConfirm, setPasswordConfirm ] = useState("");
    const [ emailIsError, setEmailIsError ] = useState(false);
    const [ showPassword, setShowPassword ] = useState(false);
    const [ showPasswordConfirm, setShowPasswordConfirm ] = useState(false);
    const navigate = useNavigate();

    const openVerifying = () => {
        onOpenVerifying();
        setTimeout(() => onCloseVerifying(), 10000);
        setTimeout(() => navigate('/welcome'), 10000);
    }

    
    return (
        <>
        <Stack alignItems={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '140px', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/user-info'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                
                <CircularProgress value={70} size={'32px'} color={'#A41857'}>
                    <CircularProgressLabel fontWeight={700} fontSize={'9px'}>70%</CircularProgressLabel>
                </CircularProgress>
                
            </Flex>
            <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Create your profile</Text>
            <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Enter your details to setup your profile</Text>

            <Stack w={'100%'} spacing={'16px'}>
                <FormControl isInvalid={emailIsError} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Email Address</FormLabel>
                    <Input h={'48px'} type='text' placeholder='Enter your email' _placeholder={{ fontSize: "sm" }} value={email} onChange={(e) => setEmail(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    {emailIsError && <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>}
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Create Password</FormLabel>
                    <InputGroup>
                        <Input h={'48px'} placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                    setShowPassword((showPassword) => !showPassword)
                                }>
                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>
                <FormControl isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'8px'}>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input h={'48px'} placeholder='Confirm your password' _placeholder={{ fontSize: "sm" }} type={showPasswordConfirm ? 'text' : 'password'} value={passwordConfirm} onChange={e => setPasswordConfirm(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h={'full'}>
                            <Button
                                variant={'ghost'}
                                onClick={() =>
                                    setShowPasswordConfirm((showPasswordConfirm) => !showPasswordConfirm)
                                }>
                                {showPasswordConfirm ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
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