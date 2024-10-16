import React, { useState } from "react";
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel, InputGroup, InputRightElement } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import styles from "./ProfilePage.module.css";
import { CompleteTransaction } from "../../Components/CompleteTrans";



export const ChangePassword = ({ backHome }) => {

    const [ newPassword, setNewPassword] = useState("");
    const [ confirmNewPassword, setConfirmNewPassword] = useState("");
    const [ strength, setStrength ] = useState(0);
    const [ strengthText, setstrengthText ] = useState("");
    const [ strengthColor, setStregnthColor ] = useState("#EAECF0");
    const [ hasEightChars, setHasEightChars ] = useState(false);
    const [ hasLowerCase, setHasLowerCase ] = useState(false);
    const [ hasUpperCase, setHasUpperCase ] = useState(false);
    const [ hasSpecialSymbol, setHasSpecialSymbol ] = useState(false);    

    const [ showCurrentPassword, setShowCurrentPassword ] = useState(false);
    const [ showNewPassword, setShowNewPassword ] = useState(false);
    const [ showConfirmNewPassword, setShowConfirmNewPassword ] = useState(false);

    const [ showChange, setShowChange ] = useState(true);
    const [ showPIN, setShowPIN ] = useState(false);

    const moveToChange = () => {
        setShowChange(true);
        setShowPIN(false);
        window.scrollTo({ top: 0});
    }

    const moveToPIN = () => {
        setShowChange(false);
        setShowPIN(true);
        window.scrollTo({ top: 0});
    }


    const checkPasswordStrength = (password) => {
        let strengthScore = 0;
    
        if (password.length >= 8) {
            strengthScore += 1;
            setHasEightChars(true);
        } else if (password.length < 8) {
            setHasEightChars(false);
        }

        if (/[a-z]/.test(password)) {
            strengthScore += 1;
            setHasLowerCase(/[a-z]/.test(password));
        } else {
            setHasLowerCase(false);
        }

        if (/[A-Z]/.test(password)) {
            strengthScore += 1;
            setHasUpperCase(true);
        } else {
            setHasUpperCase(false);
        }

        if (/[\W_]/.test(password)) {
            strengthScore += 1;
            setHasSpecialSymbol(true);
        } else {
            setHasSpecialSymbol(false);
        }


        if (strengthScore <= 1) {
            setstrengthText('Weak');
            setStregnthColor('red');
        }
        if (strengthScore > 1) {
            setstrengthText('Average');
            setStregnthColor('#DB9308');
        }
        if (strengthScore > 3) {
            setstrengthText('Strong');
            setStregnthColor('#2AD062');
        }
    
        return strengthScore;
    };

    const handlePasswordChange = (e) => {
        const enteredPassword = e.target.value;
        setNewPassword(enteredPassword);
        setStrength(checkPasswordStrength(enteredPassword));
    };

    
    



    return (
        <>
        {showChange && <Box>
            <HStack bg='#EAECF0' px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button onClick={backHome} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Change Password</Text>
            </HStack>
            <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='24px'>

                <Text w='80%' color='#667085' fontSize='18px' textAlign='center'>Make sure you use at least 8 characters. One lowercase, one uppercase and a special symbol</Text>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Current Password</FormLabel>
                    <InputGroup>
                        <Input h='48px' placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showCurrentPassword ? 'text' : 'password'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                        <InputRightElement h='full'>
                            <Button variant='ghost' _hover={'transparent'} onClick={() => setShowCurrentPassword((showCurrentPassword) => !showCurrentPassword)}>
                                {showCurrentPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>New Password</FormLabel>
                    <InputGroup>
                        <Input h='48px' placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showNewPassword ? 'text' : 'password'} border='1px solid #EAECF0' bg='#F7F7F7' value={newPassword} onChange={handlePasswordChange} />
                        <InputRightElement h='full'>
                            <Button variant='ghost' _hover={'transparent'} onClick={() => setShowNewPassword((showNewPassword) => !showNewPassword) }>
                                {showNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Stack w='80%'>
                    <Box display='flex' gap='4px' alignItems='center'>
                        {[...Array(4)].map((_, index) => (
                            <Box key={index} className={styles.strengthBar} bgColor={index < strength ? strengthColor : ''}></Box>
                        ))}
                        <Text fontSize='12px' color={strengthColor} ml='24px'>{strengthText}</Text>
                    </Box>
                    <Box display='flex' gap='16px' alignItems='center' justifyContent='space-between'>
                        <div className={hasEightChars ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>At least 8 characters strong</div>
                        <div className={hasLowerCase ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One lower case character</div>
                        <div className={hasUpperCase ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One upper case</div>
                        <div className={hasSpecialSymbol ? styles.passwordCheck : styles.passwordUncheck}><div className={styles.checkbox}><img src={getImageUrl('icons/whiteCheck.png')} /></div>One special symbol {'(@!><|.?*&%$)'}</div>
                    </Box>
                </Stack>


                <FormControl w='80%'>
                    <FormLabel fontSize='16px' fontWeight={400} color={'#101828'}>Confirm Password</FormLabel>
                    <InputGroup>
                        <Input h='48px' placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showConfirmNewPassword ? 'text' : 'password'} border='1px solid #EAECF0' bg='#F7F7F7' />
                        <InputRightElement h='full'>
                            <Button variant='ghost' _hover={'transparent'} onClick={() => setShowConfirmNewPassword((showConfirmNewPassword) => !showConfirmNewPassword)}>
                                {showConfirmNewPassword ? <ViewIcon /> : <ViewOffIcon />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </FormControl>

                <Button onClick={moveToPIN} mt='24px' bg='#A41857' _hover={{bg: '#90164D'}} fontSize='14px' fontWeight={600} color='#FFFFFF' w='80%' h='48px'>Proceed</Button>

            </Stack>
        </Box>}

        {showPIN && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToChange} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Complete Process</Text>
            </HStack>
            <CompleteTransaction type='edit' backToSaving={moveToChange} />
        </Box>}
        </>
    );
};
