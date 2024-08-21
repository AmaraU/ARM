import React, { useState, useRef, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel, Select, Divider } from "@chakra-ui/react";
import Switch from "react-switch";
import { getImageUrl } from "../../../utils";
import styles from './AirtimeBills.module.css';
import { CompleteTransaction } from '../../Components/CompleteTrans';
import { TbCurrencyNaira } from 'react-icons/tb';
import { BiShow, BiHide } from "react-icons/bi";


export const BillsPayment = () => {

    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ showOptions, setShowOptions ] = useState(true);
    const [ showOne, setShowOne ] = useState(false);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ showThree, setShowThree ] = useState(false);
    const [ addFavorite, setAddFavorite ] = useState(false);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const popupRef = useRef(null);


    const savedBills = [
        // {
        //     name: "DSTv Compact",
        //     number: "00236781932",
        //     amount: "19,000"
        // },
        // {
        //     name: "Ikeja Electric",
        //     number: "00236781932",
        //     amount: "3,000"
        // },
        // {
        //     name: "Ikeja Electric",
        //     number: "00236781932",
        //     amount: "5,000"
        // },
        // {
        //     name: "DSTv Compact",
        //     number: "00236781932",
        //     amount: "19,000"
        // }
    ]
    

    const toggleAction = (index) => {
        setActionsOpen(prevState => ({
            ...prevState,
            [index]: !prevState[index]
        }));
    };

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

    const hideBalance = () => {
        return "****************";
    }

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }


    const moveToOptions = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowThree(false);
        setShowOptions(true);   
    }
    const moveToOne = () => {
        setShowOne(true);
        setShowTwo(false);
        setShowThree(false);
        setShowOptions(false);
    }
    const moveToTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowThree(false);
        setShowOptions(false);
    }
    const moveToThree = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowTwo(true);
        setShowOptions(false);
    }

    


    return (
        <>
        {showOptions && <Box>
            {savedBills.length === 0 ? (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Pay Bills</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <img style={{width: '40px', height: '40px'}} src={getImageUrl('icons/bills.png')} alt="" />
                        <Text w={'50%'} textAlign={'center'} fontSize={'16px'} color={'#667085'} >You do not have any saved bills purchase</Text>
                        <Button mt={'16px'} w={'50%'} h={'fit-content'} py={'15px'} bg={'#A41856'} _hover={{bg: '#A41856'}} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} onClick={moveToOne}>Pay Bills</Button>
                    </Stack>
                </Box>

            ) : (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Pay Bills</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <Stack w={'60%'} display={'grid'} gridTemplateColumns={'repeat(2, auto)'}>
                            {savedBills.map((bil, index) => (
                                <HStack border={'1px solid #EAECF0'} borderRadius={'8px'} w={'100%'} py={'20px'} px={'10px'} spacing={'16px'}>
                                    <Box>
                                        <img style={{width: '32px', height: '32px'}} src={getImageUrl('icons/bills.png')} />
                                    </Box>
                                    <Box w={'90%'}>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{bil.name}</Text>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>N{bil.amount}</Text>
                                        </HStack>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{bil.number}</Text>
                                            <button onClick={() => toggleAction(index)}><img style={{height: '24px', width: '24px'}} src={getImageUrl('icons/actions.png')} /></button>
                                            <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                                <button style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                                <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/nav/blackPhone.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Buy Data</Text></HStack>
                                                <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/redDelete.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Delete</Text></HStack>
                                            </Box>
                                        </HStack>
                                    </Box>
                                </HStack>
                            ))}
                        </Stack>
                    </Stack>
                </Box>
            )}
        </Box>}

        {showOne && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToOptions}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Pay Bills</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>1/3</Text>
            </HStack>
            <Stack spacing={'20px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Bill Type</FormLabel>
                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select bill type" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                </FormControl>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Bill Provider</FormLabel>
                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select bill provider" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                </FormControl>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Package</FormLabel>
                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select package" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
                </FormControl>

                <Button onClick={moveToTwo} mt={'16px'} w={'75%'} py={'20px'} px={'12px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
            </Stack>
        </Box>}


        {showTwo && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToOne}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>TReview Payment</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>2/3</Text>
            </HStack>
            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Input the transaction details below</Text>
                <HStack w={'75%'} backgroundColor={'#000000'} backgroundImage={getImageUrl('backgroundGrey.png')} bgSize={'100% 100%'} borderRadius={'12px'} p={'14px'} pt={'24px'} justifyContent={'space-between'}>
                    <Box>
                        <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>Total Available Balance</Text>
                        <HStack ml={"-1px"} spacing={0}>
                            <Box fontSize={"20px"} color={"#FFFFFF"}><TbCurrencyNaira /></Box>
                            <Text fontSize={"18px"} fontWeight={600} color={"#FFFFFF"}>{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                            <Box pl={3} cursor={"pointer"}>
                                { totalBalanceVisible && <BiShow fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                { !totalBalanceVisible && <BiHide fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                            </Box>
                        </HStack>
                    </Box>

                    <Box alignSelf={'start'} borderRadius={'36px'} px={'12px'} py={'8px'} bg={'#2C323A'} color={'#FFFFFF'} fontSize={'10px'} fontWeight={500}>Tier 1 Savings Account</Box>
                </HStack>

                <Box w={'75%'} p={'12px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} borderRadius={'8px'}>
                    <HStack>
                        <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/bills.png')} />
                        <Stack gap={0}>
                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>Bill Package</Text>
                            <HStack justifyContent={'space-between'} w={'100%'}>
                                <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>DSTv Compact - 03458856544</Text>
                                <Text fontSize={'14px'} fontWeight={600} color={'#101828'}>N19,000</Text>
                            </HStack>
                        </Stack>
                    </HStack>

                    <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                    <HStack>
                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                        <Stack gap={0}>
                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>CUSTOMER NAME</Text>
                            <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Adeola Obasanjo</Text>
                        </Stack>
                    </HStack>

                </Box>

                <Button
                    mt={'16px'}
                    w={'75%'} h={'fit-content'}
                    py={'15px'} px={'20px'}
                    bg={'#A41856'} _hover={{bg: '#A41856'}}
                    color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}
                    onClick={moveToThree}
                >Continue</Button>
            </Stack>
        </Box>}



        {showThree && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToTwo}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Complete Purchase</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>3/3</Text>
            </HStack>

            <CompleteTransaction />
        </Box>}

        </>
    );
}