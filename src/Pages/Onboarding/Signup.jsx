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
    Checkbox,
    Divider
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from 'react-router-dom';
import EmailValidator from "email-validator";
import { getImageUrl } from '../../../utils';
import styles from './Onboarding.module.css';

export default function Signin() {
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const [password, setPassword] = useState();
    const [email, setEmail] = useState("");
    const [remember, setRemember] = useState(false);
    const [btnText, setBtnText] = useState("Sign in");
    const [emailIsError, setEmailIsError] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (email.length > 0 && !EmailValidator.validate(email)) {
            setEmailIsError(true);
        }
        else {
            setEmailIsError(false);
        }
    }, [email]);

    const processForm = async (e) => {
        console.log("Processed");
    }

    

    return (
        <Stack className={styles.whole} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>

            <Flex className={styles.image} display={{ base: 'none', md: 'flex' }} flex={'40%'} backgroundImage={getImageUrl('signin.png')} backgroundSize={'100% 100%'} borderRadius={'0 56px 56px 0'}>
                <Flex className={styles.image} p={'50px'} display={{ base: 'none', md: 'flex' }} flex={'40%'} background={'linear-gradient(180deg, rgba(0, 0, 0, 0.1) 0%, #000000 100%)'} backgroundSize={'100% 100%'} borderRadius={'0 56px 56px 0'}>
                    <Stack spacing={10}>
                        <Box p={8} as='button' onClick={() => navigate('/')}>
                            <Image src={getImageUrl("logos/arm_logo.png")} w={"140px"} h={'auto'} />
                        </Box>
                        <Text fontSize={"40px"} fontWeight={700} color={'white'} w={'90%'}>Bank smarter, live better with ARM MFB</Text>
                        <Text fontSize={"16px"} color={'white'} w={'90%'}>Managing your money is what we do and we are really good at it.</Text>
                        <Flex bottom={'20%'} alignItems={'center'} justifyContent={'space-between'}>
                            <Text fontSize={"14px"} color={'#EFECE9'}>© 2024 ARM MFB by ARM Group. All rights reserved.</Text>
                            <Text fontSize={"14px"} color={'#EFECE9'}>Help Center</Text>
                        </Flex>
                    </Stack>
                </Flex>
            </Flex>

            <Flex flex={'60%'} display={'flex'} flexDirection={'column'} py={'94px'} px={'71px'}>
                
                <Text fontSize={'48px'} fontWeight={700} color={'#14142A'}>Let's have your BVN</Text>
                <Text fontSize={'18px'} fontWeight={400} color={'#667085'}>Kindly provide your 11-digit BVN to validate your identity</Text>

                <Stack spacing={'16px'} w={{ base: 'md', md: 'lg' }} maxW={'lg'} as='form' onSubmit={processForm} mt={'48px'}>
                    <FormControl isRequired>
                        <FormLabel fontSize={'16px'} fontWeight={400} color={'#101828'} mb={'16px'}>Enter NVN</FormLabel>
                        <Input type='text' placeholder='Enter your BVN' _placeholder={{ fontSize: "sm" }} value={email} onChange={(e) => setEmail(e.target.value)} border={'1px solid #EAECF0'} bg={'#F7F7F7'} />
                    </FormControl>
                    <Box p={'12px'} bg={'#F7F7F7'} border={'1px solid #EAECF0'} borderRadius={'8px'}>
                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <HStack>
                                <img src={getImageUrl('icons/greyInfo.png')} />
                                <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Why do we need your BVN?</Text>
                            </HStack>
                            <button><img src={getImageUrl('icons/greyRightAngle')} alt="" /></button>
                        </Flex>

                        <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                        <Flex alignItems={'center'} justifyContent={'space-between'}>
                            <HStack>
                                <img src={getImageUrl('icons/greyQuestion.png')} />
                                <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Don't know your BVN?</Text>
                            </HStack>
                            <button><img src={getImageUrl('icons/greyRightAngle')} alt="" /></button>
                        </Flex>

                        <Divider h={'2px'} mt={'12px'} mb={'12px'}/>

                        <Text fontSize={'14px'} fontWeight={500} color={'#667085'}>Don't have a BVN?</Text>
                    </Box>
                    
                    <FormControl isRequired>
                        <Checkbox border={'1px solid #EAECF0'} bg={'#F7F7F7'} borderRadius={'8px'} p={'12px'}>
                            <Stack>
                                <Text fontSize={'14px'} fontWeight={700} color={'#344054'}>I accept the terms and conditions</Text>
                                <Text fontSize={'14px'} fontWeight={400} color={'#475467'}>You acknowledge that you have read this Terms & Conditions and agree to all its term.</Text>
                            </Stack>
                        </Checkbox>
                    </FormControl>
                        

                    <a href='/forgot-password' style={{color:'#D2042D', fontSize: "14px",  fontWeight: 500}} _hover={{textDecor: 'underline',}}>Forgot Password?</a>

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
                        Already have an account? <a href="/signin">Sign in</a>
                        <div className={styles.line}></div>
                    </div>
                </Stack>
                        
            </Flex>
        </Stack>
    );
}