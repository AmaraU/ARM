import React, { useState, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input } from "@chakra-ui/react";
import { getImageUrl } from "../../utils";
import { useNavigate } from 'react-router-dom';

export const CompleteTransaction = ({ type = "", phoneNumber = "", amount= "" }) => {

    const [ isFilled, setIsFilled ] = useState(false);
    const [ enterPin, setEnterPin ] = useState(true);
    const [ isSuccess, setIsSuccess ] = useState(false);
    const [ isFailed, setIsFailed ] = useState(false);
    const navigate = useNavigate();

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

    const moveToSuccess = () => {
        setEnterPin(false);
        setIsFailed(false);
        setIsSuccess(true);
    }

    return (
        <>
        {enterPin && <Stack spacing={'24px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
            <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Enter your 4-digit PIN to complete your transaction</Text>

            <HStack w={'75%'} spacing={'16px'} justifyContent={'center'}>
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
                <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'72px'} w={'100px'} fontSize={'38px'} fontWeight={700} color={'#000000'} id="password" type="password" />
            </HStack>

            <Text color={'#A41857'} fontSize={'14px'} fontWeight={500} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Forgotten you PIN?</Text>
            

            <Button
                mt={'16px'}
                w={'75%'} h={'fit-content'}
                py={'16px'} px={'20px'}
                bg={'#A41856'} _hover={{bg: '#A41856'}}
                color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                onClick={moveToSuccess}
                isDisabled={isFilled ? false : true}
            >
                Continue
            </Button>
        </Stack>}

        {isSuccess && <Stack spacing={'20px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
            
            <img style={{width: '200px', height: 'auto'}} src={getImageUrl('icons/success.png')} />

            <Stack>
                <Text mt={'12px'} fontSize={'18px'} fontWeight={700} color={'#000000'} textAlign={'center'}>Success!</Text>
                {type === 'transaction' ? <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>Your transaction has been completed successfully</Text> : <></>}
                {type === 'bills' ? <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>Your transaction has been completed successfully</Text> : <></>}
                {type === 'airtime' ? <Text fontSize={'14px'} fontWeight={450} color={'#667085'} textAlign={'center'}>You just recharged <span style={{fontWeight: 500}}>{phoneNumber}</span> with <span style={{fontWeight: 500}}>₦{amount} Airtime</span></Text> : <></>}
                {type === 'data' ? <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>You just recharged {phoneNumber} with {amount}GB Data</Text> : <></>}
            </Stack>         

            <Button
                mt={'16px'} w={'75%'} h={'48px'}
                bg={'#A41856'} _hover={{bg: '#A41856'}}
                color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                onClick={()=> navigate('/receipt')}
            >
                Download Receipt
            </Button>
            <Button
                w={'75%'} h={'48px'}
                bg={'#EFECE9'} _hover={{bg: '#EFECE9'}}
                color={'#667085'} fontSize={'14px'} fontWeight={600}
                onClick={()=>navigate('/overview/dashboard')}
            >
                Go to dashboard
            </Button>
        </Stack>}

        {isFailed && <Stack spacing={'24px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
            
            <img style={{width: '70px', height: 'auto'}} src={getImageUrl('icons/failure.png')} />

            <Stack>
                <Text mt={'12px'} fontSize={'18px'} fontWeight={700} color={'#000000'} textAlign={'center'}>Failed!</Text>
                <Text fontSize={'14px'} fontWeight={500} color={'#667085'} textAlign={'center'}>Your transaction failed. Please try again</Text>
            </Stack>

            <Button
                mt={'16px'} w={'75%'} h={'48px'}
                bg={'#A41856'} _hover={{bg: '#A41856'}}
                color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                onClick={moveToOne}
            >
                Try again
            </Button>
            <Button
                w={'75%'} h={'48px'}
                bg={'#EFECE9'} _hover={{bg: '#EFECE9'}}
                color={'#667085'} fontSize={'14px'} fontWeight={600}
                onClick={()=>navigate('/overview/dashboard')}
            >
                Go to dashboard
            </Button>
        </Stack>}
        </>
    );
}