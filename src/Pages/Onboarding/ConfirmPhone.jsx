import {
    Button,
    Stack,
    Text,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    HStack,
    FormControl, FormLabel,
    Select,
    Input } from '@chakra-ui/react';
import { getImageUrl } from '../../../utils';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const ConfirmNumber = ({ isOpen, onClose }) => {

    const [ title, setTitle ] = useState('Confirm Phone Number');
    const [ isAlternate, setIsAlternate ] = useState(false);
    const navigate = useNavigate();

    const closeModal = () => {
        onClose();
    }

    const alternate = () => {
        setTitle('Provide Alternate Number');
        setIsAlternate(true);
    }


    return (
        <>
            <Modal isCentered size={'lg'} closeOnOverlayClick={false} isOpen={isOpen} onClose={closeModal} maxHeight={"70%"}>
                <ModalOverlay />
                <ModalContent rounded={15}>
                    <ModalHeader>
                        <Text textAlign={'center'} fontSize={'18px'}>{title}</Text>
                    </ModalHeader>
                    <ModalCloseButton />
                    
                    <ModalBody pb={2}>
                        <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                            {!isAlternate && <Stack spacing={4} alignItems={'center'}>
                                <img src={getImageUrl('icons/greyPhone.png')} style={{width: '80px', height: '80px'}} />
                                <Text fontSize={'14px'} fontWeight={400} color={'#000000'}>We will send a 6 digit OTP to the phone number below:</Text>
                                <HStack spacing={1}>
                                    <img src={getImageUrl('icons/orangePhone.png')} style={{width: '24px', height: '24px'}} />
                                    <Text fontSize={'16px'} fontWeight={700} color={'#DB9308'}>+234-******2590</Text>
                                </HStack>
                                <Text fontSize={'14px'} fontWeight={400} color={'#000000'}>Is this okay, or would you like to edit the number?</Text>
                                
                            </Stack>}

                            {isAlternate && <Stack spacing={4} alignItems={'center'}>
                                <Text fontSize={'14px'} fontWeight={400} color={'#000000'}>Kindly note that OTP would be sent to number you provide</Text>
                                <FormControl isRequired>
                                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Phone Number</FormLabel>
                                    <HStack spacing={2}>
                                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                                            <option value="">+234 (NG)</option>
                                        </Select>
                                        <Input type='tel' placeholder='Enter your phone number' _placeholder={{ fontSize: "sm" }} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                                    </HStack>
                                </FormControl>
                            </Stack>}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                            <Stack w={'100%'} pb={2}>
                                <Button onClick={() => navigate('/verify-number')} bg={'#A41856'} py={'12px'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}>Continue</Button>
                                {!isAlternate && <Button onClick={alternate} bg={'#EFECE9'} py={'12px'} color={'#667085'} fontSize={'16px'} fontWeight={700} _hover={{bg: '#EFECE9'}}>Edit phone number</Button>}
                            </Stack>
                        </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}