import React, { useState, useRef, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Flex, Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalOverlay, useDisclosure, Divider, Select, FormControl, FormLabel, InputGroup, Input, InputRightElement, Spinner, ModalFooter } from "@chakra-ui/react";
import styles from "./Transfers.module.css";
import { getImageUrl } from "../../../utils";
import { useNavigate } from 'react-router-dom';

export const Beneficiaries = () => {

    const [ showBens, setShowBens ] = useState(true);
    const [ showBenInfo, setShowBenInfo ] = useState(false);
    const [ search, setSearch ] = useState("");
    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ checkingAccount, setCheckingAccount ] = useState(false);
    const [ showName, setShowName ] = useState(false);
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const { isOpen: isOpenAdd, onOpen: onOpenAdd, onClose: onCloseAdd } = useDisclosure();
    const navigate = useNavigate();


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
            type: 'debit'
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
            type: 'debit'
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
            type: 'debit'
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
            type: 'debit'
        },
        {
            description: 'Account Credited',
            method: 'Inter Bank Transfer',
            amount: '100,500',
            date: '03-Jul-2024',
            type: 'credit'
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

    const moveToBenList = () => {
        setShowBens(true);
        setShowBenInfo(false);
    }

    const moveToBenInfo = () => {
        setShowBens(false);
        setShowBenInfo(true);
    }

    const checkAccount = () => {
        setCheckingAccount(true);
        setTimeout(() => setCheckingAccount(false), 5000);
        setTimeout(() => setShowName(true), 5000);
    }

    const handleCloseAdd = () => {
        setShowName(false);
        onCloseAdd();
    }

    


    return (
        <>            
        {showBens && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button h='24px' bg='#EAECF0' p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Beneficiary List</Text>
            </HStack>
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' py='16px' pb='114px'>                                

                <Flex justifyContent='space-between' alignItems='center' border='1px solid #DCD6CF' py='10px' px='20px' w='75%' borderRadius='8px' mt='24px'>
                    <input id='search' type='text' onChange={handleSearch} placeholder='Search beneficiaries' style={{border:'none', outline: 'transparent', width: '100%'}}></input>
                    <img style={{width: '24px', height: '24px'}} src={getImageUrl('icons/search.png')} />
                </Flex>

                {filteredBeneficiaries.length === 0 ? (
                    <Text fontSize='16px' color='#6B7280'>No beneficiaries found</Text>
                ) : (
                    <>
                    {filteredBeneficiaries.map((ben, index) => (
                        <HStack key={index} w='75%' borderBottom='0.5px solid #E6E2DD' py='16px' alignItems='start'>
                            <img style={{height: '20px', width: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                            <Stack flex='90%'>
                                <Flex justifyContent={'space-between'}>
                                    <Text fontSize='18px' fontWeight={500} color='#101828'>{ben.name}</Text>
                                    <Text fontSize='18px' fontWeight={500} color='#101828'>{ben.bank}</Text>
                                </Flex>
                                <Flex justifyContent='space-between'>
                                    <Text fontSize='18px' fontWeight={500} color='#101828'>{ben.number}</Text>
                                    <div>
                                        <button onClick={() => toggleAction(index)}><img style={{height: '24px', width: '24px'}} src={getImageUrl('icons/actions.png')} /></button>
                                        <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                            <button onClick={()=>setActionsOpen(false)} style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                            <HStack cursor='pointer' _hover={{bg: '#EAECF0'}} p='8px'><img src={getImageUrl('icons/nav/transfersGrey.png')} /><Text fontSize='14px' fontWeight={500} color='#667085'>Transfer</Text></HStack>
                                            <HStack cursor='pointer' _hover={{bg: '#EAECF0'}} p='8px' onClick={moveToBenInfo}><img src={getImageUrl('icons/view.png')} /><Text fontSize='14px' fontWeight={500} color='#667085'>View Details</Text></HStack>
                                            <HStack cursor='pointer' _hover={{bg: '#EAECF0'}} p='8px' onClick={onOpenDelete}><img src={getImageUrl('icons/redDelete.png')} /><Text fontSize='14px' fontWeight={500} color='#667085'>Delete</Text></HStack>
                                        </Box>
                                    </div>
                                </Flex>
                            </Stack>
                        </HStack>
                    ))}
                    </>
                )}
            </Stack>
        </Box>}


        {showBenInfo && <Box>
            <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
                <Button onClick={moveToBenList} h='24px' bg='#EAECF0' p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text width='90%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Beneficiary Information</Text>
            </HStack>
            
            <Stack spacing='16px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' py='16px' pb='114px'>                                

                <HStack w='80%' p='12px' bg='#EFECE9' border='1px solid #EAECF0' borderRadius='8px'>
                    <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                    <Stack gap={0}>
                        <Text fontSize='12px' fontWeight={500} color='#667085'>BENEFICIARY NAME</Text>
                        <Text fontSize='18px' fontWeight={500} color='#101828'>Adeola Obasanjo</Text>
                    </Stack>
                </HStack>

                <Box w='80%' py='28px' px='18' bg='#EFECE9' border='1px solid #EAECF0' borderRadius='8px'>
                    <HStack justifyContent='space-between'>
                        <HStack>
                            <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/greyBank.png')} />
                            <Stack gap={0}>
                                <Text fontSize='12px' fontWeight={450} color='#667085'>BANK ACCOUNT</Text>
                                <Text fontSize='18px' fontWeight={450} color='#101828'>ARM Microfinance Bank</Text>
                                <Text fontSize='18px' fontWeight={450} color='#101828'>0122458754</Text>
                            </Stack>
                        </HStack>
                        <Button borderRadius='32px' bg='#A41857' _hover={{bg: '#A41857'}} fontSize='12px' fontWeight={600} color='#FFFFFF'>Make a bank transfer</Button>
                    </HStack>

                    <Divider h='0px' mt='12px' mb='12px' border='1px solid #DCD6CF' />

                    <HStack justifyContent='space-between'>
                        <Text onClick={onOpenAdd} cursor='pointer' _hover={{textDecoration: 'underline'}} fontSize='18px' fontWeight={450} color='#A41857'>Add another bank account</Text>
                        <button onClick={onOpenAdd} className={styles.plus}><img src={getImageUrl('icons/whitePlus.png')} style={{width: '16px', height: '16px'}} /></button>
                    </HStack>

                </Box>

                <Box borderRadius='12px' border='1px solid #EBEBEB' w='80%'>

                    {history.length === 0 ?
                        <Text w='100%' alignSelf='center' textAlign='center' fontSize="20px" color="#394455" fontWeight={450} py='25px'>NO ENTRIES FOUND</Text>
                    :
                        <table className={styles.historyTable}>
                            
                            <thead>
                                <th>Beneficiary Account</th>
                                <th>Amount</th>
                                <th>Date</th>
                                <th></th>
                            </thead>
                        
                        
                            <tbody>
                                {history.map((his, index) => (
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
                                        <td>₦ {his.amount}</td>
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
                </Box>
            </Stack>
        </Box>}



        <Modal isCentered size='lg' closeOnOverlayClick={false} isOpen={isOpenDelete} onClose={onCloseDelete} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>Delete Beneficiary</Text>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                    <Stack spacing={2} alignItems='center' textAlign='center'>
                        <img style={{width: '70px', height: 'auto'}} src={getImageUrl('icons/caution.png')} />
                        <Text fontSize='16px' fontWeight={700} color='#0C111D'>Are you sure you want to delete this beneficiary?</Text>

                        <Button mt='16px' w='100%' h='48px' bg='#A41856' _hover={{bg: '#A41856'}} color='#FFFFFF' fontSize='14px' fontWeight={600}>Yes</Button>
                        <Button w='100%' h='48px' bg='#EFECE9' _hover={{bg: '#EFECE9'}} color='#667085' fontSize='14px' fontWeight={600}>Go to dashboard</Button>

                    </Stack>
                </div>
                </ModalBody>
            </ModalContent>
        </Modal>


        <Modal isCentered size='lg' closeOnOverlayClick={false} isOpen={isOpenAdd} onClose={handleCloseAdd} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text textAlign='center' fontSize='18px' fontWeight={600} color='#394455'>Add Beneficiary Bank Account</Text>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody px={6}>
                <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                    <Stack spacing={4} alignItems='center' textAlign='center'>
                        <FormControl w='100%' isRequired>
                            <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Account Number</FormLabel>
                            <InputGroup>
                                <Input onChange={checkAccount} type='number' h='48px' bg='#F7F7F7' border='1px solid #EAECF0' placeholder="Input acount number" _placeholder={{fontSize: '16px', color: '#667085'}} autoComplete='off' />
                                {checkingAccount && <InputRightElement><Spinner color='#A41857' w='24px' thickness='4px' /></InputRightElement>}
                            </InputGroup>
                        </FormControl>

                        <FormControl w='100%' isRequired>
                            <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Select Bank</FormLabel>
                            <Select h='48px' bg='#F7F7F7' border='1px solid #EAECF0'fontSize='16px' color='#667085'>
                                <option>United Bank for Africa</option>
                            </Select>
                        </FormControl>

                        {showName && <HStack w='100%' p='12px' bg='#EFECE9' border='1px solid #EAECF0' borderRadius='8px'>
                            <img style={{width: '20px', height: '20px'}} src={getImageUrl('icons/nav/profileGrey.png')} />
                            <Stack gap={0} alignItems='start'>
                                <Text fontSize='12px' fontWeight={500} color='#667085'>BENEFICIARY NAME</Text>
                                <Text fontSize='18px' fontWeight={500} color='#101828'>Adeola Obasanjo</Text>
                            </Stack>
                        </HStack>}
                    </Stack>
                </div>
                </ModalBody>

                <ModalFooter pt={0}>
                    <Button onClick={handleCloseAdd} mt='16px' w='100%' h='48px' bg='#A41856' _hover={{bg: '#A41856'}} color='#FFFFFF' fontSize='14px' fontWeight={600}>Add Bank Account</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
        </>
    );
}