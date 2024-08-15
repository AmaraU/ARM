import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Stack,
    Image,
    InputGroup,
    InputRightElement,
    FormErrorMessage,
    Text,
    Box,
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    HStack,
    Select
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate, Link, Navigate } from 'react-router-dom';
import EmailValidator from "email-validator";
import { getImageUrl } from '../../../utils';
import styles from './Onboarding.module.css';

export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState("");
    const [emailIsError, setEmailIsError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (email.length > 0 && !EmailValidator.validate(email)) {
            setEmailIsError(true);
        }
        else {
            setEmailIsError(false);
        }
        // changingBackground();
    }, [email]);

    const processForm = async (e) => {
        console.log("Processed");
        Navigate('/overview');
    }



    const changingText = [
        {
            image: 'assets/signin1.png',
            header: "Bank smarter, live better with ARM MFB",
            subheading: "Managing your money is what we do and we are really good at it."
        },
        {
            image: 'assets/signin2.png',
            header: "Manage your money anywhere, anytime",
            subheading: "Gain access to your account with a tap"
        },
        {
            image: 'assets/signin3.png',
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

    

    return (
        <Stack className={styles.whole} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

            <div className={styles.image} style={{backgroundImage: `url(${changingText[currentIndex].image})`}} >
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
            </div>

            <Flex flex={'50%'} display={'flex'} flexDirection={'column'} py={'94px'} px={'71px'}>
                
                <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Welcome back 👋</Text>
                <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Login with your email or phone number</Text>

                <Tabs>
                    <TabList borderBottom={'none'} gap={'5px'} mb={'24px'} mt={'48px'}>
                        <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Email address</Tab>
                        <Tab rounded={'50px'} fontSize={'13px'} color={'#667085'} fontWeight={500} border={'1px solid #EAECF0'} py={'12px'} px={'14px'}  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Phone number</Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            <Stack spacing={'16px'} w={{ base: 'md', md: 'lg' }} maxW={'lg'} as='form' onSubmit={processForm}>
                                <FormControl isInvalid={emailIsError} isRequired>
                                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Email Address</FormLabel>
                                    <Input type='text' placeholder='Enter your work email' _placeholder={{ fontSize: "sm" }} value={email} onChange={(e) => setEmail(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                                    {emailIsError && <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>}
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Password</FormLabel>
                                    <InputGroup>
                                        <Input placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <a className={styles.forgot} href='/forgot-password'>Forgot Password?</a>

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
                                        }}>
                                        Continue
                                    </Button>
                                </Stack>
                                <div className={styles.signUp}>
                                    <div className={styles.line}></div>
                                    Don't have an account? <a href="/signup">Sign up now</a>
                                    <div className={styles.line}></div>
                                </div>
                            </Stack>
                        </TabPanel>
                        
                        <TabPanel>
                            <Stack spacing={'16px'} w={{ base: 'md', md: 'lg' }} maxW={'lg'} as='form' onSubmit={processForm}>
                                <FormControl isRequired>
                                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Phone Number</FormLabel>
                                    <HStack spacing={2}>
                                        <Select flex={'35%'} border={'1px solid #EAECF0'} bg={'#F7F7F7'} fontSize={'16px'}>
                                            <option value="">+234 (NG)</option>
                                        </Select>
                                        <Input type='tel' placeholder='Enter your phone number' _placeholder={{ fontSize: "sm" }} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                                    </HStack>
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'}>Password</FormLabel>
                                    <InputGroup>
                                        <Input placeholder='Enter your password' _placeholder={{ fontSize: "sm" }} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                                        <InputRightElement h={'full'}>
                                            <Button
                                                variant={'ghost'}
                                                _hover={'transparent'}
                                                onClick={() =>
                                                    setShowPassword((showPassword) => !showPassword)
                                                }>
                                                {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                                            </Button>
                                        </InputRightElement>
                                    </InputGroup>
                                </FormControl>

                                <a className={styles.forgot} href='/forgot-password'>Forgot Password?</a>

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
                                        }}>
                                        Continue
                                    </Button>
                                </Stack>
                                <div className={styles.signUp}>
                                    <div className={styles.line}></div>
                                    Don't have an account? <a href="/signup">Sign up now</a>
                                    <div className={styles.line}></div>
                                </div>
                            </Stack>
                            
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Flex>
        </Stack>
    );
}