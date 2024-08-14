import React, { useState } from "react";
import { Box, Button, Divider, HStack, Input, Select, Stack, Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import { BiShow, BiHide } from "react-icons/bi";
import { TbCurrencyNaira } from "react-icons/tb";
import styles from './Transfers.module.css';
import { getImageUrl } from "../../../utils";

export const Transfers = () => {

    const [totalBalanceVisible, setTotalBalanceVisible] = useState(true);

    const hideBalance = () => {
        return "****************";
    }

    const handleToggleVisibility = () => {
        setTotalBalanceVisible(!totalBalanceVisible);
    }
    
    return (
        <div className={styles.whole}>
            <Text fontSize={'24px'} fontWeight={700} color={'#101828'} mb={'16px'}>Transfers</Text>
            <Tabs>
                <TabList borderBottom={'none'} gap={'5px'} mb={'24px'}>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Transfer To Self</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Transfer To Others</Tab>
                    <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Beneficiaries</Tab>
                </TabList>

                <TabPanels>
                    <TabPanel>
                        Transfer to self
                    </TabPanel>
                    
                    <TabPanel ml={-4} mr={-4} mt={-4}>
                        
                        <Box id="stepOne">

                            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Transfer to Others</Text>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>1/3</Text>
                            </HStack>
                            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Input the transaction details below</Text>
                                <HStack w={'75%'} backgroundColor={'#000000'} backgroundImage={getImageUrl('backgroundGrey.png')} bgSize={'100% 100%'} borderRadius={'12px'} p={'14px'} pt={'24px'} justifyContent={'space-between'}>
                                    <Box>
                                        <Text fontSize={'14px'} fontWeight={400} color={'#FFFFFF'}>Total Available Balance</Text>
                                        <HStack ml={"-1px"} spacing={0}>
                                            <Box fontSize={"22px"} color={"#FFFFFF"}><TbCurrencyNaira /></Box>
                                            <Text fontSize={"18px"} fontWeight={600} color={"#FFFFFF"}>{totalBalanceVisible ? `${1234568}` : hideBalance()}</Text>
                                            <Box pl={3} cursor={"pointer"}>
                                                { totalBalanceVisible && <BiShow fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                                { !totalBalanceVisible && <BiHide fontSize={"lg"} color={"#FFFFFF"} onClick={handleToggleVisibility} /> }
                                            </Box>
                                        </HStack>
                                    </Box>

                                    <Box alignSelf={'start'} borderRadius={'36px'} px={'12px'} py={'8px'} bg={'#2C323A'} color={'#FFFFFF'} fontSize={'10px'} fontWeight={500}>Tier 1 Savings Account</Box>
                                </HStack>

                                <Stack w={'75%'}>
                                    <Text>Account Number</Text>
                                    <Input bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Input acount number" _placeholder={{fontSize: '16px', color: '#667085'}}></Input>
                                </Stack>

                                <HStack w={'75%'}>
                                    <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                                    <Text fontSize={'14px'} fontWeight={500} color={'#A41857'}>Select from Beneficiary</Text>
                                </HStack>

                                <Stack w={'75%'}>
                                    <Text>Bank Name</Text>
                                    <Select bg={'#F7F7F7'} border={'1px solid #EAECF0'} _placeholder={{fontSize: '16px', color: '#667085'}} placeholder="Select bank">
                                        <option value="">Bank 1</option>
                                    </Select>
                                </Stack>

                                <Button mt={'16px'} w={'75%'} py={'20px'} px={'12px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
                            </Stack>
                        </Box>


                        <Box id="stepTwo">

                            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Transfer to Others</Text>
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
                                        <img src={getImageUrl('icons/greyBank.png')} />
                                        <Stack gap={0}>
                                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>BENEFICIARY ACCOUNT NUMBER</Text>
                                            <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Guaranty Trust Bank - 0122458754</Text>
                                        </Stack>
                                    </HStack>

                                    <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                                    <HStack>
                                        <img src={getImageUrl('icons/nav/profileGrey.png')} />
                                        <Stack gap={0}>
                                            <Text fontSize={'10px'} fontWeight={500} color={'#667085'}>BENEFICIARY NAME</Text>
                                            <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Adeola Obasanjo</Text>
                                        </Stack>
                                    </HStack>

                                </Box>

                                <Stack w={'75%'}>
                                    <Text>Amount</Text>
                                    <InputGroup>
                                        <InputLeftElement pointerEvents='none' color='#667085' fontSize='16px'><TbCurrencyNaira /></InputLeftElement>
                                        <Input bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Enter amount" _placeholder={{fontSize: '16px', color: '#667085'}} />
                                    </InputGroup>
                                </Stack>

                                <HStack w={'75%'} justifyContent={'space-between'}>
                                    <HStack>
                                        <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                                        <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Your daily transfer limit is N200,000</Text>
                                    </HStack>
                                    <Text cursor={'pointer'} fontSize={'14px'} fontWeight={500} color={'#A41857'}>Increase your transfer limit</Text>
                                </HStack>

                                <Stack w={'75%'}>
                                    <Text>Note (Optional)</Text>
                                    <Input bg={'#F7F7F7'} border={'1px solid #EAECF0'} _placeholder={{fontSize: '16px', color: '#667085'}}></Input>
                                </Stack>

                                <Button mt={'16px'} w={'75%'} py={'20px'} px={'12px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
                            </Stack>
                        </Box>


                        <Box id="stepThree">

                            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Complete Transaction</Text>
                                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>3/3</Text>
                            </HStack>
                            <Stack gap={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Enter your 4-digit PIN to complete your transaction</Text>
                                

                                <Button mt={'16px'} w={'75%'} py={'20px'} px={'12px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
                            </Stack>
                        </Box>
                        
                    </TabPanel>
                    
                    <TabPanel ml={-4} mr={-4} mt={-4}>
                        Beneficiaries
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

;

// box-shadow: 0px 6px 6px -6px #00000029;
