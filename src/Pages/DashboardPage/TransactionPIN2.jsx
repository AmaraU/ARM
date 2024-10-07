import React, { useState, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input } from "@chakra-ui/react";
import { getImageUrl } from '../../../utils';
import { useNavigate } from 'react-router-dom';

export const TransactionPIN2 = ({ moveToOne, moveToSecurity }) => {

    const [ isFilled, setIsFilled ] = useState(false);
    const [ stepOne, setStepOne ] = useState(true);
    const [ stepTwo, setStepTwo ] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const inputs = document.querySelectorAll("#password");
        console.log(inputs);

        inputs.forEach((input) => {
            input.value = "";
            input.setAttribute("disabled", true);
        });
        inputs[0].removeAttribute("disabled");
    
        inputs.forEach((input, index1) => {
            input.addEventListener("keyup", (e) => {
                const currentInput = input,
                    nextInput = input.nextElementSibling,
                    previousInput = input.previousElementSibling;

                if (currentInput.value.length > 1) {
                    currentInput.value = "";
                    return;
                }
    
                if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                }
    
                if (e.key === "Backspace") {
                    inputs.forEach((input, index2) => {
                        if (index1 <= index2 && previousInput) {
                            input.setAttribute("disabled", true);
                            currentInput.value = "";
                            previousInput.value = "";
                            previousInput.focus();
                        }
                    });
                }
    
                if (!inputs[3].disabled && inputs[3].value !== "") {
                    setIsFilled(true);
                    return;
                }
                setIsFilled(false);
            });
        });
    
        window.addEventListener("load", () => inputs[0].focus());
    
        return () => {
            inputs.forEach((input) => {
                input.removeEventListener("keyup", () => {});
            });
            window.removeEventListener("load", () => {});
        };
    }, []);


    return (
        <>
        <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToOne}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Repeat Transaction PIN</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>1/3</Text>
            </HStack>

            <Stack spacing={'24px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Enter 4 digits PIN again</Text>

                <Stack w='50%' spacing='12px' alignItems='center'>
                    <Text alignSelf='start' fontSize='14px' fontWeight={500} color='#394455'>PIN</Text>
                    <HStack spacing='16px' justifyContent='center'>
                        <Input bg='#F7F7F7' border='2px solid #EAECF0' textAlign='center' h='72px' w='110px' fontSize='38px' fontWeight={700} color='#000000' id="password" type="password" />
                        <Input bg='#F7F7F7' border='2px solid #EAECF0' textAlign='center' h='72px' w='110px' fontSize='38px' fontWeight={700} color='#000000' id="password" type="password" />
                        <Input bg='#F7F7F7' border='2px solid #EAECF0' textAlign='center' h='72px' w='110px' fontSize='38px' fontWeight={700} color='#000000' id="password" type="password" />
                        <Input bg='#F7F7F7' border='2px solid #EAECF0' textAlign='center' h='72px' w='110px' fontSize='38px' fontWeight={700} color='#000000' id="password" type="password" />
                    </HStack>
                </Stack>

                <Button
                    mt='16px' w='75%' h='48px'
                    bg='#A41856' _hover={{bg: '#A41856'}}
                    color='#FFFFFF' fontSize='14px' fontWeight={600}
                    onClick={moveToSecurity}
                    isDisabled={isFilled ? false : true}
                >
                    Proceed
                </Button>
            </Stack>
        </Box>
        </>
    );
}