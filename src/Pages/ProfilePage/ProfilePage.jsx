import { Tab, TabList, TabPanel, TabPanels, Tabs, Text } from "@chakra-ui/react";
import styles from './ProfilePage.module.css';
import { EditProfile } from "./EditProfile";
import { ChangePassword } from "./ChangePassword";
import { PINManagement } from "./PINManagement";
import { SecurityQuestions } from "./SecurityQuestions";

export const ProfilePage = () => {
    
    return (
        <div className={styles.whole}>
            <Text fontSize='24px' fontWeight={700} color='#101828' mb='16px'>Profile</Text>
            <Tabs>
                <TabList borderBottom={'none'} gap={'5px'} mb={'24px'}>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Edit Profile</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Change Password</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>PIN Management</Tab>
                    <Tab rounded='50px' fontSize='13px' color='#667085' fontWeight={500} border='1px solid #EAECF0' py='12px' px='14px'  _selected={{ color: '#FFFFFF', bg: '#667085', border: '1px solid transparent', boxShadow: '0px 0px 1px 0px #00000066'}}>Security Questions</Tab>
                </TabList>

                <TabPanels maxWidth={'1000px'}>
                    <TabPanel ml={-4}>
                        <EditProfile />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <ChangePassword />
                    </TabPanel>
                    
                    <TabPanel ml={-4}>
                        <PINManagement />
                    </TabPanel>

                    <TabPanel ml={-4}>
                        <SecurityQuestions />
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

;

// box-shadow: 0px 6px 6px -6px #00000029;
