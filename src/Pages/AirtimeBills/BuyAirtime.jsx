import React, { useState, useRef, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack,
    FormControl, FormLabel,
    Input, InputGroup, InputLeftElement,
    useDisclosure,
    Modal, ModalHeader, ModalCloseButton, ModalBody, ModalContent, ModalOverlay, } from "@chakra-ui/react";
import Switch from "react-switch";
import { getImageUrl } from "../../../utils";
import styles from './AirtimeBills.module.css';
import { CompleteTransaction } from '../../Components/CompleteTrans';


export const BuyAirtime = () => {

    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ showOptions, setShowOptions ] = useState(true);
    const [ showOne, setShowOne ] = useState(false);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ selected, setSelected ] = useState("");
    const [ addFavorite, setAddFavorite ] = useState(false);
    const { isOpen: isOpenDelete, onOpen: onOpenDelete, onClose: onCloseDelete } = useDisclosure();
    const popupRef = useRef(null);


    const savedAirtime = [
        {
            name: "My Baby",
            number: "08101790957",
            amount: "300",
            network: "MTN"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "300",
            network: "Glo"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "300",
            network: "9Mobile"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "300",
            network: "Airtel"
        }
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


    const moveToOptions = () => {
        setShowOne(false);
        setShowTwo(false);
        setShowOptions(true);
        window.scrollTo({ top: 0});
    }
    const moveToOne = () => {
        setShowOne(true);
        setShowTwo(false);
        setShowOptions(false);
        setSelected('');
        window.scrollTo({ top: 0});
    }
    const moveToTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowOptions(false);
        window.scrollTo({ top: 0});
    }

    


    return (
        <>
        {showOptions && <Box>
            {savedAirtime.length === 0 ? (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Airtime</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <img style={{width: '40px', height: '40px'}} src={getImageUrl('icons/blackPhone.png')} alt="" />
                        <Text w={'50%'} textAlign={'center'} fontSize={'16px'} color={'#667085'} >You do not have any saved airtime purchase</Text>
                        <Button mt={'16px'} w={'50%'} h={'48px'} bg={'#A41856'} _hover={{bg: '#A41856'}} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} onClick={moveToOne}>Buy Airtime</Button>
                    </Stack>
                </Box>

            ) : (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Airtime</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <Stack w={'60%'} display={'grid'} gridTemplateColumns={'repeat(2, auto)'}>
                            {savedAirtime.map((air, index) => (
                                <HStack border={'1px solid #EAECF0'} borderRadius={'8px'} w={'100%'} py={'20px'} px={'10px'} spacing={'16px'}>
                                    <Box>
                                        {air.network.toLowerCase() === 'mtn' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/mtn.png')} /> : <></>}
                                        {air.network.toLowerCase() === 'glo' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/glo.png')} /> : <></>}
                                        {air.network.toLowerCase() === '9mobile' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/9mobile.png')} /> : <></>}
                                        {air.network.toLowerCase() === 'airtel' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/airtel.png')} /> : <></>}
                                    </Box>
                                    <Box w={'90%'}>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{air.name}</Text>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>N{air.amount}</Text>
                                        </HStack>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{air.number}</Text>
                                            <div>
                                                <button onClick={() => toggleAction(index)}><img style={{height: '24px', width: '24px'}} src={getImageUrl('icons/actions.png')} /></button>
                                                <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                                    <button style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                                    <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'} onClick={moveToOne}><img src={getImageUrl('icons/blackPhone.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Buy Airtime</Text></HStack>
                                                    <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/redDelete.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'} onClick={onOpenDelete}>Delete</Text></HStack>
                                                </Box>
                                            </div>
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
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Airtime</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>1/2</Text>
            </HStack>
            <Stack spacing={'20px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'}>                                
                <Text fontSize={'16px'} color={'#667085'} textAlign={'center'}>Select Preferred Network</Text>

                <HStack w={'60%'}>
                    <Stack cursor='pointer' onClick={()=>setSelected('mtn')} border={selected === 'mtn' ? '2px solid #A41857' : '1px solid #EAECF0'} alignItems={'center'} borderRadius={'8px'} p={'14px'} w={'100%'}>
                        <img src={getImageUrl('logos/mtn.png')} style={{width: '58px', height: '58px'}} alt="mtn" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>MTN</Text>
                    </Stack>
                    <Stack cursor='pointer' onClick={()=>setSelected('glo')} border={selected === 'glo' ? '2px solid #A41857' : '1px solid #EAECF0'} alignItems={'center'} borderRadius={'8px'} p={'14px'} w={'100%'}>
                        <img src={getImageUrl('logos/glo.png')} style={{width: '58px', height: '58px'}} alt="glo" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Glo</Text>
                    </Stack>
                    <Stack cursor='pointer' onClick={()=>setSelected('airtel')} border={selected === 'airtel' ? '2px solid #A41857' : '1px solid #EAECF0'} alignItems={'center'} borderRadius={'8px'} p={'14px'} w={'100%'}>
                        <img src={getImageUrl('logos/airtel.png')} style={{width: '58px', height: '58px'}} alt="airtel" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>Airtel</Text>
                    </Stack>
                    <Stack cursor='pointer' onClick={()=>setSelected('9mobile')} border={selected === '9mobile' ? '2px solid #A41857' : '1px solid #EAECF0'} alignItems={'center'} borderRadius={'8px'} p={'14px'} w={'100%'}>
                        <img src={getImageUrl('logos/9mobile.png')} style={{width: '58px', height: '58px'}} alt="9mobile" />
                        <Text fontSize={'14px'} fontWeight={500} color={'#101828'}>9mobile</Text>
                    </Stack>
                </HStack>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Phone Number</FormLabel>
                    <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Input Phone Number" _placeholder={{fontSize: '16px', color: '#667085'}}></Input>
                </FormControl>

                <HStack w={'75%'}>
                    <img src={getImageUrl('icons/nav/profileGrey.png')} alt="" />
                    <Text fontSize={'14px'} fontWeight={500} color={'#A41857'}>Select from favorites</Text>
                </HStack>

                <FormControl w={'75%'} isRequired>
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Amount</FormLabel>
                    <InputGroup>
                        <InputLeftElement h={'48px'} pointerEvents='none' color='#667085' fontSize='16px'>₦</InputLeftElement>
                        <Input h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} />
                    </InputGroup>
                </FormControl>

                <HStack w={'75%'} justifyContent={'space-between'}>
                    <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Save as Favorite</Text>
                    <Switch onChange={() => setAddFavorite(!addFavorite)} checked={addFavorite} onColor='#A41857' checkedIcon={false} uncheckedIcon={false} height={24} width={40} handleDiameter={16} />
                </HStack>

                <Button onClick={moveToTwo} mt={'16px'} w={'75%'} h={'48px'} bg={'#A41856'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
            </Stack>
        </Box>}


        {showTwo && <Box>
            <HStack bg={'#EAECF0'} justifyContent={'space-between'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}} onClick={moveToOne}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Complete Purchase</Text>
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>2/2</Text>
            </HStack>

            <CompleteTransaction type='airtime' phoneNumber='081018790857' amount='3000' />
        </Box>}

        <Modal isCentered size={'lg'} closeOnOverlayClick={false} isOpen={isOpenDelete} onClose={onCloseDelete} >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>
                    <Text textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Delete Beneficiary</Text>
                </ModalHeader>
                <ModalCloseButton />

                <ModalBody>
                <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                    <Stack spacing={2} alignItems={'center'} textAlign={'center'}>
                        <img style={{width: '70px', height: 'auto'}} src={getImageUrl('icons/caution.png')} />
                        <Text fontSize={'16px'} fontWeight={700} color={'#0C111D'}>Are you sure you want to delete this beneficiary?</Text>

                        <Button mt={'16px'} w={'100%'} h={'48px'} bg={'#A41856'} _hover={{bg: '#A41856'}} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}>Yes</Button>
                        <Button w={'100%'} h={'48px'} bg={'#EFECE9'} _hover={{bg: '#EFECE9'}} color={'#667085'} fontSize={'14px'} fontWeight={600}>Go to dashboard</Button>

                    </Stack>
                </div>
                </ModalBody>
            </ModalContent>
        </Modal>

        </>
    );
}