import React, { useState, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../utils";
import { useNavigate } from 'react-router-dom';

export const CompleteTransaction2 = () => {

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
    
                if (!inputs[3].disabled && inputs[3].value !== "") {
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
        <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Enter your 4-digit PIN to complete your transaction</Text>

        <HStack mt={'24px'} w={'75%'} spacing={'16px'} justifyContent={'center'}>
            <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
            <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
            <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
            <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
        </HStack>

        <Text color={'#A41857'} fontSize={'14px'} fontWeight={500} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Forgotten you PIN?</Text> 
        </>
    );
}