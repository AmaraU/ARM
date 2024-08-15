import { Box, Button, Flex, HStack, Input, Stack, Text } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils";

export const VerifyNumber = () => {

    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {

        var theinputs = document.querySelectorAll("#password");
        theinputs.forEach((input) => {
            input.value="";
            input.setAttribute("disabled", true);
        })
        theinputs[0].removeAttribute("disabled");


        const inputs = document.querySelectorAll("#password");
        const button = document.querySelector("#continue");

        console.log(inputs);
        console.log(button);

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

                if (!inputs[5].disabled && !inputs[5].value == "") {
                    button.classList.add(`${styles.active}`);
                    return;
                }
                button.classList.remove(`${styles.active}`);
            });
        });

        window.addEventListener("load", () => inputs[0].focus());
    })

    useEffect(() => {
        if (timeLeft > 0) {
            const intervalId = setInterval(() => {
                setTimeLeft((prevTime) => prevTime - 1);
            }, 1000);
            return () => clearInterval(intervalId);
        } else {
            console.log('Countdown finished');
        }
    }, [timeLeft]);

    
    return (
        <Stack alignItems={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '30%', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <img src={getImageUrl('icons/blackBack.png')} alt="" />
                <Box>60%</Box>
            </Flex>
            <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Verify your phone number</Text>
            <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Kindly enter the 6-digits OTP we sent to <b>+23490****7831</b></Text>

            <Stack>
                <Text fontSize={'14px'} fontWeight={400} color={'#394455'}>PIN</Text>
                <HStack>
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'}  h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" />
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'}  h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" disabled />
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" disabled />
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" disabled />
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" disabled />
                    <Input bg={'#F7F7F7'} border={'2px solid #EAECF0'} textAlign={'center'} h={'56px'} fontSize={'30px'} fontWeight={700} color={'#000000'} id="password" type="number" disabled />
                </HStack>
                <Text fontSize={'14px'} fontWeight={400} color={'#394455'}>Didn't receive OTP?</Text>
                <HStack spacing={3}>
                    <Text fontSize={'16px'} fontWeight={500} color={'#DB9308'}>00:{timeLeft}</Text>
                    <Text fontSize={'16px'} fontWeight={600} color={'#667085'}>Resend</Text>
                </HStack>
            </Stack>
            <Button id="continue" bg={'#A41857'} _hover={{bg: '#A41857'}} fontSize={'18px'} fontWeight={600} color={'#FFFFFF'} py={'12px'} w={'100%'}>Continue</Button>
        </Stack>
    )
}

// <div className={styles.theModal} id="popup">

//             <form className={styles.modalForm} action="">
                

//                 <a className={styles.resend} href="">Resend code now</a>

//             </form>

//             <a className={styles.button} id="continue" onClick={() => toggleOff()} href="">Continue</a>            
//         </div>