import { useEffect, useRef, useState } from "react";
import { Stack, Text, Box, Button, HStack, Select } from "@chakra-ui/react";
import { getImageUrl } from "../../../utils";
import Pagination from "../../Components/Pagination/Pagination";
import { useNavigate } from "react-router-dom";
import { format } from 'date-fns';
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import styles from "./Overview.module.css";
import '../../App.css';


export const TransactionHistory = () => {

    const [ search, setSearch] = useState("");
    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ currentPage, setCurrentPage ] = useState(1);
    const [ itemsPerPage, setItemsPerPage ] = useState(8);
    const [ dateRange, setDateRange ] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
    const [ showCalendar, setShowCalendar ] = useState(false);
    const popupRef = useRef(null);
    const filterRef = useRef(null);
    const navigate = useNavigate();

    const formatNumber = (number) => {
        return new Intl.NumberFormat("en-US").format(number);
    };


    const history = [
        {
            description: 'To Chow City Yaba',
            amount: '100500',
            date: '2024-10-03',
            type: 'debit'
        },
        {
            description: 'To Michael Adebanwo',
            amount: '100500',
            date: '2024-10-04',
            type: 'debit'
        },
        {
            description: 'To Adeola Obsanjo Sarah-Michelle',
            amount: '100500',
            date: '2024-10-05',
            type: 'debit'
        },
        {
            description: 'From Jesse Pinkman',
            amount: '100500',
            date: '2024-10-06',
            type: 'credit'
        },
        {
            description: 'To Fola Small Chops',
            amount: '100500',
            date: '2024-10-07',
            type: 'debit'
        },
        {
            description: 'From Adetayo Adeleke',
            amount: '100500',
            date: '2024-10-08',
            type: 'credit'
        },
        {
            description: 'To Jackson Nico',
            amount: '100500',
            date: '2024-10-09',
            type: 'debit'
        },
        {
            description: 'To Omolola Ladeke',
            amount: '100500',
            date: '2024-10-10',
            type: 'debit'
        },
        {
            description: 'From Jesse Pinkman',
            amount: '100500',
            date: '2024-10-11',
            type: 'debit'
        },
        {
            description: 'To Adeola Obsanjo Sarah-Michelle',
            amount: '100500',
            date: '2024-10-11',
            type: 'debit'
        },
        {
            description: 'To Jackson Nico',
            amount: '100500',
            date: '2024-10-12',
            type: 'debit'
        },
        {
            description: 'From Adetayo Adeleke',
            amount: '100500',
            date: '2024-10-13',
            type: 'credit'
        },
        {
            description: 'From Omolola Ladeke',
            amount: '100500',
            date: '2024-10-14',
            type: 'credit'
        },
        {
            description: 'To Chow City Yaba',
            amount: '100500',
            date: '2024-10-15',
            type: 'debit'
        },
        {
            description: 'To Michael Adebanwo',
            amount: '100500',
            date: '2024-10-16',
            type: 'debit'
        }
    ]

    const [ dateFilteredHistory, setDateFilteredHistory ] = useState(history);


    const handleSearch = (event) => {
        setSearch(event.target.value);
        setCurrentPage(1);
    };

    const handleSelect = ranges => {
        setDateRange([ranges.selection]);
    };
    const applyFilter = () => {
        const { startDate, endDate } = dateRange[0];
        const adjustedEndDate = new Date(endDate);
        adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);
        const filtered = history.filter(item => {
          const itemDate = new Date(item.date);
          return itemDate >= startDate && itemDate < adjustedEndDate;
        });
        setDateFilteredHistory(filtered);
        setShowCalendar(false);
    };
    const cancelFilter = () => {
        setDateFilteredHistory(history);
        setShowCalendar(false);
    };

    const filteredHistory = dateFilteredHistory.filter(his => {
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

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setActionsOpen(false);
        }
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            setShowCalendar(false);
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
        <Box className={styles.whole}>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={()=>navigate('/overview')}  h='24px' bg='#EAECF0' p={0} _hover={{ bg: '#EAECF0' }}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Account History</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='40px' pb='114px' pt='48px'>

                <HStack w='100%' mb='12px' justifyContent='space-between'>
                    <HStack border='1px solid #DCD6CF' px='20px' py='10px' borderRadius='8px' width='50%'>
                        <input onChange={handleSearch} placeholder="Search" style={{ width: '100%', outline:'transparent', border:'none', fontSize:'16px', color:'#A0A4A9', padding: '0'}}/>
                        <img style={{width: '24px', height:'24px'}} src={getImageUrl('icons/search.png')} alt="search" />
                    </HStack>
                    <div>
                        <HStack border='1px solid #DCD6CF' p='10px' borderRadius='8px' cursor='pointer' onClick={()=>setShowCalendar(!showCalendar)}>
                            <img src={getImageUrl('icons/filter.png')} alt="search" />
                            <Text fontSize='16px' color='#A0A4A9'>Filter</Text>
                        </HStack>
                        {showCalendar && (
                            <div className="calendarDiv" ref={filterRef}>
                                <DateRange
                                    editableDateInputs={true}
                                    onChange={handleSelect}
                                    moveRangeOnFirstSelection={false}
                                    ranges={dateRange}
                                />
                                <div className="calendarButtons">
                                    <button className="cancel" onClick={cancelFilter}>Cancel</button>
                                    <button className="apply" onClick={applyFilter}>Apply</button>
                                </div>
                            </div>
                        )}
                    </div>
                </HStack>

                {currentHistory.length === 0 ?
                    <Text w='100%' alignSelf='center' textAlign='center' fontSize="20px" color="#394455" fontWeight={450} py='25px'>NO ENTRIES FOUND</Text>
                :
                    <table className={styles.historyTable}>
                        
                        <thead>
                            <th>Transfers</th>
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
                                                <Text fontSize="12px" color="#667085" fontWeight={450}>{his.type}</Text>
                                            </Stack>
                                        </HStack>
                                    </td>
                                    <td>₦{formatNumber(his.amount)}</td>
                                    <td>{format(new Date(his.date), 'dd-MM-yyyy')}</td>
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
