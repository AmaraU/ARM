import { useState, useRef, useEffect } from 'react';
import { Stack, Text, Box, Button, HStack, Input, FormControl, FormLabel, Select } from "@chakra-ui/react";
import Switch from "react-switch";
import { getImageUrl } from "../../../utils";
import styles from './AirtimeBills.module.css';
import { CompleteTransaction } from '../../Components/CompleteTrans';


export const BuyData = () => {

    const [ actionsOpen, setActionsOpen ] = useState({});
    const [ showOptions, setShowOptions ] = useState(true);
    const [ showOne, setShowOne ] = useState(false);
    const [ showTwo, setShowTwo ] = useState(false);
    const [ addFavorite, setAddFavorite ] = useState(false);
    const [ selected, setSelected ] = useState("");
    const popupRef = useRef(null);


    const savedData = [
        {
            name: "My Baby",
            number: "08101790957",
            amount: "6GB Weekly",
            network: "MTN"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "6GB Weekly",
            network: "Glo"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "6GB Weekly",
            network: "9Mobile"
        },
        {
            name: "My Baby",
            number: "08101790957",
            amount: "6GB Weekly",
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
    }
    const moveToOne = () => {
        setShowOne(true);
        setShowTwo(false);
        setShowOptions(false);
        setSelected('');
    }
    const moveToTwo = () => {
        setShowOne(false);
        setShowTwo(true);
        setShowOptions(false);
    }

    


    return (
        <>
        {showOptions && <Box>
            {savedData.length === 0 ? (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Data</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <img style={{width: '40px', height: '40px'}} src={getImageUrl('icons/blackPhone.png')} alt="" />
                        <Text w={'50%'} textAlign={'center'} fontSize={'16px'} color={'#667085'} >You do not have any saved data purchase</Text>
                        <Button mt={'16px'} w={'50%'} h={'fit-content'} py={'15px'} bg={'#A41856'} _hover={{bg: '#A41856'}} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} onClick={moveToOne}>Buy Data</Button>
                    </Stack>
                </Box>

            ) : (
                <Box>
                    <HStack bg={'#EAECF0'} px={'26px'} py={'14px'} borderRadius={'12px 12px 0 0'}>
                        <Button h={'24px'} bg={'#EAECF0'} p={0} _hover={{bg: '#EAECF0'}}><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></Button>
                        <Text width={'90%'} textAlign={'center'} fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Data</Text>
                    </HStack>
                    <Stack spacing={'16px'} alignItems={'center'} border={'1px solid #EFECE9'} bg={'#FFFFFF'} borderRadius={'0 0 12px 12px'} py={'16px'} pb={'114px'} pt={'48px'}>
                        <Stack w={'60%'} display={'grid'} gridTemplateColumns={'repeat(2, auto)'}>
                            {savedData.map((dat, index) => (
                                <HStack key={index} border={'1px solid #EAECF0'} borderRadius={'8px'} w={'100%'} py={'20px'} px={'10px'} spacing={'16px'}>
                                    <Box>
                                        {dat.network.toLowerCase() === 'mtn' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/mtn.png')} /> : <></>}
                                        {dat.network.toLowerCase() === 'glo' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/glo.png')} /> : <></>}
                                        {dat.network.toLowerCase() === '9mobile' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/9mobile.png')} /> : <></>}
                                        {dat.network.toLowerCase() === 'airtel' ? <img style={{width: '32px', height: '32px'}} src={getImageUrl('logos/airtel.png')} /> : <></>}
                                    </Box>
                                    <Box w={'90%'}>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{dat.name}</Text>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{dat.amount}</Text>
                                        </HStack>
                                        <HStack w={'100%'} justifyContent={'space-between'} alignItems={'center'}>
                                            <Text fontSize={'16px'} fontWeight={'450'} color={'#101828'}>{dat.number}</Text>
                                            <div>
                                                <button onClick={() => toggleAction(index)}><img style={{height: '24px', width: '24px'}} src={getImageUrl('icons/actions.png')} /></button>
                                                <Box className={`${styles.actionsClosed} ${actionsOpen[index] && styles.theActions}`} ref={popupRef}>
                                                    <button style={{alignSelf: 'end'}}><img style={{width: '14px', height: '14px'}} src={getImageUrl('icons/blackX.png')} /></button>
                                                    <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'} onClick={moveToOne}><img src={getImageUrl('icons/blackPhone.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Buy Data</Text></HStack>
                                                    <HStack cursor={'pointer'} _hover={{bg: '#EAECF0'}} p={'8px'}><img src={getImageUrl('icons/redDelete.png')} /><Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Delete</Text></HStack>
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
                <Text fontSize={'18px'} fontWeight={600} color={'#101828'}>Buy Data</Text>
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
                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Data Bundle</FormLabel>
                    <Select h={'48px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} placeholder="Select Bundle" _placeholder={{fontSize: '16px', color: '#667085'}}></Select>
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

            <CompleteTransaction type='data' amount='15' phoneNumber='08083698233' />
        </Box>}

        </>
    );
}