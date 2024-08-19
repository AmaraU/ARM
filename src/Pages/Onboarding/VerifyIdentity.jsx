import {
    Button,
    Stack,
    Text,
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter,
    Divider,
    Flex,
    Box
} from '@chakra-ui/react';
import { getImageUrl } from '../../../utils';
import { useNavigate } from 'react-router-dom';


export const VerifyIdentity = ({ isOpen, onClose }) => {

    const navigate = useNavigate();

    const closeModal = () => {
        onClose();
    }


    return (
        <Modal isCentered size={'xl'} closeOnOverlayClick={false} isOpen={isOpen} onClose={closeModal} maxHeight={"70%"}>
            <ModalOverlay />
            <ModalContent rounded={15} MaxW={'800px'}>
                <ModalHeader>
                    <Text textAlign={'center'} fontSize={'18px'}>Verify Your Identity</Text>
                </ModalHeader>
                <ModalCloseButton />
                
                <ModalBody pb={2}>
                    <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                        <Stack spacing={4} alignItems={'center'} textAlign={'center'} w={'100%'} p={0}>
                            <img src={getImageUrl('icons/greyCamera.png')} style={{width: '80px', height: '80px'}} />
                            <Text fontSize={'18px'} fontWeight={700} color={'#0C111D'}>Take a selfie</Text>
                            <Text fontSize={'13px'} fontWeight={400} color={'#667085'}>You are almost there! Your face needs to be verified against your BVN information. </Text>
                            <Text fontSize={'13px'} fontWeight={400} color={'#667085'}>Position your face in the frame and follow the on screen instructions</Text>
                            <Box w={'95%'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} borderRadius={'8px'} padding={'16px'} textAlign={'left'}>
                                <Text fontSize={'12px'} fontWeight={600} color={'#101828'}>TIPS</Text>
                                <Divider mb={'12px'} mt={'12px'}/>
                                <Flex gap={'8px'} alignItems={'center'}>
                                    <img src={getImageUrl('icons/orangeTick.png')} style={{width: '16px', height: '16px'}} />
                                    <Text fontSize={'13px'} fontWeight={400} color={'#101828'}>Take off your glasses, hat or any other item covering your face</Text>
                                </Flex>
                                <Flex gap={'8px'} alignItems={'center'}>
                                    <img src={getImageUrl('icons/orangeTick.png')} style={{width: '16px', height: '16px'}} />
                                    <Text fontSize={'13px'} fontWeight={400} color={'#101828'}>Make sure face is well lit</Text>
                                </Flex>
                            </Box>
                            
                        </Stack>
                    </div>
                </ModalBody>
                <ModalFooter>
                        <Stack w={'100%'} pb={2}>
                            <Button
                                onClick={() => navigate('/capture')}
                                bg={'#A41856'}
                                py={'12px'}
                                color={'#FFFFFF'}
                                fontSize={'14px'}
                                fontWeight={600}
                                _hover={{bg: '#A41856'}}
                            >
                                Continue
                            </Button>
                        </Stack>
                    </ModalFooter>
            </ModalContent>
        </Modal>
    )
}