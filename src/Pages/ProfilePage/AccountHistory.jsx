import { useState, useRef } from "react";
import { Stack, Text, Box, Button, HStack, Divider, Input, Table, Thead, Th, Tbody, Tr, Td } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./ProfilePage.module.css";
import { BiShow, BiHide } from "react-icons/bi";

export const AccountHistory = () => {

    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ totalBalanceVisible, setTotalBalanceVisible ] = useState(true);
    const [ showUpgrade, setShowUpgrade ] = useState(true);
    const [ infoPopup, setInfoPopup ] = useState(false);
    

    const history = [
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'MTN Airtime Purchase',
            method: 'Bills Payment',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
        }
    ]



    return (
        <>
        <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account History</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

                <HStack mb={'12px'} justifyContent={'space-between'}>
                    <Box border='1px solid #DCD6CF' px='20px' py='10px' borderRadius='8px'>
                        <Input />
                        <img src={getImageUrl('icons/search.png')} alt="search" />
                    </Box>
                    <Box border='1px solid #DCD6CF' py='10px' borderRadius='8px'>
                        <img src={getImageUrl('icons/filter.png')} alt="search" />
                        <Text fontSize='16px' color='#A0A4A9'>Filter</Text>
                    </Box>
                </HStack>
                <Table>
                    <Thead bg='#D391AF0D' color='#667085'>
                        <Th>Description</Th>
                        <Th>Amount</Th>
                        <Th>Date</Th>
                        <Th></Th>
                    </Thead>
                    
                    <Tbody>
                        {history.map((his, index) => (
                            <Tr key={index}>
                                <Td>
                                    <HStack>
                                        {his.type === 'credit' ? <img className={styles.credDeb} src={getImageUrl('icons/credit.png')} /> : ''}
                                        {his.type === 'debit' ? <img className={styles.credDeb} src={getImageUrl('icons/debit.png')} /> : ''}
                                        <Stack gap={0}>
                                            <Text fontSize={"14px"} color={"#394455"} fontWeight={450}>{his.description}</Text>
                                            <Text fontSize={"12px"} color={"#667085"} fontWeight={450}>{his.method}</Text>
                                        </Stack>
                                    </HStack>
                                </Td>
                                <Td><Box fontSize={"14px"} color={"#394455"} fontWeight={500}>₦{his.amount}</Box></Td>
                                <Td><Text fontSize={"14px"} color={"#394455"} fontWeight={500}>{his.date}</Text></Td>
                                <Td><img src={getImageUrl('icons/three_dots.png')} /></Td>
                            </Tr>
                        ))}
                    </Tbody>
                </Table>
                    
            </Stack>
        </Box>
        </>
    );
};
