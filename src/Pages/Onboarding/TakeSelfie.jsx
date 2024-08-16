import { Box, Button, Flex, HStack, Input, Stack, Text, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";


export const TakeSelfie = () => {
    const navigate = useNavigate();

    function capture() {
        navigate('/confirm-picture');
    }


    
    return (
        <>
        <Stack alignItems={'center'} spacing={5} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '30%', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/verify-number'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                <Box>40%</Box>
            </Flex>

            <Box h={'423px'} w={'100%'} bg={'#0E0E0E'} borderRadius={'12px'}></Box>

            <Stack alignItems={'center'} spacing={2} bg={'#000000'} borderRadius={'11px 11px 0 0'} w={'100%'} p={'10px'} pb={'24px'}>
                <Text fontSize={'16px'} fontWeight={500} color={'#FFFFFF'} >Keep your head inside the circle</Text>
                <button onClick={capture}><img style={{width: '80px', height: '80px'}} src={getImageUrl('icons/capture.png')} alt="capture" /></button>
            </Stack>
        </Stack>
        </>
    )
}