import React, { useState, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";

export const CompleteTransaction = () => {

    const [ isFiled, setIsFilled ] = useState(false);

    useEffect(() => {

        const inputs = document.querySelectorAll("#password");

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
    
                if (!inputs[5].disabled && inputs[5].value !== "") {
                    setIsFilled(true);
                    console.log(isFiled);

                    return;
                }
                setIsFilled(false);
                console.log(isFiled);
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
        <Stack spacing={'20px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
            <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Enter your 4-digit PIN to complete your transaction</Text>

            <HStack w={'75%'} spacing={'16px'} justifyContent={'center'}>
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
            </HStack>
            

            <Button
                mt={'16px'}
                w={'75%'} h={'fit-content'}
                py={'16px'} px={'20px'}
                bg={'#A41856'} _hover={{bg: '#A41856'}}
                color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                // isDisabled={isFiled ? false : true}
            >
                Continue
            </Button>
        </Stack>
        </>
    );
}