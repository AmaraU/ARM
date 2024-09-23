import React, { useEffect, useRef, useState } from "react";
import { Stack, Text, Box, Button, HStack, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import styles from "./MyAccountPage.module.css";
import Pagination from "../../Components/Pagination/Pagination";


export const AccountHistory = ({ backHome }) => {

    const [ search, setSearch] = useState("");
    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage, setItemsPerPage ] = useState(8);


    const history = [
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'MTN Airtime Purchase',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'DStv compact subscription',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        },
        {
            description: 'MTN Airtime Purchase',
            method: 'Bills Payment',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'debit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100500',
            date: '03-Jul-2024',
            type: 'credit'
        }
    ]

    const formatNumber = (number) => {
        return new Intl.NumberFormat('en-US').format(number);
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const filteredHistory = history.filter(his => {
        const searchLower = search.toLowerCase();
        return (
            his.amount.toLowerCase().includes(searchLower) ||
            his.date.toLowerCase().includes(searchLower) ||
            his.description.toLowerCase().includes(searchLower) ||
            his.method.toLowerCase().includes(searchLower) ||
            his.type.toLowerCase().includes(searchLower)
        );
    });

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentHistory = filteredHistory.slice(indexOfFirstItem, indexOfLastItem);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 0});
    };

    const handlePageNumber = (itemNumber) => {
        setItemsPerPage(itemNumber);
        setCurrentPage(1);
        window.scrollTo({ top: 0});
    };

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
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={backHome} h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account History</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='40px' pb='114px' pt='48px'>

                <HStack w='100%' mb='12px' justifyContent='space-between'>
                    <HStack border='1px solid #DCD6CF' px='20px' py='10px' borderRadius='8px' width='50%'>
                        <input onChange={handleSearch} placeholder="Search" style={{ width: '100%', outline:'transparent', border:'none', fontSize:'16px', color:'#A0A4A9', padding: '0'}}/>
                        <img style={{width: '24px', height:'24px'}} src={getImageUrl('icons/search.png')} alt="search" />
                    </HStack>
                    <HStack border='1px solid #DCD6CF' p='10px' borderRadius='8px'>
                        <img src={getImageUrl('icons/filter.png')} alt="search" />
                        <Text fontSize='16px' color='#A0A4A9'>Filter</Text>
                    </HStack>
                </HStack>
                
                {currentHistory.length === 0 ?
                    <Text w='100%' alignSelf='center' textAlign='center' fontSize="20px" color="#394455" fontWeight={450} py='25px'>NO ENTRIES FOUND</Text>
                :
                    <table className={styles.historyTable}>
                        
                        <thead>
                            <th>Description</th>
                            <th>Amount</th>
                            <th>Date</th>
                            <th></th>
                        </thead>
                    
                    
                        <tbody>
                            {currentHistory.map((his, index) => (
                                <tr key={index}>
                                    <td>
                                        <HStack>
                                            {his.type === 'credit' ? <img className={styles.credDeb} src={getImageUrl('icons/credit.png')} /> : ''}
                                            {his.type === 'debit' ? <img className={styles.credDeb} src={getImageUrl('icons/debit.png')} /> : ''}
                                            <Stack gap={0}>
                                                <Text fontSize="14px" color="#394455" fontWeight={450}>{his.description}</Text>
                                                <Text fontSize="12px" color="#667085" fontWeight={450}>{his.method}</Text>
                                            </Stack>
                                        </HStack>
                                    </td>
                                    <td>₦{formatNumber(his.amount)}</td>
                                    <td>{his.date}</td>
                                    <td>
                                        <div>
                                            <button onClick={() => toggleAction(index)}><img src={getImageUrl('icons/three_dots.png')} /></button>
                                            <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                                <button onClick={()=>setActionsOpen(false)} style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                                <HStack cursor='pointer' _hover={{bg: '#EAECF0'}} p='8px'><img src={getImageUrl('icons/greyReceipt.png')} /><Text fontSize='14px' fontWeight={500} color='#667085'>Download Receipt</Text></HStack>
                                                <HStack cursor='pointer' _hover={{bg: '#EAECF0'}} p='8px'><img src={getImageUrl('icons/greySend.png')} /><Text fontSize='14px' fontWeight={500} color='#667085'>Repeat Transaction</Text></HStack>
                                            </Box>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                }


                <HStack w='100%' justifyContent='space-between' alignItems='center'>
                    <Pagination filteredData={filteredHistory} currentPage={currentPage} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
                    <HStack flex='50%' justifyContent='space-between' alignItems='center'>
                        {currentHistory.length === 0 ? <Text fontSize="12px" color="#667085" fontWeight={450}>Showing 0 entries</Text>
                        : <Text fontSize="12px" color="#667085" fontWeight={450}>Showing {indexOfFirstItem + 1} to {currentHistory.length + ((currentPage-1) * itemsPerPage)} of {filteredHistory.length} entries</Text>}
                        <Select w='100px' border='1px solid #EFECE9' fontSize='12px' fontWeight={450} color='#101828' onChange={(e) => handlePageNumber(e.target.value)} >
                            <option value={8}>Show 8</option>
                            <option value={10}>Show 10</option>
                            <option value={15}>Show 15</option>
                        </Select>
                    </HStack>
                </HStack>
                    
            </Stack>
        </Box>
        </>
    );
};
