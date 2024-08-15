import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Image,
    Text,
    Box,
    HStack,
    Checkbox,
    Divider,
    useDisclosure
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getImageUrl } from '../../../utils';
import styles from './Onboarding.module.css';
import { ConfirmNumber } from './ConfirmPhone';

export default function Signin() {

    const { isOpen: isOpenConfirm, onOpen: onOpenConfirm, onClose: onCloseConfirm } = useDisclosure();
    const [isLoading, setIsloading] = useState(false);
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const processForm = async (e) => {
        console.log("Processed");
    }

    const changingText = [
        {
            image: 'signin1.png',
            header: "Bank smarter, live better with ARM MFB",
            subheading: "Managing your money is what we do and we are really good at it."
        },
        {
            image: 'signin2.png',
            header: "Manage your money anywhere, anytime",
            subheading: "Gain access to your account with a tap"
        },
        {
            image: 'signin3.png',
            header: "Stay on top of your money",
            subheading: "ARM MFB provides you the ability to maintain control over your finances"
        }
    ];
    const [ currentIndex, setCurrentIndex ] = useState(0);
    const [ visible, setVisible ] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setVisible(false);
            
            setTimeout(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % changingText.length);
                setVisible(true);
            }, 1000);
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    const [ questOne, setQuestOne ] = useState(false);
    const [ questTwo, setQuestTwo ] = useState(false);

    const handleConfirmNumber = () => {
        onOpenConfirm();
    }

    

    return (
        <>
        <Stack className={styles.whole} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

            <Flex className={styles.image} bgImage={getImageUrl(`${changingText[currentIndex].image}`)} >
                <Flex className={styles.image} p={'50px'} display={{ base: 'none', md: 'flex' }} flex={'40%'} background={'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)'} backgroundSize={'100% 100%'} borderRadius={'0 56px 56px 0'}>
                    <Stack spacing={10}>
                        <Box p={8} as='button' onClick={() => navigate('/')}>
                            <Image src={getImageUrl("logos/arm_logo.png")} w={"140px"} h={'auto'} />
                        </Box>
                        
                        <Flex flexDirection={'column'} gap={'12px'} h={'100%'} justifyContent={'end'} mb={'24px'}>
                            <Text className={`${styles.changing} ${visible ? styles.visible : ''}`} fontSize={"40px"} fontWeight={700} color={'white'} w={'90%'}>{changingText[currentIndex].header}</Text>
                            <Text className={`${styles.changing} ${visible ? styles.visible : ''}`} fontSize={"16px"} color={'white'} w={'90%'}>{changingText[currentIndex].subheading}</Text>

                            <Flex gap={'4px'}>
                                {changingText.map((_, idx) => (
                                    <Box key={idx} bg={idx === currentIndex ? '#A41857' : '#FFFFFF'} className='circle' borderRadius={'500px'} w={idx === currentIndex ? '28px' : '8px'} h={'8px'}></Box>
                                ))}
                            </Flex>

                            <Flex mt={24} bottom={'20%'} alignItems={'center'} justifyContent={'space-between'}>
                                <Text fontSize={"14px"} color={'#EFECE9'}>© 2024 ARM MFB by ARM Group. All rights reserved.</Text>
                                <Text fontSize={"14px"} color={'#EFECE9'} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Help Center</Text>
                            </Flex>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>

            <Flex flex={'50%'} display={'flex'} flexDirection={'column'} py={'94px'} px={'71px'}>
                
                <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Let's have your BVN</Text>
                <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Kindly provide your 11-digit BVN to validate your identity</Text>

                <Stack spacing={'16px'} w={{ base: 'md', md: 'lg' }} maxW={'lg'} as='form' onSubmit={processForm} mt={'48px'}>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Enter NVN</FormLabel>
                        <Input type='text' placeholder='Enter your BVN' _placeholder={{ fontSize: "sm" }} value={email} onChange={(e) => setEmail(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                    <Box p={'12px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} borderRadius={'8px'}>
                        <Box>
                            <Flex alignItems={'center'} justifyContent={'space-between'}>
                                <HStack>
                                    <img src={getImageUrl('icons/blackInfo.png')} />
                                    <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Why do we need your BVN?</Text>
                                </HStack>
                                <button type='button' onClick={() => setQuestOne(!questOne)}><img src={getImageUrl('icons/greyRightAngle.png')} /></button>
                            </Flex>
                            {questOne && <Stack p={'12px'} spacing={'12px'}>
                                <Text fontSize={'12px'} fontWeight={400} color={'#667085'}>This is how we verify that transactions are carried out by the real account owner (that’s you!) It helps us keep you safe.</Text>
                                <Text fontSize={'12px'} fontWeight={400} color={'#667085'}>Before continuing you can review our Privacy Policy and Terms of Service</Text>
                                <Box>
                                    <Flex fontSize={'12px'} fontWeight={500} color={'#0C111D'}><img src={getImageUrl('icons/greenTick.png')} alt="" />Full Name</Flex>
                                    <Flex fontSize={'12px'} fontWeight={500} color={'#0C111D'}><img src={getImageUrl('icons/greenTick.png')} alt="" />Phone number</Flex>
                                    <Flex fontSize={'12px'} fontWeight={500} color={'#0C111D'}><img src={getImageUrl('icons/greenTick.png')} alt="" />Date of birth</Flex>
                                </Box>
                                <Text fontSize={'12px'} fontWeight={500} color={'#0C111D'}>Your BVN does not give us access to your bank account, transactions or any other information.</Text>
                                <Text fontSize={'12px'} fontWeight={500} color={'#0C111D'}>Your data is safe with us and we will not share your data with anyone</Text>

                            </Stack>}
                        </Box>

                        <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                        <Box>
                            <Flex alignItems={'center'} justifyContent={'space-between'}>
                                <HStack>
                                    <img src={getImageUrl('icons/blackQuestion.png')} />
                                    <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Don't know your BVN?</Text>
                                </HStack>
                                <button type='button' onClick={() => setQuestTwo(!questTwo)}><img src={getImageUrl('icons/greyRightAngle.png')} /></button>
                            </Flex>
                            {questTwo && <Stack p={'12px'} spacing={'12px'}>
                                <Text fontSize={'12px'} fontWeight={400} color={'#667085'}>This will work only if you are making the request from the same phone number currently linked to your bank account.</Text>
                                <Box bg={'#F2F4F7'} border={'1px solid #EAECF0'} borderRadius={'8px'} p={'12px'}>
                                    <Text fontSize={'16px'} fontWeight={700} color={'#0C111D'}>Just dial the USSD code below</Text>
                                    <Divider mt={'12px'} mb={'12px'} />
                                    <Flex justifyContent={'space-between'}><Text  fontSize={'16px'} fontWeight={700} color={'#0C111D'}>*565*0#</Text><img src={getImageUrl('icons/blackCall.png')} /></Flex>
                                </Box>
                                <Text fontSize={'12px'} fontWeight={400} color={'#F79009'}><b>Note:</b> A service fee of ₦20 is charged by your network provider.</Text>
                            </Stack>}
                        </Box>

                        <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                        <Text w={'fit-content'} fontSize={'14px'} fontWeight={500} color={'#A41857'} cursor={'pointer'} _hover={{textDecoration: 'underline'}}>Don't have a BVN?</Text>
                    </Box>
                    
                    <FormControl isRequired >
                        <Checkbox alignItems={'flex-start'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} borderRadius={'8px'} p={'12px'}>
                            <Stack>
                                <Text fontSize={'14px'} fontWeight={700} color={'#344054'}>I accept the terms and conditions</Text>
                                <Text fontSize={'14px'} fontWeight={400} color={'#475467'}>You acknowledge that you have read this Terms & Conditions and agree to all its term.</Text>
                            </Stack>
                        </Checkbox>
                    </FormControl>

                    <Stack pt={4}>
                        <Button
                            disabled={isLoading}
                            isLoading={isLoading}
                            rounded={'8px'}
                            py={'26px'}
                            px={'16px'}
                            type="submit"
                            size="md"
                            bg={'#A41857'}
                            color={'white'}
                            _hover={{
                                bg: '#0E0E0ECC',
                            }}
                            onClick={handleConfirmNumber}>
                            Continue
                        </Button>
                    </Stack>
                    <div className={styles.signUp}>
                        <div className={styles.line}></div>
                        Already have an account? <a href="/signin">Sign in</a>
                        <div className={styles.line}></div>
                    </div>
                </Stack>
                        
            </Flex>
        </Stack>
        
        <ConfirmNumber isOpen={isOpenConfirm} onClose={onCloseConfirm} />
        </>
    );
}