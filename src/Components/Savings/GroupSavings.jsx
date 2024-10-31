/* eslint-disable react/prop-types */
import {
  Stack,
  Button,
  HStack,
  Text,
  Box,
  Grid,
  GridItem,
  useDisclosure,
} from "@chakra-ui/react";
import styles from "../../Pages/SavingsPage/Savings.module.css";
import { useEffect, useRef, useState } from "react";
import CardContainer from "../../elements/CardContainer";
import { getImageUrl } from "../../../utils";
import { useNavigate } from "react-router-dom";
import { InviteFriendsModal } from "../../elements/Modals/InviteFriendsModal";
import { NewFixedSaving } from "./NewFixedSaving";
import { FixedSavingsDetails } from "./FixedSavingsDetails";
import GroupSavingsOption from "../../elements/Modals/GroupSavingsOption";
import { NewSaving } from "./NewSaving";
import { TargetSavingsDetails } from "./TargetSavingsDetails";
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import '../../App.css';


function GroupSavings() {

  const { isOpen: isOpenInvite, onOpen: onOpenInvite, onClose: onCloseInvite } = useDisclosure();
  const [ dateRange, setDateRange ] = useState([{ startDate: new Date(), endDate: new Date(), key: 'selection' }]);
  const [ showCalendar, setShowCalendar ] = useState(false);
  const [ step, setStep ] = useState('savings');
  const [ selected, setSelected ] = useState({});
  const [ modalopen, setModalOpen ] = useState(false);
  const [ type, setType ] = useState('');
  const filterRef = useRef(null);
  const navigate = useNavigate();

  const formatNumber = (number) => {
    return new Intl.NumberFormat('en-US').format(number);
  };

  const formatNumberMK = (num) => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(num % 1000000 === 0 ? 0 : 1)}M`;
    } else if (num >= 1000) {
      return `${(num / 1000).toFixed(num % 1000 === 0 ? 0 : 1)}K`;
    } else {
      return num.toString();
    }
  };

  const showModal = () => {
    setModalOpen(true);
  };

  const moveToSavings = () => {
    setStep('savings');
    window.scrollTo({ top: 0 });
  }
  const moveToCreate = () => {
    setStep('create');
    window.scrollTo({ top: 0 });
    setModalOpen(false);
  }
  const movetoSuccess = () => {
    setStep('success');
    window.scrollTo({ top: 0 });
  }
  const moveToDetails = (save) => {
    setStep('details');
    window.scrollTo({ top: 0 });
    setSelected(save);
    onCloseInvite();
  }

  const groupSavings = [
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 100,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Target'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 100,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Target'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 20,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Fixed'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 100,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Target'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 20,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Fixed'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 100,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Target'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 20,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Fixed'
    },
    {
      name: 'Japa Moves',
      amount_each: 200000,
      members_no: 100,
      amount_saved: 200000,
      total_amount: 1000000,
      days_left: 24,
      type: 'Target'
    }
  ];

  const [ dateFilteredSavings, setDateFilteredSavings ] = useState(groupSavings);

  const handleSelect = ranges => {
    setDateRange([ranges.selection]);
  };
  const applyFilter = () => {
    const { startDate, endDate } = dateRange[0];
    const adjustedEndDate = new Date(endDate);
    adjustedEndDate.setDate(adjustedEndDate.getDate() + 1);
    const filtered = groupSavings.filter(item => {
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate < adjustedEndDate;
    });
    setDateFilteredSavings(filtered);
    setShowCalendar(false);
  };
  const cancelFilter = () => {
    setDateFilteredSavings(groupSavings);
    setShowCalendar(false);
  };

  const handleClickOutside = (event) => {
    if (filterRef.current && !filterRef.current.contains(event.target)) {
      setShowCalendar(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);


  return (
    <div className={styles.whole}>
    <Box maxWidth='1000px' display='flex' flexDirection='column'>
    

      {step === 'savings' && <HStack alignItems='center' spacing='8px' mb="16px" onClick={()=>navigate('/overview/savings')} cursor='pointer'>
        <img src={getImageUrl('icons/blackLeftArrow.png')} alt="" />
        <Text fontSize="24px" fontWeight={700} color={"#101828"}>
          Group Savings
        </Text>
      </HStack>}
        
      {step != 'savings' && <Text  mb="24px" fontSize="24px" fontWeight={700} color={"#101828"}>Group Savings</Text>}


      {step === 'savings' && <Button onClick={showModal} w='fit-content' alignSelf='end' bg='#A41857' mb="24px" _hover={{bg: '#90164D'}} borderRadius='34px' fontSize='13px' fontWeight={500} color='#FFFFFF'>
        <img src={getImageUrl('icons/whitePlus.png')} style={{width: '16px', height: '16px', marginRight: '4px', marginBottom: '3px'}} />
        Create Group Savings
      </Button>}


      {step === 'savings' && <Box>
        <HStack bg='#EAECF0' px='26px' py='14px' borderRadius='12px 12px 0 0'>
          <Text width='100%' textAlign='center' fontSize='18px' fontWeight={600} color='#101828'>My Group Savings</Text>
        </HStack>
        <Stack spacing='24px' alignItems='center' border='1px solid #EFECE9' bg='#FFFFFF' borderRadius='0 0 12px 12px' px='16px' pb='114px' pt='48px'>

        <Stack px='24px' w='100%' maxW='1000px' alignItems='center'>

          <HStack mb='12px' spacing='8px'  maxWidth='800px' w='80%'>
            <HStack border='1px solid #DCD6CF' px='20px' py='10px' borderRadius='8px' w='100%'>
              <input onChange={''} placeholder="Search" style={{ width: '100%', outline:'transparent', border:'none', fontSize:'16px', color:'#A0A4A9', padding: '0'}}/>
              <img style={{width: '24px', height:'24px'}} src={getImageUrl('icons/search.png')} alt="search" />
            </HStack>
            <div>
              <HStack border='1px solid #DCD6CF' py='10px' px='16px' borderRadius='8px' cursor='pointer' onClick={()=>setShowCalendar(!showCalendar)}>
                <img src={getImageUrl('icons/filter.png')} alt="search" />
                <Text fontSize='16px' color='#A0A4A9' mr='16px'>Filter</Text>
              </HStack>
              {showCalendar && (
                <div className="calendarDiv" ref={filterRef}>
                  <DateRange
                    editableDateInputs={true}
                    onChange={handleSelect}
                    moveRangeOnFirstSelection={false}
                    ranges={dateRange}
                  />
                  <div className="calendarButtons">
                    <button className="cancel" onClick={cancelFilter}>Cancel</button>
                    <button className="apply" onClick={applyFilter}>Apply</button>
                  </div>
                </div>
              )}
            </div>
          </HStack>


          {dateFilteredSavings.length === 0 ? (
            <Stack alignItems='center' mt='24px' w='75%'>
              <img src={getImageUrl('icons/fixedSavings.png')} style={{width: '90px', height: '90px'}} />
              <Text fontSize='16px' fontWeight={400} color='#667085'>No group savings</Text>
              <Button w='55%' my={4} color='#FFF' bg='#A41856' _hover={{bg: '#90164D'}} onClick={showModal}>Create Group Savings</Button>
            </Stack>
          ) : (

            <Grid gridTemplateColumns='repeat(3, auto)' gap='8px' w='100%'>
              {dateFilteredSavings.map((save, index) => (
                <GridItem p='18px' borderRadius='8px' border='1px solid #EAECF0' key={index}>
                  <HStack justifyContent='space-between' mb='16px'>
                    <Text fontSize='16px' fontWeight={600} color='#101828'>{save.name}</Text>
                    <Box bg='#3448F01A' px='8px' py='2px' borderRadius='34px'><Text fontSize='12px' fontWeight={450} color='#4E61FF'>₦{formatNumberMK(save.amount_each)} each ({save.type})</Text></Box>
                  </HStack>

                  <progress className={styles.progress} max={save.total_amount} value={save.amount_saved} />

                  <HStack alignItems='start' justifyContent='space-between' mt='8px' mb='24px'>
                    <Text fontSize='14px' fontWeight={500} color='#667085'>{save.members_no} members</Text>
                    <Text fontSize='14px' fontWeight={450} color='#667085'>{save.days_left} Days Left {save.type === 'Fixed' ? 'to Start' : ''}</Text>
                  </HStack>

                  <Button w='100%' color='#101828' fontSize='14px' bg='#EFECE9' _hover={{bg: '#E3E1DE'}} onClick={()=>moveToDetails(save)}>View Details</Button>
                </GridItem>
              ))}
            </Grid>

          )}
        
        </Stack>
      </Stack>
      </Box>}

      {step === 'create' && 
        (type.toLowerCase() === 'fixed' ? <NewFixedSaving type={'group'} goBack={moveToSavings} showSuccess={movetoSuccess} />
        : type.toLowerCase() === 'target' ? <NewSaving type={'group'} goBack={moveToSavings} showSuccess={movetoSuccess} />
        : '')
      }

      {step === 'success' && <CardContainer title={'My Fixed Savings'} moveToOne={moveToSavings}>
        <Stack spacing={1} w='75%' alignItems='center'>
          <img src={getImageUrl('icons/success.png')}  style={{height: '84px', width: 'auto'}}/>
          <Text fontSize='18px' fontWeight={700} color='#000000'>Success!</Text>
          <Text fontSize='14px' fontWeight={450} color='#667085'>Your fixed savings has been created successfully</Text>

          {type === 'personal' && <Button h='48px' my={8} w="80%" color={"white"} bg={"#A41856"} _hover={{bg: '#90164D'}} onClick={()=>navigate('/overview/savings')}>Okay, Thank You</Button>}

          {type === 'group' && <Stack my={8} w='80%'>
            <Button h='48px' w="100%" color='white' bg='#A41856' _hover={{bg: '#90164D'}} onClick={onOpenInvite}>Invite Friends</Button>
            <Button h='48px' w="100%" color='#667085' bg='#EFECE9' _hover={{bg: '#E3E1DE'}} onClick={()=>moveToDetails(activeSavings[1])}>Go to Group</Button>
          </Stack>}
        </Stack>
      </CardContainer>}

      {step === 'details' && 
        selected.type === 'Fixed' ? <FixedSavingsDetails type={'group'} title={selected.name} goBack={moveToSavings} showSuccess={movetoSuccess} isMember={false} />
        : selected.type === 'Target' ? <TargetSavingsDetails type={'group'} title={selected.name} goBack={moveToSavings} showSuccess={movetoSuccess} isMember={false}/>
        : ''
      }

      <GroupSavingsOption
        isOpen={modalopen}
        close={() => setModalOpen(false)}
        setType={setType}
        moveNext={moveToCreate}
      />

      <InviteFriendsModal isOpen={isOpenInvite} onClose={onCloseInvite} handleProceed={()=>moveToDetails(activeSavings[1])} />
    
    </Box>
    </div>
    
  );
}

export default GroupSavings;