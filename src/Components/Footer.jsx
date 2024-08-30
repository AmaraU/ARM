import React from "react";
import { Flex, Text } from "@chakra-ui/react";


export const Footer = () => {

    return (
        <Flex px={'38px'} py={'44px'} ml={'272px'} justifyContent={'space-between'}>
            <Text fontSize={'14px'} color={'#667085'}>© 2024 ARM MFB by ARM Group. All rights reserved.</Text>
            <Text fontSize={'14px'} color={'#667085'} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Help Center</Text>
            <Text fontSize={'14px'} color={'#667085'} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Privacy Policy</Text>
        </Flex>
    )
}