import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from './MyAccountPage.module.css';
import { AccountInformation } from "./AccountInformation";
import { AccountHistory } from "./AccountHistory";
import { AccountStatement } from "./AccountStatement";
import { AccountLimit } from "./AccountLimit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAccountBalance } from "../../store/auth/user.slice";

export const MyAccountPage = () => {
    const [ tabIndex, setTabIndex ] = useState(0);
    const accounts = useSelector((state) => state.user.accountBalance) || [];
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getAccountBalance());
    },[dispatch])

    const handleTabsChange = (index) => {
        setTabIndex(index);
        window.scrollTo({ top: 0});
    }
    
    return (
        <div className={styles.whole}>
            <Text fontSize='24px' fontWeight={700} color='#101828' mb='16px'>My Account</Text>
            
            <Tabs index={tabIndex} onChange={handleTabsChange}>
                <TabList borderBottom={'none'} gap={'5px'} mb={'24px'}>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Account Information</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Account History</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Account Statement</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Account Limit</Tab>
                </TabList>

                <TabPanels maxWidth={'1000px'}>
                    <TabPanel ml={-4}>
                        <AccountInformation accounts={accounts} />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <AccountHistory backHome={()=>handleTabsChange(0)} />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <AccountStatement backHome={()=>handleTabsChange(0)} accounts={accounts} />
                    </TabPanel>

                    <TabPanel ml={-4}>
                        <AccountLimit backHome={()=>handleTabsChange(0)} accounts={accounts}/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}