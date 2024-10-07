import React, { useState } from "react";
import { FormControl, FormLabel, Stack, Input, Select, InputLeftElement, InputGroup, Button, HStack, Text, Box } from "@chakra-ui/react";
import CardContainer from "../../elements/CardContainer";
import FinalizeSavings from "../../elements/Modals/FinalizeSavings";
import styles from "../../Pages/SavingsPage/Savings.module.css";


export const NewFixedSaving = ({ goBack, type, showSuccess }) => {

    const [ frequency, setFrequency ] = useState("");
    const [ open, setOpen ] = useState(false);

    const CATEGORIES = [
        "Rent/Accomodation",
        "Travel/Vacation",
        "Education/Study",
        "Fees/Debt",
        "Starting/Growing a business",
        "Birthday",
        "Gadgets",
        "Home appliances",
        "Investment",
    ];
    const LENGTH = [
        "10-30 Days - 10.2%",
        "61-90 Days - 10.2%",
        "91-180 Days - 10.2%",
        "181-270 Days - 10.2%",
        "271-365 Days - 10.2%",
        "365-730 Days - 10.2%"
    ];
    const FREQUENCY = ["Daily", "Weekly", "Monthly", "Manual"];
    const DURATION = ["1 Month", "2 Months", "3 Months", "4 Months"];
    const INVITERS = ["Any member", "Only Admin"];


    return (
        <div>
            <CardContainer
                title={type === 'personal' ? 'Create a Personal Fixed Savings'
                    : type === 'group' ? 'Create a Target Savings for Group' : ''}
                moveToOne={goBack}
            >
                <Stack maxWidth={"600px"} width={"75%"}>
                <FormControl className={styles["personal-saving-form"]}>

                    <div>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>What are you saving for?</FormLabel>
                    <Input bg='#F7F7F7' border='1px solid #EAECF0' />
                    </div>

                    <div>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>How much would you like to save?</FormLabel>
                    <InputGroup>
                        <InputLeftElement color='#667085'>₦</InputLeftElement>
                        <Input bg='#F7F7F7' border='1px solid #EAECF0' inputMode={"numeric"} type={"number"} />
                    </InputGroup>
                    </div>

                    {type === 'group' && <HStack w='100%' spacing='16px'>
                        <div style={{width: '100%'}}>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Who can invite members?</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0'>
                            {INVITERS.map((option, i) => (
                            <option key={i}>{option}</option>
                            ))}
                        </Select>
                        </div>

                        <div style={{width: '100%'}}>
                        <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Is savings group private or public</FormLabel>
                        <Select bg='#F7F7F7' border='1px solid #EAECF0'>
                            <option>Private</option>
                            <option>Public</option>
                        </Select>
                        </div>
                    </HStack>}

                    <div>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>How long do you want to lock your funds?</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0'>
                        {LENGTH.map((option, i) => (
                        <option key={i}>{option}</option>
                        ))}
                    </Select>
                    </div>

                    <div>
                    <FormLabel fontSize='16px' fontWeight={400} color='#101828'>Payout Date</FormLabel>
                    <Select bg='#F7F7F7' border='1px solid #EAECF0'>
                        <option>12/08/2024 (91 Days)</option>
                    </Select>
                    </div>

                </FormControl>

                <Box bg='#EFECE9' borderRadius='8px' p='16px' mt='8px'>
                    <Text fontSize='12px' fontWeight={450} color='#101828'>Estimated Intrest to Earn</Text>
                    <Text fontSize='24px' fontWeight={700} color='#101828'>₦230,000</Text>
                </Box>

                <Button
                    onClick={() => setOpen(true)}
                    my={"4"}
                    w="100%"
                    size={"lg"}
                    color={"white"}
                    bg='#A41856'
                    _hover={{bg: '#90164D'}}
                >
                    Continue
                </Button>

                <FinalizeSavings
                    isOpen={open}
                    close={() => setOpen(false)}
                    showSuccess={showSuccess}
                />
                
                </Stack>
            </CardContainer>
        </div>
    )
}