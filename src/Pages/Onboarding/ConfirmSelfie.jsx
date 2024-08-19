import {
    Box,
    Button,
    Flex,
    HStack, Stack,
    Text,
    Modal, ModalOverlay, ModalContent, ModalBody, ModalHeader, ModalCloseButton, ModalFooter,
    useDisclosure,
    Spinner    
} from "@chakra-ui/react";
import React, { useState } from "react";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import styles from './Onboarding.module.css';


export const ConfirmSelfie = () => {

    const { isOpen: isOpenVerifying, onOpen: onOpenVerifying, onClose: onCloseVerifying } = useDisclosure();
    const { isOpen: isOpenResult, onOpen: onOpenResult, onClose: onCloseResult } = useDisclosure();
    const [ header, setHeader ] = useState('Successful');
    const [ text, setText ] = useState('Your photo has been successfully submitted');
    const [ buttonText, setButtonText ] = useState('Continue');
    const navigate = useNavigate();


    let succeed = true;

    const openVerifying = () => {
        onOpenVerifying();
        setTimeout(() => onCloseVerifying(), 10000);
        succeed ? setHeader('Successful') : setHeader("Error!");
        succeed ? 
            setText('Your photo has been successfully submitted') : 
            setText("This could be a downtime from the verification portal. You have 4 trials left");
        succeed ? 
            setButtonText('Continue') : 
            setButtonText("Retry");
        
        setTimeout(() => onOpenResult(), 10000);
    }


    
    return (
        <>
        <Stack alignItems={'center'} spacing={10} py={'6%'} px={'25%'} bgImage={getImageUrl('onboardingBackground.png')} bgSize={'100% 100%'}>
            <img style={{width: '30%', height: 'auto'}} src={getImageUrl('logos/arm_logo.png')} alt="ARM" />
            <Flex justifyContent={'space-between'} w={'100%'}>
                <a href='/capture'><img src={getImageUrl('icons/blackLeftArrow.png')} alt="back" /></a>
                
                <div className={styles.circleWrap}>
                    <div className={styles.circle}>
                        <div className={`${styles.mask} ${styles.fullFive}`}>
                            <div className={styles.fill}></div>
                        </div>
                        <div className={`${styles.mask} ${styles.half}`}>
                            <div className={styles.fill}></div>
                        </div>
                        <div className={styles.insideCircle}>
                            50%
                        </div>
                    </div>
                </div>

            </Flex>
            <Stack alignItems={'center'}>
                <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Preview your photo</Text>
                <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Make sure your face is clearly shown</Text>
            </Stack>
            

            <Box w={'322px'} h={'322px'} bg={'#0E0E0E'} borderRadius={'500px'}></Box>

            <HStack spacing={2} w={'100%'} >
                <Button onClick={() => navigate('/capture')} w={'100%'} borderRadius={'8px'} bg={'#EFECE9'} _hover={{bg: '#EFECE9'}} p={'20px'} color={'#667085'} fontSize={'14px'} fontWeight={600}>Retake</Button>
                <Button onClick={openVerifying} w={'100%'} borderRadius={'8px'} bg={'#A41856'} _hover={{bg: '#A41856'}} p={'20px'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600}>Use this</Button>
            </HStack>
        </Stack>

        <Modal isCentered closeOnOverlayClick={false} isOpen={isOpenVerifying} onClose={onCloseVerifying} >
            <ModalOverlay />
            <ModalContent rounded={15}  justifyContent={'center'} w={'fit-content'} height={"200px"}>
                <Stack p={3} alignItems={'center'} spacing={8}>
                    <Spinner w={'30px'} h={'30px'} speed="1s" emptyColor="grey" />
                    <Text fontSize={'14px'} fontWeight={500} color={'#0C111D'}>Verifying your identity</Text>
                </Stack>
            </ModalContent>
        </Modal>

        <Modal isCentered closeOnOverlayClick={false} isOpen={isOpenResult} onClose={onCloseResult} >
            <ModalOverlay />
            <ModalContent rounded={15} w={'700px'}>
                <ModalHeader>
                    <Text textAlign={'center'} fontSize={'18px'}>Likeness Check</Text>
                </ModalHeader>
                <ModalCloseButton />
                
                <ModalBody pb={2}>
                    <div style={{ overflow: 'auto', maxHeight: '60vh' }}>
                        <Stack spacing={4} alignItems={'center'} textAlign={'center'}>
                            {succeed ?
                            <img src={getImageUrl('icons/success.png')} style={{width: '220px', height: '86px'}} />
                            :
                            <img src={getImageUrl('icons/failure.png')} style={{width: '80px', height: '80px'}} />
                            }
                            <Text fontSize={'20px'} fontWeight={700} color={'#0C111D'}>{header}</Text>
                            <Text fontSize={'14px'} fontWeight={400} color={'#667085'}>{text}</Text>                            
                        </Stack>
                    </div>
                </ModalBody>
                <ModalFooter>
                    <Stack w={'100%'} pb={2}>
                        <Button onClick={succeed ? () => navigate('/user-info') : () => navigate('/capture')}
                            bg={'#A41856'} py={'12px'} color={'#FFFFFF'} fontSize={'14px'} fontWeight={600} _hover={{bg: '#A41856'}}
                        >
                            {buttonText}
                        </Button>
                    </Stack>
                </ModalFooter>
            </ModalContent>
        </Modal>

        
        </>
    )
}