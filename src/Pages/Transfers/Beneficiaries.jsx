import React, { useState, useRef, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input, Select, FormControl, FormLabel, Flex } from "@chakra-ui/react";
import styles from "./Transfers.module.css";
import { getImageUrl } from "../../../utils";

export const Beneficiaries = () => {

    const [ search, setSearch] = useState("");
    const [ actionsOpen, setActionsOpen ] = useState({});


    const beneficiaries = [
        {
            name: "Adeola Obasanjo",
            number: "0023671526",
            bank: "Suntrust Bank"
        },
        {
            name: "Micheal Eze",
            number: "0023671526",
            bank: "Suntrust Bank"
        },
        {
            name: "Ogechi Arinze",
            number: "0023671526",
            bank: "Suntrust Bank"
        },
        {
            name: "James Gold",
            number: "0023671526",
            bank: "Suntrust Bank"
        }
    ]    
    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const filteredBeneficiaries = beneficiaries.filter(b => {
        const searchLower = search.toLowerCase();
        return (
            b.name.toLowerCase().includes(searchLower) ||
            b.number.toLowerCase().includes(searchLower) ||
            b.bank.toLowerCase().includes(searchLower)
        );
    });

    const toggleAction = (index) => {
        setActionsOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

    const popupRef = useRef(null);

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setActionsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);

    


    return (
        <>            
        <Box>

            <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Beneficiary List</Text>
            </HStack>
            <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                

                <Flex justifyContent={'space-between'} alignItems={'center'} border={'1px solid #DCD6CF'} py={'10px'} px={'20px'} w={'75%'} borderRadius={'8px'} mt={'24px'}>
                    <input id='search' type='text' onChange={handleSearch} placeholder='Search beneficiaries' style={{border:'none', outline: 'transparent', width: '100%'}}></input>
                    <img style={{width: '24px', height: '24px'}} src={getImageUrl('icons/search.png')} />
                </Flex>

                {filteredBeneficiaries.length === 0 ? (
                    <Text fontSize={'16px'} color={'#6B7280'}>No beneficiaries found</Text>
                ) : (
                    <>
                    {filteredBeneficiaries.map((ben, index) => (
                        <HStack key={index} w={'75%'} borderBottom={'0.5px solid #E6E2DD'} py={'16px'} alignItems={'start'}>
                            <img style={{height: '20px', width: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                            <Stack flex={'90%'}>
                                <Flex justifyContent={'space-between'}>
                                    <Text fontSize={'18px'} fontWeight={500} color={'#101828'}>{ben.name}</Text>
                                    <Text fontSize={'18px'} fontWeight={500} color={'#101828'}>{ben.bank}</Text>
                                </Flex>
                                <Flex justifyContent={'space-between'}>
                                    <Text fontSize={'18px'} fontWeight={500} color={'#101828'}>{ben.number}</Text>
                                    <button onClick={() => toggleAction(index)}><img style={{height: '24px', width: '24px'}} src={getImageUrl('icons/actions.png')} /></button>
                                    <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                        <button style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                        <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/nav/transfersGrey.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Transfer</Text></HStack>
                                        <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/redDelete.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Delete</Text></HStack>
                                    </Box>
                                </Flex>
                            </Stack>
                        </HStack>
                    ))}
                    </>

                )}

            </Stack>
        </Box>
        </>
    );
}