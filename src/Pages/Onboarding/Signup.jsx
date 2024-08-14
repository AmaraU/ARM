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
    InputLeftElement,
    FormErrorMessage,
    useToast,
    Text,
    Box
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon, LockIcon } from '@chakra-ui/icons';
import { useNavigate, Link } from 'react-router-dom';
import EmailValidator from "email-validator";
import { getImageUrl } from '../../../utils';
import styles from './Onboarding.module.css';


export default function Signup() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState();
    const [businessName, setBusinessName] = useState();
    const [phoneNo, setPhoneNo] = useState("");
    const [phoneIsError, setPhoneIsError] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState();
    const [passwordIsValid, setPasswordIsValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState();
    const [agreed, setAgreed] = useState(false);
    const [emailIsError, setEmailIsError] = useState(false);
    const [isLoading, setIsloading] = useState(false);
    const navigate = useNavigate();
    const toast = useToast();

    useEffect(() => {
        if (email.length > 0 && !EmailValidator.validate(email)) {
            setEmailIsError(true);
        }
        else {
            const tmp = email.split("@");
            const domain = personalEmailDomains.filter(e => e === tmp[1]);
            if (domain.length > 0) {
                setEmailIsError(true);
            }
            else {
                setEmailIsError(false);
            }
        }
    }, [email]);

    useEffect(() => {
        if (!phoneNumberIsValid()) {
            setPhoneIsError(true);
        }
        else {
            setPhoneIsError(false);
        }
    }, [phoneNo]);

    useEffect(() => {
        if (password || confirmPassword) {
            if (password === confirmPassword) {
                setPasswordIsValid(true);
            }
            else {
                setPasswordIsValid(false);
            }
        }
        else {
            setPasswordIsValid(true);
        }
    }, [password, confirmPassword]);

    const phoneNumberIsValid = () => {
        try {
            if (phoneNo.length > 0 && phoneNo.length !== 11) {
                return false;
            }
            else {
                return true;
            }
        } catch (error) {
            if (error.toString().includes('length')) {
                return false;
            }
            else {
                return true;
            }
        }
    }

    const processForm = async () => {
        console.log("Processed");
    }

    
    return (
        <Stack className={styles.whole} minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
            <Flex display={{ base: 'none', md: 'flex' }} flex={{ base: 1.5, '2xl': 1 }} bg={"linear-gradient(180deg, #D2042D 0%, #210101 61%)"}>
                <Stack spacing={10}>
                    <Box p={8} as='button' onClick={() => navigate('/')}>
                        <Image src={getImageUrl("logos/allWhiteLogo.png")} w={"200px"} />
                    </Box>
                    <Text pl={8} fontSize={"31px"} color={'white'} w={'90%'}>
                        The ultimate financial management solution. Seize control, gain insightful data.
                    </Text>
                    <Box objectFit={'contain'} w={'80%'} pt={2}>
                        <Image
                            alt={'Dashboard image'}
                            src={getImageUrl('dashboard.png')}
                        />
                    </Box>
                </Stack>
            </Flex>

            <Flex flex={{ base: 0.8, md: 3 }} display={'flex'} flexDirection={'column'} p={'24px'}>

                <Stack direction={'row'}  display={'flex'} justifyContent={'space-between'} w={'100%'} top={0} position={'relative'}>
                    <a href='/'><h3>Back <b>Home</b></h3></a>
                    <h3>Already Have An Account? <a href="/signup">Sign In</a></h3>
                </Stack>

                <Flex align={'center'} justify={'center'} mt={24}>
                    <Stack
                        px={8}
                        py={7}
                        as='form'
                        onSubmit={processForm}
                    >
                        <Stack spacing={5} w={{ base: 'md', md: 'lg' }} maxW={'lg'}>
                            <Stack align={'start'} pb={2}>
                                <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight={700} color={'#343434'}>Create your account</Text>
                                <Text fontSize={{ base: '14px', md: '18px' }} color={'#666666'}>Let's help you get started on Pesso Finance</Text>
                            </Stack>

                            <progress className={styles.steps} max={100} value={50}></progress>

                            <Stack spacing={{ base: 4, md: 4 }} direction={{ base: 'column', md: 'row' }}>
                                <Box w={{ base: '100%', md: '50%' }}>
                                    <FormControl isRequired>
                                        <FormLabel>First Name</FormLabel>
                                        <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} border={'2px solid #CFCFCF'} />
                                    </FormControl>
                                </Box>
                                <Box w={{ base: '100%', md: '50%' }}>
                                    <FormControl isRequired>
                                        <FormLabel>Last Name</FormLabel>
                                        <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} border={'2px solid #CFCFCF'} />
                                    </FormControl>
                                </Box>
                            </Stack>
                            <FormControl isRequired>
                                <FormLabel>Business Name</FormLabel>
                                <Input type="text" value={businessName} onChange={(e) => setBusinessName(e.target.value)} border={'2px solid #CFCFCF'} />
                            </FormControl>
                            <FormControl isInvalid={emailIsError} isRequired>
                                <FormLabel>Work Email</FormLabel>
                                <Input placeholder='name@company.com' _placeholder={{ fontSize: "sm" }} type="email" value={email} onChange={(e) => setEmail(e.target.value)} border={'2px solid #CFCFCF'} />
                                {emailIsError && <FormErrorMessage>Please enter a valid email address.</FormErrorMessage>}
                            </FormControl>
                            <FormControl isRequired>
                                <FormLabel>Create your password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <LockIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input placeholder='enter your password' _placeholder={{ fontSize: "sm" }} type={showPassword ? 'text' : 'password'} value={password} onChange={e => setPassword(e.target.value)} border={'2px solid #CFCFCF'} />
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
                                <Stack pt={2}>
                                    <Text fontSize={'xs'} color={'gray.500'}>Password should contain at least 8 characters including uppercase, lowercase, number, and special character</Text>
                                </Stack>
                            </FormControl>
                            <FormControl isInvalid={!passwordIsValid} isRequired>
                                <FormLabel>Confirm Password</FormLabel>
                                <InputGroup>
                                    <InputLeftElement pointerEvents='none'>
                                        <LockIcon color='gray.300' />
                                    </InputLeftElement>
                                    <Input placeholder='enter your password again' _placeholder={{ fontSize: "sm" }} type={showConfirmPassword ? 'text' : 'password'} value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} border={'2px solid #CFCFCF'} />
                                    <InputRightElement h={'full'}>
                                        <Button
                                            variant={'ghost'}
                                            onClick={() =>
                                                setShowConfirmPassword((showConfirmPassword) => !showConfirmPassword)
                                            }>
                                            {showConfirmPassword ? <ViewIcon /> : <ViewOffIcon />}
                                        </Button>
                                    </InputRightElement>
                                </InputGroup>
                                {!passwordIsValid && <FormErrorMessage fontSize={"sm"}>Passwords must match.</FormErrorMessage>}
                            </FormControl>

                            <div className={styles.terms}>
                                <input type="checkbox" name="agreed"  value={agreed} onChange={e => setAgreed(e.target.value)} />
                                <label htmlFor="agreed" style={{fontSize:'16px'}}>I have read and agree to the <a href="">Terms of Use</a> and <a href="" style={{color: '#D2042D'}}>Privacy Policy</a></label>
                            </div>

                            <Stack spacing={4}>
                                <Stack pt={2}>
                                    <Button
                                        type="submit"
                                        isLoading={isLoading}
                                        isDisabled={isLoading || !passwordIsValid || emailIsError}
                                        rounded={20}
                                        size="md"
                                        bg={'#0E0E0E'}
                                        color={'white'}
                                        _hover={{
                                            bg: '#0E0E0ECC',
                                        }}
                                        py={6}>
                                        Next - Security Questions
                                    </Button>
                                </Stack>
                            </Stack>
                        </Stack>
                    </Stack>
                </Flex>
            </Flex>
        </Stack>
    );
}