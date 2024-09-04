import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Signin from './Pages/Onboarding/Signin';
import Signup from './Pages/Onboarding/Signup';
import { VerifyNumber } from './Pages/Onboarding/VerifyNumber';
import { TakeSelfie } from './Pages/Onboarding/TakeSelfie';
import { ConfirmSelfie } from './Pages/Onboarding/ConfirmSelfie';
import { UserInfo } from './Pages/Onboarding/UserInfo';
import { CreateProfile } from './Pages/Onboarding/CreateProfile';
import { Welcome } from './Pages/Onboarding/Welcome';

import { DashboardLayout } from './Pages/DashboardLayout';
import { Overview } from './Pages/DashboardPage/Overview';
import { AccountSetup } from './Pages/DashboardPage/AccountSetup.jsx';
import { TransactionHistory } from './Pages/DashboardPage/TransactionHistory.jsx';
import { Transfers } from './Pages/Transfers/Transfers';
import { AirtimeBills } from './Pages/AirtimeBills/AirtimeBills';
import LoanPage from './Pages/LoanPage/LoanPage';
import { MyAccountPage } from './Pages/MyAccountPage/MyAccountPage';
import { ProfilePage } from './Pages/ProfilePage/ProfilePage';

import { BlankPage } from './Pages/BlankPage';

import { TransactionReceipt } from './Components/TransactionReciept';
import { AccountStatement } from './Components/AccountStatement.jsx';



function App() {

  const router = createBrowserRouter([
    { path: '/', element: <Navigate to='overview' /> },
    { path: '/signin', element: <Signin /> },
    { path: '/signup', element: <Signup /> },
    { path: '/verify-number', element: <VerifyNumber /> },
    { path: '/capture', element: <TakeSelfie /> },
    { path: '/confirm-picture', element: <ConfirmSelfie /> },
    { path: '/user-info', element: <UserInfo /> },
    { path: '/create-profile', element: <CreateProfile /> },
    { path: '/welcome', element: <Welcome /> },
    { path: '/receipt', element: <TransactionReceipt /> },
    { path: '/statement', element: <AccountStatement /> },
    {
      path: '/overview', element: <DashboardLayout />,
      children: [

        { path: '/overview', element: <Navigate to="dashboard" /> },
        { path: 'dashboard', element: <Overview /> },
        { path: 'dashboard/account-setup', element: <AccountSetup /> },
        { path: 'dashboard/history', element: <TransactionHistory /> },
        { path: 'transfers', element: <Transfers /> },
        { path: 'airtime', element: <AirtimeBills /> },
        { path: 'loans', element: <LoanPage /> },
        { path: 'savings', element: <BlankPage /> },
        { path: 'cards', element: <BlankPage /> },
        { path: 'accounts', element: <MyAccountPage /> },
        { path: 'profile', element: <ProfilePage /> },
      ]
    },
  ]);

  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App
